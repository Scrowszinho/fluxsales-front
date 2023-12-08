import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginUser } from './interfaces/login-interface';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/app/apiUrl';
import { Observable, tap } from 'rxjs';
import { IUserLoged } from 'src/app/interfaces/user.interfaces';
import { LocalStorageService } from 'src/app/core/utils/local-storage.service';
import { LocalStorageEnum } from 'src/app/enums/local-storage.enum';
import { ICreateUser } from './interfaces/signup-interface';
import { IDefaultRequest } from 'src/app/interfaces/default-request.interface';

@Injectable()
export class LoginService {
  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  authenticate(user: ILoginUser): Observable<IDefaultRequest<IUserLoged>> {
    const url = environment.apiUrl + apiUrl.user.doLogin;
    return this._http.post<IDefaultRequest<IUserLoged>>(url, user).pipe(
      tap((res) => {
        this._localStorageService.setLocalStorageData(
          LocalStorageEnum.APP_USER_DATA,
          res.data
        );
      })
    );
  }

  doGoogleLogin(): Observable<any> {
    const url = environment.apiUrl + '/auth/google';
    return this._http.get<any>(url);
  }

  registerUser(user: ICreateUser): Observable<IDefaultRequest<IUserLoged>> {
    const url = environment.apiUrl + apiUrl.user.registerUser;
    return this._http.post<IDefaultRequest<IUserLoged>>(url, user);
  }
}
