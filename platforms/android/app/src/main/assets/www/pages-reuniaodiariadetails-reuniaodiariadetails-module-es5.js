function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reuniaodiariadetails-reuniaodiariadetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReuniaodiariadetailsReuniaodiariadetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reunião Diária - Anotações</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n \n  <ion-item>\n    <ion-label position=\"stacked\" >Dia da reunião</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2021\" max=\"2077\" value=\"2021-07-10T11:06Z\" [(ngModel)]=\"reuniao.dia\" ></ion-datetime>\n  </ion-item>\n \n  <ion-item>\n    <ion-label position=\"stacked\">Setor participante</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.setor\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Anotações</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.anotacao\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Ação Finalizada</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.status\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Responsável pela anotação</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.responsavel\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Prazo</ion-label>\n    <ion-textarea [(ngModel)]=\"reuniao.prazo\"></ion-textarea>\n  </ion-item>\n<!--\n  <ion-item>\n    <ion-label position=\"stacked\" >Data e hora</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2021\" max=\"2077\" value=\"2021-07-10T11:06Z\" [(ngModel)]=\"reuniao.data\" ></ion-datetime>\n  </ion-item>\n-->\n\n\n\n</ion-content>\n \n<ion-footer *ngIf=\"!reuniao.id\">\n  <ion-toolbar color=\"success\">\n    <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addReuniao()\">\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n      Criar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n \n<ion-footer *ngIf=\"reuniao.id\">\n  <ion-row no-padding text-center>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"deleteReuniao()\">\n        <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n        Apagar\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"solid\" color=\"success\" (click)=\"updateReuniao()\">\n        <ion-icon name=\"save\" slot=\"start\"></ion-icon>\n        Atualizar\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ReuniaodiariadetailsPageRoutingModule */

  /***/
  function srcAppPagesReuniaodiariadetailsReuniaodiariadetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReuniaodiariadetailsPageRoutingModule", function () {
      return ReuniaodiariadetailsPageRoutingModule;
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


    var _reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reuniaodiariadetails.page */
    "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts");

    var routes = [{
      path: '',
      component: _reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_3__["ReuniaodiariadetailsPage"]
    }];

    var ReuniaodiariadetailsPageRoutingModule = function ReuniaodiariadetailsPageRoutingModule() {
      _classCallCheck(this, ReuniaodiariadetailsPageRoutingModule);
    };

    ReuniaodiariadetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReuniaodiariadetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ReuniaodiariadetailsPageModule */

  /***/
  function srcAppPagesReuniaodiariadetailsReuniaodiariadetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReuniaodiariadetailsPageModule", function () {
      return ReuniaodiariadetailsPageModule;
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


    var _reuniaodiariadetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reuniaodiariadetails-routing.module */
    "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails-routing.module.ts");
    /* harmony import */


    var _reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reuniaodiariadetails.page */
    "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts");

    var ReuniaodiariadetailsPageModule = function ReuniaodiariadetailsPageModule() {
      _classCallCheck(this, ReuniaodiariadetailsPageModule);
    };

    ReuniaodiariadetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reuniaodiariadetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReuniaodiariadetailsPageRoutingModule"]],
      declarations: [_reuniaodiariadetails_page__WEBPACK_IMPORTED_MODULE_6__["ReuniaodiariadetailsPage"]]
    })], ReuniaodiariadetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReuniaodiariadetailsReuniaodiariadetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldW5pYW9kaWFyaWFkZXRhaWxzL3JldW5pYW9kaWFyaWFkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ReuniaodiariadetailsPage */

  /***/
  function srcAppPagesReuniaodiariadetailsReuniaodiariadetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReuniaodiariadetailsPage", function () {
      return ReuniaodiariadetailsPage;
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


    var src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ativo-ldc.service */
    "./src/app/services/ativo-ldc.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ReuniaodiariadetailsPage =
    /*#__PURE__*/
    function () {
      function ReuniaodiariadetailsPage(activatedRoute, ativoLDCService, toastCtrl, router) {
        _classCallCheck(this, ReuniaodiariadetailsPage);

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
          prazo: null
        };
      }

      _createClass(ReuniaodiariadetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.ativoLDCService.getReuniao(id).subscribe(function (reuniao) {
              _this.reuniao = reuniao;
            });
          }
        }
      }, {
        key: "addReuniao",
        value: function addReuniao() {
          var _this2 = this;

          this.ativoLDCService.addReuniao(this.reuniao).then(function () {
            _this2.router.navigateByUrl('/');

            _this2.showToast('Anotação da reunião adicionada');
          }, function (err) {
            _this2.showToast('Ocorreu um problema ao adicionar essa anotação :(');
          });
        }
      }, {
        key: "deleteReuniao",
        value: function deleteReuniao() {
          var _this3 = this;

          this.ativoLDCService.deleteReuniao(this.reuniao.id).then(function () {
            _this3.router.navigateByUrl('/');

            _this3.showToast('Anotação da reunião deletada');
          }, function (err) {
            _this3.showToast('Ocorreu um problema ao excluir essa anotação :(');
          });
        }
      }, {
        key: "updateReuniao",
        value: function updateReuniao() {
          var _this4 = this;

          this.ativoLDCService.updateReuniao(this.reuniao).then(function () {
            _this4.showToast('Reunião atualizado');
          }, function (err) {
            _this4.showToast('Ocorreu um problema ao atualizar essa reunião :(');
          });
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          this.toastCtrl.create({
            message: msg,
            duration: 2000
          }).then(function (toast) {
            return toast.present();
          });
        }
      }]);

      return ReuniaodiariadetailsPage;
    }();

    ReuniaodiariadetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ReuniaodiariadetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reuniaodiariadetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reuniaodiariadetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reuniaodiariadetails.page.scss */
      "./src/app/pages/reuniaodiariadetails/reuniaodiariadetails.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_ativo_ldc_service__WEBPACK_IMPORTED_MODULE_3__["AtivoLDCService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ReuniaodiariadetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-reuniaodiariadetails-reuniaodiariadetails-module-es5.js.map