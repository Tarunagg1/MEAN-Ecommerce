import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {
  _TOKEN_KEY = "Authtoken";
  constructor() { }
  
  
  setToken(token:string) { 
    if(!token) return;

    this.removeToken();
    
    window.localStorage.setItem(this._TOKEN_KEY,token);
  }

  getToken(){
    return window.localStorage.getItem(this._TOKEN_KEY);
  }

  removeToken(){
    window.localStorage.removeItem(this._TOKEN_KEY);
  }
}
