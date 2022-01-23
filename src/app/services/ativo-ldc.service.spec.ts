import { TestBed } from '@angular/core/testing';

import { AtivoLDCService } from './ativo-ldc.service';

describe('AtivoLDCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtivoLDCService = TestBed.get(AtivoLDCService);
    expect(service).toBeTruthy();
  });
});
