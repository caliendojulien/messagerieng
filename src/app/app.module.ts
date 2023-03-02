import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessagesComponent } from './composants/messages/messages.component';
import { TitreComponent } from './composants/titre/titre.component';
import { NouveauMessageComponent } from './composants/nouveau-message/nouveau-message.component';
import { PersonnesActivesComponent } from './composants/personnes-actives/personnes-actives.component';
import { MessageComponent } from './composants/message/message.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
