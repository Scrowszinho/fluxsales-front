import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExploreOffers } from './interfaces/explore.interfaces';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/app/apiUrl';

@Injectable()
export class ExploreService {

  constructor(
    private _http: HttpClient
  ) { }

  getOffers(take: number = 10, skip: number = 0): Observable<IExploreOffers[]> {
    const url = environment.apiUrl + apiUrl.explore.getOffers;
    return this._http.get<IExploreOffers[]>(url, {
      params: {
        take, skip
      }
    });
  }
}
