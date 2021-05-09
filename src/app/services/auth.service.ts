import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, shareReplay, tap } from 'rxjs/operators';
import * as moment from 'moment';
import * as jwt from 'jwt-decode';

const AUTH_API = 'http://localhost:8000/api/login_check';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export interface Payload {
  iss: string;
  jti: string;
  sub: string;
  upn: string;
  preferred_username: string;
  groups: string[];
  aud: string;
  exp: number;
  iat: number;
  auth_time: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials): Observable<any> {
    /* return this.http.post(
      AUTH_API,
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions
    );
    this.isLoggedIn = true;
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
      this.redirectUrl = null;
    } */
    return this.http.post(AUTH_API, { username: credentials.username, password: credentials.password }, httpOptions).pipe(
      tap(res => this.setSession(res)),
      shareReplay(),
      catchError(error => {
        if (error.status === 404) {
          console.log('Not Found');
          //this.toastService.error('Username or Password incorrect !!');
        }
        throw error;
      })
    );
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn.valueInMillis, 'Millisecond');
    localStorage.setItem('token', authResult.tokenValue);
    localStorage.setItem('id_token', authResult.idToken);
    console.log('id token: ', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
  }

  logout(): any {
    // remove user from local storage to log user out
    localStorage.clear();
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  isAuthenticated() {
    if (this.token) {
      return true;
    }
    return false;
  }

  get token() {
    let token = localStorage.getItem('token');
    try {
      return jwt(token) as Payload;
    } catch (error) {
      return null;
    }
  }
}




