import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../utils/local-storage.service';
import { LocalStorageEnum } from 'src/app/enums/local-storage.enum';
import { IUserLoged } from 'src/app/interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _router: Router,
    private _localStorage: LocalStorageService
  ) {}

  doLogout(): void {
    this._localStorage.clearLocalStorage();
    this._router.navigate(['/']);
  }

  doLogin(user: IUserLoged): void {
    this._localStorage.setLocalStorageData(
      LocalStorageEnum.APP_USER_DATA,
      user
    );
    this._router.navigate(['/']);
  }

  getUser(): IUserLoged {
    return this._localStorage.getLocalStorageData(
      LocalStorageEnum.APP_USER_DATA
    );
  }

  isUserLogged(): boolean {
    const user: IUserLoged = this._localStorage.getLocalStorageData(
      LocalStorageEnum.APP_USER_DATA
    );
    if(!user) {
      return false;
    }
    return user.expires_in > new Date();
  }

  getExpiredDate(): Date {
    const user = this.getUser();
    return user.expires_in;
  }
}
