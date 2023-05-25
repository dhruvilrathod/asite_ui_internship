import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface Product {
  name: string,
  price: string,
  url: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() onSale!: boolean;
  public quantity: number = 0;
  public product: Product = {
    name: 'Product 1',
    price: '20.00',
    url: 'https://ezone-electronics.online/wp-content/uploads/2021/12/iphone-13-pink-select-2021.png'
  }
  public increaseQuantity(): void {
    this.quantity++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
    console.log('init');
    console.log(this.onSale);
  }

  public decreawseQuantity(): void {
    if(this.quantity > 0) this.quantity--;
  }
}
