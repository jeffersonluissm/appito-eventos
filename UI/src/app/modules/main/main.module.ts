import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { SharedModule } from './../../shared/components/shared.module';
import { LandingPageService } from './../../shared/services/landing-page.service';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  providers: [LandingPageService],
})
export class MainModule {}
