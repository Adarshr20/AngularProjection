import { TestBed } from '@angular/core/testing';

import { StepwizardServiceService } from './stepwizard-service.service';

describe('StepwizardServiceService', () => {
  let service: StepwizardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepwizardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
