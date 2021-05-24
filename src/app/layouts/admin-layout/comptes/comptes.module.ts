import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { BalanceFormComponent } from './balance-form/balance-form.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [ListComponent, EditComponent, AddComponent, BalanceFormComponent],
  imports: [CommonModule, ComptesRoutingModule, ReactiveFormsModule, MatTabsModule],
})
export class ComptesModule {}
