import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api:string = 'https://fakestoreapi.com/';
  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  wishListNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  searchWord:BehaviorSubject<string> = new BehaviorSubject('');


  constructor(private _HttpClient:HttpClient) { }
  
  getAllProducts():Observable<any>
  {
    return this._HttpClient.get(`${this.api}products`);
  }
  getAllCategories():Observable<any>
  {
    return this._HttpClient.get(`${this.api}products/categories`)
  }
  getProductDetails(id:any):Observable<any>
  {
    return this._HttpClient.get(`${this.api}products/${id}`)
  }
  getProductsByCategory(category:string):Observable<any>
  { 
    return this._HttpClient.get(`${this.api}products/category/${category}`)
  }
  addCart(model:any):Observable<any>
  {
    return this._HttpClient.post(`${this.api}carts`,model);
  }
  getCart():Observable<any>
  {
    return this._HttpClient.get(`${this.api}carts/5`)
  }
}
