(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{OXvP:function(t,e,o){"use strict";o.r(e),o.d(e,"RoutesModule",function(){return J});var n=o("ofXK"),i=o("fXoL"),r=o("3Pt+"),b=o("tyNb");let c=(()=>{class t{constructor(){this.book={name:"123",year:1993,stars:null}}ngOnInit(){}createTable(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-add-details-route"]],decls:12,vars:0,consts:[[1,"container"],[3,"formGroup"],[1,"form-group","row"],["for","name",1,"form-label","col-md-2"],["type","text","formControlName","total_route",1,"form-control","col-md-6"],["type","submit",1,"btn","btn-primary","m-2"],["routerLink","../","href","",1,"btn","btn-secondary"]],template:function(t,e){1&t&&(i.Ob(0,"h1"),i.uc(1,"Th\xeam chi ti\u1ebft tr\u1ea1m"),i.Nb(),i.Ob(2,"div",0),i.Ob(3,"form",1),i.Ob(4,"div",2),i.Ob(5,"label",3),i.uc(6,"T\u1ed5ng s\u1ed1 tr\u1ea1m"),i.Nb(),i.Kb(7,"input",4),i.Nb(),i.Ob(8,"button",5),i.uc(9,"Th\xeam tr\u1ea1m m\u1edbi"),i.Nb(),i.Ob(10,"a",6),i.uc(11,"Tr\u1edf l\u1ea1i danh s\xe1ch"),i.Nb(),i.Nb(),i.Nb())},directives:[r.v,r.k,r.f,r.a,r.j,r.e,b.d],styles:[""]}),t})();var s=o("jhN1"),u=o("tk/3");let a=(()=>{class t{constructor(t){this.http=t}getRoute(t){return this.http.get("routes/"+t)}getList(){return this.http.get("routes/")}addRoute(t){return this.http.post("routes/createname",t)}updateRoute(t,e){return this.http.put("routes/"+t,e)}deleteRoute(t){return this.http.delete("routes/"+t)}createRoute(t,e){return console.log(t,e),this.http.get("routes/createroute/"+t+"/"+e)}getListStation(){return this.http.get("stations/")}addStationToRoute(t,e,o){return console.log(o),this.http.post("routes/create/"+t+"/"+e,o)}search(t){return this.http.get("routes/search/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(u.b))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),l=(()=>{class t{constructor(t,e,o){this.title=t,this.formBuilder=e,this.routeService=o,this.title.setTitle("Th\xeam tuy\u1ebfn m\u1edbi")}ngOnInit(){this.createRouteForm=this.formBuilder.group({name:["",r.t.required],number:["",r.t.required],time_interval:["0",r.t.required]})}addRoute(){if(this.createRouteForm.invalid)return this.message="Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin";const{value:t}=this.createRouteForm;console.log(this.createRouteForm),this.routeService.addRoute(t).subscribe(t=>{this.message="Th\xeam tuy\u1ebfn m\u1edbi th\xe0nh c\xf4ng",console.log(this.message)},t=>{this.message="Th\xeam tuy\u1ebfn kh\xf4ng th\xe0nh c\xf4ng, vui l\xf2ng th\u1eed l\u1ea1i",console.log(this.message)})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(s.b),i.Jb(r.b),i.Jb(a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-create-route"]],decls:27,vars:1,consts:[[1,"row","my-3","text-font"],[1,"app-page-title","col-md-12"],[1,"app-card","shadow-sm","mb-4","text-font"],[1,"inner"],[1,"app-card-body","p-3","p-lg-4"],[1,"row","gx-5","gy-3"],[1,"col-12"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"form-label","col-md-3","form-name"],["type","text","formControlName","number","id","number",1,"form-control","col-md-5"],["type","text","formControlName","name","id","name",1,"form-control","col-md-5"],["type","number","formControlName","time_interval",1,"form-control","col-md-5"],["type","submit",1,"btn","btn-primary","m-2"],["routerLink","../",1,"btn","btn-secondary"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"h1",1),i.uc(2,"Th\xeam tuy\u1ebfn m\u1edbi"),i.Nb(),i.Nb(),i.Ob(3,"div",2),i.Ob(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"div",5),i.Ob(7,"div",6),i.Ob(8,"form",7),i.Vb("ngSubmit",function(){return e.addRoute()}),i.Ob(9,"div",8),i.Ob(10,"label",9),i.uc(11,"S\u1ed1 tuy\u1ebfn : "),i.Nb(),i.Kb(12,"input",10),i.Nb(),i.Ob(13,"div",8),i.Ob(14,"label",9),i.uc(15,"T\xean tuy\u1ebfn: "),i.Nb(),i.Kb(16,"input",11),i.Nb(),i.Ob(17,"div",8),i.Ob(18,"label",9),i.uc(19,"Th\u1eddi gian gi\xe3n c\xe1ch"),i.Kb(20,"br"),i.uc(21," ( \u0110\u01a1n v\u1ecb ph\xfat ): "),i.Nb(),i.Kb(22,"input",12),i.Nb(),i.Ob(23,"button",13),i.uc(24,"Th\xeam tuy\u1ebfn m\u1edbi"),i.Nb(),i.Ob(25,"a",14),i.uc(26,"Tr\u1edf l\u1ea1i danh s\xe1ch"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t&&(i.zb(8),i.fc("formGroup",e.createRouteForm))},directives:[r.v,r.k,r.f,r.a,r.j,r.e,r.n,b.d],styles:[""]}),t})(),d=(()=>{class t{constructor(t,e,o,n){this.routeService=t,this.router=e,this.formBuilder=o,this.router2=n}ngOnInit(){const t=this.router.snapshot.paramMap.get("id");this.routeService.getRoute(t).subscribe(t=>this.pathRouteFormValue(t.route)),this.initForm()}initForm(){this.editRouteForm=this.formBuilder.group({name:["",[r.t.required]],number:["",[r.t.required]],time_interval:["",r.t.required]})}pathRouteFormValue(t){this.editRouteForm.patchValue({name:t.name,number:t.number,time_interval:t.time_interval})}updateRoute(){if(this.editRouteForm.invalid)return this.message="Vui l\xf2ng ki\u1ec3m tra l\u1ea1i th\xf4ng tin";const{value:t}=this.editRouteForm,e=this.router.snapshot.paramMap.get("id");this.routeService.updateRoute(e,t).subscribe(t=>{this.message="S\u1eeda th\xf4ng tin xe th\xe0nh c\xf4ng",console.log(this.message),this.router2.navigateByUrl("/manager/routes")},t=>{this.message="S\u1eeda th\xf4ng tin xe kh\xf4ng th\xe0nh c\xf4ng, vui l\xf2ng th\u1eed l\u1ea1i!",console.log(this.message)})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(a),i.Jb(b.a),i.Jb(r.b),i.Jb(b.b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-edit-route"]],decls:27,vars:1,consts:[[1,"row","my-3","text-font"],[1,"app-page-title","col-md-12"],[1,"app-card","shadow-sm","mb-4","text-font"],[1,"inner"],[1,"app-card-body","p-3","p-lg-4"],[1,"row","gx-5","gy-3"],[1,"col-12"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"form-label","col-md-2","form-name"],["type","text","formControlName","number","id","number",1,"form-control","col-md-5"],["type","text","formControlName","name","id","name",1,"form-control","col-md-5"],["type","number","formControlName","time_interval",1,"form-control","col-md-5"],["type","submit",1,"btn","btn-primary","m-2"],["routerLink","../../",1,"btn","btn-secondary"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"h1",1),i.uc(2,"S\u1eeda th\xf4ng tin tuy\u1ebfn"),i.Nb(),i.Nb(),i.Ob(3,"div",2),i.Ob(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"div",5),i.Ob(7,"div",6),i.Ob(8,"form",7),i.Vb("ngSubmit",function(){return e.updateRoute()}),i.Ob(9,"div",8),i.Ob(10,"label",9),i.uc(11,"ID tuy\u1ebfn : "),i.Nb(),i.Kb(12,"input",10),i.Nb(),i.Ob(13,"div",8),i.Ob(14,"label",9),i.uc(15,"T\xean tuy\u1ebfn: "),i.Nb(),i.Kb(16,"input",11),i.Nb(),i.Ob(17,"div",8),i.Ob(18,"label",9),i.uc(19,"Th\u1eddi gian gi\xe3n c\xe1ch "),i.Kb(20,"br"),i.uc(21," ( \u0110\u01a1n v\u1ecb ph\xfat ) : "),i.Nb(),i.Kb(22,"input",12),i.Nb(),i.Ob(23,"button",13),i.uc(24,"L\u01b0u th\xf4ng tin"),i.Nb(),i.Ob(25,"a",14),i.uc(26,"Tr\u1edf l\u1ea1i danh s\xe1ch"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t&&(i.zb(8),i.fc("formGroup",e.editRouteForm))},directives:[r.v,r.k,r.f,r.a,r.j,r.e,r.n,b.d],styles:[""]}),t})(),m=(()=>{class t{constructor(t,e,o,n){this.routeService=t,this.title=e,this.router=o,this.router2=n,this.title.setTitle("X\xf3a tr\u1ea1m")}ngOnInit(){const t=this.router.snapshot.paramMap.get("id");this.routeService.getRoute(t).subscribe(t=>this.route=t.route)}deleteStation(t){this.routeService.deleteRoute(t).subscribe(t=>{this.message="X\xf3a tr\u1ea1m th\xe0nh c\xf4ng",console.log(this.message),this.router2.navigateByUrl("/manager/stations")},t=>{this.message="X\xf3a tr\u1ea1m kh\xf4ng th\xe0nh c\xf4ng, vui l\xf2ng th\u1eed l\u1ea1i",console.log(this.message)})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(a),i.Jb(s.b),i.Jb(b.a),i.Jb(b.b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-delete-route"]],decls:12,vars:1,consts:[[1,"app-card","shadow-sm","mb-4","text-font"],[1,"inner"],[1,"app-card-body","p-3","p-lg-4"],[1,"row","gx-5","gy-3"],[1,"col-12"],[1,"row","my-3","text-font"],[1,"app-page-title","col-md-12"],["href","javascript:;",1,"btn","btn-danger","m-2",3,"click"],["routerLink","../../",1,"btn","btn-secondary"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"div",2),i.Ob(3,"div",3),i.Ob(4,"div",4),i.Ob(5,"div",5),i.Ob(6,"h1",6),i.uc(7),i.Nb(),i.Nb(),i.Ob(8,"a",7),i.Vb("click",function(){return e.deleteStation(e.route.id)}),i.uc(9,"X\xf3a tr\u1ea1m"),i.Nb(),i.Ob(10,"a",8),i.uc(11,"Tr\u1edf l\u1ea1i danh s\xe1ch"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t&&(i.zb(7),i.wc("X\xf3a ",null==e.route?null:e.route.name," ?"))},directives:[b.d],styles:[""]}),t})();var h=o("JX91"),p=o("lJxs"),f=o("qFsG"),g=o("/1cH"),O=o("FKr1");function N(t,e){if(1&t&&(i.Ob(0,"tr",37),i.Ob(1,"td",38),i.uc(2),i.Nb(),i.Ob(3,"td",38),i.uc(4),i.Nb(),i.Ob(5,"td",38),i.uc(6),i.Nb(),i.Nb()),2&t){const t=e.$implicit;i.zb(2),i.vc(t.number),i.zb(2),i.vc(t.name),i.zb(2),i.vc(t.arrive_time/60)}}function v(t,e){if(1&t){const t=i.Pb();i.Ob(0,"button",39),i.Vb("click",function(){return i.mc(t),i.Zb(2).changefirstRoute()}),i.uc(1,"Th\xeam tr\u1ea1m"),i.Nb()}}function y(t,e){if(1&t){const t=i.Pb();i.Ob(0,"button",39),i.Vb("click",function(){return i.mc(t),i.Zb(2).changefirstRoute()}),i.uc(1,"\u1ea8n"),i.Nb()}}function R(t,e){if(1&t&&(i.Ob(0,"div",31),i.Ob(1,"table",32),i.Ob(2,"thead",33),i.Ob(3,"th"),i.uc(4,"STT"),i.Nb(),i.Ob(5,"th"),i.uc(6,"T\xean tr\u1ea1m"),i.Nb(),i.Ob(7,"th"),i.uc(8,"Th\u1eddi gian \u0111\u1ebfn tr\u1ea1m (ph\xfat)"),i.Nb(),i.Nb(),i.Ob(9,"tbody"),i.sc(10,N,7,3,"tr",34),i.Nb(),i.Nb(),i.sc(11,v,2,0,"button",35),i.sc(12,y,2,0,"ng-template",null,36,i.tc),i.Nb()),2&t){const t=i.lc(13),e=i.Zb();i.zb(10),i.fc("ngForOf",e.first_route_stations),i.zb(1),i.fc("ngIf",1==e.firstRoute)("ngIfElse",t)}}function w(t,e){if(1&t){const t=i.Pb();i.Ob(0,"mat-option",40),i.Vb("click",function(){i.mc(t);const o=e.$implicit;return i.Zb().getFromId(o.id)}),i.uc(1),i.Nb()}if(2&t){const t=e.$implicit;i.fc("value",t),i.zb(1),i.wc(" ",t.name," ")}}function S(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div",41),i.Ob(1,"button",42),i.Vb("click",function(){i.mc(t);const e=i.Zb();return e.createRoute(e.route.id,1)}),i.uc(2,"T\u1ea1o tuy\u1ebfn"),i.Nb(),i.Nb()}}function T(t,e){if(1&t&&(i.Ob(0,"tr",37),i.Ob(1,"td",38),i.uc(2),i.Nb(),i.Ob(3,"td",38),i.uc(4),i.Nb(),i.Ob(5,"td",38),i.uc(6),i.Nb(),i.Nb()),2&t){const t=e.$implicit;i.zb(2),i.vc(t.number),i.zb(2),i.vc(t.name),i.zb(2),i.vc(t.time_interval)}}function k(t,e){if(1&t){const t=i.Pb();i.Ob(0,"button",39),i.Vb("click",function(){return i.mc(t),i.Zb(2).changesecondRoute()}),i.uc(1,"Th\xeam tr\u1ea1m"),i.Nb()}}function _(t,e){if(1&t){const t=i.Pb();i.Ob(0,"button",39),i.Vb("click",function(){return i.mc(t),i.Zb(2).changesecondRoute()}),i.uc(1,"\u1ea8n"),i.Nb()}}function F(t,e){if(1&t&&(i.Ob(0,"div",31),i.Ob(1,"table",32),i.Ob(2,"thead",33),i.Ob(3,"th"),i.uc(4,"STT"),i.Nb(),i.Ob(5,"th"),i.uc(6,"T\xean tr\u1ea1m"),i.Nb(),i.Ob(7,"th"),i.uc(8,"Th\u1eddi gian \u0111\u1ebfn tr\u1ea1m"),i.Nb(),i.Nb(),i.Ob(9,"tbody"),i.sc(10,T,7,3,"tr",34),i.Nb(),i.Nb(),i.sc(11,k,2,0,"button",35),i.sc(12,_,2,0,"ng-template",null,43,i.tc),i.Nb()),2&t){const t=i.lc(13),e=i.Zb();i.zb(10),i.fc("ngForOf",e.second_route_stations),i.zb(1),i.fc("ngIf",1==e.secondRoute)("ngIfElse",t)}}function z(t,e){if(1&t){const t=i.Pb();i.Ob(0,"mat-option",40),i.Vb("click",function(){i.mc(t);const o=e.$implicit;return i.Zb().getFromId(o.id)}),i.uc(1),i.Nb()}if(2&t){const t=e.$implicit;i.fc("value",t),i.zb(1),i.wc(" ",t.name," ")}}function x(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div",41),i.Ob(1,"button",42),i.Vb("click",function(){i.mc(t);const e=i.Zb();return e.createRoute(e.route.id,2)}),i.uc(2,"T\u1ea1o tuy\u1ebfn"),i.Nb(),i.Nb()}}let I=(()=>{class t{constructor(t,e,o){this.formBuilder=t,this.routeService=e,this.router=o,this.firstRouteControl=new r.c,this.fromoptions=[],this.firstRoute=!0,this.secondRouteControl=new r.c,this.secondoptions=[],this.secondRoute=!0}ngOnInit(){this.loadStation();const t=this.router.snapshot.paramMap.get("id");this.routeService.getRoute(t).subscribe(t=>this.initData(t)),this.firstRouteForm=this.formBuilder.group({station_id:["",r.t.required],minute:["",r.t.required]}),this.secondRouteForm=this.formBuilder.group({station_id:["",r.t.required],minute:["",r.t.required]})}initData(t){this.data=t,this.route=this.data.route,this.first_route_stations=this.data.first_route_stations,this.firstRouteNumber=this.first_route_stations.length+1,this.second_route_stations=this.data.second_route_stations}createRoute(t,e){this.routeService.createRoute(t,e).subscribe(t=>window.location.reload(),t=>alert("Th\xeam kh\xf4ng th\xe0nh c\xf4ng"))}getStations(t){this.fromoptions=t,this.filteredOptions=this.firstRouteControl.valueChanges.pipe(Object(h.a)(""),Object(p.a)(t=>"string"==typeof t?t:t.name),Object(p.a)(t=>t?this._filter(t):this.fromoptions.slice()))}_filter(t){const e=t.toLowerCase();return this.fromoptions.filter(t=>t.name.toLowerCase().includes(e))}getFromId(t){this.firstStationId=t}displayFn(t){return t&&t.name?t.name:""}addStation(){if(this.firstRouteForm.get("station_id").setValue(this.firstStationId),this.firstRouteForm.invalid)return alert("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin");const{value:t}=this.firstRouteForm;this.routeService.addStationToRoute(this.route.first_route_id,this.firstRouteNumber,t).subscribe(t=>window.location.reload(),t=>alert("Th\xeam kh\xf4ng th\xe0nh c\xf4ng"))}changeFirstRouteNumber(t){this.firstRouteNumber=t}changefirstRoute(){this.firstRoute=!this.firstRoute}getStations_2(t){this.secondoptions=t,this.filteredOptions_2=this.secondRouteControl.valueChanges.pipe(Object(h.a)(""),Object(p.a)(t=>"string"==typeof t?t:t.name),Object(p.a)(t=>t?this._filter2(t):this.secondoptions.slice()))}_filter2(t){const e=t.toLowerCase();return this.secondoptions.filter(t=>t.name.toLowerCase().includes(e))}getToId(t){this.secondStationId=t}loadStation(){this.routeService.getListStation().subscribe(t=>this.getStations(t))}addStation2(){if(this.secondRouteForm.get("station_id").setValue(this.secondStationId),this.secondRouteForm.invalid)return alert("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin");const{value:t}=this.secondRouteForm;this.routeService.addStationToRoute(this.route.second_route_id,this.secondRouteNumber,t).subscribe(t=>window.location.reload(),t=>alert("Th\xeam kh\xf4ng th\xe0nh c\xf4ng"))}changeSecondRouteNumber(t){this.secondRouteNumber=t}changesecondRoute(){this.secondRoute=!this.secondRoute}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(r.b),i.Jb(a),i.Jb(b.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-details-route"]],decls:80,vars:26,consts:[[1,"row","my-3","text-font"],[1,"app-page-title","col-md-12"],[1,"app-card","shadow-sm","mb-4","text-font"],[1,"inner"],[1,"app-card-body","p-3","p-lg-4"],[1,"row","gx-5","gy-3"],[1,"col-12"],[1,"row"],["for","name",1,"form-label","col-md-4","form-name"],["routerLink","../../",1,"btn","btn-secondary"],[1,"row","g-4","mb-4"],[1,"col-12","col-lg-6"],[1,"app-card","app-card-chart","h-100","shadow-sm"],[1,"app-card-header","p-3"],[1,"row","justify-content-between","align-items-center"],[1,"col-auto"],[1,"app-card-title"],["class","content",4,"ngIf","ngIfElse"],[3,"formGroup","hidden","ngSubmit"],[1,"form-group","row"],[1,"col-md-5","form-label","form-name"],["type","number","placeholder","S\u1ed1 tr\u1ea1m",1,"form-control","col-md-6",3,"value","change"],["type","text","matInput","",1,"col-md-6","form-control","font-style",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],["type","text","formControlName","minute","placeholder","Th\u1eddi gian \u0111\u1ebfn tr\u1ea1m",1,"form-control","col-md-6"],["type","submit",1,"btn","btn-success","ms-auto"],["show_1",""],["auto2","matAutocomplete"],["show_2",""],[1,"content"],[1,"table","table-borderless","table-sm","text-center","text-font"],[1,"thead-background"],["class","color",4,"ngFor","ngForOf"],["class","btn btn-primary",3,"click",4,"ngIf","ngIfElse"],["firstRoute_2",""],[1,"color"],[1,"align-middle"],[1,"btn","btn-primary",3,"click"],[3,"value","click"],[1,"row","justify-content-center"],[1,"col-md-3","btn","btn-danger",3,"click"],["secondRoute_2",""]],template:function(t,e){if(1&t&&(i.Ob(0,"div",0),i.Ob(1,"h1",1),i.uc(2),i.Nb(),i.Nb(),i.Ob(3,"div",2),i.Ob(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"div",5),i.Ob(7,"div",6),i.Ob(8,"div",7),i.Ob(9,"label",8),i.uc(10),i.Nb(),i.Nb(),i.Ob(11,"div",7),i.Ob(12,"label",8),i.uc(13),i.Nb(),i.Nb(),i.Ob(14,"div",7),i.Ob(15,"label",8),i.uc(16),i.Nb(),i.Nb(),i.Ob(17,"a",9),i.uc(18,"Tr\u1edf l\u1ea1i danh s\xe1ch"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(19,"div",10),i.Ob(20,"div",11),i.Ob(21,"div",12),i.Ob(22,"div",13),i.Ob(23,"div",14),i.Ob(24,"div",15),i.Ob(25,"h4",16),i.uc(26,"Tuy\u1ebfn \u0111i"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(27,"div",4),i.sc(28,R,14,3,"div",17),i.Ob(29,"form",18),i.Vb("ngSubmit",function(){return e.addStation()}),i.Ob(30,"div",19),i.Ob(31,"label",20),i.uc(32,"S\u1ed1 tr\u1ea1m :"),i.Nb(),i.Ob(33,"input",21),i.Vb("change",function(t){return e.changeFirstRouteNumber(t.target.value)}),i.Nb(),i.Nb(),i.Ob(34,"div",19),i.Ob(35,"label",20),i.uc(36,"T\xean tr\u1ea1m :"),i.Nb(),i.Kb(37,"input",22),i.Nb(),i.Ob(38,"mat-autocomplete",23,24),i.sc(40,w,2,2,"mat-option",25),i.ac(41,"async"),i.Nb(),i.Ob(42,"div",19),i.Ob(43,"label",20),i.uc(44,"Th\u1eddi gian \u0111\u1ebfn tr\u1ea1m :"),i.Nb(),i.Kb(45,"input",26),i.Nb(),i.Ob(46,"button",27),i.uc(47,"Th\xeam"),i.Nb(),i.Nb(),i.sc(48,S,3,0,"ng-template",null,28,i.tc),i.Nb(),i.Nb(),i.Nb(),i.Ob(50,"div",11),i.Ob(51,"div",12),i.Ob(52,"div",13),i.Ob(53,"div",14),i.Ob(54,"div",15),i.Ob(55,"h4",16),i.uc(56,"Tuy\u1ebfn v\u1ec1"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(57,"div",4),i.sc(58,F,14,3,"div",17),i.Ob(59,"form",18),i.Vb("ngSubmit",function(){return e.addStation2()}),i.Ob(60,"div",19),i.Ob(61,"label",20),i.uc(62,"S\u1ed1 tr\u1ea1m :"),i.Nb(),i.Ob(63,"input",21),i.Vb("change",function(t){return e.changeSecondRouteNumber(t.target.value)}),i.Nb(),i.Nb(),i.Ob(64,"div",19),i.Ob(65,"label",20),i.uc(66,"T\xean tr\u1ea1m :"),i.Nb(),i.Kb(67,"input",22),i.Nb(),i.Ob(68,"mat-autocomplete",23,29),i.sc(70,z,2,2,"mat-option",25),i.ac(71,"async"),i.Nb(),i.Ob(72,"div",19),i.Ob(73,"label",20),i.uc(74,"Th\u1eddi gian \u0111\u1ebfn tr\u1ea1m :"),i.Nb(),i.Kb(75,"input",26),i.Nb(),i.Ob(76,"button",27),i.uc(77,"Th\xeam"),i.Nb(),i.Nb(),i.sc(78,x,3,0,"ng-template",null,30,i.tc),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t){const t=i.lc(39),o=i.lc(49),n=i.lc(69),r=i.lc(79);i.zb(2),i.wc("Chi ti\u1ebft tuy\u1ebfn ",null==e.route?null:e.route.name,""),i.zb(8),i.wc("S\u1ed1 tuy\u1ebfn : ",null==e.route?null:e.route.number," "),i.zb(3),i.wc("T\xean tuy\u1ebfn: ",null==e.route?null:e.route.name," "),i.zb(3),i.wc("Th\u1eddi gian gi\xe3n c\xe1ch : ",null==e.route?null:e.route.time_interval," ph\xfat"),i.zb(12),i.fc("ngIf",null!==(null==e.route?null:e.route.first_route_id))("ngIfElse",o),i.zb(1),i.fc("formGroup",e.firstRouteForm)("hidden",e.firstRoute),i.zb(4),i.gc("value",e.firstRouteNumber),i.zb(4),i.fc("formControl",e.firstRouteControl)("matAutocomplete",t),i.zb(1),i.fc("displayWith",e.displayFn),i.zb(2),i.fc("ngForOf",i.bc(41,22,e.filteredOptions)),i.zb(18),i.fc("ngIf",null!==(null==e.route?null:e.route.second_route_id))("ngIfElse",r),i.zb(1),i.fc("formGroup",e.secondRouteForm)("hidden",e.secondRoute),i.zb(4),i.gc("value",e.secondRouteNumber),i.zb(4),i.fc("formControl",e.secondRouteControl)("matAutocomplete",n),i.zb(1),i.fc("displayWith",e.displayFn),i.zb(2),i.fc("ngForOf",i.bc(71,24,e.filteredOptions_2))}},directives:[b.d,n.l,r.v,r.k,r.f,f.a,r.a,g.c,r.j,r.d,g.a,n.k,r.e,O.e],pipes:[n.b],styles:[".hidden[_ngcontent-%COMP%]{display:none}"]}),t})();function C(t,e){if(1&t&&(i.Ob(0,"tr",19),i.Ob(1,"td",20),i.uc(2),i.Nb(),i.Ob(3,"td",17),i.uc(4),i.Nb(),i.Ob(5,"td",17),i.uc(6),i.Nb(),i.Ob(7,"td",17),i.Ob(8,"a",21),i.Kb(9,"i",22),i.Nb(),i.Ob(10,"a",23),i.Kb(11,"i",24),i.Nb(),i.Nb(),i.Nb()),2&t){const t=e.$implicit,o=e.index;i.zb(2),i.vc(o+1),i.zb(2),i.vc(t.number),i.zb(2),i.vc(t.name),i.zb(2),i.hc("routerLink","./details/",t.id,""),i.zb(2),i.hc("routerLink","./edit/",t.id,"")}}const V=[{path:"",component:(()=>{class t{constructor(t,e){this.routeService=t,this.title=e,this.routes=[],this.title.setTitle("Danh s\xe1ch tuy\u1ebfn")}ngOnInit(){this.loadRoute()}loadRoute(){this.routeService.getList().subscribe(t=>this.routes=t)}search(t){this.routeService.search(t).subscribe(t=>this.getSearchRoutes(t))}getSearchRoutes(t){console.log(t),this.routes=t}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(a),i.Jb(s.b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-list-route"]],decls:30,vars:1,consts:[[1,"row","my-3","text-font"],[1,"app-page-title","col-md-4"],[1,"app-search-box","col-md-6"],[1,"app-search-form"],["type","text","placeholder","Search...",1,"form-control","search-input",2,"height","40px",3,"keydown.enter"],["key",""],[1,"btn","search-btn","btn-primary",3,"click"],[1,"fas","fa-search"],[1,"ms-auto","col-md-2"],["routerLink","./create",1,"btn","btn-success"],[1,"app-card","shadow-sm","mb-4"],[1,"inner"],[1,"app-card-body","p-3","p-lg-4"],[1,"row","gx-5","gy-3"],[1,"col-12"],[1,"table","table-hover","table-borderless","table-sm","text-center","text-font"],[1,"thead-background"],[1,"align-middle"],["class","color",4,"ngFor","ngForOf"],[1,"color"],["scope","row",1,"align-middle"],[1,"btn","btn-outline-primary",3,"routerLink"],[1,"fas","fa-info-circle"],[1,"btn","btn-outline-warning","m-2",3,"routerLink"],[1,"far","fa-edit"]],template:function(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div",0),i.Ob(1,"h1",1),i.uc(2,"Danh s\xe1ch chuy\u1ebfn"),i.Nb(),i.Ob(3,"div",2),i.Ob(4,"div",3),i.Ob(5,"input",4,5),i.Vb("keydown.enter",function(t){return e.search(t.target.value)}),i.Nb(),i.Ob(7,"button",6),i.Vb("click",function(){i.mc(t);const o=i.lc(6);return e.search(o.value)}),i.Kb(8,"i",7),i.Nb(),i.Nb(),i.Nb(),i.Ob(9,"div",8),i.Ob(10,"a",9),i.uc(11,"Th\xeam tuy\u1ebfn m\u1edbi"),i.Nb(),i.Nb(),i.Nb(),i.Ob(12,"div",10),i.Ob(13,"div",11),i.Ob(14,"div",12),i.Ob(15,"div",13),i.Ob(16,"div",14),i.Ob(17,"table",15),i.Ob(18,"thead",16),i.Ob(19,"tr"),i.Ob(20,"th",17),i.uc(21,"STT"),i.Nb(),i.Ob(22,"th",17),i.uc(23,"S\u1ed1 tuy\u1ebfn"),i.Nb(),i.Ob(24,"th",17),i.uc(25,"T\xean tuy\u1ebfn"),i.Nb(),i.Ob(26,"th",17),i.uc(27,"T\xe1c v\u1ee5"),i.Nb(),i.Nb(),i.Nb(),i.Ob(28,"tbody"),i.sc(29,C,12,5,"tr",18),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()}2&t&&(i.zb(29),i.fc("ngForOf",e.routes))},directives:[b.d,n.k],styles:[""]}),t})()},{path:"create",component:l},{path:"delete/:id",component:m},{path:"edit/:id",component:d},{path:"details/:id",component:I},{path:"add-details/:id",component:c}];let J=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[n.c,r.q,b.e.forChild(V),r.g,g.b,f.b]]}),t})()}}]);