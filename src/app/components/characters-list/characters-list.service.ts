import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacter } from '../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersListService {

  private url = `${environment.apiEndpoint}characters`;

  constructor(private _http: HttpClient) { }

  public getAllSuperHeroesBy(name: string, offset: number, order: string): Observable<ICharacter[]> {
    let params = new HttpParams();

    if (name.trim().length > 0) {
      params = params.set('nameStartsWith', name);
    }

    params = params.set("offset", offset.toString());
    params = params.set("orderBy", order);
    
    return this._http.get<ICharacter[]>(this.url, { params });
  }
}
