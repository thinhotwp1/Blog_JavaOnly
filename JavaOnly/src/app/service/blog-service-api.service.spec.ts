import { TestBed } from '@angular/core/testing';

import { BlogServiceApiService } from './blog-service-api.service';

describe('BlogServiceApiService', () => {
  let service: BlogServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
