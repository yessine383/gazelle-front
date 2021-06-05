import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Model/Booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  url = 'http://www.gazellepro.tunisair.com.tn/tun/FO2-DEV/APP/booking_api.php';
  base_url = 'http://localhost:8000/api/';
  httpOptions: any = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}

  public searchForBooking(booking: Booking) {
    return this.http.post(`${this.url}`, booking, this.httpOptions);
  }

  public getListTransaction() {
    return this.http.get(`${this.base_url}transactions`, this.httpOptions);
  }

  public getListReclamation() {
    return this.http.get(`${this.base_url}reclamation`, this.httpOptions);
  }

  public getListActualite() {
    return this.http.get(`${this.base_url}actualites`, this.httpOptions);
  }
}
