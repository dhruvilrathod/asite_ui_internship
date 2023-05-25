import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor( private productService: ProductService) {}
  public getFormData(form: any) {
    var newProduct:any = {};
    newProduct.id= new Date().getTime();
    newProduct.name= form.name.value;
    newProduct.price= form.price.value;
    newProduct.type= form.type.value;
    newProduct.owner= form.owner.value;
    newProduct.email= form.email.value;
    newProduct.contact= form.contact.value;
    console.log(newProduct);
    this.productService.addProduct = newProduct;
  }
  
}
