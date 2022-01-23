(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventarios-inventarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventarios/inventarios.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventarios/inventarios.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"Dark\">\n    <ion-buttons slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"color: aliceblue;\">\n      Inventários\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-text-center ion-margin-top ion-margin-bottom\">\n    <div class=\"orderSummary\">\n      <h4>Nº de inventários :{{order.grandTotal}}</h4>\n      <p>Produtos inventariados : {{order.products.length}}</p>\n      <ion-text [color]=\"order.status=='Delivered'?'success':'primary'\">\n        Status do equipamento: {{order.delivery_status}}</ion-text>\n      <p> Desde o dia: {{order.createdAt}}</p>\n    </div>\n  </div>\n  <ion-card class=\"ion-no-padding\">\n    <ion-item *ngFor=\"let product of order.products\">\n      <ion-thumbnail>\n        <img [src]=\"product.images[0]\" />\n      </ion-thumbnail>\n      <ion-label>\n        <h4>{{product.name}}</h4>\n\n        <p> {{product.salePrice}} <span class=\"subTitle\" *ngIf=\"product.offer !== '' && product.offer !== '0'\">\n            {{product.regularPrice}}</span>\n        </p>\n        <p>Quantidade : {{product.units}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"8\" class=\"ion-padding\">\n        <ion-row>\n          <ion-col class=\"bold\">\n            <h5 class=\"ion-no-margin\">Endereço:</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"address-text\">\n            {{order.address.flatNumber}} {{order.address.street}} {{order.address.locality}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"bold\">\n            <h5 class=\"ion-no-margin\"> Status:</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"address-text\">\n            {{order.address.title}} {{order.address.name}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button (click)=\"openInvoice(order)\">\n          PDF\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inventarios/inventarios-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/inventarios/inventarios-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: InventariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventariosPageRoutingModule", function() { return InventariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventarios.page */ "./src/app/pages/inventarios/inventarios.page.ts");




const routes = [
    {
        path: '',
        component: _inventarios_page__WEBPACK_IMPORTED_MODULE_3__["InventariosPage"]
    }
];
let InventariosPageRoutingModule = class InventariosPageRoutingModule {
};
InventariosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InventariosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventarios/inventarios.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/inventarios/inventarios.module.ts ***!
  \*********************************************************/
/*! exports provided: InventariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventariosPageModule", function() { return InventariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inventarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventarios-routing.module */ "./src/app/pages/inventarios/inventarios-routing.module.ts");
/* harmony import */ var _inventarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventarios.page */ "./src/app/pages/inventarios/inventarios.page.ts");







let InventariosPageModule = class InventariosPageModule {
};
InventariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inventarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventariosPageRoutingModule"]
        ],
        declarations: [_inventarios_page__WEBPACK_IMPORTED_MODULE_6__["InventariosPage"]]
    })
], InventariosPageModule);



/***/ }),

/***/ "./src/app/pages/inventarios/inventarios.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/inventarios/inventarios.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orderSummary p {\n  margin: 0;\n  color: gray;\n}\n\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin-right: 50px;\n}\n\n.subTitle {\n  margin-left: 20px;\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50YXJpb3MvQzpcXEFwcHNcXHN0b2NrY29udHJvbGxlci9zcmNcXGFwcFxccGFnZXNcXGludmVudGFyaW9zXFxpbnZlbnRhcmlvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludmVudGFyaW9zL2ludmVudGFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnRhcmlvcy9pbnZlbnRhcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJTdW1tYXJ5IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5pb24tdGh1bWJuYWlsIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLnN1YlRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufSIsIi5vcmRlclN1bW1hcnkgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/inventarios/inventarios.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inventarios/inventarios.page.ts ***!
  \*******************************************************/
/*! exports provided: InventariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventariosPage", function() { return InventariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let InventariosPage = class InventariosPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.order = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].orderData;
    }
    openInvoice(order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const InvoiceModal = yield this.createModal(_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"], { order });
            yield InvoiceModal.present();
        });
    }
    createModal(component, componentProps, cssClass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component,
                cssClass,
                componentProps,
                backdropDismiss: true
            });
            return modal;
        });
    }
    ngOnInit() {
    }
};
InventariosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
InventariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventarios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventarios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventarios/inventarios.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventarios.page.scss */ "./src/app/pages/inventarios/inventarios.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], InventariosPage);



/***/ })

}]);
//# sourceMappingURL=inventarios-inventarios-module-es2015.js.map