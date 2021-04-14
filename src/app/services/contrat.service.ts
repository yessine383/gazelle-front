import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) { }


  getContratById(id: number) {
    return this.http.get("http://localhost:8000/api/contrats/" + id)
  }

}
