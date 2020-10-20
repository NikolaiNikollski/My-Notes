import { Component } from '@angular/core';
import { Note } from '../Data/Note'
@Component({
    selector: 'authorization',
    templateUrl: 'app.authorization.html',
    styleUrls: ['app.authorization.css']

})
export class AppAuthorization {
    email: string = 'nikolai-4545@mail.ru'
    login: string = 'fliper666'
    password: string = '123321123'
    repeatedPassword: string = ''

    submit(): void {
        console.log('data')
        console.log(this.login)
        console.log(this.email)
        console.log(this.password)
        console.log(this.repeatedPassword)
    }
}