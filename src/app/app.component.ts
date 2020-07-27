import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-manager';

    products: Products[];
    
    constructor(private productService:ProductService){}

    getProducts(){
    this.products = this.productService.getProducts();
}
  }
