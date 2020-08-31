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

    public bool InsertQuery(string tableName, string[] columns, string[] values)
    {
        if (columns.Length != values.Length)
            throw new Exception("InsertQuery: the number of columns must be equal to the number of values");

        string[] tempValues = new string[columns.Length];
        for (int i = 0; i < columns.Length; i++)
            tempValues[i] = "@" + i;

        string columnsStr = String.Join(", ", columns);
        string tempValuesStr = String.Join(", ", tempValues);

        string sqlExpression = $"INSERT INTO {tableName} ({columnsStr}) VALUES ({tempValuesStr})";
        SqlCommand command = new SqlCommand(sqlExpression, connection);

        for (int i = 0; i < values.Length; i++)
            command.Parameters.Add(new SqlParameter(tempValues[i], values[i]));

        return command.ExecuteNonQuery() > 0;
    }

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

