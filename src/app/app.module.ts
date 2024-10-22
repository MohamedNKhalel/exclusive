import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { SearchPipe } from './pipes/search.pipe';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLayoutComponent,HttpClientModule,RouterModule,BrowserAnimationsModule,NgxSpinnerModule,ToastrModule.forRoot()
],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
