import { Injectable } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router, private service: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenStorage.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      window.alert('Se connecter pls');
      return false;
    }
  }

   /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let expectedRole = next.data.roles;
    if (!this.service.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      //console.log('roles: ', expectedRole.indexOf(this.service.token.groups[0].toUpperCase()));
      if (expectedRole.indexOf(this.service.token.groups[0].toUpperCase()) !== -1) {
        return true;
      }
       return true;
    }
    this.router.navigateByUrl('/users');
    return false;
  } */
}
