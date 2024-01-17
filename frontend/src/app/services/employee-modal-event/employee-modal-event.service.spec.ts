import { TestBed } from '@angular/core/testing';

import { EmployeeModalEventService } from './employee-modal-event.service';

describe('ModalEventService', () => {
  let service: EmployeeModalEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeModalEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
