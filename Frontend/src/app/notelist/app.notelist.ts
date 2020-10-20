import { Component } from '@angular/core';
import { HttpService } from '../Data/http.service'
import { Note } from '../Data/Note';

@Component({
    selector: 'notelist',
    templateUrl: 'app.notelist.html',
    styleUrls: ['app.notelist.css'],
    providers: [HttpService],
})

export class AppNotelist {

    notelist: Array<Note> = [];

    constructor(private httpService: HttpService) { }

    createNote(): void {
        let note: Note = new Note("", this.formateDate(new Date), null)

        this.httpService.save(note).subscribe((id: any) => {
            note.Id = id
        })

        this.notelist.unshift(note)
        setTimeout(() => {
            note.Selected = true
        }, 100);
    }

    update(note: Note): void {
        this.httpService.update(note).subscribe()
        note.Selected = false;
        note.TempText = null;
    }

    del(note: Note, index: number): void {
        this.httpService.delete(note).subscribe()
        note.Selected = false;
        this.notelist.splice(index, 1)
    }


    selectNote(note: Note): void {
        note.Selected = true;
        note.TempText = note.Text
    }

    unselectNote(note: Note, index: number): void {
        note.Selected = false;
        note.Text = note.TempText
        note.TempText = null;
    }

    loadNotes(): void {
        this.httpService.loadNotes().subscribe((data: Array<Note>) => {
            this.notelist = data
        })
    }

    ngOnInit(): void {
        this.loadNotes()
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


