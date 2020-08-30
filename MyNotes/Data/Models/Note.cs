using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Repository;

namespace MyNotes.Data.Models
{
    public class Note
    {
        public DateTime Date {get; set;}

        public String Text { get; set; }

        public int NoteId { get; set;  }

        public Note(int NoteID, string text, DateTime date)
        {
            Text = text;
            Date = date;
        }
    }

    public class MockNotepad : INotepad
    {
        public IEnumerable<Note> Notes
        {
            get
            {
                Database dataabse = new Database();
                return dataabse.GetNotes();
            }
        }

    }
}
