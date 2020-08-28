using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Models;


public class Database
{
    public IConfiguration AppConfiguration { get; set; }
    static IConfigurationBuilder Builder = new ConfigurationBuilder().AddJsonFile("conf.json");
    public static string connectionString = Builder.Build()["connectionString"];
    SqlConnection connection = new SqlConnection(connectionString);

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
                        int noteId = reader.GetInt16(0);
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

    public void InitialConnect()
    {
        connection.Open();
    }

    public void DisConnect()
    {
        connection.Close();
    }

    public bool Query(string sqlExpression)
    {
        SqlCommand command = new SqlCommand(sqlExpression, connection);
        return command.ExecuteNonQuery() > 0;
    } 

}

