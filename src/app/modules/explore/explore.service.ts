import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExploreOffers } from './interfaces/explore.interfaces';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/app/apiUrl';
import { IDefaultRequest } from 'src/app/interfaces/default-request.interface';

@Injectable()
export class ExploreService {

  constructor(
    private _http: HttpClient
  ) { }

  getOffers(take: number = 10, skip: number = 0): Observable<IDefaultRequest<IExploreOffers[]>> {
    const url = environment.apiUrl + apiUrl.explore.getOffers;
    return this._http.get<IDefaultRequest<IExploreOffers[]>>(url, {
      params: {
        take, skip
      }
    });
  }
}
