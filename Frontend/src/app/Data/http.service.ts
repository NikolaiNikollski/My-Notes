import { Note } from './Note';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class HttpService {

    urlNote: string = 'http://localhost/Api/Note';
    urlAuth: string = 'http://localhost/Api/Auth'
    constructor(private http: HttpClient) { }

    create(note: Note): Observable<object> {
        const formData = new FormData();
        formData.append('text', note.Text);
        formData.append('date', note.Date)
        return this.http.post(this.urlNote + "/createNote", formData)
    }

    update(note: Note): Observable<object> {
        const formData = new FormData();
        formData.append('text', note.Text);
        formData.append('date', note.Date);
        formData.append('noteId', note.Id.toString());
        return this.http.post(this.urlNote + '/updateNote', formData)
    }

    loadNotes(): Observable<object[]> {
      
        return this.http.get(this.urlNote + '/getAllNotes').pipe(map(data => {
            return { ...data.value, notes: data.value.notes.map(note => new Note(note.text, note.date, note.noteId)) }              
        }));
    }

    delete(note): Observable<object> {
        const formData = new FormData();
        formData.append('noteId', note.Id.toString());
        return this.http.post(this.urlNote + '/deleteNote', formData)
    }

    checkUsername(username: string): Observable<object> {
        const formData = new FormData();
        formData.append('username', username);
        return this.http.post(this.urlAuth + '/checkUsername', formData)
    }

    login(form: NgForm): Observable<object> {
        const credentials = JSON.stringify(form.value);
        return this.http.post(this.urlAuth + '/login', credentials, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        })
    }

    register(form: NgForm): Observable<object>  {
        const credentials = JSON.stringify(form.value);
        return this.http.post(this.urlAuth + '/register', credentials, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        })
    }

    async refresh(credentials): Promise<HttpResponse<Object>>{
        const response = await this.http.post(this.urlAuth + '/refresh', credentials, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            observe: 'response'
        }).toPromise();
        return response
    }
}