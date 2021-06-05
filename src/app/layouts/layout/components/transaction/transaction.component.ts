import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { BookingService } from '../../service/booking.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  transactions: any = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getListTransaction();

  }

  private getListTransaction() {
    this.service.getListTransaction().subscribe(res => {
      this.transactions = res['hydra:member'];
    });
  }

 
}
