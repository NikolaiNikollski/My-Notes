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
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MyNotes.Models;
using AuthenticationJWT.TokenServiceData;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.AspNetCore.Authorization;

namespace MyNotes.Data
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        readonly TokenService tokenService = new TokenService();
        UserContext db = new UserContext();

        [HttpPost, Authorize]
        public IActionResult CreateNote([FromForm] NoteDto inputNote)
        {
            ulong userId = Convert.ToUInt64(tokenService.getValueFromRequestHeader(Request, "NameIdentifier"));
            Note note = new Note { Text = inputNote.Text, Date = inputNote.Date, UserId = userId };

            EntityEntry<Note> result = db.Add(note);
            db.SaveChanges();
            return Ok(result.Entity.NoteId);
        }

        [HttpPut("{id}"), Authorize]
        public IActionResult UppdateNote(int id, [FromForm] NoteDto noteDto)
        {
            ulong userId = Convert.ToUInt64(tokenService.getValueFromRequestHeader(Request, "NameIdentifier"));
            Note note = db.Notes.FirstOrDefault(n => n.NoteId == id & n.UserId == userId);
            note.Text = noteDto.Text;
            db.SaveChanges();
            return Ok();
        }

        [HttpGet, Authorize]
        public IActionResult GetAllNotes()
        {
            ulong userId = Convert.ToUInt64(tokenService.getValueFromRequestHeader(Request, "NameIdentifier"));
            var notes = db.Notes.OrderByDescending(n => n.NoteId).Where(n => n.UserId == userId);
            return Ok( new ObjectResult( new { name = tokenService.getValueFromRequestHeader(Request, "Name"), notes = notes,}));
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult GetNoteById(int id)
        {
            ulong userId = Convert.ToUInt64(tokenService.getValueFromRequestHeader(Request, "NameIdentifier"));
            Note note = db.Notes.FirstOrDefault(n => n.NoteId == id & n.UserId == userId);
            return Ok(note);
        }

        [HttpDelete("{id}"), Authorize]
        public IActionResult DeleteNote(int id)
        {
            ulong userId = Convert.ToUInt64(tokenService.getValueFromRequestHeader(Request, "NameIdentifier"));
            Note note = db.Notes.FirstOrDefault(n => n.NoteId == id & n.UserId == userId); ;
            db.Remove(note);
            db.SaveChanges();
            return Ok();
        }
    }
}
