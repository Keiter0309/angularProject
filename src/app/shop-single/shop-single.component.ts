import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {
  product: Product = {} as Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((res: Product) => {
      this.product = res;
    });
  }

  addProductToCart(id: number) {
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.cartService.addProduct(product);
      Swal.fire({
        icon: 'success',
        title: 'Product added to cart',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
}