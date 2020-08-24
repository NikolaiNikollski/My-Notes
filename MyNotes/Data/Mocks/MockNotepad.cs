using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Models;
using Newtonsoft.Json;

namespace MyNotes.Data.Mocks
{
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
                            string text = reader.GetString(1);
                            DateTime date = reader.GetDateTime(2);
                            Note note = new Note(text, date);
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
