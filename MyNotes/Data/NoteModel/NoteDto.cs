using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyNotes.Data.NoteModel
{
    public class NoteDto
    {
        public int NoteId { get; set; }
        public string Date { get;  set; }
        public string Text { get;  set; }
    }
}
