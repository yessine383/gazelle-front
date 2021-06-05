import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { ReclamationsComponent } from './components/reclamations/reclamations.component';

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
        path: 'reclamations',
        component: ReclamationsComponent,
      },
      {
        path: 'transactions',
        component: TransactionComponent,
      },
      {
        path: 'actualites',
        component: ActualitesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
