import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { ParentComponent } from './components/parent/parent.component';
import { Comp1mod1Component } from './modules/module1/comp1mod1/comp1mod1.component';
import { Module1Module } from './modules/module1/module1.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path:'child1',
    component: Child1Component
  },
  {
    path:'parent',
    component: ParentComponent
  },
  {
    path: 'm1',
    loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module) 
    // component: Comp1mod1Component
  },
  {
    path: 'm2',
    loadChildren: () => import('./modules/module2/module2.module').then(m => m.Module2Module) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
