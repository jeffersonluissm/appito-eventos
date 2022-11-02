import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleImageBodyComponent } from './card-title-image-body.component';

describe('CardTitleImageBodyComponent', () => {
  let component: CardTitleImageBodyComponent;
  let fixture: ComponentFixture<CardTitleImageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTitleImageBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTitleImageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
