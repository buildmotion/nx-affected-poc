import { TestBed } from '@angular/core/testing';

import { AppOneServiceService } from './app-one-service.service';

describe('AppOneServiceService', () => {
  let service: AppOneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppOneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
