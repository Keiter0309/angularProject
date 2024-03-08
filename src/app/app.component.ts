import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { AuthService } from './auth/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(

  
    private cartService:CartService,
    private authService: AuthService
  
  ){}
  ItemCount(){
    return this.cartService.totalItems()
  }
 isAuthenticated() {
  return this.authService.isAuthenticated
}
logout(){
  this.authService.logout()
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Đăng Xuất Thành Công",
    showConfirmButton: false,
    timer: 1500
  });
}
}
