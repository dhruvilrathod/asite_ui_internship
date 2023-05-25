import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2mod2Component } from './comp2mod2.component';

describe('Comp2mod2Component', () => {
  let component: Comp2mod2Component;
  let fixture: ComponentFixture<Comp2mod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp2mod2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp2mod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
