import {Component} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {ChuckNorris} from "../../modeles/ChuckNorris";

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent {

  public titre: string;
  public chuckNorris$: Observable<ChuckNorris>;

  constructor(
    private api: ApiService
  ) {
    this.titre = "Messagerie";
    this.chuckNorris$ = this.api.getChuckNorris();
  }
}
