import { TestBed } from '@angular/core/testing';

import { AppThreeServiceService } from './app-three-service.service';

describe('AppThreeServiceService', () => {
  let service: AppThreeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppThreeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
