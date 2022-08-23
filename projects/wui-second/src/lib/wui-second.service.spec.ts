import { TestBed } from '@angular/core/testing';

import { WuiSecondService } from './wui-second.service';

describe('WuiSecondService', () => {
  let service: WuiSecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WuiSecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
