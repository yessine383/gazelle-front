import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/panel-admin/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
  { path: '/panel-admin/comptes', title: 'CompteB2B', icon: 'nc-tile-56', class: '' },
  { path: '/panel-admin/users', title: 'Users', icon: 'nc-icon nc-single-02', class: '' },
  // { path: '/maps', title: 'Transaction', icon: 'nc-pin-3', class: '' },
  { path: '/panel-admin/notification', title: 'Notification', icon: 'nc-bell-55', class: '' },
  // { path: '/user', title: 'User Profile', icon: 'nc-single-02', class: '' },
  // { path: '/typography', title: 'Statistique', icon: 'nc-caps-small', class: '' },
  // { path: '/FormClient', title: 'client', icon: 'nc-caps-small', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
