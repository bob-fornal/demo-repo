
import { TestBed } from '@angular/core/testing';

import { ApiAbstractionService } from './api-abstraction.service';

class TestService extends ApiAbstractionService {
  constructor() {
    super();
  }
}

describe('ApiAbstractionService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestService
      ]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects "getHostName" to return location.hostname', () => {
    const _window: any = { location: { hostname: 'HOSTNAME' } };

    const result: string = service.getHostname(_window);
    expect(result).toEqual('HOSTNAME');
  });

  it('expects "getApiAddress" to take a key and return the online key if it exists', () => {
    const key: string = 'TEST-ONLINE';
    spyOn(service, 'getHostname').and.returnValue('TEST-BASE');

    const result: string = service.getApiAddress(key);
    expect(result).toEqual('/TEST-BASE/TEST-ONLINE');
  });

  it('expects "getApiAddress" to take a key and return the offline key if it is not online', () => {
    const key: string = 'TEST-OFFLINE';
    spyOn(service, 'getHostname').and.returnValue('TEST-BASE');

    const result: string = service.getApiAddress(key);
    expect(result).toEqual('/TEST-BASE/TEST-OFFLINE');
  });
  
});
