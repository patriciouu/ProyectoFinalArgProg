import { TestBed } from '@angular/core/testing';

import { APIPortfolioService } from './apiportfolio.service';

describe('APIPortfolioService', () => {
  let service: APIPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
