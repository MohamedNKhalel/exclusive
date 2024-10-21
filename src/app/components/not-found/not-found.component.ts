import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankNavComponent } from '../blank-nav/blank-nav.component';
import { AuthNavComponent } from '../auth-nav/auth-nav.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule,BlankNavComponent,AuthNavComponent,FooterComponent,RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  checkAuthority:boolean = false;
  ngOnInit(): void {
    if(sessionStorage.getItem('token') != null ){
      this.checkAuthority = true
    }
    else{
      this.checkAuthority = false;
    }
  }
}
