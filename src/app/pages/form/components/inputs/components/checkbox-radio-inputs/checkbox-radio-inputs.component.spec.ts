import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRadioInputsComponent } from './checkbox-radio-inputs.component';

describe('CheckboxRadioInputsComponent', () => {
  let component: CheckboxRadioInputsComponent;
  let fixture: ComponentFixture<CheckboxRadioInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRadioInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRadioInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
