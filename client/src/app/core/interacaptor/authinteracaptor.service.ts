import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenserviceService } from '../authservice/tokenservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthinteracaptorService implements HttpInterceptor {
  constructor(private _tokenService: TokenserviceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._tokenService.getToken();
    const cloneRequest = req.clone({
      headers: req.headers.set(`Authorization`, token ? `Bearer ${token}` : ''),
    });
    return next.handle(cloneRequest);
  }
}
