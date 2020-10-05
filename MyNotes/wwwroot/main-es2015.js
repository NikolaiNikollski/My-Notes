(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Data/HttpRequest.ts":
/*!*************************************!*\
  !*** ./src/app/Data/HttpRequest.ts ***!
  \*************************************/
/*! exports provided: HttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Note */ "./src/app/Data/Note.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class HttpRequest {
    constructor() {
        this.url = "https://localhost:44338/Api/Note";
    }
    save(note) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!note.Text)
                return;
            const formData = new FormData();
            formData.append('text', note.Text);
            let response = yield fetch(this.url, {
                method: 'POST',
                body: formData
            });
            return response;
        });
    }
    update(note) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!note.Text)
                return;
            ;
            const formData = new FormData();
            formData.append('text', note.Text);
            let response = yield fetch('https://localhost:44338/Api/Note/' + note.Id, {
                method: 'PUT',
                body: formData
            });
            return response;
        });
    }
    del(note) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch('https://localhost:44338/Api/Note/' + note.Id, {
                method: 'DElETE',
            });
            return response;
        });
    }
    loadNotes(notelist) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(this.url, {
                method: 'GET'
            });
            if (response.ok) {
                let receivedNotelist = yield response.json();
                for (let i = 0; i < receivedNotelist.length; i++) {
                    notelist.unshift(new _Note__WEBPACK_IMPORTED_MODULE_0__["Note"](receivedNotelist[i].text, receivedNotelist[i].date, receivedNotelist[i].noteId));
                }
            }
            return response;
        });
    }
}


/***/ }),

/***/ "./src/app/Data/Note.ts":
/*!******************************!*\
  !*** ./src/app/Data/Note.ts ***!
  \******************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
    constructor(text, date, id) {
        this.Text = text;
        this.Date = date;
        this.Id = id;
        this.Selected = false;
        this.TempText = null;
    }
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _main_app_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/app.main */ "./src/app/main/app.main.ts");
/* harmony import */ var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notelist/app.notelist */ "./src/app/notelist/app.notelist.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_3__["AppMain"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_3__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_4__["AppNotelist"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_3__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_4__["AppNotelist"]],
                bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_3__["AppMain"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/app.main.ts":
/*!**********************************!*\
  !*** ./src/app/main/app.main.ts ***!
  \**********************************/
/*! exports provided: AppMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMain", function() { return AppMain; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notelist/app.notelist */ "./src/app/notelist/app.notelist.ts");



