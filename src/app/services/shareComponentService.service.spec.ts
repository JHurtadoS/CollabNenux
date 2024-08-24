/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareComponentServiceService } from './shareComponentService.service';

describe('Service: ShareComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareComponentServiceService]
    });
  });

  it('should ...', inject([ShareComponentServiceService], (service: ShareComponentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
