(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{SdCd:function(t,i,n){"use strict";n.r(i),n.d(i,"KhenThuongModule",(function(){return C}));var e=n("0rYp"),o=n("d/KH"),a=n("bSW0"),c=n("s7LF"),b=n("SVse"),r=n("COeT"),s=n("8Y7J"),l=n("iInd"),p=n("Dxy4"),d=n("tFlX"),u=n("Dmtc"),h=n("PDjf"),m=n("q8zl"),f=n("e6WT");function g(t,i){if(1&t){const t=s.Zb();s.Yb(0,"tr"),s.Yb(1,"td"),s.Jc(2),s.Xb(),s.Yb(3,"td"),s.Jc(4),s.Xb(),s.Yb(5,"td"),s.Jc(6),s.kc(7,"number"),s.Xb(),s.Yb(8,"td"),s.Yb(9,"i",42),s.fc("click",(function(){s.zc(t);const n=i.index;return s.jc(2).importData.splice(n,1)})),s.Xb(),s.Xb(),s.Xb()}if(2&t){const t=i.$implicit;s.Hb(2),s.Kc(t.MSNV),s.Hb(2),s.Kc(t.CaNhanTapThe),s.Hb(2),s.Kc(s.mc(7,3,t.SoTien,"1."))}}function Y(t,i){if(1&t&&(s.Yb(0,"div"),s.Yb(1,"button",38),s.Jc(2,"T\u1ea1o danh s\xe1ch"),s.Xb(),s.Yb(3,"mat-card"),s.Yb(4,"table",39),s.Yb(5,"thead",40),s.Yb(6,"tr"),s.Yb(7,"th"),s.Jc(8,"MSNV"),s.Xb(),s.Yb(9,"th"),s.Jc(10,"C\xe1 nh\xe2n/T\u1eadp th\u1ec3"),s.Xb(),s.Yb(11,"th"),s.Jc(12,"S\u1ed1 Ti\u1ec1n"),s.Xb(),s.Yb(13,"th"),s.Jc(14," | "),s.Xb(),s.Xb(),s.Xb(),s.Yb(15,"tbody"),s.Hc(16,g,10,6,"tr",41),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.jc();s.Hb(16),s.pc("ngForOf",t.importData)}}function X(t,i){if(1&t){const t=s.Zb();s.Yb(0,"button",43),s.fc("click",(function(){return s.zc(t),s.jc().add()})),s.Jc(1,"L\u01b0u"),s.Xb()}}function y(t,i){if(1&t){const t=s.Zb();s.Yb(0,"button",44),s.fc("click",(function(){s.zc(t);const i=s.jc();return i.readonly=!i.readonly})),s.Jc(1,"S\u1eeda"),s.Xb()}}function v(t,i){if(1&t){const t=s.Zb();s.Yb(0,"button",45),s.fc("click",(function(){return s.zc(t),s.jc().import()})),s.Jc(1,"import"),s.Xb()}}function T(t,i){if(1&t){const t=s.Zb();s.Yb(0,"button",46),s.fc("click",(function(){return s.zc(t),s.jc().deleteDB()})),s.Jc(1,"deleteDB"),s.Xb()}}function H(t,i){if(1&t){const t=s.Zb();s.Yb(0,"button",46),s.fc("click",(function(){return s.zc(t),s.jc().exportXLS()})),s.Jc(1,"export XLS"),s.Xb()}}function x(t,i){1&t&&s.Tb(0,"div",47)}function k(t,i){if(1&t){const t=s.Zb();s.Yb(0,"ul",55),s.Yb(1,"li",56),s.fc("click",(function(){s.zc(t);const n=i.$implicit,e=i.index;return s.jc(2).onSelectPer(n,e,!0)})),s.Jc(2),s.Xb(),s.Xb()}if(2&t){const t=i.$implicit;s.Hb(2),s.Kc(t.NoiDung)}}function D(t,i){if(1&t){const t=s.Zb();s.Yb(0,"ul",55),s.Yb(1,"li",56),s.fc("click",(function(){s.zc(t);const n=i.$implicit,e=i.index;return s.jc(2).onSelectPer(n,e)})),s.Jc(2),s.Xb(),s.Xb()}if(2&t){const t=i.$implicit;s.Hb(2),s.Kc(t.HoVaTen)}}function J(t,i){if(1&t){const t=s.Zb();s.Yb(0,"div",48),s.Yb(1,"div",3),s.Yb(2,"div",49),s.Yb(3,"label",50),s.Jc(4,"T\xecm c\xe1 nh\xe2n"),s.Xb(),s.Yb(5,"app-search-api",51),s.fc("data",(function(i){return s.zc(t),s.jc().findPerson(i)})),s.Xb(),s.Xb(),s.Yb(6,"div",49),s.Yb(7,"label",50),s.Jc(8,"T\xecm t\u1eadp th\u1ec3"),s.Xb(),s.Yb(9,"div",52),s.Tb(10,"input",53),s.Xb(),s.Hc(11,k,3,1,"ul",54),s.Xb(),s.Xb(),s.Hc(12,D,3,1,"ul",54),s.Xb()}if(2&t){const t=s.jc();s.Hb(5),s.pc("api","person"),s.Hb(4),s.pc("formGroup",t.timtapthe),s.Hb(2),s.pc("ngForOf",t.tapthe),s.Hb(1),s.pc("ngForOf",t.doituong)}}const N=[{path:"",component:(()=>{class t{constructor(t,i,n){this.plus=t,this.fb=i,this.route=n,this.dbName="khen-thuong",this.db=null,this.api="khen-thuong",this.importData=[],this.errorData=[],this.table="",this.showSearch=!1,this.doituong=[],this.readonly=!0,this.tapthe=[],this.main=this.fb.group({PhanLoai:[,[c.s.required]],NamCongNhan:[this.plus.dateFormat(Date.now(),"yyyy"),[c.s.required]],SoTien:[,[]],SoVB:[,[c.s.required]],NgayQD:[this.plus.dateFormat(Date.now(),"YYYY-MM-DD"),[c.s.required]],CapQD:[,[c.s.required]],NoiDung:[,[c.s.required]]}),this.timtapthe=this.fb.group({find:[,[]]})}ngOnInit(){this.init_IDB(),this.onSelectTT()}init_IDB(){this.plus.IDB_InitDB(this.dbName).subscribe(t=>{this.db=t,this.getById()})}getById(){this.plus.load();const t=this.route.snapshot.paramMap.get("id");t?this.plus.httpGet(this.api+"/id/"+t).subscribe(t=>{let i=this.plus.decrypt(t.data);this.main.patchValue(i),this.plus.loaded()},i=>{this.plus.alertError("D\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u s\u1ebd hi\u1ec3n th\u1ecb n\u1ebfu c\xf3"),this.plus.IDB_DB_GetByKey(this.db,this.api,+t).subscribe(t=>{this.main.patchValue(t),this.plus.loaded()}),this.plus.loaded()}):this.plus.loaded()}save(){const t=this.route.snapshot.paramMap.get("id");let i=this.main.value;+t>0?this.plus.httpPut(this.api,i).subscribe(t=>{this.plus.alertToasrt(t),this.plus.IDB_DB_Add(this.db,this.api,i)}):this.plus.httpPost(this.api,i).subscribe(t=>{this.plus.alertToasrt(t),this.plus.IDB_DB_Add(this.db,this.api,i)})}add(){const t=this.plus.arr_Remove_Duplicate(this.importData);this.plus.httpPost(this.api,t).subscribe(t=>{console.log(t)})}checkPer(t){return this.plus.checkPer(this.api,t)}import(){const t=this.importData.map(t=>{let i=t;return i.keyWord=this.plus.removeAccents(JSON.stringify(t)),i});console.log(t);let i=JSON.stringify(t),n={data:this.plus.encrypt(i)};this.plus.httpPost(this.api+"/import",n).subscribe(t=>{this.plus.alertToasrt(t),console.log(t)})}findPerson(t){this.doituong=t}onSelectPer(t,i,n=!1){this.tapthe=[];const e=this.main.value;if(this.main.valid&&!n){this.doituong.splice(i,1);const n=Object.assign({},e);n.MSNV=t.SoHieuNhanSu,n.CaNhanTapThe=t.HoVaTen,this.importData.push(n)}else{this.tapthe.splice(i,1);const n=Object.assign({},e);n.MSNV=0,n.CaNhanTapThe=t.NoiDung,this.importData.push(n)}this.importData=this.plus.arr_Remove_Duplicate(this.importData)}onSelectTT(){this.doituong=[];const t=this.plus.getCatalog("tapthe");this.timtapthe.valueChanges.pipe().subscribe(i=>{this.tapthe=this.plus.searchTable(t,i.find)})}onPaste(t){const i=t[1];console.log(i);let n={_id:+i[0],MaTram:i[0],TenTram:i[1]};console.log(n),this.main.patchValue(n)}onSelectFile(t){const i=t.slice(2);console.log(i),i.forEach((t,i)=>{let n={_id:+t[0],MaTram:t[0]};this.main.patchValue(n),this.main.valid?this.importData.push(n):this.errorData.push(n)})}goBack(){this.plus.goBack()}deleteDB(){this.plus.httpDelete(this.api,"/find/all").subscribe(t=>{console.log(t)})}parse(t){console.log(t)}exportXLS(){this.plus.exportToExcel(this.importData)}}return t.\u0275fac=function(i){return new(i||t)(s.Sb(r.a),s.Sb(c.c),s.Sb(l.a))},t.\u0275cmp=s.Mb({type:t,selectors:[["app-khen-thuong-edit"]],decls:77,vars:22,consts:[[1,"container"],[1,"text-primary","text-center"],[3,"formGroup"],[1,"row"],[1,"col","col-md-6"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["type","text","list","khenthuong","formControlName","PhanLoai",1,"form-control",3,"readOnly"],["type","text","formControlName","SoVB",1,"form-control",3,"readOnly"],["type","number","formControlName","SoTien",1,"form-control",3,"readOnly"],["type","date","formControlName","NgayQD",1,"form-control",3,"readOnly"],["type","text","list","khenthuong","formControlName","CapQD",1,"form-control",3,"readOnly"],["type","number","formControlName","NamCongNhan",1,"form-control",3,"readOnly"],["type","text","formControlName","NoiDung",1,"form-control",3,"readOnly"],[4,"ngIf"],[1,"text-center","example-button-row"],["style","margin: 8px 8px 8px 0;","mat-raised-button","","color","warn",3,"click",4,"ngIf"],["style","margin: 8px 8px 8px 0;","mat-raised-button","","color","accent",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",2,"margin","8px 8px 8px 0",3,"click"],["class","btn btn-outline-danger mx-3",3,"click",4,"ngIf"],["class","btn btn-outline-info mx-3",3,"click",4,"ngIf"],["class","import",4,"ngIf"],[1,"table",3,"innerHTML"],[3,"nhom"],[3,"excel"],["id","modelId","tabindex","-1","role","dialog","aria-labelledby","modelTitleId","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["class","search-person",4,"ngIf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"],["type","button","data-toggle","modal","data-target","#modelId","mat-raised-button","","color","primary",2,"margin","8px 8px 8px 0"],[1,"table","table-striped","table-inverse","table-responsive"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["aria-hidden","true",1,"fa","fa-trash","text-danger",3,"click"],["mat-raised-button","","color","warn",2,"margin","8px 8px 8px 0",3,"click"],["mat-raised-button","","color","accent",2,"margin","8px 8px 8px 0",3,"click"],[1,"btn","btn-outline-danger","mx-3",3,"click"],[1,"btn","btn-outline-info","mx-3",3,"click"],[1,"import"],[1,"search-person"],[1,"col-md-6"],["for",""],[3,"api","data"],[1,"form-group",3,"formGroup"],["matInput","","type","text","placeholder","Nh\u1eadp t\xean t\u1eadp th\u1ec3","formControlName","find"],["class","list-group",4,"ngFor","ngForOf"],[1,"list-group"],[1,"list-group-item",3,"click"]],template:function(t,i){1&t&&(s.Yb(0,"div",0),s.Yb(1,"h4",1),s.Jc(2,"C\u1eadp nh\u1eadt khen th\u01b0\u1edfng"),s.Xb(),s.Yb(3,"div",2),s.Yb(4,"div",3),s.Yb(5,"div",4),s.Yb(6,"div",3),s.Yb(7,"div",5),s.Yb(8,"div",6),s.Yb(9,"span",7),s.Jc(10,"Ph\xe2n Lo\u1ea1i"),s.Xb(),s.Xb(),s.Tb(11,"input",8),s.Xb(),s.Yb(12,"div",5),s.Yb(13,"div",6),s.Yb(14,"span",7),s.Jc(15,"S\u1ed1 VB"),s.Xb(),s.Xb(),s.Tb(16,"input",9),s.Xb(),s.Yb(17,"div",5),s.Yb(18,"div",6),s.Yb(19,"span",7),s.Jc(20,"S\u1ed1 ti\u1ec1n"),s.Xb(),s.Xb(),s.Tb(21,"input",10),s.Xb(),s.Xb(),s.Xb(),s.Yb(22,"div",4),s.Yb(23,"div",5),s.Yb(24,"div",6),s.Yb(25,"span",7),s.Jc(26,"Ng\xe0y Q\u0110"),s.Xb(),s.Xb(),s.Tb(27,"input",11),s.Xb(),s.Yb(28,"div",5),s.Yb(29,"div",6),s.Yb(30,"span",7),s.Jc(31,"C\u1ea5p Q\u0110"),s.Xb(),s.Xb(),s.Tb(32,"input",12),s.Xb(),s.Yb(33,"div",5),s.Yb(34,"div",6),s.Yb(35,"span",7),s.Jc(36,"N\u0103m c\xf4ng nh\u1eadn"),s.Xb(),s.Xb(),s.Tb(37,"input",13),s.Xb(),s.Xb(),s.Yb(38,"div",5),s.Yb(39,"div",6),s.Yb(40,"span",7),s.Jc(41,"N\u1ed9i dung Q\u0110"),s.Xb(),s.Xb(),s.Tb(42,"input",14),s.Xb(),s.Xb(),s.Xb(),s.Hc(43,Y,17,1,"div",15),s.Yb(44,"div",16),s.Hc(45,X,2,0,"button",17),s.Hc(46,y,2,0,"button",18),s.Yb(47,"button",19),s.fc("click",(function(){return i.goBack()})),s.Jc(48,"Quay l\u1ea1i"),s.Xb(),s.Hc(49,v,2,0,"button",20),s.Hc(50,T,2,0,"button",21),s.Hc(51,H,2,0,"button",21),s.Xb(),s.Hc(52,x,1,0,"div",22),s.Tb(53,"div",23),s.Tb(54,"app-datalist",24),s.Yb(55,"app-parse-excel-clipboard",25),s.fc("excel",(function(t){return i.parse(t)})),s.Xb(),s.Xb(),s.Yb(56,"div",26),s.Yb(57,"div",27),s.Yb(58,"div",28),s.Yb(59,"div",29),s.Yb(60,"h5",30),s.Jc(61,"T\xecm c\xe1 nh\xe2n - T\u1eadp th\u1ec3"),s.Xb(),s.Yb(62,"button",31),s.Yb(63,"span",32),s.Jc(64,"\xd7"),s.Xb(),s.Xb(),s.Xb(),s.Yb(65,"div",33),s.Hc(66,J,13,4,"div",34),s.Xb(),s.Yb(67,"div",35),s.Yb(68,"button",36),s.Jc(69,"Close"),s.Xb(),s.Yb(70,"button",37),s.Jc(71,"Save"),s.Xb(),s.Yb(72,"p"),s.Jc(73),s.Xb(),s.Yb(74,"p"),s.Jc(75),s.kc(76,"json"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t&&(s.Hb(3),s.pc("formGroup",i.main),s.Hb(8),s.pc("readOnly",i.readonly),s.Hb(5),s.pc("readOnly",i.readonly),s.Hb(5),s.pc("readOnly",i.readonly),s.Hb(6),s.pc("readOnly",i.readonly),s.Hb(5),s.pc("readOnly",i.readonly),s.Hb(5),s.pc("readOnly",i.readonly),s.Hb(5),s.pc("readOnly",i.readonly),s.Hb(1),s.pc("ngIf",i.main.valid),s.Hb(2),s.pc("ngIf",i.checkPer(2)&&i.main.valid),s.Hb(1),s.pc("ngIf",i.checkPer(2)),s.Hb(3),s.pc("ngIf",i.checkPer(4)),s.Hb(1),s.pc("ngIf",i.checkPer(7)),s.Hb(1),s.pc("ngIf",i.checkPer(2)),s.Hb(1),s.pc("ngIf",i.checkPer(4)),s.Hb(1),s.pc("innerHTML",i.table,s.Ac),s.Hb(1),s.pc("nhom","khenthuong"),s.Hb(12),s.pc("ngIf",i.main.valid&&i.checkPer(2)),s.Hb(7),s.Kc(i.main.valid),s.Hb(2),s.Kc(s.lc(76,20,i.main.value)))},directives:[c.k,c.e,c.b,c.j,c.d,c.o,b.m,p.a,d.a,u.a,h.a,b.l,m.a,f.a],pipes:[b.g,b.e],styles:[""]}),t})()}];let S=(()=>{class t{}return t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(i){return new(i||t)},imports:[[l.e.forChild(N)],l.e]}),t})();var I=n("9QQf");let C=(()=>{class t{}return t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(i){return new(i||t)},providers:[],imports:[[b.b,S,c.p,a.a,I.a,o.a,e.a]]}),t})()}}]);