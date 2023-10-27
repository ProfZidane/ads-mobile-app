import { TestBed } from '@angular/core/testing';

import { AuthorityGuard } from './authority.guard';

describe('AuthorityGuard', () => {
  let guard: AuthorityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorityGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
