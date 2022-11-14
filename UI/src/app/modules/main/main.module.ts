import { NgxMaskModule } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { SharedModule } from './../../shared/components/shared.module';
import { LandingPageService } from './../../shared/services/landing-page.service';
import { MainRoutingModule } from './main-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [MainComponent, ConfirmationComponent, PaymentComponent, TermsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatSnackBarModule,
    MatCheckboxModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ClipboardModule,
  ],
  providers: [LandingPageService],
})
export class MainModule {}
