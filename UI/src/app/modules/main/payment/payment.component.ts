import { IRegisterCustomerResponse } from './../../../shared/model/IRegisterCustomerResponse';
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

  paymentData!: IRegisterCustomerResponse;

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private router: Router,
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
    const data = sessionStorage.getItem('appito-events-payment');
    if (!data) {
      this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 1000 });
      this.router.navigateByUrl(`${this.eventId}`);
      return;
    }
    this.paymentData = JSON.parse(data);
    this.loader = false;
    sessionStorage.removeItem('appito-events-payment');
  }

  onClose() {
    this.router.navigate([`/${this.eventId}`], { queryParamsHandling: 'preserve' });
  }
}
