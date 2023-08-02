import { TestBed } from '@angular/core/testing';

import { GlobleserService } from './globleser.service';

describe('GlobleserService', () => {
  let service: GlobleserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobleserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
