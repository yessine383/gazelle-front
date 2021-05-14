import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ComptesModule } from './comptes/comptes.module';
import { NotificationModule } from './notification/notification.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule,
    ComptesModule,
    NotificationModule
  ],
  declarations: [
    DashboardComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
  ]
})

export class AdminLayoutModule { }
