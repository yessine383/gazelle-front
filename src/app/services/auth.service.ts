import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8000/api/login_check';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router
  ) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
    this.isLoggedIn = true;
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
      this.redirectUrl = null;
    }
  }

}


