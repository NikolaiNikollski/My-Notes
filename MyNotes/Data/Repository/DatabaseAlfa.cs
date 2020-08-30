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


public class DatabaseAlfa
{
    public IConfiguration AppConfiguration { get; set; }
    static IConfigurationBuilder Builder = new ConfigurationBuilder().AddJsonFile("conf.json");
    public static string connectionString = Builder.Build()["connectionString"];
    SqlConnection connection = new SqlConnection(connectionString);

   

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

    /*public bool InsertQuery(string tableName, string[] columns, string[] values)
    {
        string[] tempValues = new string[values.Length];
        for (int i = 0; i < values.Length; i++)
            tempValues[i] = "@" + i;

        string sqlExpression = $"INSERT INTO {tableName} ({columns}) VALUES ({tempValues})";
        SqlCommand command = new SqlCommand(sqlExpression, connection);

        for (int i = 0; i < values.Length; i++)
            command.Parameters.Add(new SqlParameter(tempValues[i], values[i]));

        return command.ExecuteNonQuery() > 0;
    }*/

    public void ReadNotes(List<Note> noteList)
    {
        string sqlExpression = "SELECT * FROM Notepad";
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

