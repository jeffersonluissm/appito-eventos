import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

import { ILandingPageArea } from './../../shared/model/ILandingPageModel';

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

  constructor(private landingPageService: LandingPageService, private route: ActivatedRoute, private fb: FormBuilder) {
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
        stage: 3,
      })
      .subscribe((data) => {
        console.log(data.json);
        const areas = (data.json as any)['areas'] as ILandingPageArea[];
        this.areaForm = areas.find((a) => a.type === 'form') as ILandingPageArea;
        this.areaFormAddress = areas.find((a) => a.type === 'form-address') as ILandingPageArea;

        this.buildForm(this.areaForm);
        this.buildForm(this.areaFormAddress);
        this.loader = false;
      });
  }

  buildForm(area: ILandingPageArea) {
    if (!area) {
      return;
    }
    const fields = area.properties['fields'] as ILandingPageArea[];
    fields.forEach((f) => {
      f.properties['mask'] = this.buildMask(f.properties['mask']);

      let control = this.fb.control(null, [Validators.maxLength(parseInt(f.properties['size']))]);

      if (f.properties['key'] === 'email') {
        control.setValidators(Validators.email);
      }

      this.form.addControl(f.properties['key'], control);
    });

    console.log(this.form, this.areaForm);
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
}
