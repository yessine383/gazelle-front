import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit {

  activeLinkIndex = -1;
  navLinks = [
    { label: "Demandes d'activation", path: '/panel-admin/notification/list/demande-activation', index: 0 },
    { label: "Demandes d'inscription", path: '/panel-admin/notification/list/demande-inscription', index: 1 },
    { label: 'Transactions', path: '/panel-admin/notification/list/transactions', index: 2 },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.path === '.' + this.router.url));
    });
  }
}
