using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyNotes.Data.Models;
using Newtonsoft.Json;

namespace MyNotes.Data
{
    public class NoteController : Controller
    {
        public async void Add()
        {
            Request.ContentType = "Application/x-www-Form-UrlEncoded";

            if (!Request.Form.ContainsKey("text"))
            {
                Response.ContentType = "text/html; charset=utf-8";
                Response.StatusCode = 400;
                await Response.WriteAsync("the parameter 'text' is missing or is set incorrectly");
            }
            else
            {
                string text = Request.Form["text"];
                string path = @"Data/Notepad.txt";
                try
                {
                    using (StreamWriter sw = new StreamWriter(path, true, System.Text.Encoding.Default))
                    {
                        Note note = new Note(text);
                        string noteJson = JsonConvert.SerializeObject(note);
                        await sw.WriteLineAsync(noteJson);
                    }
                    Response.ContentType = "text/html; charset=utf-8";
                    await Response.WriteAsync("Recording completed");
                }
                catch (Exception e)
                {
                    Response.ContentType = "text/html; charset=utf-8";
                    Response.StatusCode = 404;
                    await Response.WriteAsync(e.Message);
                }
            }
        }

        public async void List()
        {
            string path = @"Data/Notepad.txt";
            try
            {
                using (StreamReader sr = new StreamReader(path))
                {
                    List<Note> noteList = new List<Note>();
                    while (sr.Peek() > -1)
                    {
                        string noteJson = await sr.ReadLineAsync();
                        Note note = JsonConvert.DeserializeObject<Note>(noteJson);
                        noteList.Add(note);
                    }
                    string noteListJson = JsonConvert.SerializeObject(noteList);
                    Response.ContentType = "application/json; charset=utf-8";
                    await Response.WriteAsync(noteListJson);
                }
            }
            catch (Exception e)
            {
                Response.ContentType = "text/html; charset=utf-8";
                Response.StatusCode = 404;
                await Response.WriteAsync(e.Message);
            }
        }
    }
}
