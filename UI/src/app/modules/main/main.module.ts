import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskModule } from 'ngx-mask';

import { MainComponent } from '../main/main.component';
import { SharedModule } from './../../shared/components/shared.module';
import { LandingPageService } from './../../shared/services/landing-page.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MainRoutingModule } from './main-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { TermsComponent } from './terms/terms.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [MainComponent, ConfirmationComponent, PaymentComponent, TermsComponent, RegisterComponent, QuestionComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatSnackBarModule,
    MatCheckboxModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ClipboardModule,
    ReactiveFormsModule,
  ],
  providers: [LandingPageService],
})
export class MainModule {}
