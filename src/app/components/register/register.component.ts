import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink,SharedModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService:AuthService){}
  errMsg:string = ''
  name:string = ''
  ngOnInit(): void {
      
  }

  registerForm:FormGroup =  new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      phone: new FormControl(null,[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
  })


  register(){
    this._AuthService.addUser(this.registerForm.get('name')?.value,this.registerForm.get('email')?.value,this.registerForm.get('password')?.value,this.registerForm.get('phone')?.value);
    this.errMsg = this._AuthService.addUser(this.registerForm.get('name')?.value,this.registerForm.get('email')?.value,this.registerForm.get('password')?.value,this.registerForm.get('phone')?.value)
    
  }
}
