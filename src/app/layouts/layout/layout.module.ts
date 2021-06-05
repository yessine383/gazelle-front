import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from './service/booking.service';
import { ReclamationsComponent } from './components/reclamations/reclamations.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';



@NgModule({
  declarations: [LayoutComponent, HomeComponent, ReclamationsComponent, TransactionComponent, ActualitesComponent],
  imports: [CommonModule, LayoutRoutingModule, NgSelectModule, FormsModule, ReactiveFormsModule,AdminLayoutModule],
  providers: [
    BookingService
  ],
  entryComponents: []
})
export class LayoutModule {}
