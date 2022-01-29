import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { LogserviceService } from './logservice.service';
import { TokenserviceService } from './tokenservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new Subject<User>();

  private _baseUrl = 'http://localhost:3000/api/v1';

  constructor(
    private _http: HttpClient,
    private _TokenserviceService: TokenserviceService,
    private _LogserviceService: LogserviceService
  ) {}

  get user() {
    return this.user$.asObservable();
  }

  private setUser(user: User) {
    this.user$.next(user);
  }

  loginApiService(loginData: object) {
    return this._http.post<User>(`${this._baseUrl}/auth/login`, loginData).pipe(
      switchMap((foundUser: User) => {
        this.setUser(foundUser);
        return of(true);
      }),
      catchError((e: any) => {
        this._LogserviceService.log('Server error accure ', e);
        alert(e.error.message);
        return throwError(e.error.message);
      })
    );
  }

  registerApiService(userData: User) {
    return this._http
      .post<User>(`${this._baseUrl}/auth/register`, userData)
      .pipe(
        switchMap((saveData: any) => {
          this.setUser(saveData.user);
          this._TokenserviceService.setToken(saveData.token);
          return of(true);
        }),
        catchError((e: any) => {
          this._LogserviceService.log('Server error accure ', e);
          alert(e.error.message);
          return throwError(e.error.message);
        })
      );
  }

  findMe() {
    const token = this._TokenserviceService.getToken();
    if (!token) {
      return throwError('Session expire');
    }

    return this._http.get<any>(`${this._baseUrl}/auth/findme`).pipe(
      switchMap((foundUser: any) => {
        this.setUser(foundUser.user);
        return of(foundUser.user);
      }),
      catchError((err: any) => {
        this._LogserviceService.log('Server error accure ', err);
        return throwError('Session expire');
      })
    );
  }

  logoutApiService() {
    this._TokenserviceService.removeToken();
    this.setUser(null);
  }
}
