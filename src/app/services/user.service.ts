import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${api}/users`, user, { responseType: 'json' });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${api}/users`, user, { responseType: 'json' });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${api}/users/${id}`, { responseType: 'json' });
  }

  getListUserByAgence(id: String) {
    return this.http.get<any>(`${API_URL}/users`, { responseType: 'json' });
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
}