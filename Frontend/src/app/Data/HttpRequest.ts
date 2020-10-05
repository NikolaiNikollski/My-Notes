import { Note } from './Note';
export class HttpRequest {

    url: string = "https://localhost:44338/Api/Note";

    async save(note: Note): Promise<Response> {
        if (!note.Text)
            return;
        const formData = new FormData();
        formData.append('text', note.Text);

        let response = await fetch(this.url, {
            method: 'POST',
            body: formData
        });

        return response;
    }

    async update(note: Note): Promise<Response> {
        if (!note.Text)
            return;;
        const formData = new FormData();
        formData.append('text', note.Text);

        let response = await fetch('https://localhost:44338/Api/Note/' + note.Id, {
            method: 'PUT',
            body: formData
        });

        return response;
    }

    async del(note: Note): Promise<Response>{
        let response = await fetch('https://localhost:44338/Api/Note/' + note.Id, {
            method: 'DElETE',
        });

        return response;
    }

    async loadNotes(notelist: Array<Note>): Promise<Response>{
        let response: Response = await fetch(this.url, {
            method: 'GET'
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