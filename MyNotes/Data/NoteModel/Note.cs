using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.Interfaces;

namespace MyNotes.Data.Models
{
    public class Note
    {
        public Note(string text)
        {
            Text = text;
        }

        public Note(int id, string text, DateTime date)
        {
            NoteId = id;
            Text = text;
            Date = date;
        }

        public int NoteId { get; private set; }
        public DateTime Date {get; private set;}
        public String Text { get; private set; }
    }
}
