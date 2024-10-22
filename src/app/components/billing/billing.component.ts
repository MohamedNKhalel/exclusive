import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  orderItems:any[] = [];
  totalPrice:number = 0;
  coupon:string = '';
  constructor(private _Router:Router,private _DataService:DataService){}
  ngOnInit(): void {
    this.orderItems = JSON.parse(localStorage.getItem('cartProducts')!)
    this.getTotalPrice()
  }
  getTotalPrice(){
      for(let i = 0; i < this.orderItems.length; i++){
        this.totalPrice += this.orderItems[i].product.price * this.orderItems[i].quantity;
      }
  }
  completeOrder(){
    this.orderItems =[]
    localStorage.setItem('cartProducts',JSON.stringify(this.orderItems));
    this._DataService.cartNumber.next(this.orderItems.length);
    this._Router.navigate(['/home']);
  }
}
