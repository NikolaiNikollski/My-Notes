using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyNotes.Data.Models
{
    public class Note
    {
        public DateTime Date {get; set;}

        public String Text { get; set; }

        public Note(string text, DateTime date)
        {
            Text = text;
            Date = date;
        }
    }
}
