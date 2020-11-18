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
        public NoteController(IConfiguration configuration)
        {
            Configuration = configuration;
            tokenService = new TokenService(Configuration);
            db = new UserContext(Configuration);
        }

        private IConfiguration Configuration { get; set; }
        private TokenService tokenService;
        private UserContext db;

        [HttpPost, Authorize, Route("createNote")]
        public IActionResult CreateNote([FromForm] NoteDto inputNote)
        {
            string userId = tokenService.GetValueFromRequestHeader(Request, "NameIdentifier");
            if (userId == null) return BadRequest("TokenError");
  
            Note note = new Note { Text = inputNote.Text, Date = inputNote.Date, UserId = Convert.ToUInt64(userId) };
            EntityEntry<Note> result = db.Add(note);
            db.SaveChanges();
            return Ok(result.Entity.NoteId);
        }

        [HttpPost("updateNote"), Authorize]
        public IActionResult UppdateNote([FromForm] NoteDto noteDto)
        {
            string userId = tokenService.GetValueFromRequestHeader(Request, "NameIdentifier");
            if (userId == null) return BadRequest("TokenError");

            Note note = db.Notes.FirstOrDefault(n => n.NoteId == Convert.ToUInt64(noteDto.NoteId) & n.UserId == Convert.ToUInt64(userId));
            note.Text = noteDto.Text;
            db.SaveChanges();
            return Ok();
        }

        [HttpGet, Authorize, Route("getAllNotes")]
        public IActionResult GetAllNotes()
        {
            string userId = tokenService.GetValueFromRequestHeader(Request, "NameIdentifier");
            if (userId == null) return BadRequest("TokenError");

            var notes = db.Notes.OrderByDescending(n => n.Date).Where(n => n.UserId == Convert.ToUInt64(userId));
            return Ok( new ObjectResult( new { name = tokenService.GetValueFromRequestHeader(Request, "Name"), notes = notes,}));
        }

        [HttpGet("{id}"), Authorize, Route("getByIdNote")]
        public IActionResult GetNoteById(ulong id)
        {
            string userId = tokenService.GetValueFromRequestHeader(Request, "NameIdentifier");
            if (userId == null) return BadRequest("TokenError");

            Note note = db.Notes.FirstOrDefault(n => n.NoteId == id & n.UserId == Convert.ToUInt64(userId));
            return Ok(note);
        }

        [HttpPost, Authorize, Route("deleteNote")]
        public IActionResult DeleteNote([FromForm] NoteDto noteDto)
        {
            string userId = tokenService.GetValueFromRequestHeader(Request, "NameIdentifier");
            if (userId == null) return BadRequest("TokenError");

            Note note = db.Notes.FirstOrDefault(n => n.NoteId == Convert.ToUInt64(noteDto.NoteId) & n.UserId == Convert.ToUInt64(userId)); ;
            db.Remove(note);
            db.SaveChanges();
            return Ok();
        }
    }
}
