import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartList: Cart[] = [];
 constructor(
  private cartservice : CartService,
 
 ){

  

 }
 ngOnInit(): void {
  this.cartList = this.cartservice.getCartAll();
  this.cartservice.TotalInCart();
}
TotalPrice(){
  return this.cartservice.Total();
}
}
