import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBodyComponent } from './title-body.component';

describe('TitleBodyComponent', () => {
  let component: TitleBodyComponent;
  let fixture: ComponentFixture<TitleBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
