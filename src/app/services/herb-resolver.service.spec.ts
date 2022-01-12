import { TestBed } from '@angular/core/testing';

import { HerbResolverService } from './herb-resolver.service';

describe('HerbResolverService', () => {
  let service: HerbResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerbResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
