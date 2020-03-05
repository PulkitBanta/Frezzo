import { TestBed } from '@angular/core/testing';

import { PrepareOrderService } from './prepare-order.service';

describe('PrepareOrderService', () => {
  let service: PrepareOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepareOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
