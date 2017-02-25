import { TestBed, inject } from '@angular/core/testing';
import { BaThemeSpinnerService } from './ba-theme-spinner.service';

describe('BaThemeSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaThemeSpinnerService]
    });
  });

  it('should ...', inject([BaThemeSpinnerService], (service: BaThemeSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
