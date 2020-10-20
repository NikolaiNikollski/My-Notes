using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using MyNotes.Data.UserModel;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace AuthApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private UserContext db = new UserContext();
        //public AccountController(UserContext context)
       // {
        //    db = context;
       // }
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public IActionResult Login()
        //{
        //    return Ok("hello log");
        //    /*if (ModelState.IsValid)
        //    {
        //        User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
        //        if (user != null)
        //        {
        //            await Authenticate(model.Email); // аутентификация

        //            return RedirectToAction("Index", "Home");
        //        }
        //        ModelState.AddModelError("", "Некорректные логин и(или) пароль");
        //    }
        //    return View(model); */
        //}
 
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Register([FromForm] User userForm)
        {
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == userForm.Email);
                if (user == null)
                {
                    return Ok("нашел");
                    //// добавляем пользователя в бд
                    //db.Users.Add(new User { Email = model.Email, Password = model.Password });
                    //db.SaveChangesAsync();

                    //Authenticate(model.Email); // аутентификация

                    //return RedirectToAction("Index", "Home");
                }
                else
                    return Ok(" не нашел");
                //ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }
        }

        private async Task Authenticate(string userName)
        {
            // создаем один claim
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
            };
            // создаем объект ClaimsIdentity
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            // установка аутентификационных куки
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Login", "Account");
        }
    }
}