import { TestBed } from '@angular/core/testing';

import { VideoIdToDisplayService } from './video-id-to-display.service';

describe('VideoIdToDisplayService', () => {
  let service: VideoIdToDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoIdToDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
