import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardTitleHeroBodyComponent } from './card-title-hero-body/card-title-hero-body.component';
import { CardTitleImageBodyComponent } from './card-title-image-body/card-title-image-body.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TitleBodyComponent } from './title-body/title-body.component';
import { TitleComponent } from './title/title.component';
import { BottomButtonBarComponent } from './bottom-button-bar/bottom-button-bar.component';
import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogHelpComponent } from './dialog-help/dialog-help.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTopComponent,
    HeroImageComponent,
    SponsorsComponent,
    TitleBodyComponent,
    TitleComponent,
    CardTitleImageBodyComponent,
    CardTitleHeroBodyComponent,
    BottomButtonBarComponent,
    HeaderInnerComponent,
    DialogHelpComponent,
  ],
  imports: [CommonModule, RouterModule, MatProgressBarModule, MatDialogModule, MatButtonModule],
  exports: [
    HeaderComponent,
    HeaderTopComponent,
    HeroImageComponent,
    SponsorsComponent,
    TitleBodyComponent,
    TitleComponent,
    CardTitleImageBodyComponent,
    CardTitleHeroBodyComponent,
    BottomButtonBarComponent,
    HeaderInnerComponent,
    DialogHelpComponent,
  ],
})
export class SharedModule {}
