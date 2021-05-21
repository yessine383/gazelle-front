import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReclamationComponent } from './reclamation.component';

const routes: Routes = [
  {
    path: '',
    component: ReclamationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
