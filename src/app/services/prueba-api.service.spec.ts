/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PruebaApiService } from './prueba-api.service';

describe('Service: PruebaApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PruebaApiService]
    });
  });

  it('should ...', inject([PruebaApiService], (service: PruebaApiService) => {
    expect(service).toBeTruthy();
  }));
});
