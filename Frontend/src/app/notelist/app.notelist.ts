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

    httpRequest: HttpRequest = new HttpRequest();

    async createNote() {
        let note: Note = new Note("", this.formateDate(new Date), null)
        await this.httpRequest.save(note)
        await this.getNewNote().then(result => note = result)
        this.notelist.unshift(note)
        setTimeout(() => {
            note.Selected = true
        }, 100);
    }

    update(note: Note): void {
        this.httpRequest.update(note);
        note.Selected = false;
        note.TempText = null;
    }

    del(note: Note, index: number): void {
        this.httpRequest.del(note)
        note.Selected = false;
        this.notelist.splice(index, 1)
    }

    async loadNotes(notelist): Promise<void> {
        await this.httpRequest.loadNotes(notelist);
    }

    async getNewNote() {
        let newNotelist: Array<Note> = []
        await this.loadNotes(newNotelist)
        return newNotelist[0]
    }

    selectNote(note: Note) {
        note.Selected = true;
        note.TempText = note.Text
    }

    unselectNote(note: Note, index: number) {
        note.Selected = false;
        note.Text = note.TempText
        note.TempText = null;
    }

    ngOnInit() {
        this.loadNotes(this.notelist);
    }

    formateDate(inDate: Date): string {
        const options = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        return inDate.toLocaleString('ru', options);
    }
}


