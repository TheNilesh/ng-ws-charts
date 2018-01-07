import { TestBed, inject } from '@angular/core/testing';

import { ChartDrawService } from './chart-draw.service';

describe('ChartDrawService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartDrawService]
    });
  });

  it('should be created', inject([ChartDrawService], (service: ChartDrawService) => {
    expect(service).toBeTruthy();
  }));
});
