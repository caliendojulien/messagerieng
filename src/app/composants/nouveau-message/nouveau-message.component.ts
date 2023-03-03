import { Component } from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {MsgService} from "../../services/msg.service";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent {


  constructor(
    private svc: MsgService
  ) {
  }
  // nouveau-message.component.ts
  public ajouterMsg(value: any) {
    let auteur = new Personne(value.pseudo, "");
    let nouveauMessage = new Message(
      auteur,
      value.message
    );
    this.svc.ajoutMessage(nouveauMessage);
  }
}
