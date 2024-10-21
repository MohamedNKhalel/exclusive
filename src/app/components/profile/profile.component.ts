import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,SharedModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[ToastrService]
})
export class ProfileComponent implements OnInit {
  userInfo:User = {} as User;
  editClicked:boolean = false;
  allUsers:User[]= [];
  loggedUser:User[]= [];
  passErrMsg:string = '';
  constructor(private _Router:Router,private _ToastrService:ToastrService){}
  ngOnInit(): void {
      this.getUserInfo()
      this.getUsers()
      this.passValues()
  }

  editForm:FormGroup = new FormGroup({
    firstName: new FormControl({value: null, disabled: !this.editClicked}),
    lastName: new FormControl({value: null, disabled: !this.editClicked}),
    email: new FormControl({value: null, disabled: !this.editClicked}),
    address: new FormControl({value: null, disabled: !this.editClicked}),
    currentPass: new FormControl({value: null, disabled: !this.editClicked}),
    newPass: new FormControl({value: null, disabled: !this.editClicked}),
    confirmPass: new FormControl({value: null, disabled: !this.editClicked}),
  })
  getUserInfo(){
    if(sessionStorage.getItem('token') != null){
      this.userInfo = JSON.parse(sessionStorage.getItem('token')!)[0];
      console.log(this.userInfo);
    }
    else{
      this._Router.navigate(['/guest/login'])
    }
  }
  passValues(){
    this.editForm.get('firstName')?.setValue(this.loggedUser[0].name.split(' ').slice(0,1).join(' '));
    this.editForm.get('lastName')?.setValue(this.loggedUser[0].name.split(' ').slice(1,2).join(' '));
    this.editForm.get('email')?.setValue(this.loggedUser[0].email);
    this.editForm.get('address')?.setValue(this.loggedUser[0].address);
  }
  edit(){
    this.editClicked = !this.editClicked
    if(this.editClicked){
      this.editForm.enable();
    }
    else{
      this.editForm.disable();
      this.editForm.get('currentPass')?.setValue(null)
      this.editForm.get('newPass')?.setValue(null)
      this.editForm.get('confirmPass')?.setValue(null)
      this.passErrMsg = '';
    }
  }
  getUsers(){
    if(localStorage.getItem('users') != null){
      this.allUsers = JSON.parse(localStorage.getItem('users')!);
      console.log(this.allUsers);
      this.loggedUser = this.allUsers.filter(user=>user.id === this.userInfo.id)
      console.log(this.loggedUser);
    }
  }
  submitEdit(){
    if((this.editForm.get('currentPass')?.touched && this.editForm.get('newPass')?.touched && this.editForm.get('confirmPass')?.touched) || (this.editForm.get('currentPass')?.value != null || this.editForm.get('newPass')?.value != null || this.editForm.get('confirmPass')?.value != null)){
      if(this.loggedUser[0].password === this.editForm.get('currentPass')?.value){
        if(this.editForm.get('newPass')?.value === this.editForm.get('confirmPass')?.value){
          this.loggedUser[0].password = this.editForm.get('newPass')?.value;
          this._ToastrService.success('Password Changed Successfully','Done');
          this.edit();
          this.passErrMsg = '';
        }
        else{
          this.passErrMsg = 'confirm password not matched';
        }
      }
      else{
        this.passErrMsg = 'incorrect current password'
      }
    }
    else{
      this.loggedUser[0].name = `${this.editForm.get('firstName')?.value} ${ this.editForm.get('lastName')?.value}` 
      this.loggedUser[0].email = this.editForm.get('email')?.value ;
      this.loggedUser[0].address = this.editForm.get('address')?.value;
      this.allUsers = this.allUsers.filter(user=>user.id !== this.userInfo.id);
      this.allUsers.push(this.loggedUser[0])
      localStorage.setItem('users',JSON.stringify(this.allUsers));
      this.edit()
      this._ToastrService.success('Profile Updated Successfully','Done');
    }
  }
}