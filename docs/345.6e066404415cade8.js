"use strict";(self.webpackChunktask1=self.webpackChunktask1||[]).push([[345],{1345:(x,_,r)=>{r.r(_),r.d(_,{WishlistComponent:()=>k});var d=r(177),h=r(8934),p=r(541),u=r(5794),t=r(2598),f=r(8490);const g=function(c){return["/details",c]};function m(c,a){if(1&c){const e=t.RV6();t.j41(0,"div",10)(1,"div",11)(2,"div",12),t.nrm(3,"img",13),t.j41(4,"div",14),t.bIt("click",function(n){t.eBV(e);const s=t.XpG();return t.Njj(s.stop(n))}),t.j41(5,"button",15),t.bIt("click",function(){const s=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.addToCart(s))}),t.nrm(6,"i",16),t.EFF(7," add to cart"),t.k0s()(),t.j41(8,"div",17)(9,"i",18),t.bIt("click",function(n){const i=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.removeItem(i.id,n))}),t.k0s()()(),t.j41(10,"div",19)(11,"h3",20),t.EFF(12),t.k0s()(),t.j41(13,"div",21)(14,"span"),t.EFF(15),t.k0s()()()()}if(2&c){const e=a.$implicit;t.Y8G("routerLink",t.eq3(4,g,e.id)),t.R7$(3),t.Y8G("src",e.image,t.B4B),t.R7$(9),t.JRh(e.title.split(" ").slice(0,3).join(" ")),t.R7$(3),t.SpI("$",e.price,"")}}function P(c,a){if(1&c){const e=t.RV6();t.j41(0,"button",22),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.showAll=!0)}),t.EFF(1,"see all"),t.k0s()}}function C(c,a){if(1&c){const e=t.RV6();t.j41(0,"button",22),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.showAll=!1)}),t.EFF(1,"see less"),t.k0s()}}function O(c,a){if(1&c&&t.nrm(0,"i",27),2&c){const e=a.$implicit,o=t.XpG().$implicit;t.AVh("rating-color",o.rating.rate>=e)}}const v=function(){return[1,2,3,4,5]};function M(c,a){if(1&c){const e=t.RV6();t.j41(0,"div",10)(1,"div",23)(2,"div",12),t.nrm(3,"img",13),t.j41(4,"div",14),t.bIt("click",function(n){t.eBV(e);const s=t.XpG();return t.Njj(s.stop(n))}),t.j41(5,"button",15),t.bIt("click",function(){const s=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.addToCart(s))}),t.nrm(6,"i",16),t.EFF(7," add to cart"),t.k0s()(),t.j41(8,"div",17)(9,"i",24),t.bIt("click",function(n){const i=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.showModal(i.image,n))}),t.k0s()()(),t.j41(10,"div",19)(11,"h3",20),t.EFF(12),t.k0s(),t.j41(13,"span"),t.EFF(14),t.k0s()(),t.j41(15,"div",25)(16,"div"),t.DNE(17,O,1,2,"i",26),t.k0s(),t.j41(18,"span"),t.EFF(19),t.k0s()()()()}if(2&c){const e=a.$implicit;t.Y8G("routerLink",t.eq3(6,g,e.id)),t.R7$(3),t.Y8G("src",e.image,t.B4B),t.R7$(9),t.JRh(e.title.split(" ").slice(0,3).join(" ")),t.R7$(2),t.SpI("$",e.price,""),t.R7$(3),t.Y8G("ngForOf",t.lJ4(8,v)),t.R7$(2),t.SpI("(",e.rating.count,")")}}function b(c,a){if(1&c){const e=t.RV6();t.j41(0,"div",28),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.showModalVar=!1)}),t.j41(1,"div",29),t.bIt("click",function(n){t.eBV(e);const s=t.XpG();return t.Njj(s.stop(n))}),t.nrm(2,"img",13),t.k0s()()}if(2&c){const e=t.XpG();t.R7$(2),t.Y8G("src",e.imageUrl,t.B4B)}}let k=(()=>{class c{constructor(e,o){this._DataService=e,this._ToastrService=o,this.products=[],this.allProducts=[],this.showAll=!1,this.cartProducts=[],this.imageUrl="",this.showModalVar=!1}ngOnInit(){this.getProducts(),this.getCartProducts(),this.getAllProducts()}getProducts(){null!=sessionStorage.getItem("token")&&(this.products=null!=localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])}getCartProducts(){null!=sessionStorage.getItem("token")?null!=localStorage.getItem("cartProducts")&&(this.cartProducts=JSON.parse(localStorage.getItem("cartProducts"))):this.cartProducts=[]}getAllProducts(){this._DataService.getAllProducts().subscribe(e=>{this.allProducts=e})}stop(e){e.stopPropagation()}addToCart(e){let o={product:e,quantity:1};null!=localStorage.getItem("cartProducts")?(this.cartProducts=JSON.parse(localStorage.getItem("cartProducts")),this.cartProducts.find(s=>s.product.id==e.id)?this._ToastrService.show("this product already in the cart","Message"):(this.cartProducts.push(o),localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts)),this._DataService.cartNumber.next(this.cartProducts.length),this._ToastrService.success("Product added to the cart successfully","Cart"))):(this.cartProducts.push(o),localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts)),this._DataService.cartNumber.next(this.cartProducts.length),this._ToastrService.success("Product added to the cart successfully","Cart"))}moveToCart(){let e=!1,n=[],s=this.products.map(i=>({product:i,quantity:1}));for(let i=0;i<s.length;i++)this.cartProducts.find(l=>l.product.id===s[i].product.id)&&(e=!0,n.push(s[i]));if(e){for(let i=0;i<n.length;i++)s=s.filter(l=>l.product.id!==n[i].product.id);for(let i=0;i<s.length;i++)this.cartProducts.push(s[i]),localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts));this.products=[],localStorage.setItem("wishlist",JSON.stringify(this.products)),this._DataService.cartNumber.next(this.cartProducts.length),this._DataService.wishListNumber.next(this.products.length),this._ToastrService.info("check your cart")}else{for(let i=0;i<s.length;i++)this.cartProducts.push(s[i]);localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts)),this._DataService.cartNumber.next(this.cartProducts.length),this.products=[],localStorage.setItem("wishlist",JSON.stringify(this.products)),this._DataService.wishListNumber.next(this.products.length),this._ToastrService.info("check your cart")}}removeItem(e,o){this.stop(o),this.products=this.products.filter(n=>n.id!==e),localStorage.setItem("wishlist",JSON.stringify(this.products)),this._DataService.wishListNumber.next(this.products.length)}showModal(e,o){this.stop(o),this.imageUrl=e,this.showModalVar=!0}static{this.\u0275fac=function(o){return new(o||c)(t.rXU(f.u),t.rXU(u.tw))}}static{this.\u0275cmp=t.VBU({type:c,selectors:[["app-wishlist"]],standalone:!0,features:[t.Jv_([u.tw]),t.aNF],decls:16,vars:9,consts:[[1,"container","py-5"],[1,"d-flex","wish","justify-content-between","align-items-center"],["type","button",1,"third-btn",3,"disabled","click"],[1,"row","g-4","pb-5"],["class","col-md-3",3,"routerLink",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center","mt-5"],[1,"title"],["class","third-btn","type","button",3,"click",4,"ngIf"],[1,"row","g-4","overflow-hidden"],["class","modal position-fixed d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0",3,"click",4,"ngIf"],[1,"col-md-3",3,"routerLink"],[1,"wish-card"],[1,"head","position-relative","p-4"],["alt","",1,"w-100",3,"src"],[3,"click"],["type","button",1,"second-btn","w-100",3,"click"],[1,"fa","fa-xl","fa-cart-plus"],[1,"cart-details"],[1,"fa-solid","fa-xl","fa-trash-can",3,"click"],[1,"body"],[1,"text-capitalize"],[1,"footer","d-flex","align-items-center"],["type","button",1,"third-btn",3,"click"],[1,"suggest-card","position-relative"],[1,"fa-regular","fa-eye",3,"click"],[1,"footer","d-flex","align-items-center","gap-2"],["class","fa fa-star pe-1 rating-color",3,"rating-color",4,"ngFor","ngForOf"],[1,"fa","fa-star","pe-1","rating-color"],[1,"modal","position-fixed","d-flex","justify-content-center","align-items-center","top-0","bottom-0","start-0","end-0",3,"click"],[1,"main-image","m-auto",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"h2"),t.EFF(3),t.k0s(),t.j41(4,"button",2),t.bIt("click",function(){return n.moveToCart()}),t.EFF(5,"move all to bag"),t.k0s()(),t.j41(6,"div",3),t.DNE(7,m,16,6,"div",4),t.k0s(),t.j41(8,"div",5)(9,"h2",6),t.EFF(10,"just for you"),t.k0s(),t.DNE(11,P,2,0,"button",7),t.DNE(12,C,2,0,"button",7),t.k0s(),t.j41(13,"div",8),t.DNE(14,M,20,9,"div",4),t.k0s()(),t.DNE(15,b,3,1,"div",9)),2&o&&(t.R7$(3),t.SpI("wishlist (",n.products.length,")"),t.R7$(1),t.Y8G("disabled",n.products.length<=0),t.R7$(3),t.Y8G("ngForOf",n.products),t.R7$(4),t.Y8G("ngIf",!n.showAll),t.R7$(1),t.Y8G("ngIf",n.showAll),t.R7$(1),t.AVh("flex-nowrap",!n.showAll),t.R7$(1),t.Y8G("ngForOf",n.allProducts.slice(12,-1)),t.R7$(1),t.Y8G("ngIf",n.showModalVar))},dependencies:[d.MD,d.Sq,d.bT,h.Wk,p.G],styles:['.wish-card[_ngcontent-%COMP%], .suggest-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;row-gap:10px;cursor:pointer}.wish-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%], .suggest-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{overflow:hidden}.wish-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:hover   .second-btn[_ngcontent-%COMP%], .suggest-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:hover   .second-btn[_ngcontent-%COMP%]{bottom:0}.wish-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .second-btn[_ngcontent-%COMP%], .suggest-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .second-btn[_ngcontent-%COMP%]{position:absolute;left:0;bottom:-80px;transition:all .3s ease}.wish-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .cart-details[_ngcontent-%COMP%], .suggest-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .cart-details[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;left:20px;display:flex;justify-content:space-between;align-items:center}.wish-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain;height:300px}.wish-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .cart-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer;transition:all .3s ease}.wish-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .cart-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#e10000}.wish-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1em;font-weight:500;line-height:24px}.wish-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:500}.suggest-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain;height:300px}.suggest-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .cart-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:auto;background-color:#fff;width:40px;height:40px;padding:12px;border-radius:50%;cursor:pointer;transition:all .3s ease}.suggest-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .cart-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--black)}.suggest-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1em;font-weight:500;line-height:24px}.suggest-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:500}.suggest-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875em;opacity:50%;font-weight:600}.wish[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25em;line-height:26px}.title[_ngcontent-%COMP%]{font-size:1rem;color:var(--primary-color);font-weight:600;position:relative;padding-left:25px;text-transform:capitalize}.title[_ngcontent-%COMP%]:before{content:"";position:absolute;width:15px;top:-10px;bottom:-10px;background-color:var(--primary-color);left:0;border-radius:var(--raduis)}']})}}return c})()}}]);