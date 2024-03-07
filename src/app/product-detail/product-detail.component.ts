import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit  {
  // productDetail:Product|undefined;

  // constructor(private route:ActivatedRoute,private pro:ProductService){}
  // ngOnInit(): void {
  //     let id=this.route.snapshot.params['id'];
  //     this.productDetail=this.pro.getProducId(id);
  // }
   //biến để lưu thông tin sản phẩm
productdetail : Product| undefined;
//danh sách sản phẩm trong giỏ hàng
CartList : Cart[] =[];
//số lượng sản phẩm
InStock:number = 0;

constructor(
  private router: ActivatedRoute,
  private productService: ProductService,
  private cartService: CartService
) {}//phương thức được khỏi tạo khi component được khỏibtaoj
 
ngOnInit():void{
  //lấy thông tin sản phẩm từ url
  let id =Number(this.router.snapshot.params['id']);
  //lấy thông tin chi tiết sản phẩm dựa vào id
  this.productService.getProducId(id).subscribe(data=>{
    this.productdetail=data
  });
  //lấy số lượng sản phẩm có sẳn
  this.InStock=this.productdetail?.InStock!
 
}
//phương thức được thêm vào giỏ hàng
Add() {
  this.cartService.addCart(this.productdetail?.id!, this.productdetail);
  console.log(this.cartService);
  this.InStock = this.cartService.getInStock(this.productdetail?.id!)!;
  Swal.fire({
    title: "",
    text: "Thêm Vào Giỏ Hàng Thành Công",
    icon: "success",
  });
}


}
