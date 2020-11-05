import { Component } from '@angular/core';
import { Note } from '../Data/Note'
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'my-app',
    templateUrl: 'app.main.html',
    styleUrls: ['app.main.css']

})
export class AppMain {

    constructor(private jwtHelper: JwtHelperService,) { }

    userAuthenticated = this.isUserAuthenticated()

    onChangedAuth(increased: any) {
        this.userAuthenticated = increased
    }

    isUserAuthenticated() {
        const token: string = localStorage.getItem("jwt");
        return (token && !this.jwtHelper.isTokenExpired(token));
    }
}

