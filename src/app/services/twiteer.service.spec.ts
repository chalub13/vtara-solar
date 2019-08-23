import { TestBed } from '@angular/core/testing';

import { TwiteerService } from './twiteer.service';

describe('TwiteerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwiteerService = TestBed.get(TwiteerService);
    expect(service).toBeTruthy();
  });
});
