import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectsComponent } from './input-selects.component';

describe('InputSelectsComponent', () => {
  let component: InputSelectsComponent;
  let fixture: ComponentFixture<InputSelectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
