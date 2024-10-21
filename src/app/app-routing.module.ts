import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),canActivate:[authGuard],children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent), title:'Home'},
    {path:'about',loadComponent:()=>import('./components/about/about.component').then((m)=>m.AboutComponent), title:'About'},
    {path:'contact',loadComponent:()=>import('./components/contact/contact.component').then((m)=>m.ContactComponent), title:'Contact'},
    {path:'profile',loadComponent:()=>import('./components/profile/profile.component').then((m)=>m.ProfileComponent), title:'Profile'},
    {path:'category/:cat',loadComponent:()=>import('./components/category/category.component').then((m)=>m.CategoryComponent),title:'Category'},
    {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent), title:'Cart',data:{breadCrump:'Cart'},children:[
      {path:'billing',loadComponent:()=>import('./components/billing/billing.component').then((m)=>m.BillingComponent)},
    ]},
    {path:'wishlist',loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent), title:'Wishlist'},
    {path:'details/:id',loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent),title:'Details'},
    
  ]},
  {path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),children:[
    {path:'',redirectTo:'main',pathMatch:'full'},
    {path:'main',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'Home'},
    {path:'abouts',loadComponent:()=>import('./components/about/about.component').then((m)=>m.AboutComponent),title:'About'},
    {path:'contacts',loadComponent:()=>import('./components/contact/contact.component').then((m)=>m.ContactComponent),title:'Contact'},
    {path:'',loadComponent:()=>import('./components/signup/signup.component').then((m)=>m.SignupComponent),children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'Login'},
      {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:'Register'},
    ]},
  ]},
  {path:'**',loadComponent:()=>import('./components/not-found/not-found.component').then((m)=>m.NotFoundComponent),title:'ERROR 404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
