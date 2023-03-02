import {Component} from '@angular/core';
import {Personne} from "../../modeles/Personne";

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent {

  // On déclare un tableau de personne
  public personnes: Personne[];

  constructor() {
    // On l'initialise a vide
    this.personnes = [];
    // On créé deux personnes
    let bob = new Personne("Morane", "Bob");
    let lucie = new Personne("Fer", "lucie");
    // Qu'on insère dans le tableau
    this.personnes.push(bob);
    this.personnes.push(lucie);
  }
}
