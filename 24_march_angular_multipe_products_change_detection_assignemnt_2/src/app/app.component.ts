import { Component, ViewEncapsulation } from '@angular/core';

interface Products {
  id: number
  name: string,
  price: string,
  url: string,
  quantity: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = '24-march-angular-products';
  public product: Products[] = [

    {
      id: 0,
      name: 'Product 1',
      price: '20.00',
      url: 'https://ezone-electronics.online/wp-content/uploads/2021/12/iphone-13-pink-select-2021.png',
      quantity: 0
    },
    {
      id: 1,
      name: 'Product 2',
      price: '20.00',
      url: 'https://ezone-electronics.online/wp-content/uploads/2021/12/iphone-13-pink-select-2021.png',
      quantity: 0
    },
    {
      id: 2,
      name: 'Product 3',
      price: '20.00',
      url: 'https://ezone-electronics.online/wp-content/uploads/2021/12/iphone-13-pink-select-2021.png',
      quantity: 0
    },
    {
      id: 3,
      name: 'Product 4',
      price: '20.00',
      url: 'https://ezone-electronics.online/wp-content/uploads/2021/12/iphone-13-pink-select-2021.png',
      quantity: 0
    },
    {
      id: 4,
      name: 'Product 5',
      price: '20.00',
      url: 'https://ezone-electronics.online/wp-content/uploads/2021/12/iphone-13-pink-select-2021.png',
      quantity: 0
    }
  ];

  public changedProduct: any = {
    id: -1,
    quantity: -1
  };

  public quantityChanged(e:any) {
    this.product.map((d: Products) => {
      if(d.id == e.id) {
        d.quantity = e.quantity;
        console.log(d);
        this.changedProduct.id = d.id;
        this.changedProduct.quantity = d.quantity
      }
    });
  }

}
