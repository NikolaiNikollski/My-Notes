import { Note } from './Note';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    url: string = 'http://localhost/Api/Note';
    constructor(private http: HttpClient) { }

    save(note: Note): Observable<object> {
        const formData = new FormData();
        formData.append('text', note.Text);
        formData.append('date', note.Date)
        return this.http.post(this.url, formData)
    }

    update(note: Note): Observable<object> {
        const formData = new FormData();
        formData.append('text', note.Text);
        formData.append('date', note.Date)
        return this.http.put(this.url + '/' + note.Id, formData)
    }

    loadNotes(): Observable<Note[]> {
       return this.http.get(this.url).pipe(map(data => {
            return data.map(note => new Note(note.text, note.date, note.noteId))              
        }));
    }

    delete(note): Observable<object> {
        return this.http.delete(this.url + '/' + note.Id)
    }
}