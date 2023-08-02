import { TestBed } from '@angular/core/testing';

import { EnrolserService } from './enrolser.service';

describe('EnrolserService', () => {
  let service: EnrolserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
