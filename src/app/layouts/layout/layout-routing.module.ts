import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { ReclamationComponent } from '../admin-layout/reclamation/reclamation.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
   /* {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }, */
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'recalamtions',
        component: ReclamationComponent
      },
      {
        path: 'transactions',
        component: TransactionComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
