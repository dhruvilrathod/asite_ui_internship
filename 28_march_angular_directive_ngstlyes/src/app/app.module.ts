import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateFruitComponent } from './components/create-fruit/create-fruit.component';
import { PureFruitPipe } from './pipes/pure-fruit.pipe';
import { EmployeeRankingDirective } from './directives/employee-ranking.directive';
import { CompanyComponent } from './components/company/company.component';
import { FruitsDirective } from './directives/fruits.directive';
import { SanitizeDomPipe } from './pipes/sanitize-dom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateFruitComponent,
    PureFruitPipe,
    EmployeeRankingDirective,
    CompanyComponent,
    FruitsDirective,
    SanitizeDomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
