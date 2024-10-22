import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-nav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})
export class AuthNavComponent implements OnInit{
  constructor(private _DataService:DataService){}
  
  searchWord:string = ''
  ngOnInit(): void {
  }
  addTextSearch(){
    this._DataService.searchWord.next(this.searchWord)
  }
}
