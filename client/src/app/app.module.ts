import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
