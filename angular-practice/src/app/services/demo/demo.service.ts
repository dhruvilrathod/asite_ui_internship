import { Injectable, Injector } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Module1Module } from 'src/app/modules/module1/module1.module';
import { Module2Module } from 'src/app/modules/module2/module2.module';

// @Injectable({
//   providedIn: 'root',
// })

// @Injectable({
//   providedIn: Module2Module,
// })

// @Injectable({
//   providedIn: Module2Module,
// })

// @Injectable()

// @Injectable({
//   providedIn: 'any'
// })
export class DemoService {
  private myValue: number;

  constructor() {
    this.myValue = new Date().getTime();
  }

  public get getMyValue(): number {
    return this.myValue;
  }
}
