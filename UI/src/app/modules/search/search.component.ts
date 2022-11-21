import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { CustomValidators } from './../../shared/utils/custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ITicket } from 'src/app/shared/model/ITicket';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  eventId!: string;
  loader = false;
  documentNumber = new FormControl(null, [Validators.required, CustomValidators.ValidaCpf]);
  ticket!: ITicket;

  areaButton: ILandingPageArea = {
    type: 'bottom-button-bar',
    properties: {
      action: 'search/confirmation',
      text: 'Ir para confirmação',
    },
  };

  constructor(
    private lpService: LandingPageService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    this.eventId = route.snapshot.params.eventId;
  }

  ngOnInit(): void {
    this.documentNumber.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((data) => {
      if (data.length === 11) {
        this.checkDocument();
      }
    });
  }

  back() {
    this.router.navigateByUrl(`${this.eventId}`);
  }

  isFormInvalid() {
    return this.documentNumber.touched && this.documentNumber.invalid;
  }

  checkDocument() {
    if (!this.documentNumber.value || this.documentNumber.invalid) {
      return;
    }
    this.loader = true;
    this.lpService.checkDocument(this.documentNumber.value).subscribe({
      next: (data) => {
        this.loader = false;
        if (data.error) {
          this.documentNumber.setErrors({ notFound: true });
          this.documentNumber.markAsTouched();
        } else {
          this.ticket = data;
          sessionStorage.setItem('appito-events-ticket', JSON.stringify(data));
        }
      },
      error: (err) => {
        this.loader = false;
        this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 2000 });
      },
    });
  }

  next() {
    this.router.navigate([`${this.eventId}/${this.areaButton.properties.action}`], { queryParamsHandling: 'preserve' });
  }
}
