import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { DemandeActivationComponent } from './demande-activation/demande-activation.component';
import { DemandeInscriptionComponent } from './demande-inscription/demande-inscription.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: NotificationComponent,
    children: [
      {
        path: 'list',
        component: NotificationListComponent,
        children: [
          {
            path: 'demande-activation',
            component: DemandeActivationComponent
          },
          {
            path: 'demande-inscription',
            component: DemandeInscriptionComponent
          },
          {
            path: 'transactions',
            component: TransactionsComponent
          }
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
