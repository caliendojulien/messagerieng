import {Component} from '@angular/core';
import {Personne} from "../../modeles/Personne";

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent {

  public personnes: Personne[];

  constructor() {
    this.personnes = [];
    let bob = new Personne("Morane", "Bob");
    let lucie = new Personne("fer", "lucie");
    this.personnes.push(bob);
    this.personnes.push(lucie);
  }
}
