import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getAllClients() {
    return this.http.get("http://localhost:8000/api/comptes");
  }

  addClient(compte: any) {
    return this.http.post("http://localhost:8000/api/comptes", compte);
  }

  getClientsById(id: number) {
    return this.http.get("http://localhost:8000/api/comptes/" + id);
  }
}
