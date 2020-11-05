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

namespace MyNotes.Data
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        readonly ITokenService tokenService = new TokenService();
        UserContext db = new UserContext();

        [HttpPost]
        public IActionResult CreateNote([FromForm] NoteDto inputNote)
        {
            Note note = new Note { Text = inputNote.Text, Date = inputNote.Date, UserId = getUserId(Request) };

            EntityEntry<Note> result = db.Add(note);
            db.SaveChanges();
            return Ok(result.Entity.NoteId);
        }

        [HttpPut("{id}")]
        public IActionResult UppdateNote(int id, [FromForm] NoteDto noteDto)
        {
            int userId = getUserId(Request);
            Note note = db.Notes.FirstOrDefault(n => n.NoteId == id & n.UserId == userId);
            note.Text = noteDto.Text;
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        public IActionResult GetAllNotes()
        {
            int userId = getUserId(Request);
            var notes = db.Notes.OrderByDescending(n => n.NoteId).Where(n => n.UserId == userId);
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public IActionResult GetNoteById(int id)
        {
            int userId = getUserId(Request);
            Note note = db.Notes.FirstOrDefault(n => n.NoteId == id & n.UserId == userId);
            return Ok(note);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteNote(int id)
        {
            int userId = getUserId(Request);
            Note note = db.Notes.FirstOrDefault(n => n.NoteId == id & n.UserId == userId); ;
            db.Remove(note);
            db.SaveChanges();
            return Ok();
        }

        private int getUserId(HttpRequest request)
        {
            Request.Headers.TryGetValue("Authorization", out var jwt);
            try
            {
                jwt = jwt.ToString().Split(" ")[1];
                var principal = tokenService.GetPrincipalFromToken(jwt);
                return Convert.ToInt32(principal.Identity.Name); //Todo
            }
            catch (Exception e)
            {
                return 0;
            }
        }
    }
}
