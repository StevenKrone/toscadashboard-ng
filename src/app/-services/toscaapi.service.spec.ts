import { TestBed, inject } from '@angular/core/testing';

import { ToscaapiService } from './toscaapi.service';

describe('ToscaapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToscaapiService]
    });
  });

  it('should be created', inject([ToscaapiService], (service: ToscaapiService) => {
    expect(service).toBeTruthy();
  }));
});
