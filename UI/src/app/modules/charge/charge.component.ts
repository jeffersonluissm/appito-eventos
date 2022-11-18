import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Customer } from 'src/app/shared/model/ICustomer';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

import { ILandingPageArea } from './../../shared/model/ILandingPageModel';
import { CustomValidators } from './../../shared/utils/custom-validators';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss'],
})
export class ChargeComponent implements OnInit {
  eventId!: string;
  loader = false;

  form = this.fb.group({});

  areaForm!: ILandingPageArea;
  areaFormAddress!: ILandingPageArea;
  areaButton!: ILandingPageArea;
  showAddress = false;
  buttonEnabled = false;

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
        stage: 3,
      })
      .subscribe((data) => {
        const areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.areaForm = areas.find((a) => a.type === 'form') as ILandingPageArea;
        this.areaFormAddress = areas.find((a) => a.type === 'form-address') as ILandingPageArea;
        this.areaButton = areas.find((a) => a.type === 'bottom-button-bar') as ILandingPageArea;

        this.buildForm(this.areaForm, true);

        if (this.areaFormAddress) {
          const area = {
            properties: {
              fields: this.landingPageService.getControlsAddress(),
            },
          };
          this.buildForm(area as any);

          this.form
            .get('zipcode')
            ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
            .subscribe((data) => {
              if (data.length === 8) {
                this.getAddressByZipcode();
              }
            });
        }

        this.recoverData();

        this.loader = false;
      });
  }

  isFormInvalid(control: AbstractControl | null) {
    if (!control) {
      return false;
    }
    return control.touched && control.invalid;
  }

  recoverData() {
    let customer = this.landingPageService.getCache();
    if (!customer) {
      this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 1000 });
      this.router.navigateByUrl(`${this.eventId}`);
      return;
    }

    if (!customer.addressDetails) {
      return;
    }
    this.form.patchValue(customer);
    this.form.patchValue(customer.addressDetails);
    this.showAddress = true;
  }

  buildForm(area: ILandingPageArea, allRequired = false) {
    if (!area) {
      return;
    }
    const fields = area.properties['fields'] as ILandingPageArea[];
    fields.forEach((f) => {
      f.properties['mask'] = this.buildMask(f.properties['mask']);
      const validators = [];

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

      const control = this.fb.control(null, validators);
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

  getAddressByZipcode() {
    const zipCodeValue = this.form.get('zipcode')?.value;

    if (!zipCodeValue || zipCodeValue.length < 8) {
      return;
    }
    this.loader = true;
    this.landingPageService.getAddress(zipCodeValue).subscribe((data) => {
      this.loader = false;
      this.form.patchValue(data);
      this.showAddress = true;

      if (!data.address) {
        this.form.get('zipcode')?.setErrors({ incorrect: true });
      } else {
        this.form.get('zipcode')?.setErrors(null);
      }
    });
  }

  next() {
    let customer = this.landingPageService.getCache() as any;
    if (!customer || this.form.invalid) {
      this.snackbar.open('Ocorreu um erro. Tente novamente.', 'Fechar', { duration: 1000 });
      this.router.navigateByUrl(`${this.eventId}`);
      return;
    }

    const formValue = this.form.value;

    customer!.name = formValue.name;
    customer!.documentNumber! = formValue.documentNumber;
    customer!.phone! = formValue.phone;
    customer!.email! = formValue.email;
    customer!.addressDetails! = {
      zipcode: formValue.zipcode,
      address: formValue.address,
      addressNumber: formValue.addressNumber,
      complement: formValue.complement,
      neighborhood: formValue.neighborhood,
      city: formValue.city,
      state: formValue.state,
    };

    this.landingPageService.saveCache(customer);

    const route = this.areaButton ? this.areaButton.properties.action : 'confirmation';
    this.router.navigate([`${this.eventId}/${route}`], { queryParamsHandling: 'preserve' });
  }
}
