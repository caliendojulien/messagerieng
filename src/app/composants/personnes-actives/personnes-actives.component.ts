import {Component, Inject} from '@angular/core';
import {Personne} from "../../modeles/Personne";
import {MsgService} from "../../services/msg.service";

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent {

  // On déclare un tableau de personne
  public personnes: Personne[];

  constructor(
    // Le service en injection de dépendances
    private svc: MsgService
  ) {
    // il est une copie parfaite du tableau présent dans le service
    this.personnes = this.svc.auteurs;
  }
}
