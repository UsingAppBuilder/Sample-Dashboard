import { TestBed } from '@angular/core/testing';

import { DashboardDataFinalService } from './dashboard-data-final.service';

describe('DashboardDataFinalService', () => {
  let service: DashboardDataFinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDataFinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
