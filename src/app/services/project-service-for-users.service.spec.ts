/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectServiceForUsersService } from './project-service-for-users.service';

describe('Service: ProjectServiceForUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectServiceForUsersService]
    });
  });

  it('should ...', inject([ProjectServiceForUsersService], (service: ProjectServiceForUsersService) => {
    expect(service).toBeTruthy();
  }));
});
