import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1mod1Component } from './comp1mod1/comp1mod1.component';
import { Comp2mod1Component } from './comp2mod1/comp2mod1.component';
import { DemoService } from 'src/app/services/demo/demo.service';
import { Module2Module } from '../module2/module2.module';
import { Module1Routing } from './module1-routing.module';

@NgModule({
  declarations: [Comp1mod1Component, Comp2mod1Component],
  imports: [
    CommonModule,
    // Module2Module,
    Module1Routing,
  ],
  providers: [DemoService],
  exports: [Comp1mod1Component, Comp2mod1Component],
})
export class Module1Module {}
