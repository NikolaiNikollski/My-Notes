using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using MyNotes.Data.Models;

namespace MyNotes.Data.Repository
{
    public class Database
    {
        public void InsertNote(string text)
        {
            if (text.Length == 0)
                throw new Exception();
            string sqlExpression = $"INSERT INTO Notepad (NoteText) VALUES ('{text}')";
            DatabaseAlfa database = new DatabaseAlfa();

            database.InitialConnect();
            database.Query(sqlExpression);
            database.DisConnect();
        }

        public List<Note> GetNotes()
        {
            List<Note> noteList = new List<Note>();

            DatabaseAlfa database = new DatabaseAlfa();
            database.InitialConnect();
            database.ReadNotes(noteList);
            database.DisConnect();

            return noteList;
        }
        
    }
}

