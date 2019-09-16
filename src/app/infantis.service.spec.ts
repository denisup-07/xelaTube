import { TestBed } from '@angular/core/testing';

import { InfantisService } from './infantis.service';

describe('InfantisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfantisService = TestBed.get(InfantisService);
    expect(service).toBeTruthy();
  });
});
