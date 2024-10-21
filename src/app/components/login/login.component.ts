import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink,SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  errMsg:string = ''
  constructor(private _AuthService:AuthService){}
  ngOnInit(): void {
      
  }
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })
  login(){
    this._AuthService.login(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value);
    this.errMsg = this._AuthService.login(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value);
  }
}
