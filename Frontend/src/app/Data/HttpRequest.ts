import { Note } from './Note';
export class HttpRequest {

    url: string = "http://localhost:80/Api/Note/";

    async save(note: Note): Promise<Response> {
        const formData = new FormData();
        formData.append('text', note.Text);
        formData.append('date', note.Date)

        let response = await fetch(this.url, {
            method: 'POST',
            mode: 'same-origin',
            body: formData
        });

        return response;
    }

    async update(note: Note): Promise<Response> {
        const formData = new FormData();
        formData.append('text', note.Text);

        let response = await fetch(this.url + note.Id, {
            method: 'PUT',
            mode: 'same-origin',
            body: formData
        });

        return response;
    }

    async del(note: Note): Promise<Response> {
        let response = await fetch(this.url + note.Id, {
            method: 'DElETE',
            mode: 'same-origin',
        });

        return response;
    }

    async loadNotes(notelist: Array<Note>): Promise<Response> {
        let response: Response = await fetch(this.url, {
            method: 'GET',
            mode: 'same-origin'
        });

        if (response.ok) {
            let receivedNotelist = await response.json();
            for (let i = 0; i < receivedNotelist.length; i++) {
                notelist.unshift(new Note(receivedNotelist[i].text, receivedNotelist[i].date, receivedNotelist[i].noteId));
            }
        }
        return response;
    }
}