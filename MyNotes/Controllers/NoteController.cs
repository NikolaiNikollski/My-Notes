using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Models;
using MyNotes.Data.Repository;
using Newtonsoft.Json;

namespace MyNotes.Data
{
    public class NoteController : Controller
    {

        private IConfigurationBuilder Builder = new ConfigurationBuilder().AddJsonFile("conf.json");
        public IConfiguration AppConfiguration { get; set; }

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

        /* public void Save()
          {
              string connectionString = Builder.Build()["connectionString"];
              string text = Request.Form["text"];

              string sqlExpression = $"INSERT INTO Notepad (NoteText) VALUES (@NoteText)";

              try
              {
                  using (SqlConnection connection = new SqlConnection(connectionString))
                  {
                      connection.Open();
                      SqlCommand command = new SqlCommand(sqlExpression, connection);
                      SqlParameter noteTextParam = new SqlParameter("@noteText", text);
                      command.Parameters.Add(noteTextParam);
                      command.ExecuteNonQuery();
                  }
                  Response.ContentType = "text/html; charset=utf-8";
                  Response.WriteAsync("Recording completed");
              }
              catch
              {
                  Response.ContentType = "text/html; charset=utf-8";
                  Response.WriteAsync("Recording failed");
              }
          } */

        public void Save()
        {
            try
            {
                Database database = new Database();
                string text = Request.Form["text"];
                database.InsertNote(text);
                SaveResponsePos();
            }
            catch
            {
                SaveResponseNeg();
            }
        }

        private void SaveResponsePos()
        {
            Response.ContentType = "text/html; charset=utf-8";
            Response.WriteAsync("Recording completed");
        }

        private void SaveResponseNeg()
        {
            Response.ContentType = "text/html; charset=utf-8";
            Response.WriteAsync("Recording failed");
        }
    }
}
