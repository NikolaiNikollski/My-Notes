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
using MyNotes.Data.NoteModel;


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

    public bool ProtectedQuery(string action, string tableName, string[] columns, string[] values, string condition = null)
    {
        if (columns.Length != values.Length)
            throw new Exception("InsertQuery: the number of columns must be equal to the number of values");

        string[] tempValues = new string[columns.Length];
        for (int i = 0; i < columns.Length; i++)
            tempValues[i] = "@" + i;

        string sqlExpression = FormSqlExpression(action, tableName, columns, tempValues, condition);
        SqlCommand command = new SqlCommand(sqlExpression, connection);

        for (int i = 0; i < values.Length; i++)
        {
            if (values[i] == null) values[i] = "";
            command.Parameters.Add(new SqlParameter(tempValues[i], values[i]));
        }

        return command.ExecuteNonQuery() > 0;
    }

    private static string FormSqlExpression(string action, string tableName, string[] columns, string[] tempValues, string condition)
    {
        string sqlExpression;
        if (action == "Insert")
            sqlExpression = FormInsertExpression(tableName, columns, tempValues);
        else if (action == "Update")
            sqlExpression = FormUpdateExpression(tableName, columns, tempValues, condition);
        else
            throw new Exception("Invalid action");

        return sqlExpression;
    }

    private static string FormInsertExpression(string tableName, string[] columns, string[] tempValues)
    {
        {
            string columnsStr = String.Join(", ", columns);
            string tempValuesStr = String.Join(", ", tempValues);
            return $"INSERT INTO {tableName} ({columnsStr}) VALUES ({tempValuesStr})";
        }
    }

    private static string FormUpdateExpression(string tableName, string[] columns, string[] tempValues, string condition)
    {
        string sqlExpression;
        string[] pairs = new string[columns.Length];
        for (int i = 0; i < columns.Length; i++)
            pairs[i] = String.Format("{0} = {1}", columns[i], tempValues[i]);
        string pairsStr = String.Join(", ", pairs);
        sqlExpression = $"UPDATE {tableName} SET {pairsStr}";
        if (!String.IsNullOrWhiteSpace(condition))
            sqlExpression += $" WHERE {condition}";
        return sqlExpression;
    }

    public List<Note> ReadNotes(string condition = null)
    {
        List<Note> noteList = new List<Note>();
        string sqlExpression = $"SELECT * FROM Notepad";
        if (!String.IsNullOrWhiteSpace(condition))
            sqlExpression += $" WHERE {condition}";
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

        return noteList;
    }
}

