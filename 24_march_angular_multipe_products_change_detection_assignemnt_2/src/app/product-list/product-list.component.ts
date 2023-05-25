import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';

interface Products {
  id: number
  name: string,
  price: string,
  url: string,
  quantity: number
}

@Component({
  selector: 'app-product-list',
  template: `<table class="my-table">
                <tr>
                    <th>Products Name</th>
                    <th>Products Quantity</th>
                </tr>
                <tr *ngFor="let p of products">
                    <td>{{p.name}}</td>
                    <td>{{p.quantity}}</td>
                </tr>
              </table>`,
  styles: [`.my-table{
              border: 1px solid;
            }`],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, DoCheck {

  @Input() products!: Products[];
  @Input() changedProduct!: any;

  constructor(
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {

    if (this.products[this.changedProduct.id]) {
      console.log('change detected', this.changedProduct);

      // this is necessary to reflect changes
      this._changeRef.detectChanges();
    }
  }

}
