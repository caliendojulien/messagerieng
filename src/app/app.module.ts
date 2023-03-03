import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessagesComponent } from './composants/messages/messages.component';
import { TitreComponent } from './composants/titre/titre.component';
import { NouveauMessageComponent } from './composants/nouveau-message/nouveau-message.component';
import { PersonnesActivesComponent } from './composants/personnes-actives/personnes-actives.component';
import { MessageComponent } from './composants/message/message.component';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TitreComponent,
    NouveauMessageComponent,
    PersonnesActivesComponent,
    MessageComponent
  ],
  imports: [
    // app.module.ts
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
