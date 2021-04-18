import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/comptes', title: 'CompteB2B', icon: 'nc-tile-56', class: '' },
    // { path: '/icons', title: 'Reclamation', icon: 'nc-diamond', class: '' },
    // { path: '/maps', title: 'Transaction', icon: 'nc-pin-3', class: '' },
    // { path: '/notifications', title: 'Actualité', icon: 'nc-bell-55', class: '' },
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
