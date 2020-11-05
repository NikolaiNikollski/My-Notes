import { Note } from './Note';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class HttpService {

    urlNote: string = 'http://localhost/Api/Note';
    urlAccount: string = 'http://localhost/Api/Auth'
    constructor(private http: HttpClient) { }

    save(note: Note): Observable<object> {
        const formData = new FormData();
        formData.append('text', note.Text);
        formData.append('date', note.Date)
        return this.http.post(this.urlNote, formData)
    }

    update(note: Note): Observable<object> {
        const formData = new FormData();
        formData.append('text', note.Text);
        formData.append('date', note.Date)
        return this.http.put(this.urlNote + '/' + note.Id, formData)
    }

    loadNotes(): Observable<Note[]> {
       return this.http.get(this.urlNote).pipe(map(data => {
            return data.map(note => new Note(note.text, note.date, note.noteId))              
        }));
    }

    delete(note): Observable<object> {
        return this.http.delete(this.urlNote + '/' + note.Id)
    }

    login(form: NgForm): Observable<object> {
        const credentials = JSON.stringify(form.value);
        console.log(credentials);
        return this.http.post(this.urlAccount + '/login', credentials, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        })
    }
    register(form: NgForm): Observable<object>  {
        const credentials = JSON.stringify(form.value);
        return this.http.post(this.urlAccount + '/register', credentials, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        })
    }
}