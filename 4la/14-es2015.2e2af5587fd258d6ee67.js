(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{IrIT:function(t,e,n){"use strict";n.r(e),n.d(e,"EmailModule",(function(){return G}));var i=n("s7LF"),s=n("SVse"),a=n("mrSG"),o=n("IheW"),r=n("COeT"),l=n("KZYO"),c=n("GS7A");class h{constructor(t,e,n,i){this.loader=t,this.url=e,this.http=n,this.plus=i}uploadFile(t,e,n){let i=new FormData;const s=new o.d({"ngsw-bypass":""});return i.append("file",t),console.log("formData",i),new o.e,this.http.post("https://dienluc.herokuapp.com/api/upload",i,{headers:s})}upload(){return new Promise((t,e)=>{this.loader.file.then(n=>{this.uploadFile(n,this.url,"test").subscribe(e=>{console.log(e),t({default:e.url})},t=>{e("Ch\u1ee9c n\u0103ng b\u1ecb l\u1ed7i.\nVui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat!"),console.log(n)})})})}abort(){console.log("abort")}}var b=n("EUZL"),d=n("8Y7J"),u=n("iInd"),g=n("PjcS");const p=["myEditor"];function m(t,e){if(1&t&&(d.Yb(0,"div",19),d.Yb(1,"div",20),d.Jc(2),d.Xb(),d.Xb()),2&t){const t=d.jc();d.Hb(1),d.Fc("width",t.uploadProgress+"%"),d.Hb(1),d.Lc("",t.uploadProgress,"%")}}function f(t,e){if(1&t){const t=d.Zb();d.Yb(0,"div",21),d.Yb(1,"div",22),d.Yb(2,"span",23),d.Jc(3,"\u0110\u01b0\u1eddng d\u1eabn file t\u1ea3i l\xean:"),d.Xb(),d.Xb(),d.Tb(4,"input",24,25),d.Yb(6,"div",26),d.Yb(7,"button",27),d.fc("click",(function(){d.zc(t);const e=d.yc(5);return d.jc().copyInputMessage(e)})),d.Tb(8,"i",28),d.Xb(),d.Xb(),d.Xb()}if(2&t){const t=d.jc();d.Hb(4),d.qc("value",t.linkUpload)}}function y(t,e){if(1&t&&(d.Yb(0,"tr"),d.Yb(1,"td"),d.Jc(2),d.Xb(),d.Yb(3,"td"),d.Jc(4),d.Xb(),d.Yb(5,"td"),d.Jc(6),d.Xb(),d.Xb()),2&t){const t=e.$implicit;d.Hb(2),d.Lc(" ",t.receiver," "),d.Hb(2),d.Lc(" ",t.email," "),d.Hb(2),d.Lc(" ",t.err," ")}}function J(t,e){if(1&t&&(d.Yb(0,"div"),d.Yb(1,"h4",29),d.Jc(2,"DANH S\xc1CH D\u1eee LI\u1ec6U KH\xd4NG H\u1ee2P L\u1ec6"),d.Xb(),d.Yb(3,"table",30),d.Yb(4,"tr",31),d.Yb(5,"th"),d.Jc(6,"Kh\xe1ch h\xe0ng "),d.Xb(),d.Yb(7,"th"),d.Jc(8," Email "),d.Xb(),d.Yb(9,"th"),d.Jc(10," N\u1ed9i dung l\u1ed7i "),d.Xb(),d.Xb(),d.Hc(11,y,7,3,"tr",32),d.Xb(),d.Xb()),2&t){const t=d.jc();d.Hb(11),d.pc("ngForOf",t.errData)}}function X(t,e){1&t&&(d.Yb(0,"label",33),d.Tb(1,"i",34),d.Jc(2,"Danh s\xe1ch g\u1eedi email "),d.Xb())}function v(t,e){if(1&t){const t=d.Zb();d.Yb(0,"button",35),d.fc("click",(function(){return d.zc(t),d.jc().checkImportData()})),d.Jc(1,"Ki\u1ec3m tra "),d.Xb()}}function H(t,e){if(1&t){const t=d.Zb();d.Yb(0,"button",35),d.fc("click",(function(){return d.zc(t),d.jc().reload()})),d.Jc(1,"L\xe0m l\u1ea1i "),d.Xb()}}const I=function(t,e){return{"bg-success":t,"bg-danger":e}};function Y(t,e){if(1&t&&(d.Yb(0,"tr"),d.Yb(1,"td"),d.Jc(2),d.Xb(),d.Yb(3,"td",40),d.Jc(4),d.Xb(),d.Yb(5,"td",40),d.Jc(6),d.Xb(),d.Yb(7,"td",41),d.Jc(8),d.Xb(),d.Xb()),2&t){const t=e.$implicit,n=e.index;d.pc("@shrinkOut","in"),d.Hb(2),d.Kc(n+1),d.Hb(2),d.Kc(t.receiver),d.Hb(2),d.Kc(t.email),d.Hb(1),d.pc("ngClass",d.vc(6,I,t.status,3===t.status)),d.Hb(1),d.Lc(" ",1===t.status?"\u0110\xe3 g\u1eedi":"Ch\u01b0a g\u1eedi","")}}function k(t,e){if(1&t){const t=d.Zb();d.Yb(0,"button",42),d.fc("click",(function(){return d.zc(t),d.jc(2).sendMail()})),d.Jc(1,"G\u1eedi mail"),d.Xb()}}function T(t,e){if(1&t&&(d.Yb(0,"div",36),d.Yb(1,"h5"),d.Jc(2,"DANH S\xc1CH EMAIL \u0110\u01af\u1ee2C TH\xd4NG B\xc1O"),d.Xb(),d.Yb(3,"table",37),d.Yb(4,"thead"),d.Yb(5,"tr"),d.Yb(6,"th"),d.Jc(7,"STT"),d.Xb(),d.Yb(8,"th"),d.Jc(9,"Ng\u01b0\u1eddi nh\u1eadn"),d.Xb(),d.Yb(10,"th"),d.Jc(11,"Email"),d.Xb(),d.Yb(12,"th",38),d.Jc(13,"Tr\u1ea1ng th\xe1i"),d.Xb(),d.Xb(),d.Xb(),d.Yb(14,"tbody"),d.Hc(15,Y,9,9,"tr",32),d.Xb(),d.Xb(),d.Hc(16,k,2,0,"button",39),d.Xb()),2&t){const t=d.jc();d.Hb(15),d.pc("ngForOf",t.dataJson),d.Hb(1),d.pc("ngIf",0===t.errData.length&&t.dataJson.length>0)}}function D(t,e){if(1&t){const t=d.Zb();d.Yb(0,"button",50),d.fc("click",(function(){return d.zc(t),d.jc(2).pre()})),d.Tb(1,"i",51),d.Xb()}}function L(t,e){if(1&t){const t=d.Zb();d.Yb(0,"button",52),d.fc("click",(function(){return d.zc(t),d.jc(2).next()})),d.Tb(1,"i",53),d.Xb()}}function x(t,e){if(1&t&&d.Tb(0,"div",54),2&t){const t=d.jc(2);d.pc("innerHTML",t.dataJson[t.i].message,d.Ac)}}function w(t,e){if(1&t&&(d.Yb(0,"div",43),d.Yb(1,"div",44),d.Hc(2,D,2,0,"button",45),d.Hc(3,L,2,0,"button",46),d.Xb(),d.Yb(4,"div",47),d.Yb(5,"h5",48),d.Jc(6),d.Xb(),d.Hc(7,x,1,1,"div",49),d.Xb(),d.Tb(8,"hr"),d.Xb()),2&t){const t=d.jc();d.Hb(2),d.pc("ngIf",t.i>0&&t.dataJson.length>t.i),d.Hb(1),d.pc("ngIf",t.dataJson.length-1>t.i),d.Hb(3),d.Lc("N\u1ed9i dung \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn email ",t.dataJson[t.i].email," "),d.Hb(1),d.pc("ngIf",t.dataJson[t.i].message)}}let C=(()=>{class t{constructor(t,e,n,s){this.plus=t,this.fb=e,this.httpClient=n,this.router=s,this.Editor=l,this.apibox="box/",this.apiUpload="https://dienluc.herokuapp.com/api/upload",this.collection="notify",this.db=null,this.dbName="email",this.dbVer=1,this.selectedFile=null,this.dataImport=[],this.dataJson=[],this.errData=[],this.sent=[],this.resent=[],this.send="",this.htmlContent=sessionStorage.getItem("htmlContent")||"Xin ch\xe0o!",this.uploadProgress=0,this.i=0,this.main=this.fb.group({email:[,i.s.email],title:["Th\xf4ng b\xe1o ",[i.s.minLength(3)]],message:["\u0110i\u1ec7n l\u1ef1c xin th\xf4ng b\xe1o nh\u01b0 sau:",i.s.minLength(3)]}),this.account=this.fb.group({user:["",i.s.minLength(3)],pass:["",i.s.minLength(6)]}),this.checkBody=this.fb.group({from:["",[i.s.required,i.s.minLength(10)]],status:0,err:"",email:[,i.s.email],receiver:["",[i.s.required,i.s.minLength(3)]],title:["",[i.s.required,i.s.minLength(3)]],message:["",[i.s.required,i.s.minLength(3)]]}),this.uploadForm=this.fb.group({profile:[""]})}ngOnInit(){this.reset(),console.log(this.resent),this.init(),this.plus.httpGetFull(this.apiUpload).subscribe(t=>{console.log(t)})}onReady(t){t.ui.getEditableElement().parentElement.insertBefore(t.ui.view.toolbar.element,t.ui.getEditableElement()),t.plugins.get("FileRepository").createUploadAdapter=t=>(console.log(btoa(t.file)),new h(t,"/upload",this.httpClient,this.plus))}saveArticle(){this.dataJson.length>0&&(this.plus.alertToasrt({war:"B\u1ea1n c\u1ea7n ch\u1ecdn l\u1ea1i danh s\xe1ch nh\u1eadn email sau khi hi\u1ec7u ch\u1ec9nh n\u1ed9i dung!"}),this.reset()),this.htmlContent=this.getArticleContent(),sessionStorage.setItem("htmlContent",this.htmlContent)}getArticleContent(){return this.myEditor&&this.myEditor.editorInstance?this.myEditor.editorInstance.getData():""}init(){this.from=this.plus.user.getValue().usrInfo.unit,this.plus.IDB_DB_GetAll(this.db,this.collection).subscribe(t=>{console.log(t),t.filter(t=>{0==t.status&&(console.log(t),this.resent.push(t))}),this.resent.length>0?(console.log(this.resent),confirm("B\u1ea5m OK \u0111\u1ec3 g\u1eedi mail tr\u01b0\u1edbc ch\u01b0a ho\xe0n th\xe0nh.\nB\u1ea5m Cancel \u0111\u1ec3 x\xf3a phi\xean l\xe0m vi\u1ec7c tr\u01b0\u1edbc?")?this.dataJson=this.resent:this.plus.IDB_DB_ClearCollection(this.db,this.collection).subscribe(t=>{t&&console.log("clear")})):this.plus.IDB_DB_ClearCollection(this.db,this.collection).subscribe(t=>{t&&console.log("clear")})}),0===this.from.length&&(this.plus.alertToasrt({err:"B\u1ea1n ch\u01b0a khai b\xe1o \u0111\u01a1n v\u1ecb t\u1ea1i m\u1ee5c T\xe0i Kho\u1ea3n"}),this.router.navigateByUrl("/taikhoan"))}getFails(){}readXlsx(t){this.dataJson=[],this.dataImport=[];let e=t.target;const n=new FileReader;n.onload=t=>{const e=b.read(t.target.result,{type:"binary"});this.dataImport=b.utils.sheet_to_json(e.Sheets[e.SheetNames[0]],{header:1})},n.readAsBinaryString(e.files[0]),e=null}reload(){return Object(a.__awaiter)(this,void 0,void 0,(function*(){return yield this.router.navigate([""]),this.router.navigate(["email/thongbao"])}))}checkImportData(){this.dataImport.length>200&&(this.reset(),this.plus.alertToasrt({err:"S\u1ed1 l\u01b0\u1ee3ng email v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n\nVui l\xf2ng ch\u1ecdn d\u01b0\u1edbi 200 email cho m\u1ed7i l\u1ea7n g\u1eedi!"})),this.dataJson=[];const t=this.dataImport[0];this.dataImport.splice(0,1),this.dataImport.forEach(e=>{let n="",i=0;if("x"==e[1]){for(let a=5;a<6;a++)n+=`${t[a]} : ${this.plus.numberWithCommas(e[a])}`,i+=e[a];let s={from:this.from,status:0,err:"",receiver:e[3],email:e[4],title:""+this.main.get("title").value,message:`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K\xednh g\u1eedi ${e[2]}: ${e[3]}\n\n                      ${this.htmlContent}  \n ${n} \n <br>\n                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tr\xe2n tr\u1ecdng.\n                      <hr>\n                      <table class="table">\n                      <td><img src="https://dienluc.tk/assets/file/NhanHieuDLuc-Doc-150x150.jpg"> </td>\n                      <td>\n                        <b>\u0110i\u1ec7n l\u1ef1c Xu\xe2n L\u1ed9c - C\xf4ng ty TNHH m\u1ed9t th\xe0nh vi\xean \u0110i\u1ec7n l\u1ef1c \u0110\u1ed3ng Nai.</b><br>\n                        <b>\u0110\u1ecba ch\u1ec9: S\u1ed1 94 H\xf9ng V\u01b0\u01a1ng - Th\u1ecb tr\u1ea5n Gia Ray - Huy\u1ec7n Xu\xe2n L\u1ed9c - T\u1ec9nh \u0110\u1ed3ng Nai.</b><br>\n                        <b>MST: 3600432744 - 004</b><br>\n                        <b>Li\xean h\u1ec7: <a href="tel:02512218242" title="02512218242">0251.2218.242 </a></b><br>\n                        <b>T\u1ed5ng \u0111\xe0i ch\u0103m s\xf3c kh\xe1ch h\xe0ng: <a href="tel:19001006">19001006</a> - <a href="tel:19009000">19009000</a></b><br>\n                      </td>\n                      </table>\n                      `};if(this.checkBody.patchValue(s),this.checkBody.valid)this.dataJson.push(s),s._id=s.email,console.log(s),this.plus.IDB_DB_Add(this.db,this.collection,s);else{if(this.checkBody.valid)return void console.log("ret");{console.log("else if");const t=this.plus.getErrValidateForm(this.checkBody);console.log(t),s.err=t,this.errData.push(s)}}if(this.errData.length>0)return console.log(this.errData),this.plus.IDB_DB_ClearCollection(this.db,this.collection).subscribe(t=>{t&&this.plus.alertWarning("D\u1eef li\u1ec7u c\xf3 l\u1ed7i!")});this.plus.loaded()}})}sendMail(){return Object(a.__awaiter)(this,void 0,void 0,(function*(){const t=confirm("Th\u1ef1c hi\u1ec7n th\xf4ng b\xe1o cho "+this.dataJson.length+" CBCNV?");if(0===this.errData.length&&this.dataJson.length>0&&t){let t=0;const e=this.dataJson.length;for(;t<e;){yield this.plus.sleep(5e3),this.i=t;const e=this.dataJson[t];this.plus.sendMail(e).subscribe(n=>{console.log(),n.email&&(this.dataJson.filter((t,e)=>{t.email===n.email&&(this.dataJson[e].status=1,this.plus.IDB_DB_DeleteOne(this.db,this.collection,t.email))}),console.log(t,n.email,e.reciver),localStorage.setItem("notify",JSON.stringify(this.dataJson)))},n=>{this.dataJson[t].status=0,localStorage.setItem("notify",JSON.stringify(this.dataJson)),this.plus.alertToasrt({err:" Ch\u01b0a g\u1eedi email \u0111\u1ebfn "+e.reciver})}),t++}}else this.plus.alertToasrt({war:"\u0110\xe3 h\u1ee7y thao t\xe1c!"}),window.location.reload()}))}uploadDrive(t){this.plus.load(),console.log(t.target.files[0]);const e=t.target.files[0].size;if(console.log(e),e>52428800)return this.plus.alertToasrt({war:"Dung l\u01b0\u1ee3ng file qu\xe1 50Mb"}),void this.plus.loaded();const n=new FormData;n.append("file",t.target.files[0]);const i=new o.d({"ngsw-bypass":""});this.httpClient.post(this.apiUpload,n,{reportProgress:!0,observe:"events",headers:i}).subscribe(t=>{t.type===o.c.UploadProgress?this.uploadProgress=Math.round(t.loaded/t.total*100):t.type===o.c.Response&&(this.linkUpload=t.body.url,this.plus.pushLocalStorage("link",t.body.url),this.plus.loaded())},t=>{this.plus.loaded(),this.plus.alertToasrt({err:"L\u1ed7i upload file! \nVui l\xf2ng th\u1eed l\u1ea1i!"})})}copyInputMessage(t){this.plus.copyInputMessage(t)}getBase64(t){const e=new FileReader;return e.readAsDataURL(t),e.onload=()=>{},e.onerror=t=>{console.log("Error: ",t)},e.result}pre(){this.i>0?this.i--:this.i=0}next(){this.i<this.dataJson.length-1?this.i++:this.i=0}reset(){this.dataJson=[],this.errData=[],this.linkUpload="",this.uploadProgress=0}logList(t){this.dataJson.splice(0,1),localStorage.setItem("sendmail",this.dataJson.toString())}sliceList(t){}export(t){this.plus.exportHTML(t)}}return t.\u0275fac=function(e){return new(e||t)(d.Sb(r.a),d.Sb(i.c),d.Sb(o.a),d.Sb(u.b))},t.\u0275cmp=d.Mb({type:t,selectors:[["app-notify"]],viewQuery:function(t,e){if(1&t&&d.Oc(p,!0),2&t){let t;d.xc(t=d.gc())&&(e.myEditor=t.first)}},decls:25,vars:11,consts:[[1,"container","my-3"],[1,"text-center","text-primary"],[1,"import"],["for","file-upload",1,"custom-file-upload","mx-5"],[1,"fa","fa-file","text-primary"],["hidden","","id","file-upload","name","filesUploaded","type","file","multiple","false",3,"change"],["class","progress",4,"ngIf"],["class","input-group mb-3",4,"ngIf"],[3,"editor","data","ready","change"],["myEditor",""],[4,"ngIf"],[1,"list"],["target","_blank","href","/assets/file/MauThongBao.xlsx",1,"badge","badge-warning"],["for","file-import","class","custom-file-upload mx-5",4,"ngIf"],["hidden","","id","file-import","type","file","multiple","false",3,"change"],["type","button","class","btn btn-outline-primary mx-3",3,"click",4,"ngIf"],["class","dataOk",4,"ngIf"],["class","card border-primary rounded",4,"ngIf"],["id","11",3,"innerHTML","click"],[1,"progress"],["role","progressbar","aria-valuenow","0","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-primary"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["type","text",1,"form-control",3,"value"],["userinput",""],[1,"input-group-append"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"fa","fa-copy"],[1,"text-center","bg-warning","rounded-pill"],[1,"table","table-hover","table-invert","table-bordered","rounded-pill"],[1,"text-center","bg-danger"],[4,"ngFor","ngForOf"],["for","file-import",1,"custom-file-upload","mx-5"],[1,"fa","fa-address-book"],["type","button",1,"btn","btn-outline-primary","mx-3",3,"click"],[1,"dataOk"],[1,"table","table-hover"],[1,"text-center"],["type","button","class","btn btn-primary mx-3 text-center","data-toggle","modal","data-target","#modelId",3,"click",4,"ngIf"],["scope","row"],[1,"text-center",3,"ngClass"],["type","button","data-toggle","modal","data-target","#modelId",1,"btn","btn-primary","mx-3","text-center",3,"click"],[1,"card","border-primary","rounded"],[1,"button"],["type","button","class","btn btn-danger float-left",3,"click",4,"ngIf"],["type","button","class","btn btn-danger float-right",3,"click",4,"ngIf"],[1,"card-body"],[1,"text-center","rounded","font-weigth-bold","bg-warning","my-4"],[3,"innerHTML",4,"ngIf"],["type","button",1,"btn","btn-danger","float-left",3,"click"],["aria-hidden","true",1,"fa","fa-arrow-left"],["type","button",1,"btn","btn-danger","float-right",3,"click"],["aria-hidden","true",1,"fa","fa-arrow-right"],[3,"innerHTML"]],template:function(t,e){1&t&&(d.Yb(0,"div",0),d.Yb(1,"h5",1),d.Jc(2,"G\u1eecI TH\xd4NG B\xc1O B\u1eb0NG EMAIL"),d.Xb(),d.Yb(3,"div",2),d.Yb(4,"label",3),d.Tb(5,"i",4),d.Jc(6,"File \u0111\xednh k\xe8m "),d.Xb(),d.Yb(7,"input",5),d.fc("change",(function(t){return e.uploadDrive(t)})),d.Xb(),d.Hc(8,m,3,3,"div",6),d.Hc(9,f,9,1,"div",7),d.Yb(10,"ckeditor",8,9),d.fc("ready",(function(t){return e.onReady(t)}))("change",(function(){return e.saveArticle()})),d.Xb(),d.Hc(12,J,12,1,"div",10),d.Yb(13,"div",11),d.Tb(14,"hr"),d.Yb(15,"a",12),d.Jc(16,"File m\u1eabu"),d.Xb(),d.Hc(17,X,3,0,"label",13),d.Yb(18,"input",14),d.fc("change",(function(t){return e.readXlsx(t)})),d.Xb(),d.Hc(19,v,2,0,"button",15),d.Hc(20,H,2,0,"button",15),d.Xb(),d.Hc(21,T,17,2,"div",16),d.Tb(22,"hr"),d.Xb(),d.Hc(23,w,9,4,"div",17),d.Xb(),d.Yb(24,"p",18),d.fc("click",(function(){return e.export("11")})),d.Xb()),2&t&&(d.Hb(8),d.pc("ngIf",e.uploadProgress>0&&e.uploadProgress<100),d.Hb(1),d.pc("ngIf",e.linkUpload),d.Hb(1),d.qc("data",e.htmlContent),d.pc("editor",e.Editor),d.Hb(2),d.pc("ngIf",e.errData.length>0),d.Hb(5),d.pc("ngIf",0===e.dataJson.length),d.Hb(2),d.pc("ngIf",e.dataImport.length>0&&0===e.dataJson.length&&0===e.errData.length),d.Hb(1),d.pc("ngIf",e.errData.length>0),d.Hb(1),d.pc("ngIf",e.dataJson.length>0&&0===e.errData.length),d.Hb(2),d.pc("ngIf",e.dataJson.length>0&&0===e.errData.length),d.Hb(1),d.pc("innerHTML",e.htmlContent,d.Ac))},directives:[s.m,g.a,s.l,s.k],styles:[""],data:{animation:[Object(c.j)("fadeInOut",[Object(c.g)("void",Object(c.h)({opacity:0})),Object(c.i)("void <=> *",Object(c.e)(1e3))]),Object(c.j)("shrinkOut",[Object(c.g)("in",Object(c.h)({height:"*"})),Object(c.i)("* => void",[Object(c.h)({height:"*"}),Object(c.e)(250,Object(c.h)({height:0}))])])]}}),t})();function S(t,e){if(1&t){const t=d.Zb();d.Yb(0,"button",17),d.fc("click",(function(){return d.zc(t),d.jc().checkImportData()})),d.Jc(1,"Xem tr\u01b0\u1edbc"),d.Xb()}}function B(t,e){if(1&t){const t=d.Zb();d.Yb(0,"div",18),d.Yb(1,"div",19),d.Yb(2,"button",20),d.fc("click",(function(){return d.zc(t),d.jc().pre()})),d.Tb(3,"i",21),d.Xb(),d.Yb(4,"button",22),d.fc("click",(function(){return d.zc(t),d.jc().next()})),d.Tb(5,"i",23),d.Xb(),d.Xb(),d.Yb(6,"div",24),d.Yb(7,"h5",25),d.Jc(8,"N\u1ed8I DUNG EMAIL"),d.Xb(),d.Tb(9,"div",26),d.Xb(),d.Tb(10,"hr"),d.Xb()}if(2&t){const t=d.jc();d.Hb(9),d.pc("innerHTML",t.dataJson[t.i].message,d.Ac)}}function O(t,e){if(1&t&&(d.Yb(0,"tr"),d.Yb(1,"td"),d.Jc(2),d.Xb(),d.Yb(3,"td"),d.Jc(4),d.Xb(),d.Xb()),2&t){const t=e.$implicit;d.Hb(2),d.Lc(" ",t.email," "),d.Hb(2),d.Lc(" ",t.err," ")}}function N(t,e){if(1&t&&(d.Yb(0,"div",27),d.Yb(1,"h4"),d.Jc(2,"DANH S\xc1CH D\u1eee LI\u1ec6U KH\xd4NG H\u1ee2P L\u1ec6"),d.Xb(),d.Yb(3,"table",28),d.Hc(4,O,5,2,"tr",29),d.Xb(),d.Xb()),2&t){const t=d.jc();d.Hb(4),d.pc("ngForOf",t.errData)}}const j=function(t,e){return{"bg-success":t,"bg-danger":e}};function M(t,e){if(1&t&&(d.Yb(0,"tr"),d.Yb(1,"td"),d.Jc(2),d.Xb(),d.Yb(3,"td",33),d.Jc(4),d.Xb(),d.Yb(5,"td",33),d.Jc(6),d.Xb(),d.Yb(7,"td",34),d.Jc(8),d.Xb(),d.Xb()),2&t){const t=e.$implicit,n=e.index;d.Hb(2),d.Kc(n+1),d.Hb(2),d.Kc(t.fullName),d.Hb(2),d.Kc(t.email),d.Hb(1),d.pc("ngClass",d.vc(5,j,t.status,3===t.status)),d.Hb(1),d.Lc(" ",1===t.status?"\u0110\xe3 g\u1eedi":"Ch\u01b0a g\u1eedi"," ")}}function E(t,e){if(1&t&&(d.Yb(0,"div",30),d.Yb(1,"h5"),d.Jc(2,"DANH S\xc1CH EMAIL \u0110\u01af\u1ee2C TH\xd4NG B\xc1O"),d.Xb(),d.Yb(3,"table",31),d.Yb(4,"thead"),d.Yb(5,"tr"),d.Yb(6,"th"),d.Jc(7,"STT"),d.Xb(),d.Yb(8,"th"),d.Jc(9,"H\u1ecd v\xe0 t\xean"),d.Xb(),d.Yb(10,"th"),d.Jc(11,"Email"),d.Xb(),d.Yb(12,"th",32),d.Jc(13,"Tr\u1ea1ng th\xe1i"),d.Xb(),d.Xb(),d.Xb(),d.Yb(14,"tbody"),d.Hc(15,M,9,8,"tr",29),d.Xb(),d.Xb(),d.Xb()),2&t){const t=d.jc();d.Hb(15),d.pc("ngForOf",t.dataJson)}}function F(t,e){if(1&t){const t=d.Zb();d.Yb(0,"button",35),d.fc("click",(function(){return d.zc(t),d.jc().sendMail()})),d.Jc(1,"G\u1eedi mail"),d.Xb()}}const _=[{path:"",component:(()=>{class t{constructor(t){this.plus=t,this.db=null,this.verDB=1,this.dbName="email",this.collection=["tba","mba","tubuhathe"],this.api="email"}ngOnInit(){this.plus.IDB_InitDB(this.api).subscribe(t=>{this.db=t})}}return t.\u0275fac=function(e){return new(e||t)(d.Sb(r.a))},t.\u0275cmp=d.Mb({type:t,selectors:[["app-email"]],decls:2,vars:0,template:function(t,e){1&t&&(d.Yb(0,"p"),d.Jc(1,"email works!"),d.Xb())},styles:[""]}),t})()},{path:"thongbao",component:C},{path:"tienluong",component:(()=>{class t{constructor(t,e){this.plus=t,this.fb=e,this.apiUrl="https://mailer.thuc.now.sh/moneyMail/",this.from="",this.user=this.plus.user,this.dataImport=[],this.dataJson=[],this.errData=[],this.resent=[],this.send="",this.i=0,this.doc="",this.main=this.fb.group({email:[,i.s.email],title:["Th\xf4ng b\xe1o ti\u1ec1n l\u01b0\u01a1ng chuy\u1ec3n kho\u1ea3n ng\xe0y "+this.plus.dateFormat(Date.now()),[i.s.required,i.s.minLength(3)]],message:["\u0110i\u1ec7n l\u1ef1c Xu\xe2n L\u1ed9c xin th\xf4ng b\xe1o chi ti\u1ebft nh\u01b0 sau:",[i.s.required,i.s.minLength(3)]]}),this.checkBody=this.fb.group({email:["",[i.s.required,i.s.email]],from:["",[i.s.required,i.s.minLength(10)]],title:["",[i.s.required,i.s.minLength(3)]],message:["",[i.s.required,i.s.minLength(3)]],reciver:["",[i.s.required,i.s.minLength(3)]]})}ngOnInit(){this.init(),console.log(this.user.getValue())}init(){if((JSON.parse(localStorage.getItem("moneyMail"))||[]).filter(t=>{0===t.status&&this.resent.push(t)}),0==this.from.length){const t=this.plus.user.getValue().usrInfo.unit;t?this.from=t:this.plus.alertToasrt({err:"B\u1ea1n ch\u01b0a khai b\xe1o \u0111\u01a1n v\u1ecb t\u1ea1i m\u1ee5c T\xe0i Kho\u1ea3n"}),console.log(t)}this.resent.length>0?(console.log(this.resent),confirm("B\u1ea5m OK \u0111\u1ec3 g\u1eedi mail tr\u01b0\u1edbc ch\u01b0a ho\xe0n th\xe0nh.\nB\u1ea5m Cancel \u0111\u1ec3 x\xf3a phi\xean l\xe0m vi\u1ec7c tr\u01b0\u1edbc?")?this.dataJson=this.resent:localStorage.removeItem("moneyMail"),console.log(this.resent)):localStorage.removeItem("moneyMail")}readXlsx(t){this.dataJson=[],this.dataImport=[];let e=t.target;const n=new FileReader;n.onload=t=>{const e=b.read(t.target.result,{type:"binary"});this.dataImport=b.utils.sheet_to_json(e.Sheets[e.SheetNames[0]],{header:1})},n.readAsBinaryString(e.files[0]),e=null}checkImportData(){const t=this.dataImport[0],e=t.length;this.dataImport.splice(0,1),this.dataImport.forEach(n=>{let i="<ul>";for(let a=5;a<e;a++)n[a]?(console.log(n[a]),i+=`<li><h5>${t[a]}: ${this.plus.numberWithCommas(n[a])}.</h5></li>`):i+="";let s={from:this.from,status:0,reciver:n[3],err:"",email:n[4],fullName:n[2]+": "+n[3],title:""+this.main.get("title").value,message:`<h5>K\xednh g\u1eedi ${n[2]}: ${n[3]}</h5><h5>`+this.main.get("message").value+"</h5> \n"+i+`</ul><h5>S\u1ed1 ti\u1ec1n th\u1ef1c l\xe3nh tr\xean s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n kho\u1ea3n qua t\xe0i kho\u1ea3n s\u1ed1 ${n[5]} c\u1ee7a ${n[2]} ${n[3]}.\n\n        M\u1ecdi \xfd ki\u1ebfn th\u1eafc m\u1eafc, vui l\xf2ng li\xean h\u1ec7 ph\xf2ng Ph\xf2ng T\u1ed5ng H\u1ee3p \u0111\u1ec3 \u0111\u01b0\u1ee3c gi\u1ea3i \u0111\xe1p. \n <br>\n        Tr\xe2n tr\u1ecdng.</h5>\n        <table class="table">\n        <td><img src="https://github.com/thuctd/FileStore/raw/master/NhanHieuDLuc-Doc-150x150.jpg"> </td>\n        <td>\n          <b>\u0110i\u1ec7n l\u1ef1c Xu\xe2n L\u1ed9c - C\xf4ng ty TNHH m\u1ed9t th\xe0nh vi\xean \u0110i\u1ec7n l\u1ef1c \u0110\u1ed3ng Nai.</b><br>\n          <b>\u0110\u1ecba ch\u1ec9: S\u1ed1 94 H\xf9ng V\u01b0\u01a1ng - Th\u1ecb tr\u1ea5n Gia Ray - Huy\u1ec7n Xu\xe2n L\u1ed9c - T\u1ec9nh \u0110\u1ed3ng Nai.</b><br>\n          <b>MST: 3600432744 - 004</b><br>\n          <b>Li\xean h\u1ec7: <a href="tel:02512218242" title="02512218242">0251.2218.242 </a></b><br>\n          <b>T\u1ed5ng \u0111\xe0i ch\u0103m s\xf3c kh\xe1ch h\xe0ng: <a href="tel:19001006">19001006</a> - <a href="tel:19009000">19009000</a></b><br>\n        </td>\n        </table>\n        `};if(console.log(s),this.checkBody.patchValue(s),this.checkBody.valid)this.dataJson.push(s),this.plus.pushLocalStorage("moneyMail",s);else{const t=this.plus.getErrValidateForm(this.checkBody);s.err=t,console.log(t),this.errData.push(s)}})}sendMail(){return Object(a.__awaiter)(this,void 0,void 0,(function*(){const t=this.dataJson.length,e=confirm("Th\u1ef1c hi\u1ec7n th\xf4ng b\xe1o cho "+t+" CBCNV?");if(t>450)this.plus.alertToasrt({war:"Vui l\xf2ng l\u1eadp danh s\xe1ch d\u01b0\u1edbi 450 email"});else if(0===this.errData.length&&t>0&&e){let t=0;const e=this.dataJson.length;for(;t<e;){yield this.plus.sleep(5e3),this.i=t;const e=this.dataJson[t];this.plus.sendMail(e).subscribe(n=>{console.log(),n.email&&(this.dataJson.filter((t,e)=>{t.email===n.email&&(this.dataJson[e].status=1)}),console.log(t,n.email,e.reciver),localStorage.setItem("moneyMail",JSON.stringify(this.dataJson)))},n=>{this.dataJson[t].status=0,localStorage.setItem("moneyMail",JSON.stringify(this.dataJson)),this.plus.alertToasrt({err:" Ch\u01b0a g\u1eedi email \u0111\u1ebfn "+e.reciver})}),t++}}else this.plus.alertToasrt({war:"\u0110\xe3 h\u1ee7y thao t\xe1c!"}),window.location.reload()}))}pre(){this.i>0?this.i--:this.i=0}next(){const t=this.dataJson.length;this.i<t?this.i++:this.i=t}view(t){console.log(t),this.mailModal=t,document.getElementById("email").click()}}return t.\u0275fac=function(e){return new(e||t)(d.Sb(r.a),d.Sb(i.c))},t.\u0275cmp=d.Mb({type:t,selectors:[["app-mail"]],decls:24,vars:6,consts:[[1,"container"],[1,"text-center","text-primary"],[1,"import"],[1,"modal-body"],[1,"form-group",3,"formGroup"],["for",""],["type","text","required","","placeholder","Nh\u1eadp n\u1ed9i dung ti\xeau \u0111\u1ec1","formControlName","title",1,"form-control"],["placeholder","Nh\u1eadp n\u1ed9i dung th\xf4ng b\xe1o n\u1ebfu c\xf3","formControlName","message","rows","3",1,"form-control"],["target","_blank","href","https://dienluc.tk/assets/file/MauTienLuong.xlsx",1,"badge","badge-warning"],["for","file-upload",1,"custom-file-upload","mx-5"],[1,"fa","fa-cloud-upload"],["hidden","","id","file-upload","type","file","multiple","false",3,"change"],["type","button","class","btn btn-outline-primary mx-3",3,"click",4,"ngIf"],["class","card border-primary",4,"ngIf"],["class","alert-danger",4,"ngIf"],["class","dataOk",4,"ngIf"],["type","button","class","btn btn-primary mx-3","data-toggle","modal","data-target","#modelId",3,"click",4,"ngIf"],["type","button",1,"btn","btn-outline-primary","mx-3",3,"click"],[1,"card","border-primary"],[1,"button"],["type","button",1,"btn","btn-danger","float-left",3,"click"],["aria-hidden","true",1,"fa","fa-arrow-left"],["type","button",1,"btn","btn-danger","float-right",3,"click"],["aria-hidden","true",1,"fa","fa-arrow-right"],[1,"card-body"],[1,"text-center","rounded","font-weigth-bold","bg-warning","py-2"],[3,"innerHTML"],[1,"alert-danger"],[1,"table","table-hover","table-invert","table-bordered"],[4,"ngFor","ngForOf"],[1,"dataOk"],[1,"table","table-hover"],[1,"text-center"],["scope","row"],[1,"text-center",3,"ngClass"],["type","button","data-toggle","modal","data-target","#modelId",1,"btn","btn-primary","mx-3",3,"click"]],template:function(t,e){1&t&&(d.Yb(0,"div",0),d.Yb(1,"h5",1),d.Jc(2,"TH\xd4NG B\xc1O TI\u1ec0N L\u01af\u01a0NG B\u1eb0NG EMAIL"),d.Xb(),d.Yb(3,"div",2),d.Yb(4,"div",3),d.Yb(5,"form",4),d.Yb(6,"label",5),d.Jc(7,"Ti\xeau \u0111\u1ec1"),d.Xb(),d.Tb(8,"input",6),d.Yb(9,"label",5),d.Jc(10,"N\u1ed9i dung th\xf4ng b\xe1o ch\xednh"),d.Xb(),d.Tb(11,"textarea",7),d.Xb(),d.Xb(),d.Yb(12,"a",8),d.Jc(13,"File m\u1eabu"),d.Xb(),d.Yb(14,"label",9),d.Tb(15,"i",10),d.Jc(16," Ch\u1ecdn file "),d.Xb(),d.Yb(17,"input",11),d.fc("change",(function(t){return e.readXlsx(t)})),d.Xb(),d.Hc(18,S,2,0,"button",12),d.Hc(19,B,11,1,"div",13),d.Hc(20,N,5,1,"div",14),d.Hc(21,E,16,1,"div",15),d.Hc(22,F,2,0,"button",16),d.Tb(23,"hr"),d.Xb(),d.Xb()),2&t&&(d.Hb(5),d.pc("formGroup",e.main),d.Hb(13),d.pc("ngIf",e.dataImport.length>0&&0===e.dataJson.length),d.Hb(1),d.pc("ngIf",e.dataJson.length>0&&0==e.errData.length),d.Hb(1),d.pc("ngIf",e.errData.length>0),d.Hb(1),d.pc("ngIf",e.dataJson.length>0&&0===e.errData.length),d.Hb(1),d.pc("ngIf",0===e.errData.length&&e.dataJson.length>0))},directives:[i.u,i.k,i.e,i.b,i.q,i.j,i.d,s.m,s.l,s.k],styles:[""]}),t})()}];let A=(()=>{class t{}return t.\u0275mod=d.Qb({type:t}),t.\u0275inj=d.Pb({factory:function(e){return new(e||t)},imports:[[u.e.forChild(_)],u.e]}),t})(),G=(()=>{class t{}return t.\u0275mod=d.Qb({type:t}),t.\u0275inj=d.Pb({factory:function(e){return new(e||t)},imports:[[s.b,A,i.f,i.p,g.b]]}),t})()}}]);