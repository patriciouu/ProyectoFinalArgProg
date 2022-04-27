import { TestBed } from '@angular/core/testing';

import { ExperienciaserviceService } from './experienciaservice.service';

describe('ExperienciaserviceService', () => {
  let service: ExperienciaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
