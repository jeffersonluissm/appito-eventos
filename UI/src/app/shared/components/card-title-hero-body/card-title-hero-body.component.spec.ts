import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleHeroBodyComponent } from './card-title-hero-body.component';

describe('CardTitleHeroBodyComponent', () => {
  let component: CardTitleHeroBodyComponent;
  let fixture: ComponentFixture<CardTitleHeroBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTitleHeroBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTitleHeroBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
