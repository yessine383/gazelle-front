import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { FormContratComponent } from '../../pages/form-contrat/form-contrat.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'comptes', loadChildren: () => import('./comptes/comptes.module').then(m => m.ComptesModule) },
  { path: 'contracts', loadChildren: () => import('../../pages/contracts/contracts.module').then(m => m.ContractsModule) },
  { path: 'notifications', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },

  { path: 'upgrade', component: UpgradeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'FormContrat', component: FormContratComponent },
];
