import { TestBed } from '@angular/core/testing';

import { ContentEditableService } from './content-editable.service';

describe('ContentEditableService', () => {
  let service: ContentEditableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentEditableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
