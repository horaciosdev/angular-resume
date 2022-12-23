import { TestBed } from '@angular/core/testing';

import { FileExistsService } from './file-exists.service';

describe('FileExistsService', () => {
  let service: FileExistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileExistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
