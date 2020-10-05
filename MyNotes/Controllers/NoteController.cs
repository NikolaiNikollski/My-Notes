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

namespace MyNotes.Data
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly INotepad _notepad;

        public NoteController(INotepad notepad)
        {
            _notepad = notepad;
        }

        [HttpPost]
        public IActionResult CreateNote([FromForm] NoteDto note)
        {
            _notepad.Create(new Note(note.Text));
            return Ok();
        }

        [HttpGet]
        public IActionResult GetAllNotes()
        {
            List <Note> notes = _notepad.GetAll();
            return Ok(notes);
        }

        [HttpPut("{id}")]
        public IActionResult UppdateNote(int Id, [FromForm] NoteDto note)
        {
            _notepad.Update(Id, note.Text);
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetNoteById(int Id)
        {
            Note note = _notepad.GetById(Id);
            return Ok(note);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteNote(int Id)
        {
            _notepad.Delete(Id);
            return Ok();
        }
    }
}
