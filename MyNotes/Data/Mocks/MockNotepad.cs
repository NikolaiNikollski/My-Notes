using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Models;

namespace MyNotes.Data.Mocks
{
    public class MockNotepad : INotepad
    {
        public IEnumerable<Note> Notes
        {
            get
            {
                List<Note> NoteList = new List<Note>();
                return NoteList
            }
        }
    }
}