class AppMain {
}
AppMain.ɵfac = function AppMain_Factory(t) { return new (t || AppMain)(); };
AppMain.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppMain, selectors: [["my-app"]], decls: 2, vars: 0, template: function AppMain_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "notelist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_notelist_app_notelist__WEBPACK_IMPORTED_MODULE_1__["AppNotelist"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwLm1haW4uY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMain, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-app',
                templateUrl: 'app.main.html',
                styleUrls: ['app.main.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/notelist/app.notelist.ts":
/*!******************************************!*\
  !*** ./src/app/notelist/app.notelist.ts ***!
  \******************************************/
/*! exports provided: AppNotelist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNotelist", function() { return AppNotelist; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Data_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/Note */ "./src/app/Data/Note.ts");
/* harmony import */ var _Data_HttpRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/HttpRequest */ "./src/app/Data/HttpRequest.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function AppNotelist_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectNote(note_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_div_2_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = ctx.$implicit; return note_r1.Text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_div_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = ctx.$implicit; return note_r1.Date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = ctx.$implicit; const index_r2 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.process(note_r1, index_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = ctx.$implicit; const index_r2 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.unselectNote(note_r1, index_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cansel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.del(note_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", note_r1.Text)("disabled", !note_r1.Selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", note_r1.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
} }
class AppNotelist {
    constructor() {
        this.notelist = [];
        //selectedNotesIndex: Array<boolean> = []; 
        this.httpRequest = new _Data_HttpRequest__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]();
    }
    process(note) {
        if (note.Id === null) {
            this.httpRequest.save(note);
        }
        else {
            this.httpRequest.update(note);
        }
        note.Selected = false;
        note.TempText = null;
    }
    del(note, index) {
        if (note.Id) {
            let status = this.httpRequest.del(note);
        }
        this.notelist.splice(index, 1);
    }
    loadNotes() {
        this.httpRequest.loadNotes(this.notelist);
    }
    createNote() {
        let note = new _Data_Note__WEBPACK_IMPORTED_MODULE_1__["Note"](null, null, null);
        note.Selected = true;
        this.notelist.unshift(note);
    }
    unselectNote(note, index) {
        if (!note.Id) { //new note
            this.del(note, index);
            return;
        }
        note.Selected = false;
        note.Text = note.TempText;
        note.TempText = null;
    }
    selectNote(note) {
        note.Selected = true;
        note.TempText = note.Text;
    }
    ngOnInit() {
        this.loadNotes();
    }
}
AppNotelist.ɵfac = function AppNotelist_Factory(t) { return new (t || AppNotelist)(); };
AppNotelist.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNotelist, selectors: [["notelist"]], decls: 3, vars: 1, consts: [[1, "btn", "btn-success", 3, "click"], [4, "ngFor", "ngForOf"], [1, "container"], [1, "body", 3, "click"], [1, "noteText", 3, "ngModel", "disabled", "ngModelChange"], ["type", "text", "disabled", "", 1, "noteDate", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "saveButton", 3, "click"], [1, "btn", "btn-success", "canselButton", 3, "click"], [1, "btn", "btn-success", "deleteButton", 3, "click"]], template: function AppNotelist_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_Template_button_click_0_listener() { return ctx.createNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppNotelist_div_2_Template, 11, 15, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notelist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".btn[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    float: left;\r\n}\r\n\r\n.saveButton[_ngcontent-%COMP%] {\r\n    background-color: lawngreen;\r\n    display: none;\r\n}\r\n\r\n.saveButton.selected[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n    }\r\n\r\n.canselButton[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n    display: none;\r\n}\r\n\r\n.canselButton.selected[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n    }\r\n\r\n.deleteButton[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\r\n\r\n.deleteButton.selected[_ngcontent-%COMP%] {\r\n        background-color: red;\r\n    }\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    overflow: hidden;\r\n    border: 2px solid grey;\r\n    padding: 0px;\r\n}\r\n\r\n.container.selected[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n\r\n.body[_ngcontent-%COMP%]:hover:not(.selected) {\r\n    background-color: #808080;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.body.selected[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n\r\n.noteText[_ngcontent-%COMP%] {\r\n    padding: 3px 0 0 10px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    resize: none;\r\n}\r\n\r\n.noteText.selected[_ngcontent-%COMP%] {\r\n        height: 300px;\r\n        resize: vertical;\r\n    }\r\n\r\n.noteDate[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    padding-top: 12px;\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZWxpc3QvYXBwLm5vdGVsaXN0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFSTtRQUNJLHFCQUFxQjtJQUN6Qjs7QUFFSjtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVJO1FBQ0kscUJBQXFCO0lBQ3pCOztBQUVKO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJO1FBQ0kscUJBQXFCO0lBQ3pCOztBQUdKO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFSTtRQUNJLGNBQWM7SUFDbEI7O0FBRUo7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFSTtRQUNJLGNBQWM7SUFDbEI7O0FBR0o7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVJO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjs7QUFHSjtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25vdGVsaXN0L2FwcC5ub3RlbGlzdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc2F2ZUJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4gICAgLnNhdmVCdXR0b24uc2VsZWN0ZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbi5jYW5zZWxCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuICAgIC5jYW5zZWxCdXR0b24uc2VsZWN0ZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbi5kZWxldGVCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4gICAgLmRlbGV0ZUJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4gICAgLmNvbnRhaW5lci5zZWxlY3RlZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4uYm9keTpob3Zlcjpub3QoLnNlbGVjdGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gICAgLmJvZHkuc2VsZWN0ZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuXHJcbi5ub3RlVGV4dCB7XHJcbiAgICBwYWRkaW5nOiAzcHggMCAwIDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbiAgICAubm90ZVRleHQuc2VsZWN0ZWQge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcblxyXG4ubm90ZURhdGUge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNotelist, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'notelist',
                templateUrl: 'app.notelist.html',
                styleUrls: ['app.notelist.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


const platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repository\My-notes\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map