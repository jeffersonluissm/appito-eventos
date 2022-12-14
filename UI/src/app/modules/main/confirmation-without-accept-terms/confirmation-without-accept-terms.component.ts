import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-confirmation-without-accept-terms',
  templateUrl: './confirmation-without-accept-terms.component.html',
  styleUrls: ['./confirmation-without-accept-terms.component.scss'],
})
export class ConfirmationWithoutAcceptTermsComponent implements OnInit {
  eventId!: string;
  document!: string;
  loader = true;

  header = {
    showClose: true,
    title: 'Ingresso gerado',
  };

  contentResponse: any;

  constructor(
    private lpService: LandingPageService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    this.eventId = route.snapshot.params.eventId;
    this.document = route.snapshot.params.document;
  }

  ngOnInit(): void {
    if (!this.document) {
      return;
    }
    this.lpService.generateTicket(this.document).subscribe({
      next: (data) => {
        sessionStorage.removeItem('appito-events-ticket');
        this.loader = false;
        this.contentResponse = data.content;
      },
      error: (err) => {
        this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 2000 });
        this.router.navigateByUrl(`${this.eventId}`);
      },
    });
  }

  onClose() {
    this.router.navigateByUrl(`${this.eventId}`);
  }
}
