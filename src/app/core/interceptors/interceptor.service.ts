import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/modules/login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _loginService: LoginService) {}

  static noAuthUrls = [
    '/login',
    '/signup',
  ]

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {    
    if (!this.needAuthToUrl(req)) {      
      return next.handle(req)
    }

    const login = this._loginService.getLoggedUser();
    const token = `Bearer ${login.access_token}`;
    
    const copyReq = req.clone({
      headers: req.headers.set('Authorization', token),
    });
    return next.handle(copyReq);
  }

  needAuthToUrl(req: HttpRequest<any>): boolean {
    let authorize = true
    AuthInterceptor.noAuthUrls.filter((element) => {            
      if (req.url.includes(element)) {
        authorize = false;
      } 
    });
    return authorize
  }
}
