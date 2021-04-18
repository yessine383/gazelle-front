import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  addContract(contract: any) {
    return this.http.post("http://localhost:8000/api/contrats", contract);
  }
}
