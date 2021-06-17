import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {

  public username: string;

  constructor(private service: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    console.log('username: ',this.username);
    
  }

  logout() {
    this.service.removeToken();
    this.router.navigateByUrl('/login');
    localStorage.setItem('username',undefined);
  }
}
