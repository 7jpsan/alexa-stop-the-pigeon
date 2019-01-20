import { TestBed } from '@angular/core/testing';

import { ColorizeService } from './colorize.service';

describe('ColorizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorizeService = TestBed.get(ColorizeService);
    expect(service).toBeTruthy();
  });
});
