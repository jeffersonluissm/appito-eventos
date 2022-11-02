import { TicketsRoutingModule } from './tickets.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from '../tickets/tickets.component';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@NgModule({
  declarations: [TicketsComponent],
  imports: [CommonModule, TicketsRoutingModule],
  providers: [LandingPageService],
})
export class TicketsModule {}
