import {Component} from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {MsgService} from "../../services/msg.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  // On déclare un tableau de messages
  public messages: Message[];

  constructor(
    private svc: MsgService
  ) {
    // Il est une copie parfaite du tableau de messages du service
    this.messages = this.svc.messages;
  }
}
