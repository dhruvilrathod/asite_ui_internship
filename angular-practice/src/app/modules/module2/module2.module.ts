import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1mod2Component } from './comp1mod2/comp1mod2.component';
import { Comp2mod2Component } from './comp2mod2/comp2mod2.component';
import { DemoService } from 'src/app/services/demo/demo.service';
import { Module2Routing } from './module2-routing.module';

@NgModule({
  declarations: [Comp1mod2Component, Comp2mod2Component],
  imports: [CommonModule, Module2Routing],
  providers: [DemoService],
  exports: [Comp1mod2Component, Comp2mod2Component],
})
export class Module2Module {}
