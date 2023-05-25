import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() productID!: number;

  public product: any;
  public status = false;
  public originalProduct: any;
  constructor(
    public productService: ProductService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.product = this.productService.getProduct(this.productID);
    this.originalProduct = this.productService.setOriginalProduct(this.product);
  }

  ngDoCheck() {
    this.status = this.productService.checkForDetailChanges(this.product, this.originalProduct);
    if (this.status)
      this._changeDetectorRef.detectChanges();
  }

}
