import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductService } from './services/product.service';
import { PurepipePricePipe } from './pipes/purepipe-price.pipe';
import { ImpurepipeJsonStringPipe } from './pipes/impurepipe-json-string.pipe';
import { ProductCreationDirective } from './directives/product-creation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CreateProductComponent,
    PurepipePricePipe,
    ImpurepipeJsonStringPipe,
    ProductCreationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
