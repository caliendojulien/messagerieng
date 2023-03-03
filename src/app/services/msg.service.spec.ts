import { TestBed } from '@angular/core/testing';

import { MsgService } from './msg.service';

describe('MsgService', () => {
  let service: MsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
