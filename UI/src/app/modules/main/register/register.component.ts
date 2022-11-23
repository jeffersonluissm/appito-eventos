import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { CustomValidators } from 'src/app/shared/utils/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  eventId!: string;
  loader = false;

  form = this.fb.group({});

  areaForm!: ILandingPageArea;
  areaFormAddress!: ILandingPageArea;
  areaButton!: ILandingPageArea;
  showAddress = false;
  buttonEnabled = false;

  titleHeader!: string;

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.eventId = route.snapshot.params.eventId;
  }

  ngOnInit(): void {
    this.landingPageService.setColors();
    this.getConfig();

    this.form.valueChanges.subscribe((data) => {
      this.buttonEnabled = this.form.valid;
    });
  }

  back() {
    window.history.back();
  }

  getConfig() {
    if (!this.eventId) {
      return;
    }
    this.loader = true;
    this.landingPageService
      .getLandingPage({
        eventId: this.eventId,
        stage: 2,
      })
      .subscribe((data) => {
        const areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.areaForm = areas.find((a) => a.type === 'form') as ILandingPageArea;
        this.areaButton = areas.find((a) => a.type === 'bottom-button-bar') as ILandingPageArea;

        this.titleHeader = this.areaForm.properties.title || 'Cadastro';
        this.buildForm(this.areaForm);

        this.loader = false;
      });
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
      const asyncValidators = [];

      if (f.properties['key'] === 'email') {
        validators.push(Validators.email);
      }

      if (f.properties['key'] === 'documentNumber') {
        validators.push(CustomValidators.ValidaCpf);
      }

      const required = f.properties['required'];
      if (allRequired || required) {
        validators.push(Validators.required);
      }

      if (f.properties['customValidator']) {
        if (f.properties['customValidator'] === 'validaTicket') {
          asyncValidators.push(CustomValidators.ticketValidator(this.landingPageService, f.properties['size']));
        }
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
    if (this.form.invalid) {
      this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 1000 });
      this.router.navigateByUrl(`${this.eventId}`);
      return;
    }

    const formValue = this.form.value;
    sessionStorage.setItem('appito-events-data-concurso', JSON.stringify(formValue));

    // const route = this.areaButton ? this.areaButton.properties.action : 'confirmation';
    const route = 'question';
    this.router.navigate([`${this.eventId}/${route}`], { queryParamsHandling: 'preserve' });
  }
}
