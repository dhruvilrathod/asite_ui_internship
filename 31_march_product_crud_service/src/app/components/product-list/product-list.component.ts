import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public originalProducts: any = [];
  constructor(
    public productService: ProductService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.products = productService.allPrpoducts;
  }

  ngOnInit(): void {
    this.originalProducts = this.productService.setOriginalContent(this.products);
  }

  

  public change(p: any, e: any, property: string): void {
    p[property] = e.target.value;
    this.productService.updateProduct = p;
  }

  ngDoCheck() {
    var status = this.productService.checkForAllChanges(this.products, this.originalProducts);
    if(status) {
      this.originalProducts = this.productService.setOriginalContent(this.products);
      this._changeDetectorRef.detectChanges();
    }
  }

  public deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

}
