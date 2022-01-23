function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relatorios-relatorios-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/relatorios.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/relatorios.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRelatoriosRelatoriosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Relatórios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/relatorios/relatorios-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/relatorios/relatorios-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: RelatoriosPageRoutingModule */

  /***/
  function srcAppPagesRelatoriosRelatoriosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatoriosPageRoutingModule", function () {
      return RelatoriosPageRoutingModule;
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


    var _relatorios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./relatorios.page */
    "./src/app/pages/relatorios/relatorios.page.ts");

    var routes = [{
      path: '',
      component: _relatorios_page__WEBPACK_IMPORTED_MODULE_3__["RelatoriosPage"]
    }];

    var RelatoriosPageRoutingModule = function RelatoriosPageRoutingModule() {
      _classCallCheck(this, RelatoriosPageRoutingModule);
    };

    RelatoriosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RelatoriosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/relatorios/relatorios.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/relatorios/relatorios.module.ts ***!
    \*******************************************************/

  /*! exports provided: RelatoriosPageModule */

  /***/
  function srcAppPagesRelatoriosRelatoriosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatoriosPageModule", function () {
      return RelatoriosPageModule;
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


    var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./relatorios-routing.module */
    "./src/app/pages/relatorios/relatorios-routing.module.ts");
    /* harmony import */


    var _relatorios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./relatorios.page */
    "./src/app/pages/relatorios/relatorios.page.ts");

    var RelatoriosPageModule = function RelatoriosPageModule() {
      _classCallCheck(this, RelatoriosPageModule);
    };

    RelatoriosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatoriosPageRoutingModule"]],
      declarations: [_relatorios_page__WEBPACK_IMPORTED_MODULE_6__["RelatoriosPage"]]
    })], RelatoriosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/relatorios/relatorios.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/relatorios/relatorios.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRelatoriosRelatoriosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbGF0b3Jpb3MvcmVsYXRvcmlvcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/relatorios/relatorios.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/relatorios/relatorios.page.ts ***!
    \*****************************************************/

  /*! exports provided: RelatoriosPage */

  /***/
  function srcAppPagesRelatoriosRelatoriosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatoriosPage", function () {
      return RelatoriosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RelatoriosPage =
    /*#__PURE__*/
    function () {
      function RelatoriosPage() {
        _classCallCheck(this, RelatoriosPage);
      }

      _createClass(RelatoriosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RelatoriosPage;
    }();

    RelatoriosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-relatorios',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./relatorios.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/relatorios.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./relatorios.page.scss */
      "./src/app/pages/relatorios/relatorios.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RelatoriosPage);
    /***/
  }
}]);
//# sourceMappingURL=relatorios-relatorios-module-es5.js.map