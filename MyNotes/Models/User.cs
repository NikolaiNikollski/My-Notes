using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MyNotes.Data.NoteModel;

namespace MyNotes.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public ulong Id { get; set; }

        [Required]
        [MinLength(3)]
        [StringLength(20)]
        public string UserName { get; set; }

        [Required]
        [MinLength(5)]
        [StringLength(50)]
        [RegularExpression(@"(?=.*[0-9])(?=.*[a-zA-Z]).{0,}")]
        public string Password { get; set; }

        public string RefreshToken { get; set; }

        public long RefreshTokenExpiryTime { get; set; }

        public List<Note> Notes { get; set; }
    }
}
