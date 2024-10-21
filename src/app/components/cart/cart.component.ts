import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BillingComponent } from "../billing/billing.component";
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, BillingComponent,RouterOutlet,SharedModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers:[ToastrService]
})
export class CartComponent implements OnInit {
  cartProducts:any[] = [];
  totalPrice:number = 0;
  updateClicked:boolean = false;
  cartBackend:any [] = [];
  isBillingShown:boolean = false;
  constructor(private _DataService:DataService,private _Router:Router,private _ToastrService:ToastrService){}
  ngOnInit(): void {
    this._Router.events.subscribe(()=>{
      this.isBillingShown = this._Router.url.includes('billing');
    })
    this.getProducts();
    this._DataService.getCart().subscribe(res=>{
      console.log(res);
    })
  }

  getProducts(){
    if(localStorage.getItem('cartProducts') != null){
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
      this.cartBackend = this.cartProducts.map(product=>{
        return {
          productId :product.product.id,
          quantity  : product.quantity
        }
      })
      console.log(this.cartBackend);
      console.log(this.cartProducts);
      
      this.calcCartTotal()
    }
  }
  calcCartTotal(){
    for(let i = 0 ; i < this.cartProducts.length ; i++){
      this.totalPrice += this.cartProducts[i].product.price * this.cartProducts[i].quantity ;
      localStorage.setItem('totalPrice',JSON.stringify(this.totalPrice));
      this.updateLocalStorage()
    }
  }
  changeQuantity(event:any){
    this.totalPrice = 0;
    this.calcCartTotal();
    this.updateLocalStorage();

  } 
  updateLocalStorage(){
    localStorage.setItem('cartProducts',JSON.stringify(this.cartProducts))
  }
  deleteCartProduct(index:any){
    this.totalPrice = 0;
    this.cartProducts.splice(index,1);
    this.calcCartTotal();
    this.updateLocalStorage()
    this._DataService.cartNumber.next(this.cartProducts.length);
    this._ToastrService.success('Item deleted successfully')
  }
  addNewCart(){
    let model = {
      userId:5,
      date:new Date(),
      products:this.cartBackend
    }
    this._DataService.addCart(model).subscribe({
      next:data=>{
        console.log(data);
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
