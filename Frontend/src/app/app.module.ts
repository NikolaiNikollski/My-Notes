import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppMain } from './main/app.main';
import { AppNotelist } from './notelist/app.notelist';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppMain, AppNotelist], 
    bootstrap: [AppMain]
})
export class AppModule { }