using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.NoteModel;

namespace MyNotes.Data.NoteModel
{
    public class Note
    {
        public int NoteId { get; private set; }
        public DateTime Date { get; private set; }
        public String Text { get; private set; }

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
    }
}
