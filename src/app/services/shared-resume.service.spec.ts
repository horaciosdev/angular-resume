import { TestBed } from '@angular/core/testing';

import { SharedResumeService } from './shared-resume.service';

describe('ResumeService', () => {
  let service: SharedResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
