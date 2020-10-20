import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMain } from './main/app.main';
import { AppNotelist } from './notelist/app.notelist';
import { AppAuthorization } from './authorization/app.authorization';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppMain, AppNotelist, AppAuthorization], 
    bootstrap: [AppMain]
})
export class AppModule { }