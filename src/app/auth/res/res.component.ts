import { Component } from '@angular/core';
import Swal from 'sweetalert2';
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
  sodienthoai: string = '';
  register() {
    if (this.password !== this.confirmPassword) {
      // Hiển thị thông báo lỗi nếu mật khẩu xác nhận không khớp
      Swal.fire({
        title: 'Lỗi',
        text: 'Mật khẩu xác nhận không khớp',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    return
    }
    if (this.ho === '' || this.ten === '' || this.sodienthoai === '') {
      Swal.fire({
        title: 'Lỗi',
        text: 'Nhập thông tin chưa đầy đủ',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
  }
}
