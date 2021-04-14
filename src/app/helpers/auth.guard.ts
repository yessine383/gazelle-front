import { Injectable } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';




@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenStorage.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login'])
      window.alert("Se connecter pls");
      return false;
    }
  }


}
