using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data.SqlClient;
using System.Diagnostics.Eventing.Reader;
using System.Drawing;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyNotes.Data.NoteModel;

using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace MyNotes.Data
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    { 

        NoteContext db = new NoteContext();

        [HttpPost]
        public IActionResult CreateNote([FromForm] NoteDto note)
        {
            db.Add(new Note(note.Text, note.Date));
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        public IActionResult GetAllNotes()
        {
            var notes = db.Notes
                   .OrderBy(b => b.NoteId);
            return Ok(notes);
        }

        [HttpPut("{id}")]
        public IActionResult UppdateNote(int Id, [FromForm] NoteDto noteDto)
        {
            Note note = db.Notes.Find(Id);
            note.Text = noteDto.Text;
            db.SaveChanges();
            return Ok(note.Text);
        }

        [HttpGet("{id}")]
        public IActionResult GetNoteById(int Id)
        {
            Note note = db.Notes.Find(Id);
            return Ok(note);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteNote(int Id)
        {
            Note note = db.Notes.Find(Id);
            db.Remove(note);
            db.SaveChanges();
            return Ok();
        }
    }
}
