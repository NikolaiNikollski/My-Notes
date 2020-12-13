(function () {
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
            options = Object.assign({
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

      function AppAuthorization_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.getLoginForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.getRegisterForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_7_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_7_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_7_ul_15_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fill in all required fields. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_7_ul_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAuthorization_form_7_ul_15_li_1_Template, 3, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13._loginUsername.errors == null ? null : ctx_r13._loginUsername.errors.required) || (ctx_r13._loginPassword.errors == null ? null : ctx_r13._loginPassword.errors.required));
        }
      }

      function AppAuthorization_form_7_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.error);
        }
      }

      function AppAuthorization_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_form_7_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.login(ctx_r16.loginForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppAuthorization_form_7_span_7_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppAuthorization_form_7_span_11_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppAuthorization_form_7_ul_15_Template, 2, 1, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppAuthorization_form_7_div_16_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3._loginUsername.errors == null ? null : ctx_r3._loginUsername.errors.required) && ctx_r3._loginUsername.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3._loginPassword.errors == null ? null : ctx_r3._loginPassword.errors.required) && ctx_r3._loginPassword.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3._loginUsername.touched && ctx_r3._loginUsername.invalid || ctx_r3._loginPassword.touched && ctx_r3._loginPassword.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.error);
        }
      }

      function AppAuthorization_form_8_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_19_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fill in all required fields. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_19_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Username must contain at least ", ctx_r24._registerUsername.errors == null ? null : ctx_r24._registerUsername.errors.minlength.requiredLength, " simbols. ");
        }
      }

      function AppAuthorization_form_8_ul_19_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password must contain at least ", ctx_r25._registerPassword.errors == null ? null : ctx_r25._registerPassword.errors.minlength.requiredLength, " simbols. ");
        }
      }

      function AppAuthorization_form_8_ul_19_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must contain digit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_19_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must contain letter.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_19_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAuthorization_form_8_ul_19_li_1_Template, 3, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppAuthorization_form_8_ul_19_li_2_Template, 3, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppAuthorization_form_8_ul_19_li_3_Template, 3, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppAuthorization_form_8_ul_19_li_4_Template, 3, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppAuthorization_form_8_ul_19_li_5_Template, 3, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppAuthorization_form_8_ul_19_li_6_Template, 3, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21._registerUsername.errors == null ? null : ctx_r21._registerUsername.errors.required) || (ctx_r21._registerPassword.errors == null ? null : ctx_r21._registerPassword.errors.required) || (ctx_r21._registerRePassword.errors == null ? null : ctx_r21._registerRePassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21._registerUsername.errors == null ? null : ctx_r21._registerUsername.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21._registerPassword.errors == null ? null : ctx_r21._registerPassword.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21._registerPassword.errors == null ? null : ctx_r21._registerPassword.errors.pattern == null ? null : ctx_r21._registerPassword.errors.pattern.requiredPattern) == "/[0-9]/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21._registerPassword.errors == null ? null : ctx_r21._registerPassword.errors.pattern == null ? null : ctx_r21._registerPassword.errors.pattern.requiredPattern) == "/[a-zA-Z]/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21._registerRePassword.errors == null ? null : ctx_r21._registerRePassword.errors.RePasswordCorrectionError);
        }
      }

      function AppAuthorization_form_8_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.error);
        }
      }

      function AppAuthorization_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_form_8_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.register(ctx_r29.registerForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppAuthorization_form_8_span_7_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppAuthorization_form_8_span_11_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppAuthorization_form_8_span_15_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppAuthorization_form_8_ul_19_Template, 7, 6, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppAuthorization_form_8_div_20_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4._registerUsername.errors == null ? null : ctx_r4._registerUsername.errors.required) && ctx_r4._registerUsername.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4._registerPassword.errors == null ? null : ctx_r4._registerPassword.errors.required) && ctx_r4._registerPassword.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4._registerRePassword.errors == null ? null : ctx_r4._registerRePassword.errors.required) && ctx_r4._registerRePassword.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4._registerUsername.touched && ctx_r4._registerUsername.invalid || ctx_r4._registerPassword.touched && ctx_r4._registerPassword.invalid || ctx_r4._registerRePassword.touched && ctx_r4._registerRePassword.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.error);
        }
      }

      var AppAuthorization = /*#__PURE__*/function () {
        function AppAuthorization(fb, httpService, cookieService) {
          _classCallCheck(this, AppAuthorization);

          this.fb = fb;
          this.httpService = httpService;
          this.cookieService = cookieService;
          this.onChangedAuth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.activeLoginForm = true;
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
          value: function register(form) {
            var _this2 = this;

            if (this.registerForm.invalid) {
              this._registerUsername.markAsTouched();

              this._registerPassword.markAsTouched();

              this._registerRePassword.markAsTouched();

              return;
            }

            this.logout();
            this.httpService.register(form).subscribe(function (response) {
              return _this2.onCopmplete(response);
            }, function (err) {
              return _this2.onError(err);
            });
          }
        }, {
          key: "login",
          value: function login(form) {
            var _this3 = this;

            if (this.loginForm.invalid) {
              this._loginUsername.markAsTouched();

              this._loginPassword.markAsTouched();

              return;
            }

            this.logout();
            this.httpService.login(form).subscribe(function (response) {
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
        decls: 9,
        vars: 6,
        consts: [[1, "nav"], [1, "authPanel"], ["class", "authPanelButton", 3, "click", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "authPanelButton", 3, "click"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "container-fluid", "formContainer"], [1, "form-signin-heading"], [1, "inputBlock"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "form-control"], ["class", "requiredSimbol", 4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "formButton"], ["class", "ValidationErrorBlock", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "requiredSimbol"], [1, "ValidationErrorBlock"], [4, "ngIf"], [1, "alert", "alert-danger"], ["formControlName", "rePassword", "type", "password", "placeholder", "Password Repeat", 1, "form-control"]],
        template: function AppAuthorization_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppAuthorization_button_4_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppAuthorization_button_5_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppAuthorization_button_6_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppAuthorization_form_7_Template, 17, 5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppAuthorization_form_8_Template, 21, 6, "form", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeLoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeRegisterForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
        styles: ["input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 2px solid red;\r\n}\r\n\r\n\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    background-color: #007BFF;\r\n    color: #FFFFFF;\r\n    display: flex;\r\n    position: relative;\r\n    font-size: 18px;\r\n    font-family: 'Roboto', sans-serif;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.authPanel[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 50px;\r\n    right: 10px;\r\n}\r\n\r\n\r\n\r\n.authPanelButton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    height: 50px;\r\n    width: 100px;\r\n    background-color: #007BFF;\r\n    color: #FFFFFF;\r\n}\r\n\r\n\r\n\r\n.authPanelButton[_ngcontent-%COMP%]:hover {\r\n        border: 2px solid white;\r\n        border-top: 0;\r\n        border-bottom: 0;\r\n    }\r\n\r\n\r\n\r\nform[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.formContainer[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 360px;\r\n    background-color: deepskyblue;\r\n    border: 8px solid #007BFF;\r\n    border-top: 0;\r\n    color: #FFFFFF;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .formContainer[_ngcontent-%COMP%] {\r\n        position: initial;\r\n        margin-top: 0px;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 360px) {\r\n    .formContainer[_ngcontent-%COMP%] {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin-bottom: -10px;\r\n}\r\n\r\n\r\n\r\n.inputBlock[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n.requiredSimbol[_ngcontent-%COMP%] {\r\n    color: red;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n\r\n.ValidationErrorBlock[_ngcontent-%COMP%] {\r\n    color: red;\r\n    background-color: white;\r\n    border: 6px solid #007BFF;\r\n}\r\n\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n    padding-left: 30px;\r\n}\r\n\r\n\r\n\r\n.formButton[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5hdXRob3JpemF0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7OztBQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7Ozs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7Ozs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7QUFDSjs7OztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7OztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7Ozs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFwcC5hdXRob3JpemF0aW9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdiB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hdXRoUGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hdXRoUGFuZWxCdXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4gICAgLmF1dGhQYW5lbEJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgIzAwN0JGRjtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmZvcm1Db250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgIC5mb3JtQ29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dEJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5yZXF1aXJlZFNpbWJvbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5cclxuLlZhbGlkYXRpb25FcnJvckJsb2NrIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMwMDdCRkY7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZvcm1CdXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuIl19 */"]
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
        decls: 11,
        vars: 0,
        consts: [[1, "col-md-6", "offset-md-3", "welcome"], ["src", "/assets/notepad.jfif/", "alt", "app Icon", 1, "icon"]],
        template: function Welcome_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hello, dear friend! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are glad to see you! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Please login or register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " to open your notepad. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".welcome[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    font-size: 30px;\r\n    display: flex;\r\n    color: #0094BD;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    height: 180px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    transform: rotate(-90deg);\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 20px;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n    .welcome[_ngcontent-%COMP%] {\r\n        display: initial;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC53ZWxjb21lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJhcHAud2VsY29tZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiAjMDA5NEJEO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC53ZWxjb21lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgfVxyXG59Il19 */"]
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

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

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
              return Object.assign(Object.assign({}, data.value), {
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
          value: function refresh() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function AppNotelist_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_tr_7_Template_td_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectNote(note_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_tr_7_Template_textarea_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            return note_r1.Text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_tr_7_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.update(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_tr_7_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.unselectNote(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_tr_7_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.del(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "spam", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r1.Date);
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
          value: function createNote() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
          }
        }, {
          key: "update",
          value: function update(note, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
          }
        }, {
          key: "del",
          value: function del(note, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
          }
        }, {
          key: "selectNote",
          value: function selectNote(note) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context5.sent;

                      if (canActivatePromise) {
                        _context5.next = 6;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context5.abrupt("return");

                    case 6:
                      note.Selected = true;
                      note.TempText = note.Text;

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "unselectNote",
          value: function unselectNote(note, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
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
          }
        }, {
          key: "loadNotes",
          value: function loadNotes() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context7.sent;

                      if (canActivatePromise) {
                        _context7.next = 6;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context7.abrupt("return");

                    case 6:
                      this.httpService.loadNotes().subscribe(function (data) {
                        _this7.notelist = data.notes.reverse(data.notes);

                        _this7.onChangedUserName.emit(data.name);
                      }, function (err) {
                        _this7.onChangedUserName.emit(null);
                      });

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
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
        }, {
          key: "canActivate",
          value: function canActivate() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var token, refreshSuccessPromise;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      token = this.cookieService.getCookie('accessToken');

                      if (!(token && !this.jwtHelper.isTokenExpired(token))) {
                        _context8.next = 3;
                        break;
                      }

                      return _context8.abrupt("return", true);

                    case 3:
                      _context8.next = 5;
                      return this.tryRefreshingTokens();

                    case 5:
                      refreshSuccessPromise = _context8.sent;
                      return _context8.abrupt("return", refreshSuccessPromise);

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "tryRefreshingTokens",
          value: function tryRefreshingTokens() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var response;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.httpService.refresh();

                    case 3:
                      response = _context9.sent;
                      return _context9.abrupt("return", response.ok);

                    case 7:
                      _context9.prev = 7;
                      _context9.t0 = _context9["catch"](0);
                      return _context9.abrupt("return", false);

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 7]]);
            }));
          }
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
        decls: 8,
        vars: 1,
        consts: [[1, "col-md-6", "offset-md-3", "createButtonBlock", "left"], [1, "line"], [1, "btn", "btn-primary", "createButton", 3, "click"], [1, "line", "right"], [1, "table", "table-bordered", "notelistContainer", "col-md-6", "offset-md-3"], ["class", "noteContainer clickable", 3, "selected", 4, "ngFor", "ngForOf"], [1, "noteContainer", "clickable"], [1, "textBlock", "clickable", 3, "click"], ["contenteditable", "true", 1, "textBlockInherit", 3, "ngModel", "disabled", "ngModelChange"], [1, "buttonBlock"], [1, "btn", "btn-success", "saveButton", 3, "click"], [1, "btn", "btn-warning", "cancelButton", 3, "click"], [1, "btn", "btn-danger", "deleteButton", 3, "click"], [1, "date"]],
        template: function AppNotelist_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_Template_button_click_2_listener() {
              return ctx.createNote();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppNotelist_tr_7_Template, 14, 17, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notelist);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".notelistContainer[_ngcontent-%COMP%] {\n}\n\n.noteContainer[_ngcontent-%COMP%] {\n    background-color: #F0F0F0;\n    border: 3px solid #007BFF;\n}\n\n.noteContainer.selected[_ngcontent-%COMP%] {\n        border-color: darkblue;\n        background-color: #F4F7F9;\n    }\n\n.textBlock[_ngcontent-%COMP%] {\n    transition: width 3s;\n}\n\n.textBlockInherit[_ngcontent-%COMP%] {\n    transition: width 3s;\n    border: 0;\n    resize: none;\n    outline: none;\n    display: inline-block;\n    overflow: hidden;\n    transition: height 0.7s;\n    height: 50px;\n}\n\n.textBlockInherit.selected[_ngcontent-%COMP%] {\n        transition: height 1s;\n        overflow: auto;\n        height: 160px;\n        width: 100%;\n        background-color: #F4F7F9;\n    }\n\n.clickable[_ngcontent-%COMP%]:hover:not(.selected) {\n    background-color: #F4F7F9;\n    cursor: pointer;\n}\n\n.dateBlock[_ngcontent-%COMP%] {\n    width: 160px;\n    border: 3px solid #007BFF;\n    padding-top: 25px;\n}\n\n.dateBlock.selected[_ngcontent-%COMP%] {\n        border-color: darkblue;\n        display: none;\n    }\n\n.buttonBlock[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100px;\n    height: 56px;\n    padding: 3px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 100px;\n    font-size: 20px;\n    margin: 0 12px 5px 12px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8);\n        transition: 0.3s;\n    }\n\n.createButtonBlock[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.createButton[_ngcontent-%COMP%] {\n    margin: 15px;\n    height: 60px;\n    font-size: 20px;\n    background-color: deepskyblue;\n    min-width: 150px;\n}\n\n.line[_ngcontent-%COMP%] {\n    height: 8px;\n    border-radius: 19px;\n    background-color: deepskyblue;\n    margin-top: 42px;\n    width: 100px;\n}\n\n.line.left[_ngcontent-%COMP%] {\n        width: 100px;\n    }\n\n.line.right[_ngcontent-%COMP%] {\n        width: 500px;\n    }\n\n.saveButton[_ngcontent-%COMP%] {\n    visibility: hidden;\n    transition: 0,5s;\n    opacity: 0;\n    top: 0;\n    position: absolute;\n}\n\n.saveButton.selected[_ngcontent-%COMP%] {\n        visibility: initial;\n        opacity: 100;\n        transition: 0,5s;\n        position: static;\n    }\n\n.cancelButton[_ngcontent-%COMP%] {\n    visibility: hidden;\n    transition: 1s;\n    opacity: 0;\n    position: absolute;\n    left: 3px;\n}\n\n.cancelButton.selected[_ngcontent-%COMP%] {\n        visibility: initial;\n        opacity: 100;\n        transform: translate(0, 56px);\n        -webkit-transform: translate(0,56px);\n        -o-transform: translate(0,56px);\n        -moz-transform: translate(0,56ppx);\n        transition: 1s;\n    }\n\n.deleteButton[_ngcontent-%COMP%] {\n    transition: 1s;\n}\n\n.deleteButton.selected[_ngcontent-%COMP%] {\n        transform: translate(0,115px);\n        -webkit-transform: translate(0,115px);\n        -o-transform: translate(0,115px);\n        -moz-transform: translate(0,115ppx);\n        transition: 1s;\n        position: absolute;\n        top: 0;\n        display: block;\n        transition: 1s;\n    }\n\n.date[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 3px;\n    top: 54px;\n    transition: 0.9s;\n}\n\n.date.selected[_ngcontent-%COMP%] {\n        transform: translate(0, 110px);\n        -webkit-transform: translate(0, 110px);\n        -o-transform: translate(0, 110px);\n        -moz-transform: translate(0, 110px);\n        transition: 1s;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5ub3RlbGlzdC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVJO1FBQ0ksc0JBQXNCO1FBQ3RCLHlCQUF5QjtJQUM3Qjs7QUFHSjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsV0FBVztRQUNYLHlCQUF5QjtJQUM3Qjs7QUFFSjtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUk7UUFDSSxzQkFBc0I7UUFDdEIsYUFBYTtJQUNqQjs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBSUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUk7UUFDSSx3Q0FBd0M7UUFDeEMsZ0JBQWdCO0lBQ3BCOztBQUVKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFSTtRQUNJLFlBQVk7SUFDaEI7O0FBQ0E7UUFDSSxZQUFZO0lBQ2hCOztBQUVKO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsTUFBTTtJQUNOLGtCQUFrQjtBQUN0Qjs7QUFFSTtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUk7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLDZCQUE2QjtRQUM3QixvQ0FBb0M7UUFDcEMsK0JBQStCO1FBQy9CLGtDQUFrQztRQUNsQyxjQUFjO0lBQ2xCOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFSTtRQUNJLDZCQUE2QjtRQUM3QixxQ0FBcUM7UUFDckMsZ0NBQWdDO1FBQ2hDLG1DQUFtQztRQUNuQyxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixjQUFjO1FBQ2QsY0FBYztJQUNsQjs7QUFHSjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFSTtRQUNJLDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLG1DQUFtQztRQUNuQyxjQUFjO0lBQ2xCIiwiZmlsZSI6ImFwcC5ub3RlbGlzdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ub3RlbGlzdENvbnRhaW5lciB7XG59XG5cbi5ub3RlQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDdCRkY7XG59XG5cbiAgICAubm90ZUNvbnRhaW5lci5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY3Rjk7XG4gICAgfVxuXG5cbi50ZXh0QmxvY2sge1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDNzO1xufVxuXG4udGV4dEJsb2NrSW5oZXJpdCB7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggM3M7XG4gICAgYm9yZGVyOiAwO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjdzO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuICAgIC50ZXh0QmxvY2tJbmhlcml0LnNlbGVjdGVkIHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY3Rjk7XG4gICAgfVxuXG4uY2xpY2thYmxlOmhvdmVyOm5vdCguc2VsZWN0ZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhdGVCbG9jayB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDdCRkY7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbiAgICAuZGF0ZUJsb2NrLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrYmx1ZTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbi5idXR0b25CbG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG5cblxuLmJ0biB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwIDEycHggNXB4IDEycHg7XG59XG5cbiAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB9XG5cbi5jcmVhdGVCdXR0b25CbG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmNyZWF0ZUJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuLmxpbmUge1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XG4gICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbiAgICAubGluZS5sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAubGluZS5yaWdodCB7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG5cbi5zYXZlQnV0dG9uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogMCw1cztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiAgICAuc2F2ZUJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgICAgIHZpc2liaWxpdHk6IGluaXRpYWw7XG4gICAgICAgIG9wYWNpdHk6IDEwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMCw1cztcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB9XG5cbi5jYW5jZWxCdXR0b24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzcHg7XG59XG5cbiAgICAuY2FuY2VsQnV0dG9uLnNlbGVjdGVkIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaW5pdGlhbDtcbiAgICAgICAgb3BhY2l0eTogMTAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NnB4KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDU2cHgpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDU2cHgpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsNTZwcHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB9XG5cbi5kZWxldGVCdXR0b24ge1xuICAgIHRyYW5zaXRpb246IDFzO1xufVxuXG4gICAgLmRlbGV0ZUJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMTE1cHgpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMTE1cHgpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDExNXB4KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDExNXBweCk7XG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgIH1cblxuXG4uZGF0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDNweDtcbiAgICB0b3A6IDU0cHg7XG4gICAgdHJhbnNpdGlvbjogMC45cztcbn1cblxuICAgIC5kYXRlLnNlbGVjdGVkIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTEwcHgpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDExMHB4KTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTEwcHgpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDExMHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgfSJdfQ== */"]
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
            var token = this.cookieService.getCookie("accessToken");
            return token && true;
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAubWFpbi5jc3MifQ== */"]
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