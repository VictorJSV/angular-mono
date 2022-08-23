import { TestBed } from '@angular/core/testing';

import { WuiFirstService } from './wui-first.service';

describe('WuiFirstService', () => {
  let service: WuiFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WuiFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
