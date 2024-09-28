/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestOwnServicesService } from './test-own-services.service';

describe('Service: TestOwnServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestOwnServicesService]
    });
  });

  it('should ...', inject([TestOwnServicesService], (service: TestOwnServicesService) => {
    expect(service).toBeTruthy();
  }));
});
