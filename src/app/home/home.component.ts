import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  productservices: ProductService = inject(ProductService);

  constructor(  private cartService: CartService) {
    this.productservices.getAllProdutList().subscribe(data=>{
      this.products =data
    })
   }

}
