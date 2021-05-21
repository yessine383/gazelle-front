import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  public agencies: any[] = [
    { id: 1, organisme: 'Agence 1' },
    { id: 2, organisme: 'Agence 2' },
    { id: 3, organisme: 'Agence 3' },
  ];
  selectedAgency: any ;
  constructor() {}

  ngOnInit(): void {}
}
