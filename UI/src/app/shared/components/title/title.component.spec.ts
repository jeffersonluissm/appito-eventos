import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TItleComponent } from './title.component';

describe('TItleComponent', () => {
  let component: TItleComponent;
  let fixture: ComponentFixture<TItleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TItleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TItleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
