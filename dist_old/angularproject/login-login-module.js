(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// error.component.ts

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () { };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signout",
            template: "error"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.component */ "./src/app/login/signin.component.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _signout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signout.component */ "./src/app/login/signout.component.ts");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error.component */ "./src/app/login/error.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// login.module.ts







var loginRoutes = [
    { path: "signin", component: _signin_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] },
    { path: "signup", component: _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] },
    { path: "signout", component: _signout_component__WEBPACK_IMPORTED_MODULE_4__["SignOutComponent"] },
    { path: "error", component: _error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
        console.log("Login Module");
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], _signout_component__WEBPACK_IMPORTED_MODULE_4__["SignOutComponent"], _error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(loginRoutes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/signin.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signin.component.ts ***!
  \*******************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// signin.component.ts



var SignInComponent = /** @class */ (function () {
    function SignInComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.userName = "Guest";
        this.signInHeading = "Sign In";
        console.log("SignIn Component");
    }
    SignInComponent.prototype.handleMyEvent = function (obj) {
        this.userName = obj.username;
        if (this.loginservice.isValidUser(obj.username, obj.password)) {
            this.router.navigate(['/categories']);
        }
        else {
            this.router.navigate(['login/error']);
        }
        ;
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "sign-in",
            template: "\n\t<h2>Welcome {{ userName }}</h2>\n\t<my-sign [title]=\"signInHeading\" (myEvent)=\"handleMyEvent($event)\"></my-sign>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/login/signout.component.ts":
/*!********************************************!*\
  !*** ./src/app/login/signout.component.ts ***!
  \********************************************/
/*! exports provided: SignOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutComponent", function() { return SignOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");

// signout.component.ts


var SignOutComponent = /** @class */ (function () {
    function SignOutComponent(loginservice) {
        this.loginservice = loginservice;
    }
    SignOutComponent.prototype.ngOnInit = function () {
        this.loginservice.setIsAdminLoggedIn(false);
    };
    SignOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signout",
            template: "signout"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], SignOutComponent);
    return SignOutComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// signup.component.ts

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        this.signInHeading = "Sign Up";
        console.log("Sign up Component");
    }
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "sign-up",
            template: "<my-sign [title]=\"signInHeading\"></my-sign>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map