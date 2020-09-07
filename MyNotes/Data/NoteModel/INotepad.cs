using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyNotes.Data.Models;

namespace MyNotes.Data.Interfaces
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
