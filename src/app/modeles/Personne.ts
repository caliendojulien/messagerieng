export class Personne {

  private _nom: string;
  private _prenom: string;

  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this._prenom = prenom;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }
}
