import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ChuckNorris} from "../modeles/ChuckNorris";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getChuckNorris(): Observable<ChuckNorris> {
    return this.http.get<ChuckNorris>('https://api.chucknorris.io/jokes/random');
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
