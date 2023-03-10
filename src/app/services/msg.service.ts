import {Injectable} from '@angular/core';
import {Message} from "../modeles/Message";
import {Personne} from "../modeles/Personne";

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  private _messages: Message[];
  private _auteurs: Personne[];

  constructor() {
    this._messages = [];
    this._auteurs = [];
  }
  // msg.service.ts
  public ajoutMessage(msg: Message) {
    this.messages.push(msg);
    this.auteurs.push(msg.auteur);
  }

  public get messages(): Message[] {
    return this._messages;
  }

  public get auteurs(): Personne[] {
    return this._auteurs;
  }

}
