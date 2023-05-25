import { Product } from '../Product';

export class ProductService {

  public products: Product[] = [
    {
      id: 1,
      name: "iphone 1",
      price: 123,
      type: "Mobile",
      owner: "a",
      contact: 12314,
      email: "a@a"
    },
    {
      id: 2,
      name: "iphone 2",
      price: 123,
      type: "Mobile",
      owner: "a",
      contact: 12314,
      email: "a@a"
    },
    {
      id: 3,
      name: "iphone 3",
      price: 123,
      type: "Mobile",
      owner: "a",
      contact: 12314,
      email: "a@a"
    },
    {
      id: 4,
      name: "iphone 4",
      price: 123,
      type: "Mobile",
      owner: "a",
      contact: 12314,
      email: "a@a"
    }
  ]

  constructor() { }

  public get allPrpoducts(): Product[] {
    return this.products;
  }

  public set addProduct(p: Product) {
    this.allPrpoducts.push(p);
  }

  public getProduct(id: number): Product | boolean {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) return this.products[i]
    }
    return false;
  }

  public set updateProduct(p: Product) {
    this.allPrpoducts.map((pr: Product) => {
      if (pr.id === p.id) pr = p;
    });
    console.log(this.products);
  }

  public deleteProduct(productID: number): void {
    this.products.map((p, i) => {
      if (productID == p.id) {
        this.products.splice(i, 1);
      }
    })
  }

  public checkForDetailChanges(newProduct: any, originalProduct: any): boolean {
    for (var key in newProduct) {
      if (newProduct[key] !== originalProduct[key]) return true;
    }
    return false;
  }

  public checkForAllChanges(newData: any[], originalData: any[]): boolean {
    if (newData.length !== originalData.length) return true;

    for (var i = 0; i < newData.length; i++) {
      for (var j = 0; j < originalData.length; j++) {
        if (originalData[j].id == newData[i].id) {
          for (var key in newData[i]) {
            if (newData[j][key] !== originalData[j][key]) return true;
          }
        }
      }
    }
    return false;
  }

  public setOriginalProduct(product: any): any {
    var temp: any = {};
    for (var key in product) {
      temp[key] = product[key];
    }
    return temp;
  }

  public setOriginalContent(products: Product[]): any {
    var temp1 = [];
    for (var p = 0; p < products.length; p++) {
      var temp: any = {}
      for (let key in products[p]) {
        temp[key] = (products[p] as any)[key]
      }
      temp1.push(temp);
    }
    return temp1;
  }

}
