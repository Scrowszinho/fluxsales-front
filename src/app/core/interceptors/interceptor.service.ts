import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

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

    const login = this._authService.getUser();
    const token = `Bearer ${login.token}`;
    
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
