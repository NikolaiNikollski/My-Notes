using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyNotes.Controllers
{
    public class BaseController : Controller
    {
        public void GenerateLayout()
        {
            Response.ContentType = "text/html; charset=utf8";
        }
    }
}
