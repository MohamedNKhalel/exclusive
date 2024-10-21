import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterLink,SharedModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  providers:[ToastrService]
})
export class WishlistComponent implements OnInit {
  products:Product[] = [];
  allProducts:Product[] = [];
  showAll:boolean = false;
  cartProducts:any[] = [];
  imageUrl:string = ''
  showModalVar:boolean = false;
  constructor(private _DataService:DataService,private _ToastrService:ToastrService){}
  ngOnInit(): void {
      this.getProducts();
      this.getCartProducts();
      this.getAllProducts()
  }

  getProducts(){
    if(sessionStorage.getItem('token') != null){
      if(localStorage.getItem('wishlist') != null){
        this.products = JSON.parse(localStorage.getItem('wishlist')!)
      }
      else{
        this.products = [];
      }
    }
  }
  getCartProducts(){
    if(sessionStorage.getItem('token') != null){
      if(localStorage.getItem('cartProducts') != null){
        this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
      }
    }
    else{
      this.cartProducts = [];
    }
  }
  getAllProducts(){
    this._DataService.getAllProducts().subscribe(res=>{
      this.allProducts = res;
    })
  }
  stop(event:any){
    event.stopPropagation();
  }
  addToCart(product:Product){
    let item = {
      product:product,
      quantity:1
    }
    if(localStorage.getItem('cartProducts') != null){
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
      let exist =  this.cartProducts.find(item=>item.product.id == product.id); //return true if exist
      if(exist){
        this._ToastrService.show('this product already in the cart','Message')
      }
      else{
        this.cartProducts.push(item);
        localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
        this._DataService.cartNumber.next(this.cartProducts.length);
        this._ToastrService.success('Product added to the cart successfully','Cart')
      }
    }else{
      this.cartProducts.push(item);
      localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
      this._DataService.cartNumber.next(this.cartProducts.length);
      this._ToastrService.success('Product added to the cart successfully','Cart')
    }
  }
  moveToCart(){
    let exist:boolean = false;
    let ids:number[] = [];
    let existProducts:any[] = [];
    let movedProducts = this.products.map(product=>{
      return {
        product:product,
        quantity:1
      }
    })
    for(let i = 0 ; i < movedProducts.length ; i++){
      if(this.cartProducts.find(item=>item.product.id === movedProducts[i].product.id)){
        exist = true;
        existProducts.push(movedProducts[i]);
      }
    }
    if(exist){
      for(let i = 0 ; i < existProducts.length ; i++){
        movedProducts = movedProducts.filter(items => items.product.id !== existProducts[i].product.id);
      }
      for(let i  = 0 ; i < movedProducts.length ; i++){
        this.cartProducts.push(movedProducts[i]);
        localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
      }
      this.products = [];
      localStorage.setItem('wishlist',JSON.stringify(this.products));
      this._DataService.cartNumber.next(this.cartProducts.length);
      this._DataService.wishListNumber.next(this.products.length);
      this._ToastrService.info('check your cart');
    }
    else{
      for(let i = 0 ; i < movedProducts.length ; i++){
        this.cartProducts.push(movedProducts[i]);
      }
      localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
      this._DataService.cartNumber.next(this.cartProducts.length);
      this.products = [];
      localStorage.setItem('wishlist',JSON.stringify(this.products));
      this._DataService.wishListNumber.next(this.products.length);
      this._ToastrService.info('check your cart');
    }
    
  }
  removeItem(productID:any,event:any){
    this.stop(event);
    this.products =  this.products.filter(products=>products.id !== productID);
    localStorage.setItem('wishlist',JSON.stringify(this.products));
    this._DataService.wishListNumber.next(this.products.length)
  }
  showModal(url:string,event:any){
    this.stop(event)
    this.imageUrl = url;
    this.showModalVar = true;
  }
}
