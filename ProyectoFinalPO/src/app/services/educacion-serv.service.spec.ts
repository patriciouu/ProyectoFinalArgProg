import { TestBed } from '@angular/core/testing';

import { EducacionServService } from './educacion-serv.service';

describe('EducacionServService', () => {
  let service: EducacionServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
