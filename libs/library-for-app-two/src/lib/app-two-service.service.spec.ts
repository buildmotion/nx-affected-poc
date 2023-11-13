import { TestBed } from '@angular/core/testing';

import { AppTwoServiceService } from './app-two-service.service';

describe('AppTwoServiceService', () => {
  let service: AppTwoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTwoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
