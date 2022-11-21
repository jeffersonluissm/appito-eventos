import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/components/shared.module';

import { SearchComponent } from '../search/search.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  providers: [LandingPageService],
})
export class SearchModule {}
