import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddComponent, EditComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractsModule { }
