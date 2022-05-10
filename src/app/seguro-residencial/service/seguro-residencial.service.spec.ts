import { TestBed } from '@angular/core/testing';

import { SeguroResidencialService } from './seguro-residencial.service';

describe('SeguroResidencialService', () => {
  let service: SeguroResidencialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguroResidencialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
