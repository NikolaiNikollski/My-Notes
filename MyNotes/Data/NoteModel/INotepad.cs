using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyNotes.Data.NoteModel
{
    public interface INotepad
    {
        void Create(Note note);
        void Update(int id, string text);
        List<Note> GetAll();
        Note GetById(int id);
        void Delete(int Id);
    }
}
