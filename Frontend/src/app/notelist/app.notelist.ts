import { Component } from '@angular/core';
import { Note } from '../Data/Note'
import { HttpRequest } from '../Data/HttpRequest'

@Component({
    selector: 'notelist',
    templateUrl: 'app.notelist.html',
    styleUrls: ['app.notelist.css']

})

export class AppNotelist {

    notelist: Array<Note> = [];
    //selectedNotesIndex: Array<boolean> = []; 
    
    httpRequest: HttpRequest = new HttpRequest();

    process(note: Note): void {
        if (note.Id === null) {
            this.httpRequest.save(note)
        } else {
            this.httpRequest.update(note);
        }
        note.Selected = false;
        note.TempText = null;
    }

    del(note: Note, index: number): void {
        if (note.Id) {
            let status = this.httpRequest.del(note);
        }
        this.notelist.splice(index, 1)
    }

    loadNotes(): void {
        this.httpRequest.loadNotes(this.notelist);
    }

    createNote(): void {
        let note: Note = new Note(null, null, null)
        note.Selected = true;
        this.notelist.unshift(note);
    }

    unselectNote(note: Note, index: number) {
        if (!note.Id) {  //new note
            this.del(note, index)
            return
        }
        note.Selected = false;
        note.Text = note.TempText
        note.TempText = null;
    }

    selectNote(note: Note) {
        note.Selected = true;
        note.TempText = note.Text
    }

    ngOnInit() {
        this.loadNotes();
    }
}

//ToDo git

