import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new Subject<User>();

  private _baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  loginApiService(loginData: object) {
    return of({ loginData: loginData });
    // return this._http.post(`${this._baseUrl}/api/login`, loginData);
  }

  get user() {
    return this.user$.asObservable();
  }

  private setUser(user: User) {
    this.user$.next(user);
  }

  registerApiService(userData: User) {
    this.setUser(userData);

    return of({ userData });
    // return this._http.post(`${this._baseUrl}/api/login`, loginData);
  }

  logoutApiService() {
    this.setUser(null);
    console.log('loggedout');
  }
}
