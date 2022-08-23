import { TestBed } from '@angular/core/testing'

import { WabiIconService } from './wui-icon.service'

describe('WabiIconService', () => {
  let service: WabiIconService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(WabiIconService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
