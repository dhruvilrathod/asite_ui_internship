import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1mod2Component } from './comp1mod2.component';

describe('Comp1mod2Component', () => {
  let component: Comp1mod2Component;
  let fixture: ComponentFixture<Comp1mod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1mod2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1mod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
