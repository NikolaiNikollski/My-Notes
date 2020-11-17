import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMain } from './main/app.main';
import { AppNotelist } from './notelist/app.notelist';
import { AppAuthorization } from './authorization/app.authorization'
import { JwtModule } from "@auth0/angular-jwt"; 

export function tokenGetter() {
  return localStorage.getItem("jwt");
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