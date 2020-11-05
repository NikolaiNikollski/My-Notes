using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.NoteModel;

namespace MyNotes.Models
{
    public class UserContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Note> Notes { get; set; }

        static IConfigurationBuilder Builder = new ConfigurationBuilder().AddJsonFile("appsettings.json");
        public static string connectionString = Builder.Build()["connectionString"];

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite(connectionString);

    }
}
