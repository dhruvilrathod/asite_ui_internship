import { TestBed } from '@angular/core/testing';

import { DemoModule2Service } from './demo-module2.service';

describe('DemoModule2Service', () => {
  let service: DemoModule2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoModule2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
