function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventarios-inventarios-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventarios/inventarios.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventarios/inventarios.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInventariosInventariosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"Dark\">\n    <ion-buttons slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"color: aliceblue;\">\n      Inventários\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-text-center ion-margin-top ion-margin-bottom\">\n    <div class=\"orderSummary\">\n      <h4>Nº de inventários :{{order.grandTotal}}</h4>\n      <p>Produtos inventariados : {{order.products.length}}</p>\n      <ion-text [color]=\"order.status=='Delivered'?'success':'primary'\">\n        Status do equipamento: {{order.delivery_status}}</ion-text>\n      <p> Desde o dia: {{order.createdAt}}</p>\n    </div>\n  </div>\n  <ion-card class=\"ion-no-padding\">\n    <ion-item *ngFor=\"let product of order.products\">\n      <ion-thumbnail>\n        <img [src]=\"product.images[0]\" />\n      </ion-thumbnail>\n      <ion-label>\n        <h4>{{product.name}}</h4>\n\n        <p> {{product.salePrice}} <span class=\"subTitle\" *ngIf=\"product.offer !== '' && product.offer !== '0'\">\n            {{product.regularPrice}}</span>\n        </p>\n        <p>Quantidade : {{product.units}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"8\" class=\"ion-padding\">\n        <ion-row>\n          <ion-col class=\"bold\">\n            <h5 class=\"ion-no-margin\">Endereço:</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"address-text\">\n            {{order.address.flatNumber}} {{order.address.street}} {{order.address.locality}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"bold\">\n            <h5 class=\"ion-no-margin\"> Status:</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"address-text\">\n            {{order.address.title}} {{order.address.name}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button (click)=\"openInvoice(order)\">\n          PDF\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/inventarios/inventarios-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/inventarios/inventarios-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: InventariosPageRoutingModule */

  /***/
  function srcAppPagesInventariosInventariosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventariosPageRoutingModule", function () {
      return InventariosPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inventarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inventarios.page */
    "./src/app/pages/inventarios/inventarios.page.ts");

    var routes = [{
      path: '',
      component: _inventarios_page__WEBPACK_IMPORTED_MODULE_3__["InventariosPage"]
    }];

    var InventariosPageRoutingModule = function InventariosPageRoutingModule() {
      _classCallCheck(this, InventariosPageRoutingModule);
    };

    InventariosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InventariosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inventarios/inventarios.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/inventarios/inventarios.module.ts ***!
    \*********************************************************/

  /*! exports provided: InventariosPageModule */

  /***/
  function srcAppPagesInventariosInventariosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventariosPageModule", function () {
      return InventariosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _inventarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inventarios-routing.module */
    "./src/app/pages/inventarios/inventarios-routing.module.ts");
    /* harmony import */


    var _inventarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inventarios.page */
    "./src/app/pages/inventarios/inventarios.page.ts");

    var InventariosPageModule = function InventariosPageModule() {
      _classCallCheck(this, InventariosPageModule);
    };

    InventariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inventarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventariosPageRoutingModule"]],
      declarations: [_inventarios_page__WEBPACK_IMPORTED_MODULE_6__["InventariosPage"]]
    })], InventariosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inventarios/inventarios.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/inventarios/inventarios.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInventariosInventariosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orderSummary p {\n  margin: 0;\n  color: gray;\n}\n\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin-right: 50px;\n}\n\n.subTitle {\n  margin-left: 20px;\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50YXJpb3MvQzpcXEFwcHNcXHN0b2NrY29udHJvbGxlci9zcmNcXGFwcFxccGFnZXNcXGludmVudGFyaW9zXFxpbnZlbnRhcmlvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludmVudGFyaW9zL2ludmVudGFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnRhcmlvcy9pbnZlbnRhcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJTdW1tYXJ5IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5pb24tdGh1bWJuYWlsIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLnN1YlRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufSIsIi5vcmRlclN1bW1hcnkgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/inventarios/inventarios.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/inventarios/inventarios.page.ts ***!
    \*******************************************************/

  /*! exports provided: InventariosPage */

  /***/
  function srcAppPagesInventariosInventariosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventariosPage", function () {
      return InventariosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/invoice/invoice.component */
    "./src/app/components/invoice/invoice.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var InventariosPage =
    /*#__PURE__*/
    function () {
      function InventariosPage(modalCtrl) {
        _classCallCheck(this, InventariosPage);

        this.modalCtrl = modalCtrl;
        this.order = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].orderData;
      }

      _createClass(InventariosPage, [{
        key: "openInvoice",
        value: function openInvoice(order) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var InvoiceModal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.createModal(_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"], {
                      order: order
                    });

                  case 2:
                    InvoiceModal = _context.sent;
                    _context.next = 5;
                    return InvoiceModal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "createModal",
        value: function createModal(component, componentProps, cssClass) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: component,
                      cssClass: cssClass,
                      componentProps: componentProps,
                      backdropDismiss: true
                    });

                  case 2:
                    modal = _context2.sent;
                    return _context2.abrupt("return", modal);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InventariosPage;
    }();

    InventariosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    InventariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventarios',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventarios.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventarios/inventarios.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventarios.page.scss */
      "./src/app/pages/inventarios/inventarios.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], InventariosPage);
    /***/
  }
}]);
//# sourceMappingURL=inventarios-inventarios-module-es5.js.map