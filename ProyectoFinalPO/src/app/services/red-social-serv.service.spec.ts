import { TestBed } from '@angular/core/testing';

import { RedSocialServService } from './red-social-serv.service';

describe('RedSocialServService', () => {
  let service: RedSocialServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedSocialServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
