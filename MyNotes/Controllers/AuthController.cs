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

            if (inputUser == null)
                return BadRequest("Invalid client request");

            User user = db.Users
                .Where(u => u.UserName == inputUser.UserName && u.Password == inputUser.Password).
                FirstOrDefault();

            if (user == null)
                return BadRequest("Invalid username or password");

            GetToken(user);
            return Ok();
        }

        [HttpPost, Route("register")]
        public IActionResult Register([FromBody] User inputUser)
        {
            {
                User user = db.Users.FirstOrDefault(u => u.UserName == inputUser.UserName);

                if (user != null)
                    return BadRequest("Username is busy");

                user = new User();
                user.UserName = inputUser.UserName;
                user.Password = inputUser.Password;
                var dbUser = db.Users.Add(user);
                db.SaveChangesAsync();

                GetToken(user);
                return Ok();
            }
        }

        private void GetToken(User user)
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
            user.RefreshTokenExpiryTime = DateTime.Now.AddDays(Convert.ToUInt32(Configuration.GetValue<string>("RefreshTokenLifeTimeDays"))).Ticks;
            db.SaveChanges();

            AddTokensInCookie(Response, newAccessToken, newRefreshToken);

            return;
        }

        [HttpPost]
        [Route("refresh")]
        public IActionResult Refresh()
        {
            string accessToken = Request.Cookies["accessToken"];
            string refreshToken = Request.Cookies["refreshToken"];

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

            AddTokensInCookie(Response, newAccessToken, newRefreshToken);

            return Ok();
        }

        private void AddTokensInCookie(HttpResponse Response, string accessToken, string refreshToken)
        {
            Response.Cookies.Append("accessToken", accessToken, new CookieOptions
            {
                SameSite = SameSiteMode.Strict,
                //Secure = true
            });

            Response.Cookies.Append("refreshToken", refreshToken, new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.Strict,
                //Secure = true
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