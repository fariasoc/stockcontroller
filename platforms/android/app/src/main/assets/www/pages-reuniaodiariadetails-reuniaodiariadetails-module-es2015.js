(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reuniaodiariadetails-reuniaodiariadetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reunião Diária - Anotações</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n \n  <ion-item>\n    <ion-label position=\"stacked\" >Dia da reunião</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2021\" max=\"2077\" value=\"2021-07-10T11:06Z\" [(ngModel)]=\"reuniao.dia\" ></ion-datetime>\n  </ion-item>\n \n  <ion-item>\n    <ion-label position=\"stacked\">Setor participante</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.setor\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Anotações</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.anotacao\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Ação Finalizada</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.status\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Responsável pela anotação</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.responsavel\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Prazo</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.prazo\"></ion-textarea>\n  </ion-item>\n<!--\n  <ion-item>\n    <ion-label position=\"stacked\" >Data e hora</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2021\" max=\"2077\" value=\"2021-07-10T11:06Z\" [(ngModel)]=\"reuniao.data\" ></ion-datetime>\n  </ion-item>\n-->\n\n\n\n</ion-content>\n \n<ion-footer *ngIf=\"!reuniao.id\">\n  <ion-toolbar color=\"success\">\n    <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addReuniao()\">\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n      Criar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n \n<ion-footer *ngIf=\"reuniao.id\">\n  <ion-row no-padding text-center>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"deleteReuniao()\">\n        <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n        Apagar\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"solid\" color=\"success\" (click)=\"updateReuniao()\">\n        <ion-icon name=\"save\" slot=\"start\"></ion-icon>\n        Atualizar\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ReuniaodiariadetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuniaodiariadetailsPageRoutingModule", function() { return ReuniaodiariadetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reuniaodiariadetails.page */ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts");




const routes = [
    {
        path: '',
        component: _reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_3__["ReuniaodiariadetailsPage"]
    }
];
let ReuniaodiariadetailsPageRoutingModule = class ReuniaodiariadetailsPageRoutingModule {
};
ReuniaodiariadetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReuniaodiariadetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReuniaodiariadetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuniaodiariadetailsPageModule", function() { return ReuniaodiariadetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reuniaodiariadetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reuniaodiariadetails-routing.module */ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails-routing.module.ts");
/* harmony import */ var _reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reuniaodiariadetails.page */ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts");







let ReuniaodiariadetailsPageModule = class ReuniaodiariadetailsPageModule {
};
ReuniaodiariadetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reuniaodiariadetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReuniaodiariadetailsPageRoutingModule"]
        ],
        declarations: [_reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_6__["ReuniaodiariadetailsPage"]]
    })
], ReuniaodiariadetailsPageModule);



/***/ }),

/***/ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldW5pYW9kaWFyaWFkZXRhaWxzL3JldW5pYW9kaWFyaWFkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts ***!
  \*************************************************************************/
/*! exports provided: ReuniaodiariadetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuniaodiariadetailsPage", function() { return ReuniaodiariadetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ativo-ldc.service */ "./src/app/services/ativo-ldc.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ReuniaodiariadetailsPage = class ReuniaodiariadetailsPage {
    constructor(activatedRoute, ativoLDCService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.ativoLDCService = ativoLDCService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.reuniao = {
            dia: ' ',
            setor: ' ',
            anotacao: ' ',
            status: false,
            responsavel: ' ',
            prazo: null,
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.ativoLDCService.getReuniao(id).subscribe(reuniao => {
                this.reuniao = reuniao;
            });
        }
    }
    addReuniao() {
        this.ativoLDCService.addReuniao(this.reuniao).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Anotação da reunião adicionada');
        }, err => {
            this.showToast('Ocorreu um problema ao adicionar essa anotação :(');
        });
    }
    deleteReuniao() {
        this.ativoLDCService.deleteReuniao(this.reuniao.id).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Anotação da reunião deletada');
        }, err => {
            this.showToast('Ocorreu um problema ao excluir essa anotação :(');
        });
    }
    updateReuniao() {
        this.ativoLDCService.updateReuniao(this.reuniao).then(() => {
            this.showToast('Reunião atualizado');
        }, err => {
            this.showToast('Ocorreu um problema ao atualizar essa reunião :(');
        });
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
};
ReuniaodiariadetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ReuniaodiariadetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reuniaodiariadetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reuniaodiariadetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reuniaodiariadetails.page.scss */ "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ReuniaodiariadetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-reuniaodiariadetails-reuniaodiariadetails-module-es2015.js.map