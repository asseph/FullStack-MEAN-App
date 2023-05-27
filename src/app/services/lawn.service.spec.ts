import { TestBed, inject } from '@angular/core/testing';

import { LawnService } from './lawn.service';

describe('LawnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LawnService]
    });
  });

  it('should be created', inject([LawnService], (service: LawnService) => {
    expect(service).toBeTruthy();
  }));
});
