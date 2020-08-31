using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyNotes.Controllers;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Repository;

namespace MyNotes.Data
{
    public class NoteController : BaseController
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


        public void Save()
        {
            GenerateLayout();
            try
            {
                NoteRepository database = new NoteRepository();
                string text = Request.Form["text"];
                database.InsertNote(text);
                Response.WriteAsync("Recording completed");
            }
            catch
            {
                Response.WriteAsync("Recording failed");
            }
        }
    }
}
