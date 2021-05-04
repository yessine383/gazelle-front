import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/api';
const api = './assets/users.json';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getListUserByAgence(id:String){
     return this.http.get<any>(`${api}`, { responseType: 'json' });
  }
}