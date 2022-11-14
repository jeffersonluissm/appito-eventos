import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  eventId!: string;
  loader = false;

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
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
    this.loader = true;
    this.landingPageService
      .getLandingPage({
        eventId: this.eventId,
        stage: 6,
      })
      .subscribe((data) => {
        this.loader = false;
      });
  }
}
