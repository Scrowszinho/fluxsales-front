import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginUser } from './interfaces/login-interface';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/app/apiUrl';
import { Observable, tap } from 'rxjs';
import { IUserLoged } from 'src/app/interfaces/user.interfaces';
import { LocalStorageService } from 'src/app/core/utils/local-storage.service';
import { LocalStorageEnum } from 'src/app/enums/local-storage.enum';

@Injectable()
export class LoginService {
  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  authenticate(user: ILoginUser): Observable<IUserLoged> {
    const url = environment.apiUrl + apiUrl.user.doLogin;
    return this._http.post<IUserLoged>(url, user).pipe(
      tap((res) => {
        this._localStorageService.setLocalStorageData(
          LocalStorageEnum.APP_USER_DATA,
          res
        );
      })
    );
  }
}
