import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

interface Products {
  id: number
  name: string,
  price: string,
  url: string,
  quantity: number
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Products;

  // for change detection
  @Output() quantityChange: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  public icreaseQuantity(): void {
    this.product.quantity++;

    // for change detection
    this.quantityChange.emit({
      id: this.product.id,
      quantity: this.product.quantity
    });
  }

  public decreaseQuantity(): void {
    if(this.product.quantity > 0) this.product.quantity--;
    
    // for change detection
    this.quantityChange.emit({
      id: this.product.id,
      quantity: this.product.quantity
    });
  }
}
