import { Component, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../Data/http.service'
import { Note } from '../Data/Note';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders, HttpClient, } from '@angular/common/http';


@Component({
    selector: 'notelist',
    templateUrl: 'app.notelist.html',
    styleUrls: ['app.notelist.css'],
    providers: [HttpService],
})

export class AppNotelist {

    @Output() onChangedUserName = new EventEmitter<string>();
    notelist: Array<Note> = [];
    constructor(private httpService: HttpService, private jwtHelper: JwtHelperService, private http: HttpClient) { }


    async createNote(): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) return

        let note: Note = new Note("", this.formateDate(new Date), null)

        this.httpService.create(note).subscribe((id: any) => {
            note.Id = id
        }, (err) => { this.onChangedUserName.emit(null) })

        this.notelist.unshift(note)
        setTimeout(() => {
            note.Selected = true
        }, 100);
    }

    async update(note: Note): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) return

        this.httpService.update(note).subscribe(() => { }, (err) => { this.onChangedUserName.emit(null) })
        note.Selected = false;
        note.TempText = null;
    }

    async del(note: Note, index: number): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) {
            this.onChangedUserName.emit(null)
            return
        }

        if (!this.canActivate()) return 
        this.httpService.delete(note).subscribe(() => { }, (err) => { this.onChangedUserName.emit(null) })
        note.Selected = false;
        this.notelist.splice(index, 1)
    }


    async selectNote(note: Note): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) return

        note.Selected = true;
        note.TempText = note.Text
    }

    async unselectNote(note: Note, index: number): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) return
 
        note.Selected = false;
        note.Text = note.TempText
        note.TempText = null;
    }

    async loadNotes(): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) return

        this.httpService.loadNotes().subscribe((data: any) => {
            this.notelist = data.notes
            this.onChangedUserName.emit(data.name)
        }, (err) => { this.onChangedUserName.emit(null) })
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

    async canActivate() {
        const token = localStorage.getItem("jwt");

        if (token && !this.jwtHelper.isTokenExpired(token))
            return true;

        let refreshSuccessPromise = await this.tryRefreshingTokens(token)
        if (refreshSuccessPromise)
            return true

        this.onChangedUserName.emit(null)
        return false
    }

    private async tryRefreshingTokens(token: string): Promise<boolean> {
        const refreshToken: string = localStorage.getItem("refreshToken");
        const credentials = JSON.stringify({ accessToken: token, refreshToken: refreshToken });
        let isRefreshSuccess: boolean;
        try {
            const response = await this.httpService.refresh(credentials)

            const newToken = (<any>response).body.accessToken;
            const newRefreshToken = (<any>response).body.refreshToken;
            localStorage.setItem("jwt", newToken);
            localStorage.setItem("refreshToken", newRefreshToken);
            isRefreshSuccess = true;
        }
        catch (ex) {
            isRefreshSuccess = false;
        }
        return isRefreshSuccess;
    }

}


