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
using Microsoft.Extensions.Configuration;
using System.Text.RegularExpressions;

namespace AuthApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {        
        public AuthController(IConfiguration configuration)
        {
            Configuration = configuration;
            tokenService = new TokenService(Configuration);
            db = new UserContext(Configuration);
        }

        private IConfiguration Configuration { get; set; }
        private UserContext db; 
        private TokenService tokenService;

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] User inputUser)
        {

            var hz = Configuration.GetValue<string>("ServerUrl");

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
                return BadRequest("Invalid username or password"); 
        }

        [HttpPost, Route("register")]
        public IActionResult Register([FromBody] User inputUser)
        {
            {
                if (inputUser == null)
                    return BadRequest("Invalid client request");

                Regex regex = new Regex(@"(?=.*[0-9])(?=.*[a-zA-Z]).{7,}");
                if (!regex.IsMatch(inputUser.Password))
                    return BadRequest("Validation Error");

                User user = db.Users.FirstOrDefault(u => u.UserName == inputUser.UserName);

                if (user != null)
                    return BadRequest("Username is busy");

                user = new User();
                user.UserName = inputUser.UserName;
                user.Password = inputUser.Password;
                var dbUser = db.Users.Add(user);
                db.SaveChangesAsync();

                return Ok(GetToken(dbUser.Entity));
            }
        }

        private IActionResult GetToken(User user)
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
            if (principal == null) return BadRequest("TokenError");
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