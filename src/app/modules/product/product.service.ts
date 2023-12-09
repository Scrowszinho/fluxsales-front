import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBid, ICompleteOffer, ISendBid } from './interfaces/product.interfaces';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/app/apiUrl';
import { Observable } from 'rxjs';
import { IDefaultRequest } from 'src/app/interfaces/default-request.interface';

@Injectable()
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  getProduct(id: number): Observable<IDefaultRequest<ICompleteOffer>> {
    const url =  environment.apiUrl + apiUrl.offers.completeOffer + id;
    return this._http.get<IDefaultRequest<ICompleteOffer>>(url);
  }

  makeABid(data: ISendBid): Observable<IDefaultRequest<IBid>> {
    const url =  environment.apiUrl + apiUrl.bids.sendBid;
    return this._http.post<IDefaultRequest<IBid>>(url, data);
  }
}
