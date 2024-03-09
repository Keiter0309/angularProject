import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent {
  password: string = '';
  confirmPassword: string = '';
  ten: string = '';
  ho: string = '';
  sdt: string = '';
  email: string = '';
  
constructor(
  private authService: AuthService
){}
  // register() {
  //   if (this.password !== this.confirmPassword) {
  //     // Hiển thị thông báo lỗi nếu mật khẩu xác nhận không khớp
  //     Swal.fire({
  //       title: 'Lỗi',
  //       text: 'Mật khẩu xác nhận không khớp',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   return
  //   }
  //   if (this.ho === '' || this.ten === '' || this.sdt === '') {
  //     Swal.fire({
  //       title: 'Lỗi',
  //       text: 'Nhập thông tin chưa đầy đủ',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //     return;
  //   }
    
  // }

  register() {
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        title: 'Lỗi',
        text: 'Mật khẩu xác nhận không khớp',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    if (this.ho === '' || this.ten === '' || this.sdt === '' || this.email === '' || this.password === '') {
      Swal.fire({
        title: 'Lỗi',
        text: 'Nhập thông tin chưa đầy đủ',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    this.authService.register(this.email, this.password, this.ho, this.ten, this.sdt).subscribe(
      (result) => {
        if (result) {
          Swal.fire({
            title: 'Thành Công',
            text: 'Đăng ký thành công',
            icon: 'success',
            confirmButtonText: 'OK'
          });
  
          // Điều gì đó có thể thêm vào nếu cần khi đăng ký thành công
        } else {
          Swal.fire({
            title: 'Lỗi',
            text: 'Đăng ký thất bại',
            icon: 'error',
            confirmButtonText: 'OK'
          });
  
          // Điều gì đó có thể thêm vào nếu cần khi đăng ký thất bại
        }
      },
      (error) => {
        console.error('Đã xảy ra lỗi:', error);
        Swal.fire({
          title: 'Lỗi',
          text: 'Đã xảy ra lỗi khi đăng ký',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  
}
