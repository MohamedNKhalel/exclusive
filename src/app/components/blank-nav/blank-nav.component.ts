import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blank-nav',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.scss']
})
export class BlankNavComponent implements OnInit {

  constructor(private _DataService:DataService,private _Router:Router){}
  cartNum:number = 0;
  wishNum:number = 0;
  searchWord:string = ''
  cartProducts:any[] = []
  wishlistProducts:any[] = []
  userClicked:boolean = false;
  ngOnInit(): void {
    this._DataService.cartNumber.subscribe(()=>{
      if(localStorage.getItem('cartProducts') != null){
        this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
        this.cartNum = this.cartProducts.length;
      }
    })
    this._DataService.wishListNumber.subscribe({
      next:data=>{
        this.wishNum = data;
        if(localStorage.getItem('wishlist') != null){
          this.wishlistProducts = JSON.parse(localStorage.getItem('wishlist')!);
          this.wishNum = this.wishlistProducts.length;
        }
      }
    })
  }
  addTextSearch(){
    this._DataService.searchWord.next(this.searchWord)
  }
  logOut(){
    this.userClicked = false;
    sessionStorage.removeItem('token');
    this._Router.navigate(['/main']);
  }
  stop(event:any):void
  {
    event.stopPropagation()
  }
  hi(){
    console.log("hi");
    
  }
}
