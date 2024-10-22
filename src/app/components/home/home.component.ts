import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/interfaces/product';
import { SliderComponent } from '../slider/slider.component';
import { Router, RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SliderComponent,RouterLink,SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
providers:[ToastrService]
})
export class HomeComponent implements OnInit{
  @ViewChild('sideMenu') sideMenu!:ElementRef;
  constructor(private _DataService:DataService,private _ToastrService:ToastrService,private _Router:Router,private _Renderer2:Renderer2){}
  ngOnInit(): void {
    this.getAllProducts();
    this.startCountTime();
    this.getAllCategories();
    this.getWishListProducts();
    this._DataService.searchWord.subscribe((searchword)=>{
      this.searchWord = searchword;
    })
  }
  searchWord:string = ''
  cartProducts:any[] =[];
  wishlistProducts:any[] =[];
  wishlistIds:string[] =[];
  products:Product[] = [];
  categories:string[] = [];
  showTodayProducts:boolean = false;
  showOurProducts:boolean = false;
  isShowClicked:boolean = false;
  countTime:string = '';
  intervalId:any ;
  day:number = 0;
  hours:number = 0;
  minutes:number = 0;
  seconds:number = 0;
  imageUrl:string = '';
  showModalVar:boolean = false;
  showSiedMenu:boolean = false;
  getAllProducts(){
    this._DataService.getAllProducts().subscribe({
      next:data=>{
        this.products = data
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getAllCategories(){
    this._DataService.getAllCategories().subscribe({
      next:data=>{
        this.categories = data;
      },
      error:err=>{
        console.log(err);
        
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
  moveLeft(element:any){
    element.scrollBy({
      left:-250,
      behavior:'smooth'
    })
  }
  moveRight(element:any){
    element.scrollBy({
      left:250,
      behavior:'smooth'
    })
  }


  startCountTime(){
    const now = new Date();
    const offerEndTime = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    this.intervalId =  setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference =  offerEndTime.getTime() - currentTime;
      if(timeDifference > 0 ){
      this.updateTime(timeDifference);
      }else{
        this.countTime = 'Offer Expired'
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  updateTime(timeDifference: number) {
    this.day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
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
