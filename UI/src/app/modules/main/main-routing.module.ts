import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsModule } from '../tickets/tickets.module';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
