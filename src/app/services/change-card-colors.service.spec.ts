import { TestBed } from '@angular/core/testing';

import { ChangeCardColorsService } from './change-card-colors.service';

describe('ChangeCardColorsService', () => {
  let service: ChangeCardColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeCardColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
