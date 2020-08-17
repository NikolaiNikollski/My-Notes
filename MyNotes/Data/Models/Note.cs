using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MyNotes.Data.Models
{
    public class Note
    {
        [JsonProperty("date")]
        public DateTime Date {get; set;}
        [JsonProperty("text")]
        public String Text { get; set; }

        public Note(string text)
        {
            Text = text;
            Date = DateTime.Now;
        }
    }
}
