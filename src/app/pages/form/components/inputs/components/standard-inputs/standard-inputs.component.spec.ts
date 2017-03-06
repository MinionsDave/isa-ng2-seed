import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardInputsComponent } from './standard-inputs.component';

describe('StandardInputsComponent', () => {
  let component: StandardInputsComponent;
  let fixture: ComponentFixture<StandardInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
