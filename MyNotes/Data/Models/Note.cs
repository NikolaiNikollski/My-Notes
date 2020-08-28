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
        public IConfiguration AppConfiguration { get; set; }
        IConfigurationBuilder Builder = new ConfigurationBuilder().AddJsonFile("conf.json");

        public IEnumerable<Note> Notes
        {
            get
            {
                List<Note> noteList = new List<Note>();
                string connectionString = Builder.Build()["connectionString"];
                string sqlExpression = "SELECT * FROM Notepad";
                try
                {
                    using (SqlConnection connection = new SqlConnection(connectionString))
                    {
                        connection.Open();
                        SqlCommand command = new SqlCommand(sqlExpression, connection);
                        SqlDataReader reader = command.ExecuteReader();

                        while (reader.Read())
                        {
                            int noteId = reader.GetInt32(0);
                            string text = reader.GetString(1);
                            DateTime date = reader.GetDateTime(2);
                            Note note = new Note(noteId, text, date);
                            noteList.Add(note);
                        }
                    }
                }
                catch { }
                return noteList;
            }
        }



    }
}
