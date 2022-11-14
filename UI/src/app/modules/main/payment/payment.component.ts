import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from 'src/app/shared/model/ICustomer';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  eventId!: string;
  loader = false;

  codePix =
    '00020101021226820014br.gov.bcb.pix2560pix.stone.com.br/pix/v2/b8c31aba-0859-441a-896a-adff6a48954c5204000053039865406350.005802BR5925APPITO SOLUCOES TECNOLOGI6014RIO DE JANEIRO62290525738344857066433c9b1cd4a18630434B5';

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private router: Router,
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
        stage: 5,
      })
      .subscribe((data) => {
        const areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.loader = false;
      });
  }

  onClose() {
    this.router.navigateByUrl(`/${this.eventId}`);
  }
}
