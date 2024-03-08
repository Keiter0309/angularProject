import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Cart[] = [];

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    
    ) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartAll();
    this.cartService.TotalInCart();
  }
  TotalPrice(){
    return this.cartService.Total();
  }
  increaseQuantity(item: Cart) {
    if (item.Quantity !== undefined) {
      item.Quantity++;
      this.cartService.updateTotalPrice(item);
      Swal.fire({
        title: "",
        text: "Cập Nhật Thành Công",
        icon: "success",
      });
    }
  }

  decreaseQuantity(item: Cart) {
    if (item.Quantity !== undefined && item.Quantity > 1) {
      item.Quantity--;
      this.cartService.updateTotalPrice(item);
      Swal.fire({
        title: "",
        text: "Cập Nhật Thành Công",
        icon: "success",
      });
    }
  }
  CheckLoginn(){
    return this.cartService.CheckLogin()
  }
}
