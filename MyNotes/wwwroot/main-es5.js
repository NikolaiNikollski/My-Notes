(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/Data/Note.ts":
    /*!******************************!*\
      !*** ./src/app/Data/Note.ts ***!
      \******************************/

    /*! exports provided: Note */

    /***/
    function srcAppDataNoteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Note", function () {
        return Note;
      });

      var Note = function Note(text, date, id) {
        _classCallCheck(this, Note);

        this.Text = text;
        this.Date = date;
        this.Id = id;
        this.Selected = false;
        this.TempText = null;
      };
      /***/

    },

    /***/
    "./src/app/Data/http.service.ts":
    /*!**************************************!*\
      !*** ./src/app/Data/http.service.ts ***!
      \**************************************/

    /*! exports provided: HttpService */

    /***/
    function srcAppDataHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Note */
      "./src/app/Data/Note.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.urlNote = 'http://localhost/Api/Note';
          this.urlAccount = 'http://localhost/Api/Auth';
        }

        _createClass(HttpService, [{
          key: "save",
          value: function save(note) {
            var formData = new FormData();
            formData.append('text', note.Text);
            formData.append('date', note.Date);
            return this.http.post(this.urlNote, formData);
          }
        }, {
          key: "update",
          value: function update(note) {
            var formData = new FormData();
            formData.append('text', note.Text);
            formData.append('date', note.Date);
            return this.http.put(this.urlNote + '/' + note.Id, formData);
          }
        }, {
          key: "loadNotes",
          value: function loadNotes() {
            return this.http.get(this.urlNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data.map(function (note) {
                return new _Note__WEBPACK_IMPORTED_MODULE_0__["Note"](note.text, note.date, note.noteId);
              });
            }));
          }
        }, {
          key: "delete",
          value: function _delete(note) {
            return this.http["delete"](this.urlNote + '/' + note.Id);
          }
        }, {
          key: "login",
          value: function login(form) {
            var credentials = JSON.stringify(form.value);
            console.log(credentials);
            return this.http.post(this.urlAccount + '/login', credentials, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            });
          }
        }, {
          key: "register",
          value: function register(form) {
            var credentials = JSON.stringify(form.value);
            return this.http.post(this.urlAccount + '/register', credentials, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            });
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: tokenGetter, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
        return tokenGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _main_app_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/app.main */
      "./src/app/main/app.main.ts");
      /* harmony import */


      var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notelist/app.notelist */
      "./src/app/notelist/app.notelist.ts");
      /* harmony import */


      var _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authorization/app.authorization */
      "./src/app/authorization/app.authorization.ts");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

      function tokenGetter() {
        return localStorage.getItem("jwt");
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ["localhost"],
            disallowedRoutes: []
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__["AppNotelist"], _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_6__["AppAuthorization"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
              config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost"],
                disallowedRoutes: []
              }
            })],
            declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__["AppNotelist"], _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_6__["AppAuthorization"]],
            bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authorization/app.authorization.ts":
    /*!****************************************************!*\
      !*** ./src/app/authorization/app.authorization.ts ***!
      \****************************************************/

    /*! exports provided: AppAuthorization */

    /***/
    function srcAppAuthorizationAppAuthorizationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAuthorization", function () {
        return AppAuthorization;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Data_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Data/http.service */
      "./src/app/Data/http.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AppAuthorization_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid username or password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid username or password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppAuthorization = /*#__PURE__*/function () {
        function AppAuthorization(httpService) {
          _classCallCheck(this, AppAuthorization);

          this.httpService = httpService;
        }

        _createClass(AppAuthorization, [{
          key: "register",
          value: function register(form) {
            this.httpService.register(form).subscribe(function (response) {
              return console.log(response);
            });
          }
        }, {
          key: "login",
          value: function login(form) {
            var _this = this;

            this.httpService.login(form).subscribe(function (response) {
              var token = response.value.accessToken;
              var refreshToken = response.value.refreshToken;
              localStorage.setItem("jwt", token);
              localStorage.setItem("refreshToken", refreshToken);
              _this.invalidLogin = false;
            }, function (err) {
              _this.invalidLogin = true;
            });
          }
        }]);

        return AppAuthorization;
      }();

      AppAuthorization.ɵfac = function AppAuthorization_Factory(t) {
        return new (t || AppAuthorization)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      AppAuthorization.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppAuthorization,
        selectors: [["authorization"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])],
        decls: 34,
        vars: 2,
        consts: [[1, "form-signin", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "container-fluid"], [1, "form-signin-heading"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "username", 1, "sr-only"], ["type", "email", "id", "username", "name", "username", "ngModel", "", "placeholder", "User Name", "required", "", "autofocus", "", 1, "form-control"], ["for", "password", 1, "sr-only"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], ["registerForm", "ngForm"], [1, "alert", "alert-danger"]],
        template: function AppAuthorization_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_Template_form_ngSubmit_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.login(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppAuthorization_div_5_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 0, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_Template_form_ngSubmit_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

              return ctx.register(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppAuthorization_div_22_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\r\n    margin: 40px;\r\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    background: #FFFFFF;\r\n    min-width: 640px;\r\n}\r\n\r\n.form-top[_ngcontent-%COMP%] {\r\n    padding: 30px 25px 0 25px;\r\n    border: 2px solid #E1E5E6;\r\n    border-radius: 5px\r\n}\r\n\r\n.form-bottom[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    background: #E3E3E3;\r\n    padding: 15px 0;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form-bottom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        padding: 10px 0;\r\n        background: linear-gradient(356deg, rgba(0,225,0,1) 0%, rgba(0,143,0,1) 100%);\r\n        color: #FFFFFF;\r\n        border: none;\r\n        border-radius: 30px;\r\n        margin-left: 150px;\r\n        cursor: pointer;\r\n        font-size: 1.2em;\r\n    }\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n}\r\n\r\n.data1[_ngcontent-%COMP%], .data2[_ngcontent-%COMP%], .data3[_ngcontent-%COMP%] {\r\n    width: 380px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.data3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.data1_1[_ngcontent-%COMP%], .data1_2[_ngcontent-%COMP%], .data1_3[_ngcontent-%COMP%], .data2_1[_ngcontent-%COMP%], .data2_2[_ngcontent-%COMP%], .data2_3[_ngcontent-%COMP%], .data3_2[_ngcontent-%COMP%] {\r\n    display: -moz-flex;\r\n    display: -ms-flex;\r\n    display: -o-flex;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 10px;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.data3_2[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\r\n\r\n.data3_2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100px;\r\n        height: 50px;\r\n    }\r\n\r\n.required[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 20px;\r\n    width: 20px;\r\n    position: absolute;\r\n    right: -24px;\r\n    background: url(https://loading.io/s/icon/jxjyiv.svg) 0 0 no-repeat;\r\n}\r\n\r\n.wrong-captcha[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    color: #D42929;\r\n    font-weight: 700;\r\n    right: -197px;\r\n    top: 18px;\r\n}\r\n\r\ninput[required][_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%], .data3_2[_ngcontent-%COMP%]   input[required][_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\r\n    background: url(https://upload.wikimedia.org/wikipedia/commons/0/0d/Google_Material_Design_check.svg) 0 0 no-repeat;\r\n}\r\n\r\n.data3_2[_ngcontent-%COMP%]   input[required][_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9hcHAuYXV0aG9yaXphdGlvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFSTtRQUNJLGVBQWU7UUFHZiw2RUFBNkU7UUFDN0UsY0FBYztRQUNkLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUo7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7Ozs7OztJQVFJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUk7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7QUFFSjtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksbUhBQW1IO0FBQ3ZIOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXBwLmF1dGhvcml6YXRpb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgbWluLXdpZHRoOiA2NDBweDtcclxufVxyXG5cclxuLmZvcm0tdG9wIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjVweCAwIDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTFFNUU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuXHJcbi5mb3JtLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UzRTNFMztcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiAgICAuZm9ybS1ib3R0b20gaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgyNjZkZWcsIHJnYmEoMCwyMjUsMCwxKSAwJSwgcmdiYSgwLDE0MywwLDEpIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyNjZkZWcsIHJnYmEoMCwyMjUsMCwxKSAwJSwgcmdiYSgwLDE0MywwLDEpIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTZkZWcsIHJnYmEoMCwyMjUsMCwxKSAwJSwgcmdiYSgwLDE0MywwLDEpIDEwMCUpO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmRhdGExLCAuZGF0YTIsIC5kYXRhMyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZGF0YTMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGF0YTFfMSxcclxuLmRhdGExXzIsXHJcbi5kYXRhMV8zLFxyXG4uZGF0YTJfMSxcclxuLmRhdGEyXzIsXHJcbi5kYXRhMl8zLFxyXG4uZGF0YTNfMiB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICAgIGRpc3BsYXk6IC1vLWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kYXRhM18yIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbiAgICAuZGF0YTNfMiBzcGFuIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbi5yZXF1aXJlZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2xvYWRpbmcuaW8vcy9pY29uL2p4anlpdi5zdmcpIDAgMCBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi53cm9uZy1jYXB0Y2hhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjRDQyOTI5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHJpZ2h0OiAtMTk3cHg7XHJcbiAgICB0b3A6IDE4cHg7XHJcbn1cclxuXHJcbmlucHV0W3JlcXVpcmVkXTp2YWxpZCArIGxhYmVsLFxyXG4uZGF0YTNfMiBpbnB1dFtyZXF1aXJlZF06dmFsaWQgfiBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8wLzBkL0dvb2dsZV9NYXRlcmlhbF9EZXNpZ25fY2hlY2suc3ZnKSAwIDAgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZGF0YTNfMiBpbnB1dFtyZXF1aXJlZF06dmFsaWQgfiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppAuthorization, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'authorization',
            templateUrl: 'app.authorization.html',
            styleUrls: ['app.authorization.css'],
            providers: [_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
          }]
        }], function () {
          return [{
            type: _Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/app.main.ts":
    /*!**********************************!*\
      !*** ./src/app/main/app.main.ts ***!
      \**********************************/

    /*! exports provided: AppMain */

    /***/
    function srcAppMainAppMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMain", function () {
        return AppMain;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../authorization/app.authorization */
      "./src/app/authorization/app.authorization.ts");
      /* harmony import */


      var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../notelist/app.notelist */
      "./src/app/notelist/app.notelist.ts");

      var AppMain = function AppMain() {
        _classCallCheck(this, AppMain);

        this.userId = null;
      };

      AppMain.ɵfac = function AppMain_Factory(t) {
        return new (t || AppMain)();
      };

      AppMain.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppMain,
        selectors: [["my-app"]],
        decls: 3,
        vars: 0,
        template: function AppMain_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "authorization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "notelist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_authorization_app_authorization__WEBPACK_IMPORTED_MODULE_1__["AppAuthorization"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_2__["AppNotelist"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwLm1haW4uY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMain, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'my-app',
            templateUrl: 'app.main.html',
            styleUrls: ['app.main.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/notelist/app.notelist.ts":
    /*!******************************************!*\
      !*** ./src/app/notelist/app.notelist.ts ***!
      \******************************************/

    /*! exports provided: AppNotelist */

    /***/
    function srcAppNotelistAppNotelistTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppNotelist", function () {
        return AppNotelist;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Data_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Data/http.service */
      "./src/app/Data/http.service.ts");
      /* harmony import */


      var _Data_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Data/Note */
      "./src/app/Data/Note.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function AppNotelist_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectNote(note_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_div_4_Template_textarea_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            return note_r1.Text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_div_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            return note_r1.Date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.update(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.unselectNote(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cansel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.del(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var note_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", note_r1.Text)("disabled", !note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", note_r1.Date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
        }
      }

      var AppNotelist = /*#__PURE__*/function () {
        function AppNotelist(httpService) {
          _classCallCheck(this, AppNotelist);

          this.httpService = httpService;
          this.notelist = [];
        }

        _createClass(AppNotelist, [{
          key: "createNote",
          value: function createNote() {
            var note = new _Data_Note__WEBPACK_IMPORTED_MODULE_2__["Note"]("", this.formateDate(new Date()), null);
            this.httpService.save(note).subscribe(function (id) {
              note.Id = id;
            });
            this.notelist.unshift(note);
            setTimeout(function () {
              note.Selected = true;
            }, 100);
          }
        }, {
          key: "update",
          value: function update(note) {
            this.httpService.update(note).subscribe();
            note.Selected = false;
            note.TempText = null;
          }
        }, {
          key: "del",
          value: function del(note, index) {
            this.httpService["delete"](note).subscribe();
            note.Selected = false;
            this.notelist.splice(index, 1);
          }
        }, {
          key: "selectNote",
          value: function selectNote(note) {
            note.Selected = true;
            note.TempText = note.Text;
          }
        }, {
          key: "unselectNote",
          value: function unselectNote(note, index) {
            note.Selected = false;
            note.Text = note.TempText;
            note.TempText = null;
          }
        }, {
          key: "loadNotes",
          value: function loadNotes() {
            var _this2 = this;

            this.httpService.loadNotes().subscribe(function (data) {
              _this2.notelist = data;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadNotes();
          }
        }, {
          key: "formateDate",
          value: function formateDate(inDate) {
            var options = {
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            };
            return inDate.toLocaleString('ru', options);
          }
        }]);

        return AppNotelist;
      }();

      AppNotelist.ɵfac = function AppNotelist_Factory(t) {
        return new (t || AppNotelist)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      AppNotelist.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppNotelist,
        selectors: [["notelist"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])],
        decls: 5,
        vars: 1,
        consts: [[2, "height", "60px"], [1, "btn", "btn-success", "createButton", 3, "click"], [1, "notelistContainer", "col-md-6", "offset-md-3"], ["class", "noteContainer", 3, "selected", 4, "ngFor", "ngForOf"], [1, "noteContainer"], [1, "body", 3, "click"], [1, "noteText", 3, "ngModel", "disabled", "ngModelChange"], ["type", "text", "disabled", "", 1, "noteDate", 3, "ngModel", "ngModelChange"], [1, "buttonBlock"], [1, "btn", "btn-success", "saveButton", 3, "click"], [1, "btn", "btn-success", "canselButton", 3, "click"], [1, "btn", "btn-success", "deleteButton", 3, "click"]],
        template: function AppNotelist_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_Template_button_click_1_listener() {
              return ctx.createNote();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppNotelist_div_4_Template, 11, 17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notelist);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".btn[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100px;\n    float: left;\n    border: 0;\n    border-radius: 0px;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    font-family: Roboto; \n    font-size: 20px;\n}\n\n    .btn.selected[_ngcontent-%COMP%] {\n        margin: 5px;\n        border: 3px solid darkslategrey;\n    }\n\n    .btn[_ngcontent-%COMP%]:hover {\n        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.8);\n        transition: 0.3s;\n    }\n\n    .createButton[_ngcontent-%COMP%] {\n    font-size: 17px;\n}\n\n    .saveButton[_ngcontent-%COMP%] {\n    background-color: lawngreen;\n    display: none;\n}\n\n    .saveButton.selected[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n\n    .canselButton[_ngcontent-%COMP%] {\n    background-color: orange;\n    display: none;\n}\n\n    .canselButton.selected[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n\n    .deleteButton[_ngcontent-%COMP%] {\n    background-color: red;\n}\n\n    .deleteButton.selected[_ngcontent-%COMP%] {\n        background-color: red;\n    }\n\n    .noteContainer[_ngcontent-%COMP%] {\n    display: flex;\n    overflow: hidden;\n    border: 2px solid grey;\n    padding: 0px;\n    border: 0 solid #B9B9B9;\n    border-width: 0 4px 4px 4px;\n\n    max-height: 56px;\n    transition: max-height 0.5s;\n}\n\n    .noteContainer[_ngcontent-%COMP%]:first-child {\n        border-top: 4px solid #B9B9B9;\n    }\n\n    .noteContainer.selected[_ngcontent-%COMP%] {\n        display: block;\n        border: 0 solid darkslategrey;\n        border-width: 6px 104px 6px 6px;\n        background-color: #F4F7F9;\n\n        max-height: 400px;\n        transition: max-height 0.5s;\n    }\n\n    .body[_ngcontent-%COMP%]:hover:not(.selected) {\n    background-color: #F4F7F9;\n    transition: 0.3s;\n    cursor: pointer;\n}\n\n    .body[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n    width: 100%;\n}\n\n    .body.selected[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    .noteText[_ngcontent-%COMP%] {\n    padding: 1px 0 0 10px;\n    width: 100%;\n    overflow: hidden;\n    resize: none;\n    border: 0;\n    height: 250px;\n}\n\n    .noteText.selected[_ngcontent-%COMP%] {\n        background-color: #F4F7F9;\n        padding: 10px;\n        border-bottom: 6px solid darkslategrey;\n    }\n\n    .noteDate[_ngcontent-%COMP%] {\n    width: 140px;\n    padding-top: 6px;\n    float: right;\n    border-width: 0;\n    cursor: default;\n}\n\n    .noteDate.selected[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        background-color: #F4F7F9;\n        transition: 0.3s;\n        cursor: pointer;\n    }\n\n    .buttonBlock[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZWxpc3QvYXBwLm5vdGVsaXN0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUVBQWlFO0lBQ2pFLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztJQUVJO1FBQ0ksV0FBVztRQUNYLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLHdDQUF3QztRQUN4QyxnQkFBZ0I7SUFDcEI7O0lBRUo7SUFDSSxlQUFlO0FBQ25COztJQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0lBRUk7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUo7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7SUFFSTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFSjtJQUNJLHFCQUFxQjtBQUN6Qjs7SUFFSTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFSjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMkJBQTJCOztJQUUzQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksY0FBYztRQUNkLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IseUJBQXlCOztRQUV6QixpQkFBaUI7UUFDakIsMkJBQTJCO0lBQy9COztJQUVKO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0lBRUk7UUFDSSxjQUFjO0lBQ2xCOztJQUdKO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztJQUVJO1FBQ0kseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixzQ0FBc0M7SUFDMUM7O0lBR0o7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7SUFFSTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBRUo7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ub3RlbGlzdC9hcHAubm90ZWxpc3QuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87IFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuICAgIC5idG4uc2VsZWN0ZWQge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgZGFya3NsYXRlZ3JleTtcbiAgICB9XG5cbiAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB9XG5cbi5jcmVhdGVCdXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnNhdmVCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4gICAgLnNhdmVCdXR0b24uc2VsZWN0ZWQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4uY2Fuc2VsQnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuICAgIC5jYW5zZWxCdXR0b24uc2VsZWN0ZWQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4uZGVsZXRlQnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbiAgICAuZGVsZXRlQnV0dG9uLnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cblxuLm5vdGVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3JkZXI6IDAgc29saWQgI0I5QjlCOTtcbiAgICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCA0cHg7XG5cbiAgICBtYXgtaGVpZ2h0OiA1NnB4O1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cztcbn1cbiAgICAubm90ZUNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjQjlCOUI5O1xuICAgIH1cblxuICAgIC5ub3RlQ29udGFpbmVyLnNlbGVjdGVkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMCBzb2xpZCBkYXJrc2xhdGVncmV5O1xuICAgICAgICBib3JkZXItd2lkdGg6IDZweCAxMDRweCA2cHggNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y5O1xuXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXM7XG4gICAgfVxuXG4uYm9keTpob3Zlcjpub3QoLnNlbGVjdGVkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjdGOTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4gICAgLmJvZHkuc2VsZWN0ZWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cblxuLm5vdGVUZXh0IHtcbiAgICBwYWRkaW5nOiAxcHggMCAwIDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMjUwcHg7XG59XG5cbiAgICAubm90ZVRleHQuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y5O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgZGFya3NsYXRlZ3JleTtcbiAgICB9XG5cblxuLm5vdGVEYXRlIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuICAgIC5ub3RlRGF0ZS5zZWxlY3RlZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY3Rjk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbi5idXR0b25CbG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNotelist, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'notelist',
            templateUrl: 'app.notelist.html',
            styleUrls: ['app.notelist.css'],
            providers: [_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
          }]
        }], function () {
          return [{
            type: _Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");

      var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
      platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Repository\My-notes\Frontend\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map