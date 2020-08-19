using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Models;
using Newtonsoft.Json;

namespace MyNotes.Data
{
    public class NoteController : Controller
    {
        private readonly INotepad _notepad;

        public NoteController(INotepad iNotepad)
        {
            _notepad = iNotepad;
        }

        public ViewResult List()
        {
            var Notepad = _notepad.Notes;
            return View(Notepad);
        }

        public ViewResult Add()
        {
            return View();
        }

        public IConfiguration AppConfiguration { get; set; }

        public void Save()
        {
            Request.ContentType = "Application/x-www-Form-UrlEncoded";
            try
            {
                var builder = new ConfigurationBuilder().AddJsonFile("conf.json");
                AppConfiguration = builder.Build();
                string text = Request.Form["text"];
                string path = AppConfiguration["notepadPath"];

                using (StreamWriter sw = new StreamWriter(path, true, System.Text.Encoding.Default))
                {
                    Note note = new Note(text);
                    string noteJson = JsonConvert.SerializeObject(note);
                    sw.WriteLine(noteJson);
                }

                Response.ContentType = "text/html; charset=utf-8";
                Response.WriteAsync("Recording completed");
            }
            catch
            {
                Response.ContentType = "text/html; charset=utf-8";
                Response.WriteAsync("Recording failed");
            }
        }

    }
}
