import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1mod1Component } from './comp1mod1.component';

describe('Comp1mod1Component', () => {
  let component: Comp1mod1Component;
  let fixture: ComponentFixture<Comp1mod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1mod1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1mod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
