import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { ILandingTicket } from 'src/app/shared/model/ILandingTicket';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TicketsComponent implements OnInit {
  eventId!: string;
  areas: ILandingPageArea[] = [];
  tickets: ILandingTicket[] = [];

  constructor(private landingPageService: LandingPageService, private route: ActivatedRoute) {
    this.eventId = route.snapshot.params.eventId;
  }

  ngOnInit(): void {
    this.landingPageService.setColors();
    this.getConfig();
  }

  getConfig() {
    if (!this.eventId) {
      return;
    }
    this.landingPageService
      .getLandingPage({
        eventId: this.eventId,
        stage: 2,
      })
      .subscribe((data) => {
        this.areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.tickets = (data.json as any)['tickets'];
        this.tickets.forEach((t) => (t.icon = t.icon === 'calendar' ? 'event' : t.icon));
        console.log(data);
      });
  }

  back() {
    window.history.back();
  }
}
