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
using MyNotes.Data.Models;
using Newtonsoft.Json;

namespace MyNotes.Data
{
    public class NoteController : Controller
    {
        public IConfiguration AppConfiguration { get; set; }

        public void Add()
        {
            Request.ContentType = "Application/x-www-Form-UrlEncoded";
            if (!Request.Form.ContainsKey("text"))
            {
                Response.ContentType = "text/html; charset=utf-8";
                Response.StatusCode = 400;
                Response.WriteAsync("the parameter 'text' is missing or is set incorrectly");
            }
            else
            {
                var builder = new ConfigurationBuilder().AddJsonFile("conf.json");
                AppConfiguration = builder.Build();
                string text = Request.Form["text"];
                string path = AppConfiguration["notepadPath"];
                try
                {
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

        public void List()
        {
            SendNoteList(GetNoteList());
        }

        public List<Note> GetNoteList()
        {
            List<Note> noteList = new List<Note>();
            var builder = new ConfigurationBuilder().AddJsonFile("conf.json");
            AppConfiguration = builder.Build();
            string path = AppConfiguration["notepadPath"];
            try
            {
                using (StreamReader sr = new StreamReader(path))
                {
                    while (sr.Peek() > -1)
                    {
                        string noteJson = sr.ReadLine();
                        Note note = JsonConvert.DeserializeObject<Note>(noteJson);
                        noteList.Add(note);
                    }
                }
            }
            catch { }
            return noteList;
        }

        public void SendNoteList(List<Note> noteList)
        {
            string notepadJson = JsonConvert.SerializeObject(noteList.ToArray());
            Response.ContentType = "application/json; charset=utf-8";
            Response.WriteAsync(notepadJson);
        }
    }
}
