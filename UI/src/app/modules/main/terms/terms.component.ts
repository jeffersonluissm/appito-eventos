import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TermsComponent implements OnInit {
  eventId!: string;
  loader = false;
  data = '';

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    this.eventId = route.snapshot.params.eventId;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.landingPageService.setColors();
    this.getConfig();
  }

  getConfig() {
    if (!this.eventId) {
      return;
    }
    this.loader = true;
    this.landingPageService
      .getLandingPage({
        eventId: this.eventId,
        stage: 6,
      })
      .subscribe((data) => {
        this.loader = false;
        if (!data.json) {
          return;
        }
        this.data = (data.json as any)['conteudo'];
        console.log(this.data);
      });
  }
}
