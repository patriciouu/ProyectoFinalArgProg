import { TestBed } from '@angular/core/testing';

import { SkillServService } from './skill-serv.service';

describe('SkillServService', () => {
  let service: SkillServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
