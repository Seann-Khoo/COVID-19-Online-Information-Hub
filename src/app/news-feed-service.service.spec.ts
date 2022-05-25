import { TestBed } from '@angular/core/testing';

import { NewsFeedServiceService } from './news-feed-service.service';

describe('NewsFeedServiceService', () => {
  let service: NewsFeedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFeedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
