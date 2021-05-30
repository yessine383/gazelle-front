import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Model/Booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  url = 'http://www.gazellepro.tunisair.com.tn/tun/FO2-DEV/APP/booking_api.php';
  httpOptions: any = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}

  public searchForBooking(booking: Booking) {
    return this.http.post(`${this.url}`, booking,  this.httpOptions );
  }
}
