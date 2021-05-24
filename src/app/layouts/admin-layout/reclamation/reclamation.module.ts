import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { ListComponent } from './list/list.component';
import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReclamationComponent, ListComponent, ReclamationFormComponent],
  imports: [CommonModule, ReclamationRoutingModule, NgSelectModule, ReactiveFormsModule,FormsModule],
  entryComponents: [ReclamationFormComponent],
})
export class ReclamationModule {}
