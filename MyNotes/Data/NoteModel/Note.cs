using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.NoteModel;
using MyNotes.Models;

namespace MyNotes.Data.NoteModel
{
    public class Note
    {
        public int NoteId { get; set; }
        public string Text { get; set; }
        public string Date { get; set; }
            
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
