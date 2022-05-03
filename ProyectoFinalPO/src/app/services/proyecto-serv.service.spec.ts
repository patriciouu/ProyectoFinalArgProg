import { TestBed } from '@angular/core/testing';

import { ProyectoServService } from './proyecto-serv.service';

describe('ProyectoServService', () => {
  let service: ProyectoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
