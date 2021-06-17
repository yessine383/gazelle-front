import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private userService: UserService) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      window.location.assign('http://localhost:4200/panel-admin/statistique');
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        console.log('roles: ', this.roles);
        localStorage.setItem('username', this.form.username);
        window.location.assign('http://localhost:4200/panel-admin/statistique');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  logout(): any {
    this.tokenStorage.removeToken();
  }

  reloadPage() {
    window.location.reload();
  }
}