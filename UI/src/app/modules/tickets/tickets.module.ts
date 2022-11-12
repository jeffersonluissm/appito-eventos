import { SharedModule } from './../../shared/components/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { TicketsComponent } from '../tickets/tickets.component';
import { TicketsRoutingModule } from './tickets.routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [TicketsComponent],
  imports: [CommonModule, TicketsRoutingModule, SharedModule, MatProgressBarModule],
  providers: [LandingPageService],
})
export class TicketsModule {}
