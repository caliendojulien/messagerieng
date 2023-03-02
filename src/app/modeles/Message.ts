import {Personne} from "./Personne";

export class Message {
  private _auteur: Personne;
  private _date: Date;
  private _texte: string;

  constructor(auteur: Personne, texte: string) {
    this._auteur = auteur;
    this._date = new Date();
    this._texte = texte;
  }

  get auteur(): Personne {
    return this._auteur;
  }

  set auteur(value: Personne) {
    this._auteur = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get texte(): string {
    return this._texte;
  }

  set texte(value: string) {
    this._texte = value;
  }
}
