import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../Data/Note'
import { HttpService } from '../Data/http.service'
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'authorization',
    templateUrl: 'app.authorization.html',
    styleUrls: ['app.authorization.css'],
    providers: [HttpService],
})
export class AppAuthorization {

    constructor(private httpService: HttpService) { }

    @Input() userAuthenticated;
    @Input() userName
    @Output() onChangedAuth = new EventEmitter<boolean>();
    loginForm: boolean = false;
    registerForm: boolean = false
    error: string = null;

    getLoginForm() {
        this.loginForm = true;
        this.registerForm = false;
        this.error = null;
    }

    getRegisterForm() {
        this.registerForm = true;
        this.loginForm = false;
        this.error = null;
    }


    register(form: NgForm) {
        const usernameLength = 3;
        if (form.value.username.length < usernameLength) {
            this.error = `The login has to contain ${usernameLength} characters`
            return
        }

        if (form.value.password !== form.value.passwordRepeat) {
            this.error = 'Passwords are different'
            return
        }
        const passwordLength: number = 5;
        const containDigit: boolean = true;
        const containUpperCaseSimbol: boolean = false;
        const containLowerCaseSimbol: boolean = true;
        const containSpecialSimbol: boolean = false;

        let regStr: string = `(?=^.{5,}$)`;
        regStr += containDigit ? '(?=.*[0-9])' : ''
        regStr += containUpperCaseSimbol ? '(?=.*[A-Z])' : ''
        regStr += containLowerCaseSimbol ? '(?=.*[a-z])' : ''
        regStr += containSpecialSimbol ? '(?=.*[^A-Za-z0-9])' : ''
        regStr += '.*'
        
        let regex = new RegExp(regStr)
        if (!regex.test(form.value.password)) {
            let error = `The password has to contain ${passwordLength} characters`
            error += containDigit ? ', digit' : ''
            error += containUpperCaseSimbol ? ', upperCaseSimbol' : ''
            error += containLowerCaseSimbol ? ', lowerCaseSimbol' : ''
            error += containSpecialSimbol ? ', specialSimbol' : ''

            this.error = error
            return
        }
        
        this.logout()
        this.httpService.register(form).subscribe(response => this.onCopmplete(response), (err: HttpErrorResponse) => this.onError(err))
        this.error = null;
    }

    login(form: NgForm) {
        this.logout()
        this.httpService.login(form).subscribe(response => this.onCopmplete(response), err => this.onError(err))
    }

    onCopmplete(response) {
        const token = (<any>response).value.accessToken;
        const refreshToken = (<any>response).value.refreshToken;
        localStorage.setItem("jwt", token);
        localStorage.setItem("refreshToken", refreshToken);
        this.onChangedAuth.emit(true);
        this.loginForm = false;
        this.registerForm = false;
        this.error = null;
    }

    onError(err) {
        this.error = err.statusText;
    }

    public logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("refreshToken");
        this.onChangedAuth.emit(false);
        this.loginForm = true;
        this.userName = null
    }
}