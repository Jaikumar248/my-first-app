import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//import the routes from your app-routing file

const routes: Routes = [{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
