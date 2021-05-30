import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';


export const AppRoutes: Routes = [
  /* {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, */
  { path: 'login', component: LoginComponent },
  {
    path: 'panel-admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
        //canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'home',
    loadChildren: () => import('./layouts/layout/layout.module').then(m => m.LayoutModule),
    //canActivate: [AuthGuard],
  },

  /*
  {
    path: '**',
    redirectTo: 'dashboard'
  }*/
];
