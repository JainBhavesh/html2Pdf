!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(t,o,i){"use strict";i.r(o),i.d(o,"HomePageModule",(function(){return y}));var r=i("ofXK"),c=i("TEn/"),a=i("3Pt+"),b=i("tyNb"),l=i("fXoL");function u(n,e){if(1&n){var t=l.Lb();l.Kb(0,"div",15),l.Kb(1,"ion-icon",16),l.Sb("click",(function(){l.Zb(t);var n=l.Ub().index;return l.Ub().remove(n)})),l.Jb(),l.Jb()}}function d(n,e){if(1&n&&(l.Kb(0,"ion-item"),l.Ib(1,"img",17),l.Jb()),2&n){var t=l.Ub().$implicit;l.xb(1),l.Xb("src",t.image,l.ac)}}function s(n,e){if(1&n){var t=l.Lb();l.Kb(0,"div",15),l.Kb(1,"ion-button",18),l.Sb("click",(function(){return l.Zb(t),l.Ub(2).add()})),l.dc(2,"Add Another"),l.Jb(),l.Jb()}}function f(n,e){if(1&n){var t=l.Lb();l.Kb(0,"ion-card"),l.cc(1,u,2,0,"div",11),l.Kb(2,"ion-item"),l.Kb(3,"ion-input",12),l.Sb("ngModelChange",(function(n){return l.Zb(t),e.$implicit.dis=n})),l.Jb(),l.Jb(),l.cc(4,d,2,1,"ion-item",13),l.Kb(5,"ion-item"),l.Kb(6,"input",14),l.Sb("change",(function(n){l.Zb(t);var o=e.index;return l.Ub().upload(n,o)})),l.Jb(),l.Jb(),l.cc(7,s,3,0,"div",11),l.Jb()}if(2&n){var o=e.$implicit,i=e.index,r=l.Ub();l.xb(1),l.Xb("ngIf",r.doc.length>1),l.xb(2),l.Xb("ngModel",o.dis),l.xb(1),l.Xb("ngIf",o.image),l.xb(3),l.Xb("ngIf",i==r.doc.length-1)}}var p,m,g,h=[{path:"",component:(p=function(){function t(e,o){n(this,t),this.formBuilder=e,this.navCtrl=o,this.doc=[{dis:"",image:""}],this.Company=this.formBuilder.group({title:[""],name:[""],address:[""],docNo:[""]})}var o,i,r;return o=t,(i=[{key:"upload",value:function(n,e){var t=this;console.log(e+"Event => ",n);var o=event.target.files[0],i=new FileReader;o.type.match(/image-*/)?(i.onload=function(){t.doc[e].image=i.result.toString(),console.log("Image pic => ",t.doc[e].image),setTimeout((function(){}),400)},i.readAsDataURL(o)):console.log("File format not supported")}},{key:"add",value:function(){this.doc.push({des:"",image:""})}},{key:"remove",value:function(n){this.doc.splice(n,1)}},{key:"preview",value:function(){this.navCtrl.navigateForward("print",{queryParams:{data:this.Company.value,image:this.doc}})}}])&&e(o.prototype,i),r&&e(o,r),t}(),p.\u0275fac=function(n){return new(n||p)(l.Hb(a.a),l.Hb(c.o))},p.\u0275cmp=l.Bb({type:p,selectors:[["app-home"]],decls:19,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["mode","ios"],["mode","ios",1,"text-center"],[3,"formGroup","ngSubmit"],["type","text","formControlName","title","placeholder","Title"],["type","text","formControlName","name","placeholder","Company name"],["type","text","formControlName","address","placeholder","Address"],["type","text","formControlName","docNo","placeholder","Ref. Document No"],[4,"ngFor","ngForOf"],["type","submit","expand","full","shape","round",1,"ion-margin"],["class","ion-text-right",4,"ngIf"],["type","text","placeholder","Image Discription",3,"ngModel","ngModelChange"],[4,"ngIf"],["type","file",3,"change"],[1,"ion-text-right"],["name","trash-outline",2,"color","red","font-size","25px",3,"click"],[3,"src"],["shape","round",1,"ion-margin",3,"click"]],template:function(n,e){1&n&&(l.Kb(0,"ion-header",0),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-title"),l.dc(3," App "),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content",1),l.Kb(5,"div",2),l.Kb(6,"ion-card",3),l.Kb(7,"form",4),l.Sb("ngSubmit",(function(){return e.preview()})),l.Kb(8,"ion-item"),l.Ib(9,"ion-input",5),l.Jb(),l.Kb(10,"ion-item"),l.Ib(11,"ion-input",6),l.Jb(),l.Kb(12,"ion-item"),l.Ib(13,"ion-input",7),l.Jb(),l.Kb(14,"ion-item"),l.Ib(15,"ion-input",8),l.Jb(),l.cc(16,f,8,4,"ion-card",9),l.Kb(17,"ion-button",10),l.dc(18," Preview"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&n&&(l.Xb("translucent",!0),l.xb(4),l.Xb("fullscreen",!0),l.xb(3),l.Xb("formGroup",e.Company),l.xb(9),l.Xb("ngForOf",e.doc))},directives:[c.f,c.l,c.k,c.e,c.d,a.k,a.h,a.c,c.i,c.h,c.q,a.g,a.b,r.h,c.b,r.i,a.i,c.g],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),p)}],v=((g=function e(){n(this,e)}).\u0275mod=l.Fb({type:g}),g.\u0275inj=l.Eb({factory:function(n){return new(n||g)},imports:[[b.i.forChild(h)],b.i]}),g),y=((m=function e(){n(this,e)}).\u0275mod=l.Fb({type:m}),m.\u0275inj=l.Eb({factory:function(n){return new(n||m)},imports:[[r.b,a.d,c.m,v,a.j]]}),m)}}])}();