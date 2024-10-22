import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,RouterLink,SharedModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers:[ToastrService]
})
export class DetailsComponent implements OnInit{
    selectedColor:string = '';
    selectedSize:string = '';
    showAll:boolean = false;
    products:Product[] = [];
    productDetails:any;
    productCategory:string = '';
    productId:any;
    cartProducts:any[]= [];
    wishlistProducts:any[]= [];
    wishlistIds:string[]= [];
    quantity:number = 1;
    imageUrl:string = ''
    showModalVar:boolean = false;
  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _ToastrService:ToastrService){}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:params=>{
          this.productId = params.get('id') 
          this._DataService.getProductDetails(this.productId).subscribe({
            next:data=>{
              this.productDetails = data;
              this.productCategory = data.category;
              this.getProducts(this.productCategory);
            },
            error:err=>{
              console.log(err);
              
            }
          })
        }
      });
      if(localStorage.getItem('wishlist') !=  null){
        this.wishlistProducts = JSON.parse(localStorage.getItem('wishlist')!);
        this.wishlistIds = this.wishlistProducts.map(product=>product.id);
      }
  }
  getProducts(category:string){
    this._DataService.getProductsByCategory(category).subscribe({
      next:data=>{
        this.products = data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  selectColor(color:string){
    this.selectedColor = color;
  }
  selectSize(size:string){
    this.selectedSize = size;
  }
  addToCart(product:Product,quantity:number){
    let item = {
      product:product,
      quantity:quantity
    }
    if(localStorage.getItem('cartProducts') != null){
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
      let exist =  this.cartProducts.find(item=>item.product.id == product.id); //return true if exist
      if(quantity > 1){
        this.cartProducts = this.cartProducts.filter(products=>products.product.id !== product.id);
        localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
        this._DataService.cartNumber.next(this.cartProducts.length);
        this.cartProducts.push(item);
        this._Router.navigate(['/cart']);
        localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
        this._DataService.cartNumber.next(this.cartProducts.length);
      }
      else if(exist){
        this._ToastrService.show('this product already in the cart','Message')
      }
      else{
        this.cartProducts.push(item);
        localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
        this._DataService.cartNumber.next(this.cartProducts.length)
        this._ToastrService.success('Product added to the cart successfully','Cart')
      }
    }else{
      this.cartProducts.push(item);
      localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts));
      this._DataService.cartNumber.next(this.cartProducts.length)
      this._ToastrService.success('Product added to the cart successfully','Cart')
    }
  }
  addToWishlist(product:Product,event:any){
    this.stop(event)
    if(localStorage.getItem('wishlist') != null){
      this.wishlistProducts = JSON.parse(localStorage.getItem('wishlist')!);
      let exist =  this.wishlistProducts.find(item=>{return item.id == product.id});
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
  removeFromWishlist(productId:any,event:any){ 
    this.stop(event);    
    this.wishlistProducts = this.wishlistProducts.filter(products=>products.id !== productId);
    localStorage.setItem('wishlist',JSON.stringify(this.wishlistProducts));
    this.wishlistIds = this.wishlistProducts.map(product=>product.id);
    this._DataService.wishListNumber.next(this.wishlistProducts.length);
    this._ToastrService.success('Product removed from your wishlist','Wishlist')
  }

  increaseQuantity(){
    this.quantity++;
  }
  decreaseQuantity(){
    if(this.quantity >0){
      this.quantity--;
    }
    else{
      this.quantity = 0;
    }

  }
  stop(event:any){
    event.stopPropagation();
  }
  showModal(url:string,event:any){
    this.stop(event)
    this.imageUrl = url;
    this.showModalVar = true;
  }
}
