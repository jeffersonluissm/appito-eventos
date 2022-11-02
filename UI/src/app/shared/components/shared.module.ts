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
  ],
  imports: [CommonModule, RouterModule],
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
  ],
})
export class SharedModule {}
