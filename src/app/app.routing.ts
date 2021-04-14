import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
        // canActivate: [AuthGuard]
      }]
  },

  /*
  {
    path: '**',
    redirectTo: 'dashboard'
  }*/
]
