import { TestBed } from '@angular/core/testing';

import { PortfolioServService } from './portfolio-serv.service';

describe('PortfolioServService', () => {
  let service: PortfolioServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
