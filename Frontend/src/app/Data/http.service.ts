import { Note } from './note';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Configuration } from '../app.Configuration'

@Injectable()
export class HttpService  {

    constructor(private http: HttpClient) { }

    conf = new Configuration()

    urlNote: string = this.conf.serverUrl + '/Api/Note'
    urlAuth: string = this.conf.serverUrl + '/Api/Auth'

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
            return { ...(<any>data).value, notes: (<any>data).value.notes.map(note => new Note(note.text, note.date, note.noteId)) }              
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

    async refresh(): Promise<HttpResponse<Object>>{
        const response = await this.http.post(this.urlAuth + '/refresh', null, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            observe: 'response'
        }).toPromise();
        return response
    }
}