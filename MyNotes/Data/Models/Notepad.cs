using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MyNotes.Data.Models
{
    public class Notepad
    {
        [JsonProperty("notes")]
        public List<Note> NoteList;
    }
}
