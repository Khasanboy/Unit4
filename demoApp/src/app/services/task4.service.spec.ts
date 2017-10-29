import { TestBed, inject } from '@angular/core/testing';

import { Task4Service } from './task4.service';

describe('Task4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Task4Service]
    });
  });

  it('should be created', inject([Task4Service], (service: Task4Service) => {
    expect(service).toBeTruthy();
  }));
});
