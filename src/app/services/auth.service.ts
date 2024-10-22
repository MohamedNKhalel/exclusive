import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router,private _ToastrService:ToastrService) { }
  users:User[] = []
  userId:number = 0;
  emailExist:boolean = false;
  authenticated:boolean = false;
  userToken:any;
  login(email:string,password:string):any{
    if(localStorage.getItem('users') != null){
      this.users = JSON.parse(localStorage.getItem('users')!);
      for(let i = 0 ; i < this.users.length ; i++){
        if(this.users[i].email.toLowerCase() === email.toLowerCase() && this.users[i].password.toLowerCase() === password.toLowerCase()){
          this.authenticated =  true;
          let userData:any =  [];
          userData.push(this.users[i]);
          this.userToken = userData.map((info:any)=>{return {id:info.id,logged:'success'}})
        }
      }
      if(this.authenticated === true){
        sessionStorage.setItem('token',JSON.stringify(this.userToken));
        this.authenticated = false;
        this._Router.navigate(['/home']);
      }
      else{
        return 'Incorrect Email or password'
      }
    }
    else{
      return 'This account does not exist'
    }
  }


  addUser(name:string,email:string,password:string,phone:string):any{
    if(localStorage.getItem('users') != null){
      this.users = JSON.parse(localStorage.getItem('users')!);
      this.userId = this.users.length;
      for(let i = 0 ; i < this.users.length ; i++){
        if(this.users[i].email.toLowerCase() == email.toLowerCase()){
          this.emailExist = true
        }
      }
      if(this.emailExist){
        this.emailExist = false;
        return 'This email already exists'
      }
      else{
        this.userId++;
        let user={
          id:this.userId,
          name:name,
          email:email,
          password:password,
          phone:phone,
          address:'Not Assigned'
        }
        this.users.push(user);
        localStorage.setItem('users',JSON.stringify(this.users));
        this._Router.navigate(['/login']);
        this._ToastrService.info('Email created successfully');
      }
    }else{
      for(let i = 0 ; i < this.users.length ; i++){
        if(this.users[i].email.toLowerCase() == email.toLowerCase()){
          this.emailExist = true
        }
      }
      if(this.emailExist){
        this.emailExist = false;
        return 'This email already exists'
      }
      else{
        this.userId++;
        let user={
          id:this.userId,
          name:name,
          email:email,
          password:password,
          phone:phone,
          address:'10th of ramadan city'
        }
        this.users.push(user);
        localStorage.setItem('users',JSON.stringify(this.users));
        this._Router.navigate(['/login'])
        this._ToastrService.info('Email created successfully');
      }
    }
  }
}
