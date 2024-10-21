import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  wishlistProducts:any[] =[];
  wishlistIds:string[] =[];
  products:Product[] = [];
  showOurProducts:boolean = false;
  cartProducts:any[] =[];
  imageUrl:string = '';
  showModalVar:boolean = false;
  category:any ;
  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _ToastrService:ToastrService){}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:prarms=>{
          this.category = prarms.get('cat')
          this.getCatProducts(this.category);
        }
      })
      this.getWishListProducts();
  }

  getCatProducts(category:any){
    this._DataService.getProductsByCategory(category).subscribe({
      next:data=>{
        this.products = data;
        console.log(this.products);
        
      }
    })
  }
  getWishListProducts(){
    if(sessionStorage.getItem('token') != null){
      if(localStorage.getItem('wishlist') !=  null){
        this.wishlistProducts = JSON.parse(localStorage.getItem('wishlist')!);
        this.wishlistIds = this.wishlistProducts.map(product=>product.id);
      }
    }
    else{
      this.wishlistProducts = [];
    }
  }
  stop(event:any){
    event.stopPropagation();
  }
  addToCart(product:Product){
    if(sessionStorage.getItem('token') != null){
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
        localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts))
        this._DataService.cartNumber.next(this.cartProducts.length)
        this._ToastrService.success('Product added to the cart successfully','Cart')
      }
    }
    else{
      this._Router.navigate(['/login'])
      this._ToastrService.info("to add this item to cart you must login",'Login');
    }
  }

  
  addToWishlist(product:Product,event:any){
    this.stop(event)
    if(sessionStorage.getItem('token') !=  null){
      if(localStorage.getItem('wishlist') != null){
        this.wishlistProducts = JSON.parse(localStorage.getItem('wishlist')!);
        this.wishlistProducts.push(product);
        localStorage.setItem('wishlist',JSON.stringify(this.wishlistProducts));
        this.wishlistIds = this.wishlistProducts.map(product=>product.id);
        this._DataService.wishListNumber.next(this.wishlistProducts.length);
        this._ToastrService.success('Product added to your wishlist','Wishlist')
      }
      else{
        this.wishlistProducts.push(product);
        localStorage.setItem('wishlist',JSON.stringify(this.wishlistProducts));
        this.wishlistIds = this.wishlistProducts.map(product=>product.id);
        this._DataService.wishListNumber.next(this.wishlistProducts.length);
        this._ToastrService.success('Product added to your wishlist','Wishlist')
      }
    }
    else{
      this._Router.navigate(['/login'])
      this._ToastrService.info("to add this item to wishlist you must login",'Login');
    }
  }
  removeFromWishlist(productId:any,event:any){ 
    this.stop(event);    
    if(sessionStorage.getItem('token') != null){
      this.wishlistProducts = this.wishlistProducts.filter(products=>products.id !== productId);
      localStorage.setItem('wishlist',JSON.stringify(this.wishlistProducts));
      this.wishlistIds = this.wishlistProducts.map(product=>product.id);
      this._DataService.wishListNumber.next(this.wishlistProducts.length);
      this._ToastrService.success('Product removed from your wishlist','Wishlist');
    }
    else{
      this._Router.navigate(['/login'])
      this._ToastrService.info("to add this item to wishlist you must login",'Login');
    }
    
  }
  showModal(url:string,event:any){
    this.stop(event)
    this.imageUrl = url;
    this.showModalVar = true;
  }
}
