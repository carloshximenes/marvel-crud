import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMarvelDataReturn } from 'src/app/interfaces/marvelDataReturn.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersDetailsService {

  private url = `${environment.apiEndpoint}characters`;

  constructor(private _http: HttpClient) { }

  public getSuperHeroBy(id: number): Observable<IMarvelDataReturn> {
    return this._http.get<IMarvelDataReturn>(`${this.url}/${id}`);
  }
}
