function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reuniaodiaria-reuniaodiaria-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiaria/reuniaodiaria.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiaria/reuniaodiaria.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReuniaodiariaReuniaodiariaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>reuniaodiaria</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiaria/reuniaodiaria-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/reuniaodiaria/reuniaodiaria-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ReuniaodiariaPageRoutingModule */

  /***/
  function srcAppPagesReuniaodiariaReuniaodiariaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReuniaodiariaPageRoutingModule", function () {
      return ReuniaodiariaPageRoutingModule;
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


    var _reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reuniaodiaria.page */
    "./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts");

    var routes = [{
      path: '',
      component: _reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_3__["ReuniaodiariaPage"]
    }];

    var ReuniaodiariaPageRoutingModule = function ReuniaodiariaPageRoutingModule() {
      _classCallCheck(this, ReuniaodiariaPageRoutingModule);
    };

    ReuniaodiariaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReuniaodiariaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiaria/reuniaodiaria.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/reuniaodiaria/reuniaodiaria.module.ts ***!
    \*************************************************************/

  /*! exports provided: ReuniaodiariaPageModule */

  /***/
  function srcAppPagesReuniaodiariaReuniaodiariaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReuniaodiariaPageModule", function () {
      return ReuniaodiariaPageModule;
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


    var _reuniaodiaria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reuniaodiaria-routing.module */
    "./src/app/pages/reuniaodiaria/reuniaodiaria-routing.module.ts");
    /* harmony import */


    var _reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reuniaodiaria.page */
    "./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts");

    var ReuniaodiariaPageModule = function ReuniaodiariaPageModule() {
      _classCallCheck(this, ReuniaodiariaPageModule);
    };

    ReuniaodiariaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reuniaodiaria_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReuniaodiariaPageRoutingModule"]],
      declarations: [_reuniaodiaria_page__WEBPACK_IMPORTED_MODULE_6__["ReuniaodiariaPage"]]
    })], ReuniaodiariaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiaria/reuniaodiaria.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/reuniaodiaria/reuniaodiaria.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReuniaodiariaReuniaodiariaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldW5pYW9kaWFyaWEvcmV1bmlhb2RpYXJpYS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/reuniaodiaria/reuniaodiaria.page.ts ***!
    \***********************************************************/

  /*! exports provided: ReuniaodiariaPage */

  /***/
  function srcAppPagesReuniaodiariaReuniaodiariaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReuniaodiariaPage", function () {
      return ReuniaodiariaPage;
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


    var src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ativo-ldc.service */
    "./src/app/services/ativo-ldc.service.ts");

    var ReuniaodiariaPage =
    /*#__PURE__*/
    function () {
      function ReuniaodiariaPage(ativoLDCService) {
        _classCallCheck(this, ReuniaodiariaPage);

        this.ativoLDCService = ativoLDCService;
        this.items = [];
        this.sliderConfig = {
          slidesPerView: 1.6,
          spaceBetween: 10,
          centeredSlides: true
        };
      }

      _createClass(ReuniaodiariaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ativos = this.ativoLDCService.getAtivos();
          this.items = this.ativoLDCService.getdadosFake();
        }
      }]);

      return ReuniaodiariaPage;
    }();

    ReuniaodiariaPage.ctorParameters = function () {
      return [{
        type: src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__["AtivoLDCService"]
      }];
    };

    ReuniaodiariaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reuniaodiaria',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reuniaodiaria.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiaria/reuniaodiaria.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reuniaodiaria.page.scss */
      "./src/app/pages/reuniaodiaria/reuniaodiaria.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__["AtivoLDCService"]])], ReuniaodiariaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-reuniaodiaria-reuniaodiaria-module-es5.js.map