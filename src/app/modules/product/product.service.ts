import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICompleteOffer } from './interfaces/product.interfaces';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/app/apiUrl';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  getProduct(id: number): Observable<ICompleteOffer> {
    const url =  environment.apiUrl + apiUrl.offers.completeOffer + id;
    return this._http.get<ICompleteOffer>(url);
  }
}
