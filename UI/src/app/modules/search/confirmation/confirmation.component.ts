import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { ITicket } from 'src/app/shared/model/ITicket';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { CustomValidators } from 'src/app/shared/utils/custom-validators';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  eventId!: string;
  loader = false;
  ticket!: ITicket;
  acceptTerms = false;
  buttonEnabled = true;

  panelIndex = 1;

  header = {
    showClose: false,
    title: 'Confirmação',
  };

  areaButton: ILandingPageArea = {
    type: 'bottom-button-bar',
    properties: {
      action: 'search/generation',
      text: 'Gerar ingresso',
    },
  };

  contentResponse: any;

  constructor(
    private lpService: LandingPageService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    this.eventId = route.snapshot.params.eventId;
    const ticket = sessionStorage.getItem('appito-events-ticket');
    if (!ticket) {
      this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 2000 });
      this.router.navigateByUrl(`${this.eventId}/search`);
      return;
    }
    this.ticket = JSON.parse(ticket);
  }

  ngOnInit(): void {}

  back() {
    window.history.back();
  }

  next() {
    if (!this.acceptTerms) {
      return;
    }
    this.loader = true;
    this.lpService.generateTicket(this.ticket.inviteInfo.document).subscribe({
      next: (data) => {
        this.panelIndex = 2;
        this.header.showClose = true;
        this.header.title = 'Ingresso gerado';
        sessionStorage.removeItem('appito-events-ticket');
        this.loader = false;
        this.contentResponse = data.content;
      },
      error: (err) => {
        this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 2000 });
        this.router.navigateByUrl(`${this.eventId}/search`);
      },
    });
  }

  openTerms() {
    window.open(`${this.eventId}/terms`, '_blank');
  }

  onClose() {}
}
