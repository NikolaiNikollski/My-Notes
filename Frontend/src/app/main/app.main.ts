import { Component } from '@angular/core';
import { Note } from '../Data/Note'
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from '../Data/cookie.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app.main.html',
    styleUrls: ['app.main.css'],
    providers: [CookieService],

})
export class AppMain {

    constructor(private jwtHelper: JwtHelperService, private cookieService: CookieService) { }

    userAuthenticated = this.isUserAuthenticated()
    userName: string

    onChangedAuth(increased: boolean) {
        this.userAuthenticated = increased
    }

    onChangedUserName(newUserName: string) {
        if (newUserName === null)
            this.userAuthenticated = false
        this.userName = newUserName
    }


    isUserAuthenticated() {
        const token = this.cookieService.getCookie("accessToken")
        return (token && true);
    }

}

