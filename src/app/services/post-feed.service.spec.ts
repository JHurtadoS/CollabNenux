/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostFeedService } from './post-feed.service';

describe('Service: PostFeed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostFeedService]
    });
  });

  it('should ...', inject([PostFeedService], (service: PostFeedService) => {
    expect(service).toBeTruthy();
  }));
});
