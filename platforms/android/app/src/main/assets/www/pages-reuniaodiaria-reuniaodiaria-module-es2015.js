(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reuniaodiaria-reuniaodiaria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiaria/reuniaodiaria.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiaria/reuniaodiaria.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>reuniaodiaria</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/reuniaodiaria/reuniaodiaria-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reuniaodiaria/reuniaodiaria-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReuniaodiariaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuniaodiariaPageRoutingModule", function() { return ReuniaodiariaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reuniaodiaria.page */ "./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts");




const routes = [
    {
        path: '',
        component: _reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_3__["ReuniaodiariaPage"]
    }
];
let ReuniaodiariaPageRoutingModule = class ReuniaodiariaPageRoutingModule {
};
ReuniaodiariaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReuniaodiariaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reuniaodiaria/reuniaodiaria.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/reuniaodiaria/reuniaodiaria.module.ts ***!
  \*************************************************************/
/*! exports provided: ReuniaodiariaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuniaodiariaPageModule", function() { return ReuniaodiariaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reuniaodiaria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reuniaodiaria-routing.module */ "./src/app/pages/reuniaodiaria/reuniaodiaria-routing.module.ts");
/* harmony import */ var _reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reuniaodiaria.page */ "./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts");







let ReuniaodiariaPageModule = class ReuniaodiariaPageModule {
};
ReuniaodiariaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reuniaodiaria_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReuniaodiariaPageRoutingModule"]
        ],
        declarations: [_reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_6__["ReuniaodiariaPage"]]
    })
], ReuniaodiariaPageModule);



/***/ }),

/***/ "./src/app/pages/reuniaodiaria/reuniaodiaria.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/reuniaodiaria/reuniaodiaria.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldW5pYW9kaWFyaWEvcmV1bmlhb2RpYXJpYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts ***!
  \***********************************************************/
/*! exports provided: ReuniaodiariaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuniaodiariaPage", function() { return ReuniaodiariaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ativo-ldc.service */ "./src/app/services/ativo-ldc.service.ts");



let ReuniaodiariaPage = class ReuniaodiariaPage {
    constructor(ativoLDCService) {
        this.ativoLDCService = ativoLDCService;
        this.items = [];
        this.sliderConfig = {
            slidesPerView: 1.6,
            spaceBetween: 10,
            centeredSlides: true
        };
    }
    ngOnInit() {
        this.ativos = this.ativoLDCService.getAtivos();
        this.items = this.ativoLDCService.getdadosFake();
    }
};
ReuniaodiariaPage.ctorParameters = () => [
    { type: src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__["AtivoLDCService"] }
];
ReuniaodiariaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reuniaodiaria',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reuniaodiaria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiaria/reuniaodiaria.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reuniaodiaria.page.scss */ "./src/app/pages/reuniaodiaria/reuniaodiaria.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__["AtivoLDCService"]])
], ReuniaodiariaPage);



/***/ })

}]);
//# sourceMappingURL=pages-reuniaodiaria-reuniaodiaria-module-es2015.js.map