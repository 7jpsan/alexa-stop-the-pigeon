import { TestBed } from '@angular/core/testing';

import { OwlControlService } from './owl-control.service';

describe('OwlControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwlControlService = TestBed.get(OwlControlService);
    expect(service).toBeTruthy();
  });
});
