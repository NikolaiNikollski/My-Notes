export class Note {
    Text: string;
    Date: string;
    Id: number;
    Selected: boolean;
    TempText: string;

    constructor(text: string, date: string, id: number) {
        this.Text = text;
        this.Date = date;
        this.Id = id;
        this.Selected = false;
        this.TempText = null;
    }
} 
