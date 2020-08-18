﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyNotes.Data.Models;

namespace MyNotes.Data.Interfaces
{
    interface INotepad
    {
        IEnumerable<Note> Notes { get; }
    }
}
