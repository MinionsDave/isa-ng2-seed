import { TestBed, inject } from '@angular/core/testing';

import { ConfirmService } from './confirm.service';

describe('ConfirmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmService]
    });
  });

  it('should ...', inject([ConfirmService], (service: ConfirmService) => {
    expect(service).toBeTruthy();
  }));
});
