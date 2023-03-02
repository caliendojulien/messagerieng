import {Component} from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  public messages: Message[];

  constructor() {
    this.messages = [];
    let balzac = new Personne("De balzac", "Honoré");
    let m = new Message(balzac, "Le père Goriot");
    this.messages.push(m);
  }
}
