import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCssTableComponent } from './pure-css-table.component';

describe('PureCssTableComponent', () => {
  let component: PureCssTableComponent;
  let fixture: ComponentFixture<PureCssTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureCssTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCssTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
