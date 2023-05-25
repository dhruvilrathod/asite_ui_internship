import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1mod1Component } from './comp1mod1/comp1mod1.component';
import { Comp2mod1Component } from './comp2mod1/comp2mod1.component';
  
const routes: Routes = [
  {path : 'c1', component : Comp1mod1Component},
  {path : 'c2', component : Comp2mod1Component},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1Routing { }