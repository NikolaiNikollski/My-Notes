using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace AuthenticationJWT.TokenServiceData
{
    public class TokenService
    {
        static IConfigurationBuilder Builder = new ConfigurationBuilder().AddJsonFile("appsettings.json");
        public static IConfigurationRoot conf = Builder.Build();

        public string GenerateAccessToken(IEnumerable<Claim> claims)
        {

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(conf["SecretKey"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                issuer: conf["ServerLink"],
                audience: conf["ServerLink"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToUInt16(conf["AccessTokenLifeTime"])),
                signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return tokenString;
        }

        public string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }

        public ClaimsPrincipal GetPrincipalFromToken(string token)
        {
            if (token == null)
                throw new SecurityTokenException("Invalid token");

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = false, //you might want to validate the audience and issuer depending on your use case
                ValidateIssuer = false,
                ValidateActor = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(conf["SecretKey"])),
                ValidateLifetime = false //here we are saying that we don't care about the token's expiration date
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;

            try
            {
                var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out securityToken);

                var jwtSecurityToken = securityToken as JwtSecurityToken;
                if (jwtSecurityToken == null || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                    throw new SecurityTokenException("Invalid token");

                return principal;
            }
            catch
            {
                return null;
            }
            
        }

        public string GetValueFromRequestHeader(HttpRequest request, string claim)
        {
            int claimNumber = 0;
            switch (claim)
            {
                case "Name":
                    claimNumber = 0;
                    break;
                case "Role":
                    claimNumber = 1;
                    break;
                case "NameIdentifier":
                    claimNumber = 2;
                    break;
                default:
                    return null;
            }

            request.Headers.TryGetValue("Authorization", out var jwt);
            jwt = jwt.ToString().Split(" ")[1];
            var principal = GetPrincipalFromToken(jwt);
            if (principal == null) return null;
            return principal.Identities.ToList()[0].Claims.ToList()[claimNumber].Value;
        }
    }
}