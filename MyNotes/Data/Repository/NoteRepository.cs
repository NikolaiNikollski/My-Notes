using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using MyNotes.Data.Models;

namespace MyNotes.Data.Repository
{
    public class NoteRepository
    {
        public void InsertNote(string text)
        {
            if (text.Length == 0)
                throw new Exception();
            Database database = new Database();

            database.InitialConnect();
            database.InsertQuery("Notepad", new string[] { "NoteText" }, new string[] { text });
            database.DisConnect();
        }

        public List<Note> GetNotes()
        {
            List<Note> noteList = new List<Note>();

            Database database = new Database();
            database.InitialConnect();
            database.ReadNotes(noteList);
            database.DisConnect();

            return noteList;
        }

    }
}

