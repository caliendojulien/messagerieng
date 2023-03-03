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
    let balzac = new Personne("De balzac", "Honoré");
    this._auteurs.push(balzac);
    let m = new Message(balzac, "Salut");
    this._messages.push(m);
  }

  public get messages(): Message[] {
    return this._messages;
  }

  public get auteurs(): Personne[] {
    return this._auteurs;
  }

}
