import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { profileBlockGuard } from './profile-block.guard';

describe('profileBlockGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => profileBlockGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
