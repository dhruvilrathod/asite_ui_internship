import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1mod2Component } from './comp1mod2/comp1mod2.component';
import { Comp2mod2Component } from './comp2mod2/comp2mod2.component';
  
const routes: Routes = [
  {path : 'c11', component : Comp1mod2Component},
  {path : 'c12', component : Comp2mod2Component},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2Routing { }