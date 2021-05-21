import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DemandeActivationComponent } from './demande-activation/demande-activation.component';
import { DemandeInscriptionComponent } from './demande-inscription/demande-inscription.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    NotificationComponent,
    NotificationListComponent,
    DemandeActivationComponent,
    DemandeInscriptionComponent,
    TransactionsComponent,
  ],
  imports: [CommonModule, NotificationRoutingModule, FormsModule, ReactiveFormsModule, MatTabsModule, NgSelectModule],
})
export class NotificationModule {}
