import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationStatesComponent } from './validation-states.component';

describe('ValidationStatesComponent', () => {
  let component: ValidationStatesComponent;
  let fixture: ComponentFixture<ValidationStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
