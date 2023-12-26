import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from './auth.service';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';
import { getMessage } from 'src/app/locale/messages';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(
        private _loginService: AuthService, 
        private _snackBarService: SnackBarService,
        private _router: Router
    ) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this._loginService.isUserLogged()){
            this._router.navigate(['/login/signin']);
        this._snackBarService.open(getMessage('label.Permission_required'), 'Ok')
            return false
        }
        return true
    }
}