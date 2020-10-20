using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace MyNotes.Data.NoteModel
{
    public class NoteContext : DbContext
    {
        public DbSet<Note> Notes { get; set; }

        public IConfiguration AppConfiguration { get; set; }
        static IConfigurationBuilder Builder = new ConfigurationBuilder().AddJsonFile("conf.json");
        public static string connectionString = Builder.Build()["connectionString"];

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite(connectionString);
    }
}
