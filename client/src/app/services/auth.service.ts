import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new Subject<User>();

  private _baseUrl = 'http://localhost:3000/api/v1';

  constructor(private _http: HttpClient) {}

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
        alert(e.error.message);
        return throwError(e.error.message);
      })
    );
  }

  registerApiService(userData: User) {
    return this._http
      .post<User>(`${this._baseUrl}/auth/register`, userData)
      .pipe(
        switchMap((saveData: User) => {
          this.setUser(saveData);
          return of(true);
        }),
        catchError((e: any) => {
          alert(e.error.message);
          return throwError(e.error.message);
        })
      );
  }

  logoutApiService() {
    this.setUser(null);
    console.log('loggedout');
  }
}
