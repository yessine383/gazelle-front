import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ListComponent, EditComponent, AddComponent],
  imports: [
    CommonModule,
    ComptesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComptesModule { }
