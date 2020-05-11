import { TestBed } from '@angular/core/testing';

import { DetailsProductGuard } from './details-product.guard';

describe('DetailsProductGuard', () => {
  let guard: DetailsProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailsProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
