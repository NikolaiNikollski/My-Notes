import { JwtModule } from "@auth0/angular-jwt";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMain } from './main/app.main';
import { AppNotelist } from './notelist/app.notelist';
import { AppAuthorization } from './authorization/app.authorization'
import { CookieService } from './data/cookie.service'

export function tokenGetter() {
    let cookieService: CookieService = new CookieService;
    return cookieService.getCookie("accessToken")
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost"],
                disallowedRoutes: []
            }
        })
    ],
    declarations: [
        AppMain,
        AppNotelist,
        AppAuthorization,
    ], 
    bootstrap: [AppMain]
})
export class AppModule { }