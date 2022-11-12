import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/components/shared.module';

import { ChargeComponent } from './charge.component';
import { ChargeRoutingModule } from './charge.routing.module';

@NgModule({
  declarations: [ChargeComponent],
  imports: [CommonModule, ChargeRoutingModule, SharedModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
})
export class ChargeModule {}
