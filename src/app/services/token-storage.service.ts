import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USERNAME = 'user';


@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut() {
    window.sessionStorage.clear();
    window.location.assign('http://localhost:4200/login');
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    if (sessionStorage.getItem(TOKEN_KEY)){
        window.sessionStorage.setItem(USERNAME, this.getUser());
    } return sessionStorage.getItem(TOKEN_KEY);

  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public removeToken() {
    return sessionStorage.clear();
  }
}

