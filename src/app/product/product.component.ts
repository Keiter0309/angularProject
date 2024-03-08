import { Component,Input, inject } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productservices: ProductService = inject(ProductService);

@Input() product:Product[] = [];
ShowRating(event:any){
  alert(`${event}`)
}

formProduct= new FormGroup({
  productId:new FormControl<number>(1),
  productName:new FormControl<string>(''),
  description:new FormControl<string>(''),
  price:new FormControl<number>(1),
  imageUrl:new FormControl<string>(''),
  Date:new FormControl<string>(''),
  starRating:new FormControl<number>(5),
})
// constructor(){
//   //mở dử liệu và kích vào 
//   this.product=prod.getProduct();
// }
constructor(
  private prod:ProductService,
  private cartService: CartService
  ) {
  prod.getAllProdutList().subscribe(data=>{
    this.product =data
  })
 }

file:string='';
IsAdd:number=1;
IsUpdate:number=0;

onChange(envent:any){
  var str=envent.target.files[0].name;
  this.file='./assets/'+str;
}
// Add(){
//   this.formProduct.controls['productId'].setValue(this.prod.Auto());
//   this.prod.AddProduct(this.formProduct.value,this.file);
// }
id:any
Edit(index:any){
  this.id=index;
  this.formProduct.controls['productName'].setValue(this.prod.EditProduct(index).productName);
  this.formProduct.controls['Date'].setValue(this.prod.EditProduct(index).Date);
  this.formProduct.controls['description'].setValue(this.prod.EditProduct(index).description);
  this.formProduct.controls['price'].setValue(this.prod.EditProduct(index).price);
  this.file=this.prod.EditProduct(index).imageUrl;
}

getProductsByCategory(category: string) {
  if (category=="All") {
    this.prod.getAllProdutList().subscribe(data=>{
      this.product =data
    })
  }else{
    this.productservices.getProductByName(category).subscribe(data => {
      this.product = data;
    });
  }
}
InStock:number = 0;
products: Product[] = [];
productdetail : Product| undefined;

Add(id:number) {
  console.log(id);
  // Find the product with the given id
  // this.productdetail = this.products.find(product => product.id === id);
   this.prod.getProducId(id).subscribe(data=>{
    this.productdetail=data
  })
alert(this.productdetail)
  // // Check if the product is found
  // if (this.productdetail) {
  //   // Call the addCart method with the found product
  //   this.cartService.addCart(id, this.productdetail);
  //   console.log(this.cartService);
  //   this.InStock = this.cartService.getInStock(this.productdetail?.id!)!;
  //   const Toast = Swal.mixin({
  //    toast: true,
  //    position: "top-end",
  //    showConfirmButton: false,
  //    timer: 3000,
  //    timerProgressBar: true,
  //    didOpen: (toast) => {
  //      toast.onmouseenter = Swal.stopTimer;
  //      toast.onmouseleave = Swal.resumeTimer;
  //    }
  //  });
  //  Toast.fire({
  //    icon: "success",
  //    title: "Thêm Vào Giỏ Hàng Thành Công"
  //  });
  // }
 }
}
