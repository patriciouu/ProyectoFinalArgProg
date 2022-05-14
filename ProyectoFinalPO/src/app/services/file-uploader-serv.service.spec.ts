import { TestBed } from '@angular/core/testing';

import { FileUploaderServService } from './file-uploader-serv.service';

describe('FileUploaderServService', () => {
  let service: FileUploaderServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploaderServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
