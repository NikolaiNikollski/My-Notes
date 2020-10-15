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
        public int NoteId { get; set; }
        public string Text { get; set; }
        public string Date { get; set; }

        public Note(string text, string date)  //Input Model
        {
            Text = text;
            Date = date;
        }

        public Note(int id, string text, string date)  //Output Model
        {
            NoteId = id;
            Text = text;
            Date = date;
        }
    }
}
