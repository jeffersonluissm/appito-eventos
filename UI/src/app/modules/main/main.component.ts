import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { IColorsThemeModel } from './../../shared/model/IColorsThemeModel';
import { ILandingPageArea } from './../../shared/model/ILandingPageModel';
import { LandingPageService } from './../../shared/services/landing-page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  areas: ILandingPageArea[] = [];

  areasLayout = {
    header: [] as ILandingPageArea[],
    main: [] as ILandingPageArea[],
    sidebar: [] as ILandingPageArea[],
  };

  headerBg: string = '';

  areaButton!: ILandingPageArea;

  colors!: IColorsThemeModel;
  eventId!: string;

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
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
      .subscribe({
        next: (data) => {
          this.areas = (data.json as any)['areas'] as ILandingPageArea[];
          this.areaButton = this.areas.find((a) => a.type === 'bottom-button-bar') as ILandingPageArea;

          Object.keys(this.areasLayout).forEach((item) => {
            const areas = this.areas.filter((a) => a.section === item);
            (this.areasLayout as any)[item] = areas;
          });

          this.headerBg = `url("${this.areasLayout.header.find((a) => a.type === 'hero-image')?.properties['image']}")`;

          this.colors = (data.json as any)['colors'][1];
          localStorage.setItem('appito-events-colors', JSON.stringify(this.colors));
          this.landingPageService.setColors();
        },
        error: (err) => {
          this.snackbar.open('Este evento não existe', 'Fechar', { duration: 5000 });
          // location.href = 'https://appito.com';
        },
      });
  }

  next() {
    const route = this.areaButton ? this.areaButton.properties.action : 'tickets';
    this.router.navigate([`${this.eventId}/${route}`], { queryParamsHandling: 'preserve' });
  }
}
