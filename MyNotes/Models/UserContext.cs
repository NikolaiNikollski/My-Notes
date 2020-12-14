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
        public UserContext(IConfiguration configuration)
        {
            Configuration = configuration;
            connectionString = Configuration.GetValue<string>("ConnectionString");
        }
        private string connectionString;
        private IConfiguration Configuration;

        public DbSet<User> Users { get; set; }
        public DbSet<Note> Notes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite(connectionString);

    }
}
