import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomButtonBarComponent } from './bottom-button-bar.component';

describe('BottomButtonBarComponent', () => {
  let component: BottomButtonBarComponent;
  let fixture: ComponentFixture<BottomButtonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomButtonBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
