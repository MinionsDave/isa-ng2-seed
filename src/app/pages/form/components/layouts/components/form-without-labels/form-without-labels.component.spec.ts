import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithoutLabelsComponent } from './form-without-labels.component';

describe('FormWithoutLabelsComponent', () => {
  let component: FormWithoutLabelsComponent;
  let fixture: ComponentFixture<FormWithoutLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithoutLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithoutLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
