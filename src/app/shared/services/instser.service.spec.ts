import { TestBed } from '@angular/core/testing';

import { InstserService } from './instser.service';

describe('InstserService', () => {
  let service: InstserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
