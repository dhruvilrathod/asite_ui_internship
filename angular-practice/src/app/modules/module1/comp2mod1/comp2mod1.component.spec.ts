import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2mod1Component } from './comp2mod1.component';

describe('Comp2mod1Component', () => {
  let component: Comp2mod1Component;
  let fixture: ComponentFixture<Comp2mod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp2mod1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp2mod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
