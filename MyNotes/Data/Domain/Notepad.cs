using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyNotes.Data.NoteModel;

namespace MyNotes.Data.Domain
{
    public class Notepad : INotepad
    {
        const string UpdateAction = "Update";
        const string InsertAction = "Insert";
        Database database = new Database();

        public void Create(Note note) 
        {
            database.InitialConnect();
            database.ProtectedQuery("Insert", "Notepad", 
                                    new string[] { "NoteText" }, 
                                    new string[] { note.Text });
            database.DisConnect();
        }

        public List<Note> GetAll()
        { 
            database.InitialConnect();
            List<Note> noteList = database.ReadNotes();
            database.DisConnect();

            return noteList;
        }

        public Note GetById(int Id)
        {
            database.InitialConnect();
            List<Note> notes = database.ReadNotes($"NoteId = {Id}");
            database.DisConnect();
            return (notes.Count != 0) ? notes[0] : null;
        }

        public void Update(int Id, string text)
        {
            database.InitialConnect();
            database.ProtectedQuery(UpdateAction, "Notepad", new string[] { "NoteText" }, new string[] { text }, $"NoteId = {Id}");
            database.DisConnect();
        }

        public void Delete(int Id)
        {
            database.InitialConnect();
            database.Query($"DELETE FROM Notepad WHERE NoteId = {Id}");
            database.DisConnect();
        }
    }
}
