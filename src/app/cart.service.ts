import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected cartList:Cart[] =[]
  constructor(private prod:ProductService) { }
  
  getCartAll(){
    return this.cartList
  }
  getInStock(id:number){
    return this.cartList.find(i=>i.Id === id)?.InStock
  }
  addCart(index:number, frmProdut:any){
    let iteminCart=this.cartList.filter(i=>i.Id==index)
    let isItemInCart=iteminCart.length > 0
    if (isItemInCart==false) {
      let id=this.cartList.push({
        "Id":frmProdut.id,
        "Name":frmProdut.productName,
        "Price":frmProdut.price,
        "Des":frmProdut.description,
        "InStock":frmProdut.InStock,
        "Quantity":0,
        "ImageUrl":frmProdut.imageUrl,
        "TotalPrice": frmProdut.price 
      })-1
      this.cartList[id].Quantity=this.cartList[id].Quantity!+1
      this.cartList[id].InStock=this.cartList[id].InStock!-1
      console.log(this.cartList[id].Quantity);
      console.log(this.cartList[id].InStock);
    }else{
      for (let i = 0; i < this.cartList.length; i++) {
       if (this.cartList[i].Id==index) {
        this.cartList[i].Quantity=this.cartList[i].Quantity!+1
        this.cartList[i].InStock=this.cartList[i].InStock!-1
      console.log(this.cartList[i].Quantity);
      console.log( this.cartList[i].InStock);

       }
        
      }
    }
  }
  
  totalItems(){
    let sum=0;
    this.cartList.forEach(item=>{
      sum+=item.Quantity!;
    })
    return sum
  }
  Total(){
    let total =0 ;
    this.cartList.forEach(item=>{
      total+=(item.Price!*item?.Quantity!);
    })
    console.log(this.cartList);
    return total;
  }
  RemoveItemInCart(index:number){
    this.cartList[index].InStock!+=1
    this.cartList[index].Quantity!+=1
    if (this.cartList[index].Quantity==0) {
      this.cartList[index]
    }
  }
 TotalInCart(){
  this.cartList.forEach(item => {
    item.TotalPrice = item.Price! * item.Quantity!;
  });
 }
  updateTotalPrice(item: Cart) {
    if (item.Quantity !== undefined && item.Price !== undefined) {
      item.TotalPrice = item.Price * item.Quantity;
    }
  }
}
