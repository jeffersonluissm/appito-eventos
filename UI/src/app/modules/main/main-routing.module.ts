import { TermsComponent } from './terms/terms.component';
import { PaymentComponent } from './payment/payment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: ':eventId',
    component: MainComponent,
  },
  {
    path: ':eventId/tickets',
    loadChildren: () => import('../tickets/tickets.module').then((m) => m.TicketsModule),
  },
  {
    path: ':eventId/cobranca',
    loadChildren: () => import('../charge/charge.module').then((m) => m.ChargeModule),
  },
  {
    path: ':eventId/confirmation',
    component: ConfirmationComponent,
  },
  {
    path: ':eventId/terms',
    component: TermsComponent,
  },
  {
    path: ':eventId/payment',
    component: PaymentComponent,
  },
  {
    path: '',
    redirectTo: 'copa2022',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
