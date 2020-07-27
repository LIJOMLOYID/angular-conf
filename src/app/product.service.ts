import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(){

    let products:Products[];

    products = [
      new Products(1,'Memory Card',500),
      new Products(1,'Pen Drive',750),
      new Products(1,'Power Bank',100)
    ]

    return products;
  }
}
