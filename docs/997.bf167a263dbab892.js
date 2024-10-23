"use strict";(self.webpackChunktask1=self.webpackChunktask1||[]).push([[997],{3997:(N,p,s)=>{s.r(p),s.d(p,{RegisterComponent:()=>D});var _=s(177),d=s(8934),o=s(4341),f=s(541),e=s(2598),h=s(4796);function v(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"name is required"),e.k0s())}function F(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"name length must be at least 3 characters"),e.k0s())}function C(t,i){if(1&t&&(e.j41(0,"div",24),e.DNE(1,v,2,0,"p",25),e.DNE(2,F,2,0,"p",25),e.k0s()),2&t){const l=e.XpG();let r,n;e.R7$(1),e.Y8G("ngIf",null==(r=l.registerForm.get("name"))||null==r.errors?null:r.errors.required),e.R7$(1),e.Y8G("ngIf",null==(n=l.registerForm.get("name"))||null==n.errors?null:n.errors.minlength)}}function E(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"Email is required"),e.k0s())}function M(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"Please enter a valid email shape"),e.k0s())}function P(t,i){if(1&t&&(e.j41(0,"div",24),e.DNE(1,E,2,0,"p",25),e.DNE(2,M,2,0,"p",25),e.k0s()),2&t){const l=e.XpG();let r,n;e.R7$(1),e.Y8G("ngIf",null==(r=l.registerForm.get("email"))||null==r.errors?null:r.errors.required),e.R7$(1),e.Y8G("ngIf",null==(n=l.registerForm.get("email"))||null==n.errors?null:n.errors.email)}}function R(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"password is required"),e.k0s())}function O(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"password must be at least 5 characters"),e.k0s())}function k(t,i){if(1&t&&(e.j41(0,"div",24),e.DNE(1,R,2,0,"p",25),e.DNE(2,O,2,0,"p",25),e.k0s()),2&t){const l=e.XpG();let r,n;e.R7$(1),e.Y8G("ngIf",null==(r=l.registerForm.get("password"))||null==r.errors?null:r.errors.required),e.R7$(1),e.Y8G("ngIf",null==(n=l.registerForm.get("password"))||null==n.errors?null:n.errors.minlength)}}function b(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"Phone is required"),e.k0s())}function x(t,i){1&t&&(e.j41(0,"p"),e.EFF(1,"Please enter a valid phone number"),e.k0s())}function j(t,i){if(1&t&&(e.j41(0,"div",24),e.DNE(1,b,2,0,"p",25),e.DNE(2,x,2,0,"p",25),e.k0s()),2&t){const l=e.XpG();let r,n;e.R7$(1),e.Y8G("ngIf",null==(r=l.registerForm.get("phone"))||null==r.errors?null:r.errors.required),e.R7$(1),e.Y8G("ngIf",null==(n=l.registerForm.get("phone"))||null==n.errors?null:n.errors.pattern)}}function I(t,i){if(1&t&&(e.j41(0,"div",26)(1,"p",27),e.EFF(2),e.k0s()()),2&t){const l=e.XpG();e.R7$(2),e.JRh(l.errMsg)}}let D=(()=>{class t{constructor(l){this._AuthService=l,this.errMsg="",this.name="",this.registerForm=new o.gE({name:new o.MJ(null,[o.k0.required,o.k0.minLength(3)]),email:new o.MJ(null,[o.k0.required,o.k0.email]),password:new o.MJ(null,[o.k0.required,o.k0.minLength(5)]),phone:new o.MJ(null,[o.k0.required,o.k0.pattern(/^(01)[0125][0-9]{8}$/)])})}ngOnInit(){}register(){this._AuthService.addUser(this.registerForm.get("name")?.value,this.registerForm.get("email")?.value,this.registerForm.get("password")?.value,this.registerForm.get("phone")?.value),this.errMsg=this._AuthService.addUser(this.registerForm.get("name")?.value,this.registerForm.get("email")?.value,this.registerForm.get("password")?.value,this.registerForm.get("phone")?.value)}static{this.\u0275fac=function(r){return new(r||t)(e.rXU(h.u))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-register"]],standalone:!0,features:[e.aNF],decls:39,vars:7,consts:[[1,"main"],[1,"row","align-items-center","py-5","g-0"],[1,"col-lg-6","col-md-6","mb-5"],["src","./assets/images/sign.png","alt","",1,"w-100"],[1,"col-lg-4","col-md-6","offset-lg-1"],[1,"logic-text","p-lg-0","p-3"],[1,"mb-4"],[3,"formGroup","ngSubmit"],["formControlName","name","type","text","placeholder","Name"],["nameInput",""],["class","alert alert-danger mt-2",4,"ngIf"],["formControlName","email","type","email","placeholder","Email"],["emailInput",""],["type","password","formControlName","password","placeholder","Password"],["passInput",""],["formControlName","phone","type","phone","placeholder","Phone Number"],["phoneInput",""],["class","alert alert-danger",4,"ngIf"],[1,"logic-buttons","d-flex","flex-column","justify-content-center","mb-4","gap-4"],["type","submit",1,"main-btn",3,"disabled"],["type","button",1,"google"],["src","./assets/images/google.png","alt","google"],[1,"text-center","d-flex","justify-content-center","align-items-center","gap-4"],["routerLink","/login",1,"pb-1","text-black","border-bottom","border-black","text-decoration-none"],[1,"alert","alert-danger","mt-2"],[4,"ngIf"],[1,"alert","alert-danger"],[1,"m-0","text-center"]],template:function(r,n){if(1&r&&(e.j41(0,"section",0)(1,"div",1)(2,"div",2)(3,"div"),e.nrm(4,"img",3),e.k0s()(),e.j41(5,"div",4)(6,"div",5)(7,"h1",6),e.EFF(8,"Create an account"),e.k0s(),e.j41(9,"p"),e.EFF(10,"Enter your details below"),e.k0s(),e.j41(11,"form",7),e.bIt("ngSubmit",function(){return n.register()}),e.j41(12,"div",6),e.nrm(13,"input",8,9),e.DNE(15,C,3,2,"div",10),e.k0s(),e.j41(16,"div",6),e.nrm(17,"input",11,12),e.DNE(19,P,3,2,"div",10),e.k0s(),e.j41(20,"div",6),e.nrm(21,"input",13,14),e.DNE(23,k,3,2,"div",10),e.k0s(),e.j41(24,"div",6),e.nrm(25,"input",15,16),e.DNE(27,j,3,2,"div",10),e.k0s(),e.DNE(28,I,3,1,"div",17),e.j41(29,"div",18)(30,"button",19),e.EFF(31,"Create Account"),e.k0s(),e.j41(32,"button",20),e.nrm(33,"img",21),e.EFF(34," Sign up with Google"),e.k0s()(),e.j41(35,"span",22),e.EFF(36,"Already have account? "),e.j41(37,"a",23),e.EFF(38,"Log in"),e.k0s()()()()()()()),2&r){const c=e.sdS(14),w=e.sdS(18),G=e.sdS(22),T=e.sdS(26);let a,g,m,u;e.R7$(11),e.Y8G("formGroup",n.registerForm),e.R7$(4),e.Y8G("ngIf",(null==(a=n.registerForm.get("name"))?null:a.errors)&&((null==(a=n.registerForm.get("name"))?null:a.touched)||c.value.length>0)),e.R7$(4),e.Y8G("ngIf",(null==(g=n.registerForm.get("email"))?null:g.errors)&&((null==(g=n.registerForm.get("email"))?null:g.touched)||w.value.length>0)),e.R7$(4),e.Y8G("ngIf",(null==(m=n.registerForm.get("password"))?null:m.errors)&&((null==(m=n.registerForm.get("password"))?null:m.touched)||G.value.length>0)),e.R7$(4),e.Y8G("ngIf",(null==(u=n.registerForm.get("phone"))?null:u.errors)&&((null==(u=n.registerForm.get("phone"))?null:u.touched)||T.value.length>0)),e.R7$(1),e.Y8G("ngIf",n.errMsg),e.R7$(2),e.Y8G("disabled",n.registerForm.invalid)}},dependencies:[_.MD,_.bT,d.Wk,f.G,o.qT,o.me,o.BC,o.cb,o.j4,o.JD],styles:[".main[_ngcontent-%COMP%]{width:100%;margin:auto;color:var(--black)}.main[_ngcontent-%COMP%]   .logic-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.25em;font-weight:500;font-family:Inter,sans-serif;line-height:30px}.main[_ngcontent-%COMP%]   .logic-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;border-bottom:solid 2px rgba(0,0,0,.5);outline:none;width:100%;padding-bottom:10px}.main[_ngcontent-%COMP%]   .logic-text[_ngcontent-%COMP%]   .logic-buttons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]{padding:16px 48px;border-radius:var(--raduis);background-color:#fff;display:flex;column-gap:10px;justify-content:center;align-items:center;transition:all .3s ease}.main[_ngcontent-%COMP%]   .logic-text[_ngcontent-%COMP%]   .logic-buttons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px}.main[_ngcontent-%COMP%]   .logic-text[_ngcontent-%COMP%]   .logic-buttons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]:hover{background-color:var(--secondary-color)}.main[_ngcontent-%COMP%]   .logic-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:500}@media screen and (max-width: 768px){.main[_ngcontent-%COMP%]{width:90%;margin:auto}}"]})}}return t})()}}]);