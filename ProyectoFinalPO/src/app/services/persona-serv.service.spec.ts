import { TestBed } from '@angular/core/testing';

import { PersonaServService } from './persona-serv.service';

describe('PersonaServService', () => {
  let service: PersonaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
