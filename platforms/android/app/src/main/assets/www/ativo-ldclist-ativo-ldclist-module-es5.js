function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ativo-ldclist-ativo-ldclist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ativo-ldclist/ativo-ldclist.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ativo-ldclist/ativo-ldclist.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAtivoLdclistAtivoLdclistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar color=\"primary\">  \n\n    <ion-title > <img src=\"../../../assets/LDC.png\" style=\"height: 25px; width: 40px; \" > <b>  Stock Controller </b>\n      \n    </ion-title>  \n    \n  </ion-toolbar>\n\n</ion-header>\n \n<ion-content>\n\n<!-- fab placed in the center of the content with a list on each side -->\n<ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon name=\"book-outline\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"top\">\n    <ion-fab-button routerLink=\"/ativo\" ><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n  </ion-fab-list>\n  <ion-fab-list side=\"bottom\">\n    <ion-fab-button routerLink=\"/sobre\" ><ion-icon name=\"pulse-outline\"></ion-icon></ion-fab-button>\n  </ion-fab-list>\n  <ion-fab-list side=\"start\">\n    <ion-fab-button routerLink=\"/reuniao\" ><ion-icon name=\"create-outline\"></ion-icon></ion-fab-button>\n  </ion-fab-list>\n\n</ion-fab>\n\n\n\n  <ion-note style=\"font-size: 8px; color: black; margin-left: 3%;\" > Powered by Celso Farias</ion-note>\n\n  <ion-list >\n\n\n    <ion-toolbar>\n      <ion-title style=\"color: black;\"> <ion-icon name=\"pricetags-outline\">  </ion-icon> <b> Equipamentos  <br>  </b> </ion-title>\n    </ion-toolbar>\n    \n\n    <!-- Multi-line sliding item with icon options on both sides -->\n    <ion-item-sliding id=\"item100\" button [routerLink]=\"['/ativo', ativo.id]\" *ngFor=\"let ativo of (ativos | async)\"  class=\"ativoLDC\">\n      <ion-item href=\"#\" >\n        <ion-label >\n          <h2> {{ ativo.nome }} </h2>\n          <p> {{ ativo.lacre_num}}</p>\n          <p>{{ ativo.setor}}</p>\n        </ion-label>\n        <ion-note slot=\"end\"> \n        <b> {{ativo.status}}</b>\n        </ion-note>\n      </ion-item>\n  \n      <ion-item-options side=\"start\">\n        <ion-item-option>\n          <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon> Movimentação\n        </ion-item-option>\n      </ion-item-options>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"success\" >\n          <ion-icon slot=\"icon-only\" name=\"lock-open-outline\"  ></ion-icon> Abrir\n        </ion-item-option>\n        <ion-item-option color=\"medium\">\n          <ion-icon slot=\"icon-only\" name=\"lock-closed-outline\"></ion-icon> Fechar\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n  </ion-list> \n\n\n  <ion-toolbar>\n    <ion-title style=\"color: black;\" > <ion-icon name=\"business-outline\"></ion-icon> <b> Setores  <br>  </b> </ion-title>\n  </ion-toolbar>\n\n   <div *ngFor=\"let cat of items\" class=\"category-block\">\n \n    <ion-row no-padding class=\"category-banner\" style=\"color: black;\">\n      <ion-col text-left button tappable (click)=\"cat.expanded = !cat.expanded\" align-self-center >\n        {{ cat.category }}\n      </ion-col>\n    </ion-row>\n \n    <ion-slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let product of cat.products\">\n        <div *ngIf=\"cat.expanded\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title style=\"font-size: 10px;\" >\n                {{ product.name }}  <p style=\"font-size: 9px; font-style: italic;\"> - {{product.tag}} </p>\n              </ion-card-title>\n              <ion-card-content>\n                <img src=\"https://via.placeholder.com/300x300\">\n                <ion-button expand=\"full\" > <ion-icon name=\"eye-outline\"></ion-icon> </ion-button>\n              </ion-card-content>\n            </ion-card-header>\n          </ion-card>\n        </div>\n      </ion-slide>\n    </ion-slides>\n \n  </div>\n\n\n  <ion-toolbar>\n    <ion-title style=\"color: black;\">     <ion-icon name=\"color-filter-outline\"></ion-icon>\n      <b> Reunião diária  <br>  </b> </ion-title>\n  </ion-toolbar>\n\n   <!-- \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/ativo\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/reuniao\">\n      <ion-icon name=\"clipboard-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n \n\n\n    \n\n      <ion-list>\n    <ion-item button [routerLink]=\"['/ativo', ativo.id]\" *ngFor=\"let ativo of (ativos | async)\">\n      {{ ativo.nome }} <br> <br> <p style=\"font-size: 9px;\">\n      {{ ativo.lacre_num}} => {{ativo.status}} </p>\n    </ion-item>\n  </ion-list>\n\n\n\n  -->\n\n  <!-- \n    <ion-list>\n      <ion-label button [routerLink]=\"['/ativo', ativo.id]\" *ngFor=\"let ativo of (ativos | async)\">\n        {{ ativo.nome }} <br> <p style=\"font-size: 9px;\">\n        {{ ativo.lacre_num}} => {{ativo.status}} </p>\n      </ion-label>\n    </ion-list>\n  -->\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/ativo-ldclist/ativo-ldclist-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/ativo-ldclist/ativo-ldclist-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AtivoLDCListPageRoutingModule */

  /***/
  function srcAppPagesAtivoLdclistAtivoLdclistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtivoLDCListPageRoutingModule", function () {
      return AtivoLDCListPageRoutingModule;
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


    var _ativo_ldclist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ativo-ldclist.page */
    "./src/app/pages/ativo-ldclist/ativo-ldclist.page.ts");

    var routes = [{
      path: '',
      component: _ativo_ldclist_page__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCListPage"]
    }];

    var AtivoLDCListPageRoutingModule = function AtivoLDCListPageRoutingModule() {
      _classCallCheck(this, AtivoLDCListPageRoutingModule);
    };

    AtivoLDCListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AtivoLDCListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ativo-ldclist/ativo-ldclist.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/ativo-ldclist/ativo-ldclist.module.ts ***!
    \*************************************************************/

  /*! exports provided: AtivoLDCListPageModule */

  /***/
  function srcAppPagesAtivoLdclistAtivoLdclistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtivoLDCListPageModule", function () {
      return AtivoLDCListPageModule;
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


    var _ativo_ldclist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ativo-ldclist-routing.module */
    "./src/app/pages/ativo-ldclist/ativo-ldclist-routing.module.ts");
    /* harmony import */


    var _ativo_ldclist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ativo-ldclist.page */
    "./src/app/pages/ativo-ldclist/ativo-ldclist.page.ts");

    var AtivoLDCListPageModule = function AtivoLDCListPageModule() {
      _classCallCheck(this, AtivoLDCListPageModule);
    };

    AtivoLDCListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ativo_ldclist_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtivoLDCListPageRoutingModule"]],
      declarations: [_ativo_ldclist_page__WEBPACK_IMPORTED_MODULE_6__["AtivoLDCListPage"]]
    })], AtivoLDCListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/ativo-ldclist/ativo-ldclist.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/ativo-ldclist/ativo-ldclist.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAtivoLdclistAtivoLdclistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%;\n}\n\n.category-block {\n  margin-bottom: 4px;\n}\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500;\n}\n\n.ativoLDC {\n  border-left: 8px solid var(--ion-color-success);\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXRpdm8tbGRjbGlzdC9DOlxcQXBwc1xcc3RvY2tjb250cm9sbGVyL3NyY1xcYXBwXFxwYWdlc1xcYXRpdm8tbGRjbGlzdFxcYXRpdm8tbGRjbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F0aXZvLWxkY2xpc3QvYXRpdm8tbGRjbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaURBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLCtDQUFBO0VBQ0Esa0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0aXZvLWxkY2xpc3QvYXRpdm8tbGRjbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktYmFubmVyIHtcclxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmF0aXZvTERDIHtcclxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59IiwiaW9uLWJhZGdlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jYXRlZ29yeS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNhdGVnb3J5LWJhbm5lciB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmF0aXZvTERDIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/ativo-ldclist/ativo-ldclist.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/ativo-ldclist/ativo-ldclist.page.ts ***!
    \***********************************************************/

  /*! exports provided: AtivoLDCListPage */

  /***/
  function srcAppPagesAtivoLdclistAtivoLdclistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtivoLDCListPage", function () {
      return AtivoLDCListPage;
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

    var AtivoLDCListPage =
    /*#__PURE__*/
    function () {
      function AtivoLDCListPage(ativoLDCService) {
        _classCallCheck(this, AtivoLDCListPage);

        this.ativoLDCService = ativoLDCService;
        this.items = [];
        this.sliderConfig = {
          slidesPerView: 1.6,
          spaceBetween: 10,
          centeredSlides: true
        };
      }

      _createClass(AtivoLDCListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ativos = this.ativoLDCService.getAtivos();
          this.items = this.ativoLDCService.getdadosFake();
        }
      }]);

      return AtivoLDCListPage;
    }();

    AtivoLDCListPage.ctorParameters = function () {
      return [{
        type: src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__["AtivoLDCService"]
      }];
    };

    AtivoLDCListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ativo-ldclist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ativo-ldclist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ativo-ldclist/ativo-ldclist.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ativo-ldclist.page.scss */
      "./src/app/pages/ativo-ldclist/ativo-ldclist.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_2__["AtivoLDCService"]])], AtivoLDCListPage);
    /***/
  }
}]);
//# sourceMappingURL=ativo-ldclist-ativo-ldclist-module-es5.js.map