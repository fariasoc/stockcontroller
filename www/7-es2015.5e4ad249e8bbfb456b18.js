(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{J2pK:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class a{}var t=u("pMnS"),o=u("MKJQ"),i=u("sZkV"),s=u("s7LF"),r=u("SVse"),b=u("Tl90");class d{constructor(l,n,u,e){this.activatedRoute=l,this.ativoLDCService=n,this.toastCtrl=u,this.router=e,this.reuniao={dia:" ",setor:" ",anotacao:" ",status:!1,responsavel:" ",prazo:null}}ngOnInit(){}ionViewWillEnter(){let l=this.activatedRoute.snapshot.paramMap.get("id");l&&this.ativoLDCService.getReuniao(l).subscribe(l=>{this.reuniao=l})}addReuniao(){this.ativoLDCService.addReuniao(this.reuniao).then(()=>{this.router.navigateByUrl("/"),this.showToast("Anota\xe7\xe3o da reuni\xe3o adicionada")},l=>{this.showToast("Ocorreu um problema ao adicionar essa anota\xe7\xe3o :(")})}deleteReuniao(){this.ativoLDCService.deleteReuniao(this.reuniao.id).then(()=>{this.router.navigateByUrl("/"),this.showToast("Anota\xe7\xe3o da reuni\xe3o deletada")},l=>{this.showToast("Ocorreu um problema ao excluir essa anota\xe7\xe3o :(")})}updateReuniao(){this.ativoLDCService.updateReuniao(this.reuniao).then(()=>{this.showToast("Reuni\xe3o atualizado")},l=>{this.showToast("Ocorreu um problema ao atualizar essa reuni\xe3o :(")})}showToast(l){this.toastCtrl.create({message:l,duration:2e3}).then(l=>l.present())}}var c=u("iInd"),g=e.ob({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,8,"ion-footer",[],null,null,null,o.ab,o.p)),e.pb(1,49152,null,0,i.x,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,6,"ion-toolbar",[["color","success"]],null,null,null,o.vb,o.K)),e.pb(3,49152,null,0,i.xb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,4,"ion-button",[["color","light"],["expand","full"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addReuniao()&&e),e}),o.N,o.c)),e.pb(5,49152,null,0,i.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.qb(6,0,null,0,1,"ion-icon",[["name","checkmark"],["slot","start"]],null,null,null,o.cb,o.r)),e.pb(7,49152,null,0,i.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Hb(-1,0,[" Criar "]))],(function(l,n){l(n,3,0,"success"),l(n,5,0,"light","full","clear"),l(n,7,0,"checkmark")}),null)}function h(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,17,"ion-footer",[],null,null,null,o.ab,o.p)),e.pb(1,49152,null,0,i.x,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,15,"ion-row",[["no-padding",""],["text-center",""]],null,null,null,o.lb,o.A)),e.pb(3,49152,null,0,i.eb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,6,"ion-col",[["size","6"]],null,null,null,o.U,o.j)),e.pb(5,49152,null,0,i.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(6,0,null,0,4,"ion-button",[["color","danger"],["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteReuniao()&&e),e}),o.N,o.c)),e.pb(7,49152,null,0,i.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.qb(8,0,null,0,1,"ion-icon",[["name","trash"],["slot","start"]],null,null,null,o.cb,o.r)),e.pb(9,49152,null,0,i.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Hb(-1,0,[" Apagar "])),(l()(),e.qb(11,0,null,0,6,"ion-col",[["size","6"]],null,null,null,o.U,o.j)),e.pb(12,49152,null,0,i.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(13,0,null,0,4,"ion-button",[["color","success"],["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateReuniao()&&e),e}),o.N,o.c)),e.pb(14,49152,null,0,i.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.qb(15,0,null,0,1,"ion-icon",[["name","save"],["slot","start"]],null,null,null,o.cb,o.r)),e.pb(16,49152,null,0,i.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Hb(-1,0,[" Atualizar "]))],(function(l,n){l(n,5,0,"6"),l(n,7,0,"danger","block","outline"),l(n,9,0,"trash"),l(n,12,0,"6"),l(n,14,0,"success","block","solid"),l(n,16,0,"save")}),null)}function C(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,11,"ion-header",[],null,null,null,o.bb,o.q)),e.pb(1,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,o.vb,o.K)),e.pb(3,49152,null,0,i.xb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.O,o.d)),e.pb(5,49152,null,0,i.j,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Bb(l,8).onClick(u)&&a),a}),o.M,o.b)),e.pb(7,49152,null,0,i.e,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.pb(8,16384,null,0,i.f,[[2,i.db],i.Cb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.qb(9,0,null,0,2,"ion-title",[],null,null,null,o.ub,o.J)),e.pb(10,49152,null,0,i.vb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Reuni\xe3o Di\xe1ria - Anota\xe7\xf5es"])),(l()(),e.qb(12,0,null,null,73,"ion-content",[["padding",""]],null,null,null,o.V,o.k)),e.pb(13,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(14,0,null,0,11,"ion-item",[],null,null,null,o.hb,o.t)),e.pb(15,49152,null,0,i.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(16,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.ib,o.x)),e.pb(17,49152,null,0,i.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Dia da reuni\xe3o"])),(l()(),e.qb(19,0,null,0,6,"ion-datetime",[["displayFormat","D MMM YYYY H:mm"],["max","2077"],["min","2021"],["value","2021-07-10T11:06Z"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Bb(l,20)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Bb(l,20)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.reuniao.dia=u)&&a),a}),o.W,o.l)),e.pb(20,16384,null,0,i.Gb,[e.k],null,null),e.Eb(1024,null,s.b,(function(l){return[l]}),[i.Gb]),e.pb(22,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,s.c,null,[s.e]),e.pb(24,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(25,49152,null,0,i.t,[e.h,e.k,e.x],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"],value:[3,"value"]},null),(l()(),e.qb(26,0,null,0,11,"ion-item",[],null,null,null,o.hb,o.t)),e.pb(27,49152,null,0,i.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(28,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.ib,o.x)),e.pb(29,49152,null,0,i.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Setor participante"])),(l()(),e.qb(31,0,null,0,6,"ion-textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Bb(l,32)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Bb(l,32)._handleInputEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.reuniao.setor=u)&&a),a}),o.sb,o.H)),e.pb(32,16384,null,0,i.Hb,[e.k],null,null),e.Eb(1024,null,s.b,(function(l){return[l]}),[i.Hb]),e.pb(34,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,s.c,null,[s.e]),e.pb(36,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(37,49152,null,0,i.tb,[e.h,e.k,e.x],null,null),(l()(),e.qb(38,0,null,0,11,"ion-item",[],null,null,null,o.hb,o.t)),e.pb(39,49152,null,0,i.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(40,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.ib,o.x)),e.pb(41,49152,null,0,i.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Anota\xe7\xf5es"])),(l()(),e.qb(43,0,null,0,6,"ion-textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Bb(l,44)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Bb(l,44)._handleInputEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.reuniao.anotacao=u)&&a),a}),o.sb,o.H)),e.pb(44,16384,null,0,i.Hb,[e.k],null,null),e.Eb(1024,null,s.b,(function(l){return[l]}),[i.Hb]),e.pb(46,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,s.c,null,[s.e]),e.pb(48,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(49,49152,null,0,i.tb,[e.h,e.k,e.x],null,null),(l()(),e.qb(50,0,null,0,11,"ion-item",[],null,null,null,o.hb,o.t)),e.pb(51,49152,null,0,i.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(52,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.ib,o.x)),e.pb(53,49152,null,0,i.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["A\xe7\xe3o Finalizada"])),(l()(),e.qb(55,0,null,0,6,"ion-textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Bb(l,56)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Bb(l,56)._handleInputEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.reuniao.status=u)&&a),a}),o.sb,o.H)),e.pb(56,16384,null,0,i.Hb,[e.k],null,null),e.Eb(1024,null,s.b,(function(l){return[l]}),[i.Hb]),e.pb(58,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,s.c,null,[s.e]),e.pb(60,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(61,49152,null,0,i.tb,[e.h,e.k,e.x],null,null),(l()(),e.qb(62,0,null,0,11,"ion-item",[],null,null,null,o.hb,o.t)),e.pb(63,49152,null,0,i.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(64,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.ib,o.x)),e.pb(65,49152,null,0,i.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Respons\xe1vel pela anota\xe7\xe3o"])),(l()(),e.qb(67,0,null,0,6,"ion-textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Bb(l,68)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Bb(l,68)._handleInputEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.reuniao.responsavel=u)&&a),a}),o.sb,o.H)),e.pb(68,16384,null,0,i.Hb,[e.k],null,null),e.Eb(1024,null,s.b,(function(l){return[l]}),[i.Hb]),e.pb(70,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,s.c,null,[s.e]),e.pb(72,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(73,49152,null,0,i.tb,[e.h,e.k,e.x],null,null),(l()(),e.qb(74,0,null,0,11,"ion-item",[],null,null,null,o.hb,o.t)),e.pb(75,49152,null,0,i.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(76,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.ib,o.x)),e.pb(77,49152,null,0,i.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Prazo"])),(l()(),e.qb(79,0,null,0,6,"ion-textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Bb(l,80)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Bb(l,80)._handleInputEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.reuniao.prazo=u)&&a),a}),o.sb,o.H)),e.pb(80,16384,null,0,i.Hb,[e.k],null,null),e.Eb(1024,null,s.b,(function(l){return[l]}),[i.Hb]),e.pb(82,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,s.c,null,[s.e]),e.pb(84,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(85,49152,null,0,i.tb,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,null,1,null,p)),e.pb(87,16384,null,0,r.j,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,h)),e.pb(89,16384,null,0,r.j,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/"),l(n,8,0,"/"),l(n,17,0,"stacked"),l(n,22,0,u.reuniao.dia),l(n,25,0,"D MMM YYYY H:mm","2077","2021","2021-07-10T11:06Z"),l(n,29,0,"stacked"),l(n,34,0,u.reuniao.setor),l(n,41,0,"stacked"),l(n,46,0,u.reuniao.anotacao),l(n,53,0,"stacked"),l(n,58,0,u.reuniao.status),l(n,65,0,"stacked"),l(n,70,0,u.reuniao.responsavel),l(n,77,0,"stacked"),l(n,82,0,u.reuniao.prazo),l(n,87,0,!u.reuniao.id),l(n,89,0,u.reuniao.id)}),(function(l,n){l(n,19,0,e.Bb(n,24).ngClassUntouched,e.Bb(n,24).ngClassTouched,e.Bb(n,24).ngClassPristine,e.Bb(n,24).ngClassDirty,e.Bb(n,24).ngClassValid,e.Bb(n,24).ngClassInvalid,e.Bb(n,24).ngClassPending),l(n,31,0,e.Bb(n,36).ngClassUntouched,e.Bb(n,36).ngClassTouched,e.Bb(n,36).ngClassPristine,e.Bb(n,36).ngClassDirty,e.Bb(n,36).ngClassValid,e.Bb(n,36).ngClassInvalid,e.Bb(n,36).ngClassPending),l(n,43,0,e.Bb(n,48).ngClassUntouched,e.Bb(n,48).ngClassTouched,e.Bb(n,48).ngClassPristine,e.Bb(n,48).ngClassDirty,e.Bb(n,48).ngClassValid,e.Bb(n,48).ngClassInvalid,e.Bb(n,48).ngClassPending),l(n,55,0,e.Bb(n,60).ngClassUntouched,e.Bb(n,60).ngClassTouched,e.Bb(n,60).ngClassPristine,e.Bb(n,60).ngClassDirty,e.Bb(n,60).ngClassValid,e.Bb(n,60).ngClassInvalid,e.Bb(n,60).ngClassPending),l(n,67,0,e.Bb(n,72).ngClassUntouched,e.Bb(n,72).ngClassTouched,e.Bb(n,72).ngClassPristine,e.Bb(n,72).ngClassDirty,e.Bb(n,72).ngClassValid,e.Bb(n,72).ngClassInvalid,e.Bb(n,72).ngClassPending),l(n,79,0,e.Bb(n,84).ngClassUntouched,e.Bb(n,84).ngClassTouched,e.Bb(n,84).ngClassPristine,e.Bb(n,84).ngClassDirty,e.Bb(n,84).ngClassValid,e.Bb(n,84).ngClassInvalid,e.Bb(n,84).ngClassPending)}))}function v(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-reuniaodiariadetails",[],null,null,null,C,g)),e.pb(1,114688,null,0,d,[c.a,b.a,i.Ib,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.mb("app-reuniaodiariadetails",d,v,{},{},[]);class k{}u.d(n,"ReuniaodiariadetailsPageModuleNgFactory",(function(){return B}));var B=e.nb(a,[],(function(l){return e.yb([e.zb(512,e.j,e.Y,[[8,[t.a,m]],[3,e.j],e.v]),e.zb(4608,r.l,r.k,[e.s,[2,r.s]]),e.zb(4608,s.g,s.g,[]),e.zb(4608,i.a,i.a,[e.x,e.g]),e.zb(4608,i.Bb,i.Bb,[i.a,e.j,e.p]),e.zb(4608,i.Eb,i.Eb,[i.a,e.j,e.p]),e.zb(1073742336,r.c,r.c,[]),e.zb(1073742336,s.f,s.f,[]),e.zb(1073742336,s.a,s.a,[]),e.zb(1073742336,i.zb,i.zb,[]),e.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.zb(1073742336,k,k,[]),e.zb(1073742336,a,a,[]),e.zb(1024,c.k,(function(){return[[{path:"",component:d}]]}),[])])}))},Tl90:function(l,n,u){"use strict";u.d(n,"a",(function(){return i}));var e=u("lJxs"),a=u("IzEk"),t=u("8Y7J"),o=u("Xr7G");let i=(()=>{class l{constructor(l){this.afs=l,this.data=[{category:"Embarque de \xd3leo",expanded:!0,products:[{id:0,name:"Tanque de Lecitina",tag:"008"},{id:1,name:"Tanque de Goma",tag:"005"},{id:2,name:"Tanque de Tocoferol",tag:"009"},{id:3,name:"Tanque de degomaodo",tag:"007"}]},{category:"Embarque de farelo ",products:[{id:0,name:"Cancela 01",tag:"009"},{id:1,name:"Cancela 02",tag:"010"}]},{category:"Recebimento",products:[{id:6,name:"Tombador 01",tag:"001"},{id:7,name:"Barrac\xe3o de casca",tag:"002"},{id:8,name:"Barrac\xe3o de res\xedduo",tag:"003"}]},{category:"Portaria",products:[{id:6,name:"Balan\xe7a 01",tag:"011"},{id:7,name:"Cancela 01",tag:"012"},{id:8,name:"Cancela 02",tag:"013"}]}],this.ativoCollection=this.afs.collection("ativos"),this.ativos=this.ativoCollection.snapshotChanges().pipe(Object(e.a)(l=>l.map(l=>{const n=l.payload.doc.data();return Object.assign({id:l.payload.doc.id},n)}))),this.reuniaoCollection=this.afs.collection("reunioes"),this.reunioes=this.reuniaoCollection.snapshotChanges().pipe(Object(e.a)(l=>l.map(l=>{const n=l.payload.doc.data();return Object.assign({id:l.payload.doc.id},n)})))}getReunioes(){return this.reunioes}getAtivos(){return this.ativos}getReuniao(l){return this.reuniaoCollection.doc(l).valueChanges().pipe(Object(a.a)(1),Object(e.a)(n=>(n.id=l,n)))}getAtivo(l){return this.ativoCollection.doc(l).valueChanges().pipe(Object(a.a)(1),Object(e.a)(n=>(n.id=l,n)))}addAtivo(l){return this.ativoCollection.add(l)}addReuniao(l){return this.reuniaoCollection.add(l)}updateReuniao(l){return this.reuniaoCollection.doc(l.id).update({dia:l.dia,setor:l.setor,anotacao:l.anotacao,status:l.status,responsavel:l.responsavel,prazo:l.prazo})}updateAtivo(l){return this.ativoCollection.doc(l.id).update({nome:l.nome,setor:l.setor,lacre_num:l.lacre_num,status:l.status,res_operacao:l.resp_operacao,res_estoque:l.resp_estoque,data:l.data})}updateStatus(l){return this.ativoCollection.doc(l.id).update({status:l.status})}deleteReuniao(l){return this.reuniaoCollection.doc(l).delete()}deleteAtivo(l){return this.ativoCollection.doc(l).delete()}getdadosFake(){return this.data}}return l.ngInjectableDef=t.Nb({factory:function(){return new l(t.Ob(o.a))},token:l,providedIn:"root"}),l})()}}]);