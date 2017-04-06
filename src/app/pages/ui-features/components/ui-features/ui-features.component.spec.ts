import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFeaturesComponent } from './ui-features.component';

describe('UiFeaturesComponent', () => {
  let component: UiFeaturesComponent;
  let fixture: ComponentFixture<UiFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
