import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IColorsThemeModel } from './../../shared/model/IColorsThemeModel';
import { ILandingPageModel, ILandingPageConfig, ILandingPageArea } from './../../shared/model/ILandingPageModel';
import { LandingPageService } from './../../shared/services/landing-page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  areas: ILandingPageArea[] = [];
  colors!: IColorsThemeModel;
  eventId!: string;

  constructor(private landingPageService: LandingPageService, private route: ActivatedRoute) {
    this.eventId = route.snapshot.params.eventId;
  }

  ngOnInit(): void {
    this.getLandingPage();
  }

  getLandingPage() {
    if (!this.eventId) {
      return;
    }
    this.landingPageService
      .getLandingPage({
        eventId: this.eventId,
        stage: 1,
      })
      .subscribe((data) => {
        this.areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.colors = (data.json as any)['colors'][1];
        localStorage.setItem('appito-events-colors', JSON.stringify(this.colors));
        this.landingPageService.setColors();
      });
  }
}
