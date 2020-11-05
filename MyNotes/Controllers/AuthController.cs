using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System;
using AuthenticationJWT.TokenServiceData;
using MyNotes.Models;

namespace AuthApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private UserContext db = new UserContext();
        readonly ITokenService tokenService = new TokenService();

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] User inputUser)
        {
            if (inputUser == null)
            {
                return BadRequest("Invalid client request");
            }

            User user = db.Users
                .Where(u => u.UserName == inputUser.UserName).
                FirstOrDefault();
            if (user != null)
            {
                return Ok(Authenticate(user));
            }
            else
                return BadRequest("User not found"); 
        }

        [HttpPost, Route("register")]
        public IActionResult Register([FromBody] User inputUser)
        {
            {
                if (inputUser == null)
                {
                    return BadRequest("Invalid client request");
                }

                User user = db.Users.FirstOrDefault(u => u.UserName == inputUser.UserName);

                if (user != null)
                {
                    return BadRequest("User with this username already exists");
                }

                user = new User();
                user.UserName = inputUser.UserName;
                user.Password = inputUser.UserName;
                var dbUser = db.Users.Add(user);
                db.SaveChangesAsync();

                return Ok(Authenticate(dbUser.Entity));
            }
        }

        public IActionResult Authenticate(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Id.ToString()),
                new Claim(ClaimTypes.Role, "User")
            };

            string newAccessToken = tokenService.GenerateAccessToken(claims);
            string newRefreshToken = tokenService.GenerateRefreshToken();

            user.RefreshToken = newRefreshToken;
            user.RefreshTokenExpiryTime = DateTime.Now.AddDays(7).Ticks;
            db.SaveChanges();

            return new ObjectResult(new
            {
                accessToken = newAccessToken,
                refreshToken = newRefreshToken
            });
        }
    }
}