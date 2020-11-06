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
using Microsoft.AspNetCore.Authorization;

namespace AuthApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private UserContext db = new UserContext();
        readonly TokenService tokenService = new TokenService();

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] User inputUser)
        {
            if (inputUser == null)
            {
                return BadRequest("Invalid client request");
            }

            User user = db.Users
                .Where(u => u.UserName == inputUser.UserName && u.Password == inputUser.Password).
                FirstOrDefault();
            if (user != null)
            {
                return Ok(GetToken(user));
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
                user.Password = inputUser.Password;
                var dbUser = db.Users.Add(user);
                db.SaveChangesAsync();

                return Ok(GetToken(dbUser.Entity));
            }
        }

        public IActionResult GetToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, "User"),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
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

        [HttpPost, Authorize]
        [Route("refresh")]
        public IActionResult Refresh(TokenApiModel tokenApiModel)
        {
            if (tokenApiModel is null)
            {
                return BadRequest("Invalid client request");
            }

            string accessToken = tokenApiModel.AccessToken;
            string refreshToken = tokenApiModel.RefreshToken;

            var principal = tokenService.GetPrincipalFromToken(accessToken);
            string userId = principal.Identities.ToList()[0].Claims.ToList()[2].Value;

            User user = db.Users.SingleOrDefault(u => u.Id == Convert.ToUInt64(userId));
            if (user == null || user.RefreshToken != refreshToken || new DateTime(Convert.ToInt64(user.RefreshTokenExpiryTime)) <= DateTime.Now) ///дата
            {
                return BadRequest("Token Error");
            }

            string newAccessToken = tokenService.GenerateAccessToken(principal.Claims);
            string newRefreshToken = tokenService.GenerateRefreshToken();
            user.RefreshToken = newRefreshToken;
            db.SaveChanges();

            return new ObjectResult(new
            {
                accessToken = newAccessToken,
                refreshToken = newRefreshToken
            });
        }

        [HttpPost, Authorize]
        [Route("revoke")]
        public IActionResult Revoke()
        {
            var username = User.Identity.Name;
            var user = db.Users.SingleOrDefault(u => u.UserName == username);
            if (user == null) return BadRequest();
            user.RefreshToken = null;
            db.SaveChanges();
            return NoContent();
        }
    }
}   