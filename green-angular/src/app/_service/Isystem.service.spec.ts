/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsystemService } from './Isystem.service';

describe('Service: Isystem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsystemService]
    });
  });

  it('should ...', inject([IsystemService], (service: IsystemService) => {
    expect(service).toBeTruthy();
  }));
});
