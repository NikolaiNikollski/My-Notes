(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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
      "zUnb");
      /***/
    },

    /***/
    "A3QS":
    /*!****************************************!*\
      !*** ./src/app/data/cookie.service.ts ***!
      \****************************************/

    /*! exports provided: CookieService */

    /***/
    function A3QS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CookieService", function () {
        return CookieService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CookieService = /*#__PURE__*/function () {
        function CookieService() {
          _classCallCheck(this, CookieService);
        }

        _createClass(CookieService, [{
          key: "getCookie",
          value: function getCookie(name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
          }
        }, {
          key: "setCookie",
          value: function setCookie(name, value, options) {
            options = _objectSpread({
              path: '/'
            }, options);

            if (options.expires instanceof Date) {
              options.expires = options.expires.toUTCString();
            }

            var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

            for (var optionKey in options) {
              updatedCookie += "; " + optionKey;
              var optionValue = options[optionKey];

              if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
              }
            }

            document.cookie = updatedCookie;
          }
        }, {
          key: "deleteCookie",
          value: function deleteCookie(name) {
            this.setCookie(name, "", {
              'max-age': -1
            });
          }
        }]);

        return CookieService;
      }();

      CookieService.ɵfac = function CookieService_Factory(t) {
        return new (t || CookieService)();
      };

      CookieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CookieService,
        factory: CookieService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Hv6U":
    /*!****************************************************!*\
      !*** ./src/app/authorization/app.authorization.ts ***!
      \****************************************************/

    /*! exports provided: AppAuthorization */

    /***/
    function Hv6U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAuthorization", function () {
        return AppAuthorization;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data/http.service */
      "df/B");
      /* harmony import */


      var _data_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/cookie.service */
      "A3QS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppAuthorization_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userName);
        }
      }

      function AppAuthorization_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.getLoginForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.getRegisterForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fill in all required fields. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.error);
        }
      }

      function AppAuthorization_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Username must contain at least ", ctx_r6._registerUsername.errors == null ? null : ctx_r6._registerUsername.errors.minlength.requiredLength, " simbols. ");
        }
      }

      function AppAuthorization_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password must contain at least ", ctx_r7._registerPassword.errors == null ? null : ctx_r7._registerPassword.errors.minlength.requiredLength, " simbols. ");
        }
      }

      function AppAuthorization_span_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must contain digit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_span_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must contain letter. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_span_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords must match. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_span_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fill in all required fields. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.error);
        }
      }

      function AppAuthorization_img_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
        }
      }

      var AppAuthorization = /*#__PURE__*/function () {
        function AppAuthorization(fb, httpService, cookieService) {
          _classCallCheck(this, AppAuthorization);

          this.fb = fb;
          this.httpService = httpService;
          this.cookieService = cookieService;
          this.onChangedAuth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.activeLoginForm = false;
          this.activeRegisterForm = false;
          this.error = null;

          this._createRegisterForm();

          this._createLoginForm();
        }

        _createClass(AppAuthorization, [{
          key: "_createRegisterForm",
          value: function _createRegisterForm() {
            this.registerForm = this.fb.group({
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[0-9]/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[a-zA-Z]/)]],
              rePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.isRePasswordCorrect()]]
            });
          }
        }, {
          key: "_createLoginForm",
          value: function _createLoginForm() {
            this.loginForm = this.fb.group({
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
        }, {
          key: "isRePasswordCorrect",
          value: function isRePasswordCorrect() {
            var _this = this;

            return function (control) {
              if (_this.registerForm) {
                var condition = _this.registerForm.get('password').value === _this.registerForm.get('rePassword').value;
              }

              var valid = !control.value || condition;
              return valid ? null : {
                RePasswordCorrectionError: true
              };
            };
          }
        }, {
          key: "getFormcontroll",
          value: function getFormcontroll() {
            console.log(this.registerForm);
          }
        }, {
          key: "getLoginForm",
          value: function getLoginForm() {
            this.activeLoginForm = true;
            this.activeRegisterForm = false;
            this.error = null;
          }
        }, {
          key: "getRegisterForm",
          value: function getRegisterForm() {
            this.activeRegisterForm = true;
            this.activeLoginForm = false;
            this.error = null;
          }
        }, {
          key: "register",
          value: function register(data) {
            var _this2 = this;

            if (this.registerForm.invalid) {
              this._registerUsername.markAsTouched();

              this._registerPassword.markAsTouched();

              this._registerRePassword.markAsTouched();

              return;
            }

            this.logout();
            this.httpService.register(data).subscribe(function (response) {
              return _this2.onCopmplete(response);
            }, function (err) {
              return _this2.onError(err);
            });
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this3 = this;

            if (this.loginForm.invalid) {
              this._loginUsername.markAsTouched();

              this._loginPassword.markAsTouched();

              return;
            }

            this.logout();
            this.httpService.login(data).subscribe(function (response) {
              return _this3.onCopmplete(response);
            }, function (errResponse) {
              return _this3.onError(errResponse);
            });
          }
        }, {
          key: "onCopmplete",
          value: function onCopmplete(response) {
            this.onChangedAuth.emit(true);
            this.activeLoginForm = false;
            this.activeRegisterForm = false;
            this.error = null;
          }
        }, {
          key: "onError",
          value: function onError(errResponse) {
            this.error = errResponse.error;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.cookieService.deleteCookie('accessToken');
            this.onChangedAuth.emit(false);
            this.activeLoginForm = true;
            this.userName = null;
          }
        }, {
          key: "_registerUsername",
          get: function get() {
            return this.registerForm.get('username');
          }
        }, {
          key: "_registerPassword",
          get: function get() {
            return this.registerForm.get('password');
          }
        }, {
          key: "_registerRePassword",
          get: function get() {
            return this.registerForm.get('rePassword');
          }
        }, {
          key: "_loginUsername",
          get: function get() {
            return this.loginForm.get('username');
          }
        }, {
          key: "_loginPassword",
          get: function get() {
            return this.loginForm.get('password');
          }
        }]);

        return AppAuthorization;
      }();

      AppAuthorization.ɵfac = function AppAuthorization_Factory(t) {
        return new (t || AppAuthorization)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
      };

      AppAuthorization.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppAuthorization,
        selectors: [["authorization"]],
        inputs: {
          userAuthenticated: "userAuthenticated",
          userName: "userName"
        },
        outputs: {
          onChangedAuth: "onChangedAuth"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _data_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])],
        decls: 47,
        vars: 20,
        consts: [[1, "authorization"], [1, "appName"], [1, "authPanel"], ["class", "userNameBlock", 4, "ngIf"], ["class", "authPanelButton", 3, "click", 4, "ngIf"], ["class", "logautBlock", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "container-fluid", "formContainer"], [1, "formHeader"], [1, "inputBlock"], ["src", "/assets/usernameIcon.svg", 1, "inputIcon"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "form-control"], ["src", "/assets/passwordIcon.svg", 1, "inputIcon"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "formButton"], ["class", "validationErrorText", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["src", "/assets/rePasswordIcon.svg", 1, "inputIcon"], ["formControlName", "rePassword", "type", "password", "placeholder", "Password Repeat", 1, "form-control"], ["class", "icon", "src", "/assets/welcome.svg", "alt", "app Icon", 4, "ngIf"], [1, "userNameBlock"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "userNameIcon"], ["d", "M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z", "fill", "#2F7DF6"], [1, "authPanelButton", 3, "click"], [1, "logautBlock"], ["width", "19", "height", "20", "viewBox", "0 0 19 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "logoutIcon"], ["d", "M2 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V4H11V2H2V18H11V16H13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0Z", "fill", "#2F7DF6"], ["d", "M12.09 13.59L13.5 15L18.5 10L13.5 5L12.09 6.41L14.67 9H5V11H14.67L12.09 13.59Z", "fill", "#2F7DF6"], [1, "validationErrorText"], [1, "alert", "alert-danger"], ["src", "/assets/welcome.svg", "alt", "app Icon", 1, "icon"]],
        template: function AppAuthorization_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Notepad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppAuthorization_div_4_Template, 5, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppAuthorization_button_5_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppAuthorization_button_6_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppAuthorization_div_7_Template, 6, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_Template_form_ngSubmit_8_listener() {
              return ctx.login(ctx.loginForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppAuthorization_span_21_Template, 3, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppAuthorization_div_22_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_Template_form_ngSubmit_23_listener() {
              return ctx.register(ctx.registerForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppAuthorization_span_31_Template, 3, 1, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppAuthorization_span_35_Template, 3, 1, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AppAuthorization_span_36_Template, 3, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppAuthorization_span_37_Template, 3, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppAuthorization_span_41_Template, 3, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AppAuthorization_span_44_Template, 3, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AppAuthorization_div_45_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AppAuthorization_img_46_Template, 1, 0, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hiden", !ctx.activeLoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._loginUsername.touched && ctx._loginUsername.invalid || ctx._loginPassword.touched && ctx._loginPassword.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hiden", !ctx.activeRegisterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._registerUsername.touched && (ctx._registerUsername.errors == null ? null : ctx._registerUsername.errors.minlength));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._registerPassword.touched && (ctx._registerPassword.errors == null ? null : ctx._registerPassword.errors.minlength));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._registerPassword.touched && (ctx._registerPassword.errors == null ? null : ctx._registerPassword.errors.pattern == null ? null : ctx._registerPassword.errors.pattern.requiredPattern) == "/[0-9]/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._registerPassword.touched && (ctx._registerPassword.errors == null ? null : ctx._registerPassword.errors.pattern == null ? null : ctx._registerPassword.errors.pattern.requiredPattern) == "/[a-zA-Z]/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._registerRePassword.touched && (ctx._registerRePassword.errors == null ? null : ctx._registerRePassword.errors.RePasswordCorrectionError));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._registerUsername.touched && (ctx._registerUsername.errors == null ? null : ctx._registerUsername.errors.required) || ctx._registerPassword.touched && (ctx._registerPassword.errors == null ? null : ctx._registerPassword.errors.required) || ctx._registerRePassword.touched && (ctx._registerRePassword.errors == null ? null : ctx._registerRePassword.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\r\n.hiden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.authorization[_ngcontent-%COMP%] {\r\n    background-color: #E5E5E5;\r\n}\r\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 2px solid red;\r\n}\r\n.authPanel[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 33px;\r\n    top: 23px;\r\n    display: flex;\r\n}\r\n.appName[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 33px;\r\n    top: 23px;\r\n    font-family: 'Caveat', cursive;\r\n    font-weight: 700;\r\n    font-size: 36px;\r\n    line-height: 45px;\r\n    color: #2F7DF6;\r\n}\r\n.userNameBlock[_ngcontent-%COMP%] {\r\n    padding: 10px 20px 0 20px;\r\n    height: 40px;\r\n    background: #FFFFFF;\r\n    border-radius: 20px;\r\n\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    color: #2F7DF6;\r\n}\r\n.userNameIcon[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n.authPanelButton[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    font-weight: 500;\r\n    font-style: normal;\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    letter-spacing: 0.04em;\r\n    background-color: #E5E5E5;\r\n    border: 5px solid #E5E5E5;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #2F7DF6;\r\n    z-index: 1;\r\n}\r\n.authPanelButton[_ngcontent-%COMP%]:hover { \r\n        background: #2F7DF6;\r\n        border: 5px solid #2F7DF6;\r\n        border-radius: 20px;\r\n        color: #FFFFFF;\r\n    }\r\n.logoutIcon[_ngcontent-%COMP%] {\r\n    margin-top: -5px;\r\n    margin-left: 5px;\r\n}\r\n.formContainer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 24px;\r\n    top: 82px;\r\n    width: 312px;\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0px 4px 15px rgba(9, 59, 137, 0.1);\r\n    border-radius: 20px;\r\n    padding: 24px;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n    .formContainer[_ngcontent-%COMP%] {\r\n        \r\n        margin-top: 0px;\r\n    }\r\n}\r\n@media screen and (max-width: 360px) {\r\n    .formContainer[_ngcontent-%COMP%] {\r\n        width: auto;\r\n    }\r\n}\r\n.formHeader[_ngcontent-%COMP%] {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.04em;\r\n    color: #2F7DF6;\r\n    margin: 0;\r\n}\r\n.inputBlock[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n    width: 264px;\r\n    height: 40px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #C1C1C1;\r\n    border-radius: 20px;\r\n    padding-right:50px;\r\n\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    letter-spacing: 0.04em;\r\n}\r\n.inputIcon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 12px;\r\n}\r\n.formButton[_ngcontent-%COMP%] {\r\n    width: 264px;\r\n    height: 40px;\r\n    left: 24px;\r\n    top: 224px;\r\n    background: #2F7DF6;\r\n    border-radius: 20px;\r\n    margin-bottom: 5px;\r\n\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    letter-spacing: 0.04em;\r\n    color: #FFFFFF;\r\n}\r\n.validationErrorText[_ngcontent-%COMP%] {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    letter-spacing: 0.04em;\r\n    color: #FF5F76;\r\n}\r\n.icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: block;\r\n    top: 333px;\r\n    left: 50%;\r\n    margin: 0 0 0 -200px;\r\n    width: 400px;\r\n    height: 359px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5hdXRob3JpemF0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0UseUVBQXlFO0FBRXpFO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7QUFDakI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7O0lBRW5CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7QUFDZDtBQUNJLHlCQUF5QixnQkFBZ0I7UUFDckMsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsY0FBYztJQUNsQjtBQUVKO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLGVBQWU7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoiYXBwLmF1dGhvcml6YXRpb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmhpZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hdXRob3JpemF0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcblxyXG4uYXV0aFBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzM3B4O1xyXG4gICAgdG9wOiAyM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbi5hcHBOYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMzcHg7XHJcbiAgICB0b3A6IDIzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBjb2xvcjogIzJGN0RGNjtcclxufVxyXG5cclxuLnVzZXJOYW1lQmxvY2sge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDAgMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMyRjdERjY7XHJcbn1cclxuXHJcbi51c2VyTmFtZUljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYXV0aFBhbmVsQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRTVFNUU1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjMkY3REY2O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4gICAgLmF1dGhQYW5lbEJ1dHRvbjpob3ZlciB7IC8qIFJlY3RhbmdsZSAyICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJGN0RGNjtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjMkY3REY2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4ubG9nb3V0SWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmZvcm1Db250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcbiAgICB0b3A6IDgycHg7XHJcbiAgICB3aWR0aDogMzEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYmEoOSwgNTksIDEzNywgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5mb3JtQ29udGFpbmVyIHtcclxuICAgICAgICAvKnBvc2l0aW9uOiBpbml0aWFsOyovXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgLmZvcm1Db250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybUhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgICBjb2xvcjogIzJGN0RGNjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmlucHV0QmxvY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDI2NHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMUMxQzE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDo1MHB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxufVxyXG5cclxuLmlucHV0SWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMTJweDtcclxufVxyXG5cclxuLmZvcm1CdXR0b24ge1xyXG4gICAgd2lkdGg6IDI2NHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxuICAgIHRvcDogMjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkY3REY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLnZhbGlkYXRpb25FcnJvclRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gICAgY29sb3I6ICNGRjVGNzY7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAzMzNweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbjogMCAwIDAgLTIwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTlweDtcclxufVxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppAuthorization, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'authorization',
            templateUrl: 'app.authorization.html',
            styleUrls: ['app.authorization.css'],
            providers: [_data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _data_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: _data_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
          }];
        }, {
          userAuthenticated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          userName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onChangedAuth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "YGNR":
    /*!****************************************!*\
      !*** ./src/app/welcome/app.welcome.ts ***!
      \****************************************/

    /*! exports provided: Welcome */

    /***/
    function YGNR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Welcome", function () {
        return Welcome;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Welcome = function Welcome() {
        _classCallCheck(this, Welcome);
      };

      Welcome.ɵfac = function Welcome_Factory(t) {
        return new (t || Welcome)();
      };

      Welcome.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Welcome,
        selectors: [["welcome"]],
        decls: 2,
        vars: 0,
        consts: [[1, "welcome"], [1, "col-md-6", "offset-md-3", "welcomeInner"]],
        template: function Welcome_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".welcome[_ngcontent-%COMP%] {\r\n    background-color: #E5E5E5;\r\n}\r\n\r\n.welcomeInner[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    display: flex;\r\n    color: #0094BD;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    height: 180px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    transform: rotate(-90deg);\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 20px;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n    .welcome[_ngcontent-%COMP%] {\r\n        display: initial;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC53ZWxjb21lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImFwcC53ZWxjb21lLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XHJcbn1cclxuXHJcbi53ZWxjb21lSW5uZXIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiAjMDA5NEJEO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC53ZWxjb21lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Welcome, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'welcome',
            templateUrl: 'app.welcome.html',
            styleUrls: ['app.welcome.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: tokenGetter, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
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


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _main_app_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./main/app.main */
      "uNEz");
      /* harmony import */


      var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notelist/app.notelist */
      "sC40");
      /* harmony import */


      var _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./authorization/app.authorization */
      "Hv6U");
      /* harmony import */


      var _data_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./data/cookie.service */
      "A3QS");
      /* harmony import */


      var _welcome_app_welcome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./welcome/app.welcome */
      "YGNR");

      function tokenGetter() {
        var cookieService = new _data_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]();
        return cookieService.getCookie("accessToken");
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_5__["AppMain"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtModule"].forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ["localhost"],
            disallowedRoutes: []
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_5__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_6__["AppNotelist"], _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_7__["AppAuthorization"], _welcome_app_welcome__WEBPACK_IMPORTED_MODULE_9__["Welcome"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtModule"].forRoot({
              config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost"],
                disallowedRoutes: []
              }
            })],
            declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_5__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_6__["AppNotelist"], _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_7__["AppAuthorization"], _welcome_app_welcome__WEBPACK_IMPORTED_MODULE_9__["Welcome"]],
            bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_5__["AppMain"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "df/B":
    /*!**************************************!*\
      !*** ./src/app/data/http.service.ts ***!
      \**************************************/

    /*! exports provided: HttpService */

    /***/
    function dfB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./note */
      "x7nr");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_Configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.Configuration */
      "dqcy");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.conf = new _app_Configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
          this.urlNote = this.conf.serverUrl + '/Api/Note';
          this.urlAuth = this.conf.serverUrl + '/Api/Auth';
        }

        _createClass(HttpService, [{
          key: "create",
          value: function create(note) {
            var formData = new FormData();
            formData.append('text', note.Text);
            formData.append('date', note.Date);
            return this.http.post(this.urlNote + "/createNote", formData);
          }
        }, {
          key: "update",
          value: function update(note) {
            var formData = new FormData();
            formData.append('text', note.Text);
            formData.append('date', note.Date);
            formData.append('noteId', note.Id.toString());
            return this.http.post(this.urlNote + '/updateNote', formData);
          }
        }, {
          key: "loadNotes",
          value: function loadNotes() {
            return this.http.get(this.urlNote + '/getAllNotes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return _objectSpread(_objectSpread({}, data.value), {}, {
                notes: data.value.notes.map(function (note) {
                  return new _note__WEBPACK_IMPORTED_MODULE_0__["Note"](note.text, note.date, note.noteId);
                })
              });
            }));
          }
        }, {
          key: "delete",
          value: function _delete(note) {
            var formData = new FormData();
            formData.append('noteId', note.Id.toString());
            return this.http.post(this.urlNote + '/deleteNote', formData);
          }
        }, {
          key: "checkUsername",
          value: function checkUsername(username) {
            var formData = new FormData();
            formData.append('username', username);
            return this.http.post(this.urlAuth + '/checkUsername', formData);
          }
        }, {
          key: "login",
          value: function login(form) {
            var credentials = JSON.stringify(form.value);
            return this.http.post(this.urlAuth + '/login', credentials, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            });
          }
        }, {
          key: "register",
          value: function register(form) {
            var credentials = JSON.stringify(form.value);
            return this.http.post(this.urlAuth + '/register', credentials, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            });
          }
        }, {
          key: "refresh",
          value: function () {
            var _refresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.http.post(this.urlAuth + '/refresh', null, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          "Content-Type": "application/json"
                        }),
                        observe: 'response'
                      }).toPromise();

                    case 2:
                      response = _context.sent;
                      return _context.abrupt("return", response);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function refresh() {
              return _refresh.apply(this, arguments);
            }

            return refresh;
          }()
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
    "dqcy":
    /*!**************************************!*\
      !*** ./src/app/app.Configuration.ts ***!
      \**************************************/

    /*! exports provided: Configuration */

    /***/
    function dqcy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Configuration", function () {
        return Configuration;
      });

      var Configuration = function Configuration() {
        _classCallCheck(this, Configuration);

        this.serverUrl = 'http://localhost';
        /*'https://notepad45.herokuapp.com'*/
      };
      /***/

    },

    /***/
    "sC40":
    /*!******************************************!*\
      !*** ./src/app/notelist/app.notelist.ts ***!
      \******************************************/

    /*! exports provided: AppNotelist */

    /***/
    function sC40(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppNotelist", function () {
        return AppNotelist;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data/http.service */
      "df/B");
      /* harmony import */


      var _data_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/note */
      "x7nr");
      /* harmony import */


      var _data_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data/cookie.service */
      "A3QS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppNotelist_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_div_13_Template_textarea_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var note_r2 = ctx.$implicit;
            return note_r2.Text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_13_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var note_r2 = ctx.$implicit;
            var index_r3 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.update(note_r2, index_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_13_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var note_r2 = ctx.$implicit;
            var index_r3 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.unselectNote(note_r2, index_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_13_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var note_r2 = ctx.$implicit;
            var index_r3 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.del(note_r2, index_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var note_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r2.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r2.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r2.Date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r2.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", note_r2.Text)("disabled", !note_r2.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r2.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r2.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r2.Selected);
        }
      }

      function AppNotelist_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have no records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppNotelist = /*#__PURE__*/function () {
        function AppNotelist(fb, httpService, jwtHelper, cookieService) {
          _classCallCheck(this, AppNotelist);

          this.fb = fb;
          this.httpService = httpService;
          this.jwtHelper = jwtHelper;
          this.cookieService = cookieService;
          this.onChangedUserName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.notelist = [];

          this._createUpdateNoteForm();
        }

        _createClass(AppNotelist, [{
          key: "_createUpdateNoteForm",
          value: function _createUpdateNoteForm() {
            this.updateNoteForm = this.fb.group({
              text: [''],
              id: ['']
            });
          }
        }, {
          key: "createNote",
          value: function () {
            var _createNote = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var canActivatePromise, note;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context2.sent;

                      if (canActivatePromise) {
                        _context2.next = 6;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context2.abrupt("return");

                    case 6:
                      note = new _data_note__WEBPACK_IMPORTED_MODULE_2__["Note"]("", this.formateDate(new Date()), null);
                      this.httpService.create(note).subscribe(function (id) {
                        note.Id = id;
                      }, function (err) {
                        _this4.onChangedUserName.emit(null);
                      });
                      this.notelist.unshift(note);
                      setTimeout(function () {
                        note.Selected = true;
                      }, 100);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function createNote() {
              return _createNote.apply(this, arguments);
            }

            return createNote;
          }()
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(note, index) {
              var _this5 = this;

              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context3.sent;

                      if (canActivatePromise) {
                        _context3.next = 6;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context3.abrupt("return");

                    case 6:
                      this.httpService.update(note).subscribe(function () {}, function (err) {
                        _this5.onChangedUserName.emit(null);
                      });
                      note.Selected = false;
                      note.TempText = null;

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function update(_x, _x2) {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "del",
          value: function () {
            var _del = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(note, index) {
              var _this6 = this;

              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context4.sent;

                      if (canActivatePromise) {
                        _context4.next = 6;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context4.abrupt("return");

                    case 6:
                      this.httpService["delete"](note).subscribe(function () {}, function (err) {
                        _this6.onChangedUserName.emit(null);
                      });
                      note.Selected = false;
                      this.notelist.splice(index, 1);

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function del(_x3, _x4) {
              return _del.apply(this, arguments);
            }

            return del;
          }()
        }, {
          key: "selectNote",
          value: function () {
            var _selectNote = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(note) {
              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('activ');
                      _context5.next = 3;
                      return this.canActivate();

                    case 3:
                      canActivatePromise = _context5.sent;

                      if (canActivatePromise) {
                        _context5.next = 7;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context5.abrupt("return");

                    case 7:
                      note.Selected = true;
                      note.TempText = note.Text;
                      console.log(this.notelist);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function selectNote(_x5) {
              return _selectNote.apply(this, arguments);
            }

            return selectNote;
          }()
        }, {
          key: "unselectNote",
          value: function () {
            var _unselectNote = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(note, index) {
              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context6.sent;

                      if (canActivatePromise) {
                        _context6.next = 6;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context6.abrupt("return");

                    case 6:
                      note.Selected = false;
                      note.Text = note.TempText;
                      note.TempText = null;

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function unselectNote(_x6, _x7) {
              return _unselectNote.apply(this, arguments);
            }

            return unselectNote;
          }()
        }, {
          key: "loadNotes",
          value: function () {
            var _loadNotes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      //let canActivatePromise = await this.canActivate()
                      //if (!canActivatePromise) {
                      //    this.onChangedUserName.emit(null)
                      //    return
                      //}
                      //this.httpService.loadNotes().subscribe((data: any) => {
                      //    this.notelist = data.notes.reverse(data.notes)
                      //    this.onChangedUserName.emit(data.name)
                      //}, (err) => { this.onChangedUserName.emit(null) })
                      this.notelist.push(new _data_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('Hello World! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '8 december, 13:52', 1));
                      this.notelist.push(new _data_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('Hello World! Lorem ipsum dolor sit amet.', '11 december, 13:51', 1));

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function loadNotes() {
              return _loadNotes.apply(this, arguments);
            }

            return loadNotes;
          }()
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
        }, {
          key: "canActivate",
          value: function () {
            var _canActivate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var token, refreshSuccessPromise;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", true);

                    case 4:
                      _context8.next = 6;
                      return this.tryRefreshingTokens();

                    case 6:
                      refreshSuccessPromise = _context8.sent;
                      return _context8.abrupt("return", refreshSuccessPromise);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function canActivate() {
              return _canActivate.apply(this, arguments);
            }

            return canActivate;
          }()
        }, {
          key: "tryRefreshingTokens",
          value: function () {
            var _tryRefreshingTokens = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var response;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", true);

                    case 4:
                      response = _context9.sent;
                      return _context9.abrupt("return", response.ok);

                    case 8:
                      _context9.prev = 8;
                      _context9.t0 = _context9["catch"](1);
                      return _context9.abrupt("return", false);

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[1, 8]]);
            }));

            function tryRefreshingTokens() {
              return _tryRefreshingTokens.apply(this, arguments);
            }

            return tryRefreshingTokens;
          }()
        }]);

        return AppNotelist;
      }();

      AppNotelist.ɵfac = function AppNotelist_Factory(t) {
        return new (t || AppNotelist)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]));
      };

      AppNotelist.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppNotelist,
        selectors: [["notelist"]],
        outputs: {
          onChangedUserName: "onChangedUserName"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _data_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])],
        decls: 15,
        vars: 2,
        consts: [[1, "notelist"], [1, "col-md-8", "offset-md-2", "tableTitle"], [1, "notes"], [1, "lineBlock"], ["width", "10", "height", "10", "viewBox", "0 0 10 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "point"], ["cx", "5", "cy", "5", "r", "5", "fill", "#2F7DF6"], ["src", "/assets/line.svg", 1, "line"], [1, "createButtonBlock"], [1, "btn", "btn-primary", "createButton", 3, "click"], ["src", "/assets/buttonIcon.svg", 1, "createButtonIcon"], [1, "notelistContainer", "col-md-8", "offset-md-2"], ["class", "noteContainer", 3, "selected", 4, "ngFor", "ngForOf"], ["class", "iconBlock", 4, "ngIf"], [1, "noteContainer"], [1, "date"], ["contenteditable", "true", 1, "textBlockInherit", 3, "ngModel", "disabled", "ngModelChange"], [1, "buttonBlock"], [1, "saveAndCancelButtons"], [1, "btn", "btn-primary", "saveButton", 3, "click"], [1, "btn", "btn-primary", "cancelButton", 3, "click"], [1, "deleteButtonBlock"], [1, "btn", "btn-primary", "deleteButton", 3, "click"], ["width", "14", "height", "18", "viewBox", "0 0 14 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "deleteButtonIcon"], ["d", "M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z", "fill", "#2F7DF6"], [1, "iconBlock"], ["src", "/assets/noRecords.svg", "alt", "You have no records.", 1, "icon"], [1, "iconText"]],
        template: function AppNotelist_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_Template_button_click_9_listener() {
              return ctx.createNote();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppNotelist_div_13_Template, 17, 15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppNotelist_div_14_Template, 5, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notelist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notelist.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["div[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n.notelist[_ngcontent-%COMP%] {\n    background-color: #E5E5E5;\n    margin-top: 120px;\n    font-family: Lato;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n}\n\n.noteContainer[_ngcontent-%COMP%] {\n    height: 209px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 15px rgba(9, 59, 137, 0.1);\n    border-radius: 20px;\n    margin-top: 20px;\n    padding: 24px;\n}\n\n.textBlockInherit[_ngcontent-%COMP%] {\n    border: 0;\n    resize: none;\n    outline: none;\n    overflow: hidden;\n    width: 100%;\n    transition: width 3s;\n    transition: height 0.7s;\n    height: 80px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    line-height: 20px;\n    color: #424242;\n}\n\n\n\n.clickable[_ngcontent-%COMP%]:hover:not(.selected) {\n    background-color: #F4F7F9;\n    cursor: pointer;\n}\n\n.date[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: right;\n    font-size: 12px;\n    color: #2F7DF6;\n    margin-bottom: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8);\n        transition: 0.3s;\n    }\n\n.notes[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 26px;\n    color: #2F7DF6;\n}\n\n.tableTitle[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n}\n\n.lineBlock[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.point[_ngcontent-%COMP%] {\n    margin-top: 17px;\n    margin-left: 25px;\n}\n\n.line[_ngcontent-%COMP%] {\n    top: 30px;\n    left: 0;\n    margin-top: 7px;\n    width: 80%\n}\n\n.createButtonBlock[_ngcontent-%COMP%] {\n    border-left: 25px solid #E5E5E5;\n    position: absolute;\n    right: 0px;\n}\n\n.createButton[_ngcontent-%COMP%] {\n    width: 136px;\n    height: 40px;\n    background: #2F7DF6;\n    border-radius: 20px;\n    font-size: 20px;\n    font-size: 14px;\n    color: #FFFFFF;\n    padding-left: 30px;\n    margin: 0;\n}\n\n.createButtonIcon[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 8px;\n    left: 15px;\n}\n\n.buttonBlock[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.saveButton[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 40px;\n    border: 0;\n    background: #2F7DF6;\n    border-radius: 20px 0 0 20px;\n    \n    transition: 0,5s;\n    \n    font-size: 14px;\n    color: #FFFFFF;\n}\n\n.saveButton.selected[_ngcontent-%COMP%] {\n        visibility: initial;\n        opacity: 100;\n        transition: 0,5s;\n        position: static;\n    }\n\n.cancelButton[_ngcontent-%COMP%] {\n    \n    transition: 1s;\n    \n    width: 90px;\n    height: 40px;\n    border: 1px solid #2F7DF6;\n    border-left: 0;\n    border-radius: 0 20px 20px 0;\n    font-size: 14px;\n    color: #2F7DF6;\n    background-color: #FFFFFF;\n}\n\n.cancelButton.selected[_ngcontent-%COMP%] {\n        visibility: initial;\n        opacity: 100;\n        transform: translate(0, 56px);\n        -webkit-transform: translate(0,56px);\n        -o-transform: translate(0,56px);\n        -moz-transform: translate(0,56ppx);\n        transition: 1s;\n    }\n\n.deleteButtonBlock[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    bottom: 0;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n    height: 40px;\n    background: #FFFFFF;\n    border: 1px solid #2F7DF6;\n    box-sizing: border-box;\n    border-radius: 20px;\n    transition: 1s;\n    font-size: 16px;\n    color: #2F7DF6;\n    padding-left: 40px;\n}\n\n.deleteButtonIcon[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 20px;\n    top: 12px;\n}\n\n\n\n.iconBlock[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 333px;\n    left: 50%;\n    margin: 0 0 0 -160px;\n    width: 320px;\n}\n\n.icon[_ngcontent-%COMP%] {\n    margin-left: 60px;\n    margin-bottom: 20px;\n    width: 200px;\n}\n\n.iconText[_ngcontent-%COMP%] {\n    font-size: 36px;\n    color: #CADEFC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5ub3RlbGlzdC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBSUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7Ozs7OztNQU1NOztBQUVOO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUk7UUFDSSx3Q0FBd0M7UUFDeEMsZ0JBQWdCO0lBQ3BCOztBQUlKO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxPQUFPO0lBQ1AsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVJO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztBQUVKO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFSTtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLG9DQUFvQztRQUNwQywrQkFBK0I7UUFDL0Isa0NBQWtDO1FBQ2xDLGNBQWM7SUFDbEI7O0FBRUo7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7Ozs7Ozs7Ozs7TUFVTTs7QUFHTjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoiYXBwLm5vdGVsaXN0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm5vdGVsaXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuLm5vdGVDb250YWluZXIge1xuICAgIGhlaWdodDogMjA5cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggcmdiYSg5LCA1OSwgMTM3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xufVxuXG5cblxuLnRleHRCbG9ja0luaGVyaXQge1xuICAgIGJvcmRlcjogMDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDNzO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjdzO1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzQyNDI0Mjtcbn1cblxuLyoudGV4dEJsb2NrSW5oZXJpdC5zZWxlY3RlZCB7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAxcztcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y5O1xuICAgIH0qL1xuXG4uY2xpY2thYmxlOmhvdmVyOm5vdCguc2VsZWN0ZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhdGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzJGN0RGNjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5idG4ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB9XG5cblxuXG4ubm90ZXMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogIzJGN0RGNjtcbn1cblxuLnRhYmxlVGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGluZUJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucG9pbnQge1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5saW5lIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgd2lkdGg6IDgwJVxufVxuXG4uY3JlYXRlQnV0dG9uQmxvY2sge1xuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkICNFNUU1RTU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cblxuLmNyZWF0ZUJ1dHRvbiB7XG4gICAgd2lkdGg6IDEzNnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMkY3REY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5cbi5jcmVhdGVCdXR0b25JY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogMTVweDtcbn1cblxuLmJ1dHRvbkJsb2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zYXZlQnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6ICMyRjdERjY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xuICAgIHRyYW5zaXRpb246IDAsNXM7XG4gICAgLypvcGFjaXR5OiAwOyovXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4gICAgLnNhdmVCdXR0b24uc2VsZWN0ZWQge1xuICAgICAgICB2aXNpYmlsaXR5OiBpbml0aWFsO1xuICAgICAgICBvcGFjaXR5OiAxMDA7XG4gICAgICAgIHRyYW5zaXRpb246IDAsNXM7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxuXG4uY2FuY2VsQnV0dG9uIHtcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIC8qb3BhY2l0eTogMDsqL1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkY3REY2O1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMkY3REY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbiAgICAuY2FuY2VsQnV0dG9uLnNlbGVjdGVkIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaW5pdGlhbDtcbiAgICAgICAgb3BhY2l0eTogMTAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NnB4KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDU2cHgpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDU2cHgpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsNTZwcHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB9XG5cbi5kZWxldGVCdXR0b25CbG9jayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTogMDtcbn1cblxuLmRlbGV0ZUJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJGN0RGNjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMkY3REY2O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmRlbGV0ZUJ1dHRvbkljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRvcDogMTJweDtcbn1cblxuLyouZGVsZXRlQnV0dG9uLnNlbGVjdGVkIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwxMTVweCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwxMTVweCk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMTE1cHgpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMTE1cHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgfSovXG5cblxuLmljb25CbG9jayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzMzcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbjogMCAwIDAgLTE2MHB4O1xuICAgIHdpZHRoOiAzMjBweDtcbn1cblxuLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaWNvblRleHQge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjb2xvcjogI0NBREVGQztcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNotelist, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'notelist',
            templateUrl: 'app.notelist.html',
            styleUrls: ['app.notelist.css'],
            providers: [_data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _data_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]
          }, {
            type: _data_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
          }];
        }, {
          onChangedUserName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "uNEz":
    /*!**********************************!*\
      !*** ./src/app/main/app.main.ts ***!
      \**********************************/

    /*! exports provided: AppMain */

    /***/
    function uNEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMain", function () {
        return AppMain;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data/cookie.service */
      "A3QS");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authorization/app.authorization */
      "Hv6U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../notelist/app.notelist */
      "sC40");
      /* harmony import */


      var _welcome_app_welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../welcome/app.welcome */
      "YGNR");

      function AppMain_notelist_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "notelist", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangedUserName", function AppMain_notelist_2_Template_notelist_onChangedUserName_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onChangedUserName($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppMain_welcome_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "welcome");
        }
      }

      var AppMain = /*#__PURE__*/function () {
        function AppMain(jwtHelper, cookieService) {
          _classCallCheck(this, AppMain);

          this.jwtHelper = jwtHelper;
          this.cookieService = cookieService;
          this.userAuthenticated = this.isUserAuthenticated();
          this.userName = "Nikolai Nikolsky"; //!!!!
        }

        _createClass(AppMain, [{
          key: "onChangedAuth",
          value: function onChangedAuth(increased) {
            this.userAuthenticated = increased;
          }
        }, {
          key: "onChangedUserName",
          value: function onChangedUserName(newUserName) {
            if (newUserName === null) this.userAuthenticated = false;
            this.userName = newUserName;
          }
        }, {
          key: "isUserAuthenticated",
          value: function isUserAuthenticated() {
            //const token = this.cookieService.getCookie("accessToken")
            //return (token && true);
            return true;
          }
        }]);

        return AppMain;
      }();

      AppMain.ɵfac = function AppMain_Factory(t) {
        return new (t || AppMain)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]));
      };

      AppMain.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppMain,
        selectors: [["my-app"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])],
        decls: 4,
        vars: 4,
        consts: [[3, "userAuthenticated", "userName", "onChangedAuth"], [3, "onChangedUserName", 4, "ngIf"], [4, "ngIf"], [3, "onChangedUserName"]],
        template: function AppMain_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "authorization", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangedAuth", function AppMain_Template_authorization_onChangedAuth_1_listener($event) {
              return ctx.onChangedAuth($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppMain_notelist_2_Template, 1, 0, "notelist", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppMain_welcome_3_Template, 1, 0, "welcome", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userAuthenticated", ctx.userAuthenticated)("userName", ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);
          }
        },
        directives: [_authorization_app_authorization__WEBPACK_IMPORTED_MODULE_3__["AppAuthorization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__["AppNotelist"], _welcome_app_welcome__WEBPACK_IMPORTED_MODULE_6__["Welcome"]],
        styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tYWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJhcHAubWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMain, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'my-app',
            templateUrl: 'app.main.html',
            styleUrls: ['app.main.css'],
            providers: [_data_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]]
          }]
        }], function () {
          return [{
            type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
          }, {
            type: _data_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "x7nr":
    /*!******************************!*\
      !*** ./src/app/data/note.ts ***!
      \******************************/

    /*! exports provided: Note */

    /***/
    function x7nr(module, __webpack_exports__, __webpack_require__) {
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
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
      platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map