import { TestBed } from '@angular/core/testing';

import { enseignantGuard } from './enseignant.guard';

describe('enseignantGuard', () => {
  let guard: enseignantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(enseignantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});