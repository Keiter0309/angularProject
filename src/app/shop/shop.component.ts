import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  data: Product[] = [];
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.getValueProduct()
 }

  getValueProduct() {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe((res) => {
      this.data = res;
    })};
}
