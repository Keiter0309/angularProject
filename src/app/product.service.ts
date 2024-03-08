import { Injectable } from '@angular/core';
import { Product } from './product';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 protected productlist: Product[] = [];
  Auto(){
    var max=1;
    this.products.forEach(item=>{
      if (item.id>max) {
        max=item.id;
      }
    })
    return max +1
  }
  constructor(private http:HttpClient) { }
  private URL=`http://localhost:3000/products`;
  products:Product[]=[]
  getProducId(id: number) {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }
  getAllProdutList() : Observable < Product[]>{
    return this.http.get<Product[]>(`${this.URL}`)
  }
  AddProduct(frmProduct:any,fileImg:string){
    var id = this.products.push(frmProduct)-1;
    this.products[id].imageUrl=fileImg;
  }
  getProduct(){
    return this.products
  }
  EditProduct(id:number){
    return this.products[id]
  }
  getProductByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}?productName=${name}`);
  }
}
