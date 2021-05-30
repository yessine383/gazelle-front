import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from './service/booking.service';


@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [CommonModule, LayoutRoutingModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  providers: [
    BookingService
  ]
})
export class LayoutModule {}
