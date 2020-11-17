import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpService } from '../Data/http.service'
import { NgForm, Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'authorization',
    templateUrl: 'app.authorization.html',
    styleUrls: ['app.authorization.css'],
    providers: [HttpService],
})
export class AppAuthorization{

    registerForm: FormGroup;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private httpService: HttpService) {
        this._createRegisterForm();
        this._createLoginForm();
    }

    private _createRegisterForm() {
        this.registerForm = this.fb.group({
            username: ['', [
                Validators.required,
                Validators.minLength(3),
            ]],
            password: ['', [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.pattern(/[0-9]/),
                    Validators.pattern(/[a-zA-Z]/),
            ]],
            rePassword: ['', [
                Validators.required,
                this.isRePasswordCorrect(),
            ]],
        })
    }

    get _registerUsername() {
        return this.registerForm.get('username')
    }

    get _registerPassword() {
        return this.registerForm.get('password')
    }

    get _registerRePassword() {
        return this.registerForm.get('rePassword')
    }


    private _createLoginForm() {
        this.loginForm = this.fb.group({
            username: ['', [
                Validators.required,
            ]],
            password: ['', [
                Validators.required,
            ]],
        })
    }

    get _loginUsername() {
        return this.loginForm.get('username')
    }

    get _loginPassword() {
        return this.loginForm.get('password')
    }

    isRePasswordCorrect(): ValidatorFn {
        return (
            control: AbstractControl
        ): { [key: string]: boolean } | null => {

            if (this.registerForm) {
                var condition = this.registerForm.get('password').value === this.registerForm.get('rePassword').value
            }
            let valid =
                !control.value || condition
            return valid ? null : {
                RePasswordCorrectionError: true,
            }
        }
    }

    getFormcontroll() {
        console.log(this.registerForm)
    }

    @Input() userAuthenticated;
    @Input() userName
    @Output() onChangedAuth = new EventEmitter<boolean>();
    activeLoginForm: boolean = false;
    activeRegisterForm: boolean = false
    error: string = null;

    getLoginForm() {
        this.activeLoginForm = true;
        this.activeRegisterForm = false;
        this.error = null;
    }

    getRegisterForm() {
        this.activeRegisterForm = true;
        this.activeLoginForm = false;
        this.error = null;
    }

    register(form: NgForm) {
        if (this.registerForm.invalid) {
            this._registerUsername.markAsTouched()
            this._registerPassword.markAsTouched()
            this._registerRePassword.markAsTouched()
            return
        }   
        
        this.logout()
        this.httpService.register(form).subscribe(response => this.onCopmplete(response), (err: HttpErrorResponse) => this.onError(err))
    }

    login(form: NgForm) {
        if (this.loginForm.invalid) {
            this._loginUsername.markAsTouched()
            this._loginPassword.markAsTouched()
            return
        }   
        this.logout()
        this.httpService.login(form).subscribe(response => this.onCopmplete(response), errResponse => this.onError(errResponse))
    }

    onCopmplete(response) {
        const token = (<any>response).value.accessToken;
        const refreshToken = (<any>response).value.refreshToken;
        localStorage.setItem("jwt", token);
        localStorage.setItem("refreshToken", refreshToken);
        this.onChangedAuth.emit(true);
        this.activeLoginForm = false;
        this.activeRegisterForm = false;
        this.error = null;
    }

    onError(errResponse) {
        this.error = errResponse.error;
    }

    public logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("refreshToken");
        this.onChangedAuth.emit(false);
        this.activeLoginForm = true;
        this.userName = null
    }
}

