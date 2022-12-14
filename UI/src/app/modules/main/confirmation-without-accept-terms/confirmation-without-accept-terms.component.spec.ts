import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationWithoutAcceptTermsComponent } from './confirmation-without-accept-terms.component';

describe('ConfirmationWithoutAcceptTermsComponent', () => {
  let component: ConfirmationWithoutAcceptTermsComponent;
  let fixture: ComponentFixture<ConfirmationWithoutAcceptTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationWithoutAcceptTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationWithoutAcceptTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
