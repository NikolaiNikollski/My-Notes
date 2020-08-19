using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.Interfaces;
using MyNotes.Data.Models;
using Newtonsoft.Json;

namespace MyNotes.Data.Mocks
{
    public class MockNotepad : INotepad
    {
        public IConfiguration AppConfiguration { get; set; }

        public IEnumerable<Note> Notes
        {
            get
            {
                List<Note> noteList = new List<Note>();
                var builder = new ConfigurationBuilder().AddJsonFile("conf.json");
                AppConfiguration = builder.Build();
                string path = AppConfiguration["notepadPath"];
                try
                {
                    using (StreamReader sr = new StreamReader(path))
                    {
                        while (sr.Peek() > -1)
                        {
                            string noteJson = sr.ReadLine();
                            Note note = JsonConvert.DeserializeObject<Note>(noteJson);
                            noteList.Add(note);
                        }
                    }
                }
                catch { }
                return noteList;
            }
        }
    }
}
