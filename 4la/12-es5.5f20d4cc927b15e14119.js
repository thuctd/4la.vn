function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"q+DD":function(n,t,e){"use strict";e.r(t),e.d(t,"BanHangModule",(function(){return I}));var a=e("d/KH"),i=e("bSW0"),o=e("0rYp"),r=e("s7LF"),c=e("SVse"),l=e("COeT"),b=e("8Y7J"),u=e("iInd"),s=e("Dxy4"),p=e("tFlX"),d=e("t4gC"),f=e("Dmtc");function h(n,t){if(1&n){var e=b.Zb();b.Yb(0,"button",31),b.fc("click",(function(){return b.zc(e),b.jc().save()})),b.Jc(1,"L\u01b0u"),b.Xb()}}function m(n,t){if(1&n){var e=b.Zb();b.Yb(0,"button",32),b.fc("click",(function(){return b.zc(e),b.jc().editable()})),b.Jc(1,"S\u1eeda"),b.Xb()}}function y(n,t){if(1&n){var e=b.Zb();b.Yb(0,"button",33),b.fc("click",(function(){return b.zc(e),b.jc().import()})),b.Jc(1,"import"),b.Xb()}}function v(n,t){if(1&n){var e=b.Zb();b.Yb(0,"button",34),b.fc("click",(function(){return b.zc(e),b.jc().deleteDB()})),b.Jc(1,"deleteDB"),b.Xb()}}function g(n,t){if(1&n){var e=b.Zb();b.Yb(0,"div",35),b.Yb(1,"app-import-excel",36),b.fc("xls",(function(n){return b.zc(e),b.jc().onSelectFile(n)})),b.Xb(),b.Yb(2,"app-parse-excel-clipboard",37),b.fc("excel",(function(n){return b.zc(e),b.jc().onPaste(n)})),b.Xb(),b.Xb()}}var k,Y,X,x,H=((k=function(){function n(t,e,a){_classCallCheck(this,n),this.plus=t,this.fb=e,this.route=a,this.dbName="ban-hang",this.db=null,this.api="hang-hoa",this.readonly=!0,this.data=[],this.importData=[],this.errorData=[],this.img="",this.main=this.fb.group({Barcode:[,[]],TenHangHoa:[,[r.s.required]],NhomHang:[,[r.s.required]],SoLuong:[,[]],DVT:[,[r.s.required]],GiaVon:[,[]],GiaBan:[,[]],QuyDoi:[,[]],HinhAnh:[,[]]})}return _createClass(n,[{key:"ngOnInit",value:function(){this.init_IDB()}},{key:"init_IDB",value:function(){var n=this;this.plus.IDB_InitDB(this.dbName).subscribe((function(t){n.db=t,n.getById()}))}},{key:"getById",value:function(){var n=this;this.plus.load();var t=this.route.snapshot.paramMap.get("id");t?this.plus.httpGet(this.api+"/id/"+t).subscribe((function(t){var e=n.plus.decrypt(t.data);n.main.patchValue(e),n.plus.loaded()}),(function(e){n.plus.alertError("D\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u s\u1ebd hi\u1ec3n th\u1ecb n\u1ebfu c\xf3"),n.plus.IDB_DB_GetByKey(n.db,n.api,+t).subscribe((function(t){n.main.patchValue(t),n.plus.loaded()})),n.plus.loaded()})):this.plus.loaded()}},{key:"save",value:function(){var n=this,t=this.route.snapshot.paramMap.get("id"),e=this.main.value;+t>0?this.plus.httpPut(this.api,e).subscribe((function(t){n.plus.alertToasrt(t),n.plus.IDB_DB_Add(n.db,n.api,e)})):this.plus.httpPost(this.api,e).subscribe((function(t){n.plus.alertToasrt(t),n.plus.IDB_DB_Add(n.db,n.api,e)}))}},{key:"import",value:function(){var n=this,t=this.importData.map((function(t){var e=t;return e.keyWord=n.plus.removeAccents(JSON.stringify(t)),e}));console.log(t);var e=JSON.stringify(t),a={data:this.plus.encrypt(e)};this.plus.httpPost(this.api+"/import",a).subscribe((function(t){n.plus.alertToasrt(t),console.log(t)}))}},{key:"onPaste",value:function(n){var t=n[1];console.log(t);var e={_id:+t[0],MaTram:t[0],TenTram:t[1]};console.log(e),this.main.patchValue(e)}},{key:"onSelectFile",value:function(n){var t=this,e=n.slice(2);console.log(e),e.forEach((function(n,e){var a={_id:+n[0],MaTram:n[0]};t.main.patchValue(a),t.main.valid?t.importData.push(a):t.errorData.push(a)}))}},{key:"uploadImg",value:function(n){console.log(n)}},{key:"goBack",value:function(){this.plus.goBack()}},{key:"deleteDB",value:function(){this.plus.httpDelete(this.api,"/find/all").subscribe((function(n){console.log(n)}))}},{key:"checkPer",value:function(n){return this.plus.checkPer(this.api,n)}},{key:"editable",value:function(){this.readonly=!this.readonly}},{key:"readThis",value:function(n){var t=this,e=n.target.files[0];return console.log(e),new Promise((function(n,a){var i=new FileReader;i.onloadend=function(n){var e=i.result;return console.log(e),t.img="data:image/png;base64,"+e,{default:"data:image/png;base64,"+e}},i.readAsDataURL(e)}))}}]),n}()).\u0275fac=function(n){return new(n||k)(b.Sb(l.a),b.Sb(r.c),b.Sb(u.a))},k.\u0275cmp=b.Mb({type:k,selectors:[["app-hang-hoa"]],decls:71,vars:17,consts:[[1,"container"],[1,"text-center","text-primary","bg-white"],[1,"form-group",3,"formGroup"],[1,"row"],[1,"col"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["type","text","readOnly","true","formControlName","Barcode",1,"form-control"],["type","text","formControlName","TenHangHoa",1,"form-control",3,"readOnly"],["type","number","formControlName","SoLuong",1,"form-control",3,"readOnly"],["type","text","formControlName","DVT",1,"form-control",3,"readOnly"],["type","number","formControlName","GiaVon",1,"form-control",3,"readOnly"],["type","number","formControlName","GiaBan",1,"form-control",3,"readOnly"],["type","number","formControlName","QuyDoi",1,"form-control",3,"readOnly"],["type","text","formControlName","NhomHang",1,"form-control",3,"readOnly"],["type","text ","formControlName","HinhAnh",1,"form-control"],[1,"input-group-append"],["mat-raised-button","","color","accent","type","button"],["for","file-import",1,"custom-file-upload","text-primary","mx-5"],["aria-hidden","true",1,"fa","fa-file-image-o"],["hidden","","id","file-import","type","file","multiple","false",3,"change"],[1,"text-center","example-button-row"],["style","margin: 8px 8px 8px 0;","mat-raised-button","","color","warn",3,"click",4,"ngIf"],["style","margin: 8px 8px 8px 0;","mat-raised-button","","color","accent",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",2,"margin","8px 8px 8px 0",3,"click"],["class","btn btn-outline-danger mx-3",3,"click",4,"ngIf"],["class","btn btn-outline-info mx-3",3,"click",4,"ngIf"],["class","import",4,"ngIf"],[3,"nhom"],[3,"src"],["mat-raised-button","","color","warn",2,"margin","8px 8px 8px 0",3,"click"],["mat-raised-button","","color","accent",2,"margin","8px 8px 8px 0",3,"click"],[1,"btn","btn-outline-danger","mx-3",3,"click"],[1,"btn","btn-outline-info","mx-3",3,"click"],[1,"import"],[3,"xls"],[3,"excel"]],template:function(n,t){1&n&&(b.Yb(0,"div",0),b.Yb(1,"h3",1),b.Jc(2," Danh m\u1ee5c h\xe0ng h\xf3a"),b.Xb(),b.Yb(3,"form",2),b.Yb(4,"div",3),b.Yb(5,"div",4),b.Yb(6,"div",5),b.Yb(7,"div",6),b.Yb(8,"span",7),b.Jc(9,"M\xe3 v\u1ea1ch"),b.Xb(),b.Xb(),b.Tb(10,"input",8),b.Xb(),b.Yb(11,"div",5),b.Yb(12,"div",6),b.Yb(13,"span",7),b.Jc(14,"T\xean"),b.Xb(),b.Xb(),b.Tb(15,"input",9),b.Xb(),b.Yb(16,"div",5),b.Yb(17,"div",6),b.Yb(18,"span",7),b.Jc(19,"S\u1ed1 l\u01b0\u1ee3ng"),b.Xb(),b.Xb(),b.Tb(20,"input",10),b.Xb(),b.Yb(21,"div",5),b.Yb(22,"div",6),b.Yb(23,"span",7),b.Jc(24,"\u0110\u01a1n v\u1ecb t\xednh"),b.Xb(),b.Xb(),b.Tb(25,"input",11),b.Xb(),b.Xb(),b.Yb(26,"div",4),b.Yb(27,"div",5),b.Yb(28,"div",6),b.Yb(29,"span",7),b.Jc(30,"Gi\xe1 v\u1ed1n"),b.Xb(),b.Xb(),b.Tb(31,"input",12),b.Xb(),b.Yb(32,"div",5),b.Yb(33,"div",6),b.Yb(34,"span",7),b.Jc(35,"Gi\xe1n B\xe1n"),b.Xb(),b.Xb(),b.Tb(36,"input",13),b.Xb(),b.Yb(37,"div",5),b.Yb(38,"div",6),b.Yb(39,"span",7),b.Jc(40,"Quy \u0111\u1ed5i \u0111\u01a1n v\u1ecb"),b.Xb(),b.Xb(),b.Tb(41,"input",14),b.Xb(),b.Yb(42,"div",5),b.Yb(43,"div",6),b.Yb(44,"span",7),b.Jc(45,"Nh\xf3m"),b.Xb(),b.Xb(),b.Tb(46,"input",15),b.Xb(),b.Xb(),b.Yb(47,"div",5),b.Yb(48,"div",6),b.Yb(49,"span",7),b.Jc(50,"H\xecnh \u1ea3nh"),b.Xb(),b.Xb(),b.Tb(51,"input",16),b.Yb(52,"div",17),b.Yb(53,"button",18),b.Jc(54,"Ch\u1ecdn h\xecnh"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(55,"label",19),b.Jc(56," Ch\u1ecdn file \u1ea3nh "),b.Tb(57,"i",20),b.Xb(),b.Yb(58,"input",21),b.fc("change",(function(n){return t.readThis(n)})),b.Xb(),b.Yb(59,"div",22),b.Hc(60,h,2,0,"button",23),b.Hc(61,m,2,0,"button",24),b.Yb(62,"button",25),b.fc("click",(function(){return t.goBack()})),b.Jc(63,"Quay l\u1ea1i"),b.Xb(),b.Hc(64,y,2,0,"button",26),b.Hc(65,v,2,0,"button",27),b.Xb(),b.Hc(66,g,3,0,"div",28),b.Xb(),b.Tb(67,"app-datalist",29),b.Tb(68,"app-datalist",29),b.Tb(69,"app-datalist",29),b.Tb(70,"img",30)),2&n&&(b.Hb(3),b.pc("formGroup",t.main),b.Hb(12),b.pc("readOnly",t.readonly),b.Hb(5),b.pc("readOnly",t.readonly),b.Hb(5),b.pc("readOnly",t.readonly),b.Hb(6),b.pc("readOnly",t.readonly),b.Hb(5),b.pc("readOnly",t.readonly),b.Hb(5),b.pc("readOnly",t.readonly),b.Hb(5),b.pc("readOnly",t.readonly),b.Hb(14),b.pc("ngIf",t.checkPer(2)&&t.main.valid),b.Hb(1),b.pc("ngIf",t.checkPer(2)),b.Hb(3),b.pc("ngIf",t.checkPer(4)),b.Hb(1),b.pc("ngIf",t.checkPer(7)),b.Hb(1),b.pc("ngIf",t.checkPer(4)),b.Hb(1),b.pc("nhom","congsuat"),b.Hb(1),b.pc("nhom","pha"),b.Hb(1),b.pc("nhom","tuyen"),b.Hb(1),b.qc("src",t.img,b.Bc))},directives:[r.u,r.k,r.e,r.b,r.j,r.d,r.o,s.a,c.m,p.a,d.a,f.a],styles:[""]}),k),D=[{path:"",component:(Y=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),Y.\u0275fac=function(n){return new(n||Y)},Y.\u0275cmp=b.Mb({type:Y,selectors:[["app-ban-hang"]],decls:2,vars:0,template:function(n,t){1&n&&(b.Yb(0,"p"),b.Jc(1,"ban-hang works!"),b.Xb())},styles:[""]}),Y)},{path:"hang-hoa",component:H}],T=((X=function n(){_classCallCheck(this,n)}).\u0275mod=b.Qb({type:X}),X.\u0275inj=b.Pb({factory:function(n){return new(n||X)},imports:[[u.e.forChild(D)],u.e]}),X),C=e("9QQf"),B=e("2E4B"),I=((x=function n(){_classCallCheck(this,n)}).\u0275mod=b.Qb({type:x}),x.\u0275inj=b.Pb({factory:function(n){return new(n||x)},imports:[[c.b,r.f,T,r.p,o.a,i.a,C.a,B.a,a.a]]}),x)}}]);