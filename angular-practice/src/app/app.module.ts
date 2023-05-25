import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { PurePipePipe } from './pipes/pure-pipe.pipe';
import { ImpurePipePipe } from './pipes/impure-pipe.pipe';
import { DemoService } from './services/demo/demo.service';
import { Module1Module } from './modules/module1/module1.module';
import { Module2Module } from './modules/module2/module2.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    PurePipePipe,
    ImpurePipePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    Module1Module,
    Module2Module,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
