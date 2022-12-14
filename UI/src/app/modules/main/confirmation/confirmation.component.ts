import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, ICustomer } from 'src/app/shared/model/ICustomer';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  eventId!: string;
  areaButton: ILandingPageArea | undefined;
  loader = false;
  buttonEnabled = true;
  acceptTerms = false;

  customer?: ICustomer;
  source = null;

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.eventId = route.snapshot.params.eventId;
    this.route.queryParams.subscribe((data) => {
      this.source = data.source;
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.landingPageService.setColors();
    this.customer = this.landingPageService.getCache();
    if (!this.customer) {
      this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 1000 });
      this.router.navigateByUrl(`${this.eventId}`);
      return;
    }
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
        stage: 4,
      })
      .subscribe((data) => {
        const areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.areaButton = areas.find((a) => a.type === 'bottom-button-bar') as ILandingPageArea;
        this.loader = false;
      });
  }

  back() {
    window.history.back();
  }

  openTerms() {
    window.open(`${this.eventId}/terms`, '_blank');
  }

  next() {
    if (!this.customer) {
      return;
    }

    this.loader = true;
    this.buttonEnabled = false;
    this.customer.source = this.source;
    this.landingPageService.postRegisterCustomer(this.customer).subscribe({
      next: (data) => {
        this.loader = false;
        let route = this.areaButton ? this.areaButton.properties.action : 'payment';
        if (route.indexOf('{CPF}') > 0) {
          route = route.replace('{CPF}', this.landingPageService.getCache()?.documentNumber || '');
        }
        this.landingPageService.resetCache();
        sessionStorage.setItem('appito-events-payment', JSON.stringify(data));
        this.router.navigate([`${this.eventId}/${route}`], { queryParamsHandling: 'preserve' });
      },
      error: (data) => {
        this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 1000 });
        this.loader = false;
        this.buttonEnabled = true;
      },
    });
  }
}
