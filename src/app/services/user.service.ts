import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/layouts/admin-layout/user/Model/User';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Booking } from 'app/layouts/layout/Model/Booking.model';

const API_URL = 'http://localhost:8000/api';
const api = './assets/users.json';



/* 
/api/users GET list user
/api/users POST with body {
  "email",:
   "role": [],
   "password":
}

*/

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userList = new BehaviorSubject<any>('');
  url = 'http://www.gazellepro.tunisair.com.tn/tun/FO2-DEV/APP/booking_api.php';
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${API_URL}/users`, user, { responseType: 'json' });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${API_URL}/users`, user, { responseType: 'json' });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/users/${id}`, { responseType: 'json' });
  }

  getListUserByAgence(id: String) {
    return this.http.get<any>(`${API_URL}/users`);
  }
  public getListTransaction() {
    return this.http.get(`${API_URL}/transactions`, { responseType: 'json' });
  }

  public getListReclamation() {
    return this.http.get(`${API_URL}/reclamations`, { responseType: 'json' });
  }

  public getListActualite() {
    return this.http.get(`${API_URL}/actualites`, { responseType: 'json' });
  }

  public searchForBooking(booking: Booking) {
    return this.http.post(`${this.url}`, booking);
  }

  public addReclamation(reclamation: any) {
    return this.http.post(`${API_URL}/reclamations`, reclamation, { responseType: 'json' });
  }

  getListComptes() {
    return this.http.get<any>(`${API_URL}/comptes`, { responseType: 'json' });
  }
  
  getCompteById(id) {
    return this.http.get<any>(`${API_URL}/comptes/${id}`, { responseType: 'json' });
  }
}