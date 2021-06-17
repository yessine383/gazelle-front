import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private url: string = 'http://localhost:8000/api/comptes';
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    }),
  };
  constructor(private http: HttpClient) {}

  getAllClients() {
    return this.http.get(`${this.url}`);
  }

  addClient(compte: any) {
    return this.http.post(`${this.url}`, compte);
  }

  getClientsById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateClient(id: number, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteClient(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getListContrat(id: number) {
    return this.http.get(`${this.url}/contrats/${id}`);
  }
}
