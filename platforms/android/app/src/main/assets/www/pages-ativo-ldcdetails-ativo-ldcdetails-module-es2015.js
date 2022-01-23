(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ativo-ldcdetails-ativo-ldcdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalhe dos equipamentos</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n \n  <ion-item>\n    <ion-label position=\"stacked\">Nome do equipamento</ion-label>\n    <ion-input [(ngModel)]=\"ativo.nome\"></ion-input>\n  </ion-item>\n \n  <ion-item>\n    <ion-label position=\"stacked\">Setor</ion-label>\n    <ion-textarea [(ngModel)]=\"ativo.setor\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Nº do lacre</ion-label>\n    <ion-textarea [(ngModel)]=\"ativo.lacre_num\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Status</ion-label>\n    <ion-textarea [(ngModel)]=\"ativo.status\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Responsável Estoque</ion-label>\n    <ion-textarea [(ngModel)]=\"ativo.resp_operacao\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Responsável Operação</ion-label>\n    <ion-textarea [(ngModel)]=\"ativo.resp_estoque\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\" >Data e hora</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2021\" max=\"2077\" value=\"2021-07-10T11:06Z\" [(ngModel)]=\"ativo.data\" ></ion-datetime>\n  </ion-item>\n\n\n\n\n</ion-content>\n \n<ion-footer *ngIf=\"!ativo.id\">\n  <ion-toolbar color=\"success\">\n    <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addAtivo()\">\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n      Criar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n \n<ion-footer *ngIf=\"ativo.id\">\n  <ion-row no-padding text-center>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"deleteAtivo()\">\n        <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n        Apagar\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"solid\" color=\"success\" (click)=\"updateAtivo()\">\n        <ion-icon name=\"save\" slot=\"start\"></ion-icon>\n        Atualizar\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ativo-ldcdetails/ativo-ldcdetails-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AtivoLDCDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtivoLDCDetailsPageRoutingModule", function() { return AtivoLDCDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ativo_ldcdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ativo-ldcdetails.page */ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.ts");




const routes = [
    {
        path: '',
        component: _ativo_ldcdetails_page__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCDetailsPage"]
    }
];
let AtivoLDCDetailsPageRoutingModule = class AtivoLDCDetailsPageRoutingModule {
};
AtivoLDCDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AtivoLDCDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.module.ts ***!
  \*******************************************************************/
/*! exports provided: AtivoLDCDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtivoLDCDetailsPageModule", function() { return AtivoLDCDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ativo_ldcdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ativo-ldcdetails-routing.module */ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails-routing.module.ts");
/* harmony import */ var _ativo_ldcdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ativo-ldcdetails.page */ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.ts");







let AtivoLDCDetailsPageModule = class AtivoLDCDetailsPageModule {
};
AtivoLDCDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ativo_ldcdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtivoLDCDetailsPageRoutingModule"]
        ],
        declarations: [_ativo_ldcdetails_page__WEBPACK_IMPORTED_MODULE_6__["AtivoLDCDetailsPage"]]
    })
], AtivoLDCDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0aXZvLWxkY2RldGFpbHMvYXRpdm8tbGRjZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.ts ***!
  \*****************************************************************/
/*! exports provided: AtivoLDCDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtivoLDCDetailsPage", function() { return AtivoLDCDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ativo-ldc.service */ "./src/app/services/ativo-ldc.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let AtivoLDCDetailsPage = class AtivoLDCDetailsPage {
    constructor(activatedRoute, ativoLDCService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.ativoLDCService = ativoLDCService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.ativo = {
            nome: ' ',
            setor: ' ',
            lacre_num: null,
            status: null,
            resp_operacao: ' ',
            resp_estoque: ' ',
            data: null,
        };
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
            this.ativoLDCService.getAtivo(id).subscribe(ativo => {
                this.ativo = ativo;
            });
        }
    }
    addAtivo() {
        this.ativoLDCService.addAtivo(this.ativo).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Ativo adicionado');
        }, err => {
            this.showToast('Ocorreu um problema ao adicionar esse ativo :(');
        });
    }
    deleteAtivo() {
        this.ativoLDCService.deleteAtivo(this.ativo.id).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Ativo deletado');
        }, err => {
            this.showToast('Ocorreu um problema ao excluir esse ativo :(');
        });
    }
    updateAtivo() {
        this.ativoLDCService.updateAtivo(this.ativo).then(() => {
            this.showToast('Ativo atualizado');
        }, err => {
            this.showToast('Ocorreu um problema ao atualizar esse ativo :(');
        });
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
};
AtivoLDCDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AtivoLDCDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ativo-ldcdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ativo-ldcdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ativo-ldcdetails.page.scss */ "./src/app/pages/ativo-ldcdetails/ativo-ldcdetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AtivoLDCDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-ativo-ldcdetails-ativo-ldcdetails-module-es2015.js.map