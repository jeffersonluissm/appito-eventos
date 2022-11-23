import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from 'src/app/shared/model/ICustomer';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  eventId!: string;

  areaButton: ILandingPageArea | undefined;
  areaForm!: ILandingPageArea;

  loader = false;
  buttonEnabled = true;
  acceptTerms = false;
  form = this.fb.group({});

  source = null;
  dataForm: any;

  panelIndex = 1;

  header = {
    showClose: false,
    title: 'Pergunta',
  };

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.eventId = route.snapshot.params.eventId;
    this.route.queryParams.subscribe((data) => {
      this.source = data.source;
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.landingPageService.setColors();
    this.dataForm = sessionStorage.getItem('appito-events-data-concurso');
    if (!this.dataForm) {
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
        stage: 3,
      })
      .subscribe((data) => {
        const areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.areaForm = areas.find((a) => a.type === 'form') as ILandingPageArea;
        this.areaButton = areas.find((a) => a.type === 'bottom-button-bar') as ILandingPageArea;
        this.areaButton.properties['text'] = 'Concluir';
        this.loader = false;

        this.buildForm(this.areaForm);
      });
  }

  back() {
    window.history.back();
  }

  openTerms() {
    window.open(`${this.eventId}/terms`, '_blank');
  }

  isFormInvalid(control: AbstractControl | null) {
    if (!control) {
      return false;
    }
    return control.touched && control.invalid;
  }

  buildForm(area: ILandingPageArea, allRequired = false) {
    if (!area) {
      return;
    }
    const fields = area.properties['fields'] as ILandingPageArea[];
    fields.forEach((f) => {
      f.properties['mask'] = this.buildMask(f.properties['mask']);
      const validators = [];
      const asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined = [];

      const required = f.properties['required'];
      if (allRequired || required) {
        validators.push(Validators.required);
      }

      const control = this.fb.control(null, validators, asyncValidators);
      this.form.addControl(f.properties['key'], control);
    });
  }

  buildMask(mask: string) {
    let masked = '';
    if (mask === 'CPF') {
      masked = '000.000.000-00';
    } else if (mask === 'PHONE') {
      masked = '(00) 00000-0000';
    }
    return masked;
  }

  next() {
    if (!this.dataForm) {
      return;
    }

    this.loader = true;
    this.buttonEnabled = false;

    const data = Object.assign(JSON.parse(this.dataForm), this.form.value);
    console.log(data);

    this.landingPageService.registerToDraw(data).subscribe({
      next: (data) => {
        this.landingPageService.resetCache();
        this.panelIndex = 2;
        this.header.showClose = true;
        this.header.title = 'Participação confirmada';
        this.loader = false;
      },
      error: (data) => {
        this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 1000 });
        this.loader = false;
        this.buttonEnabled = true;
      },
    });
  }

  onClose() {
    this.router.navigateByUrl(`${this.eventId}`);
  }
}
