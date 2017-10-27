import { TestBed, inject } from '@angular/core/testing';

import { Task3Service } from './task3.service';

describe('Task3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Task3Service]
    });
  });

  it('should be created', inject([Task3Service], (service: Task3Service) => {
    expect(service).toBeTruthy();
  }));
});
