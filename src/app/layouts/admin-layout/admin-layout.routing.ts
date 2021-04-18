import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { FormContratComponent } from '../../pages/form-contrat/form-contrat.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'comptes', loadChildren: () => import('../../pages/comptes/comptes.module').then(m => m.ComptesModule) },
    { path: 'contracts', loadChildren: () => import('../../pages/contracts/contracts.module').then(m => m.ContractsModule) },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'FormContrat', component: FormContratComponent }
];
