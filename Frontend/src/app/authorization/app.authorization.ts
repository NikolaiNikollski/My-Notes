import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../Data/Note'
import { HttpService } from '../Data/http.service'
import { NgForm } from '@angular/forms';

@Component({
    selector: 'authorization',
    templateUrl: 'app.authorization.html',
    styleUrls: ['app.authorization.css'],
    providers: [HttpService],
})
export class AppAuthorization {

    constructor(private httpService: HttpService) { }

    @Input() userAuthenticated;
    @Output() onChangedAuth = new EventEmitter<boolean>();
    loginForm: boolean = false;
    registerForm: boolean = false
    invalidFetch: boolean = false
    repeatPasswordError: boolean = false

    userLogin: string = "";

    getLoginForm() {
        this.loginForm = true;
        this.registerForm = false;

        this.invalidFetch = false;
        this.repeatPasswordError = false
    }

    getRegisterForm() {
        this.registerForm = true;
        this.loginForm = false;

        this.invalidFetch = false;
        this.repeatPasswordError = false
    }


    register(form: NgForm) {
        this.invalidFetch = false;
        this.repeatPasswordError = false

        if (form.value.password !== form.value.passwordRepeat) {
            this.repeatPasswordError = true
            console.log("error")
            return
        }
        this.logout()
        this.httpService.register(form).subscribe(response => { 
            this.onCopmplete(response); this.userLogin = form.value.username }, err => this.onError())


    }

    login(form: NgForm) {
        this.invalidFetch = false;
        this.repeatPasswordError = false

        this.logout()
        this.httpService.login(form).subscribe(response => {
            this.onCopmplete(response); this.userLogin = form.value.username
        }, err => this.onError())
    }

    onCopmplete(response) {
        const token = (<any>response).value.accessToken;
        const refreshToken = (<any>response).value.refreshToken;
        localStorage.setItem("jwt", token);
        localStorage.setItem("refreshToken", refreshToken);
        this.onChangedAuth.emit(true);
        this.loginForm = false;
        this.registerForm = false;
    }

    onError() {
        this.invalidFetch = true;
    }

    public logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("refreshToken");
        this.onChangedAuth.emit(false);
        this.loginForm = true;
        this.userLogin = "";
    }
}