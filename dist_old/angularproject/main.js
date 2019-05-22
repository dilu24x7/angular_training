(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-header.component.ts":
/*!*****************************************!*\
  !*** ./src/app/app-header.component.ts ***!
  \*****************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/login.service */ "./src/app/shared/services/login.service.ts");

// app-header.component.ts


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(loginservice) {
        this.loginservice = loginservice;
        console.log("Header Component constructor");
    }
    AppHeaderComponent.prototype.isAdminLoggedIn = function () {
        return this.loginservice.getIsAdminLoggedIn();
    };
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            // template: "Header Component" //output for your tag
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// app.component.ts
// whats this class meant for module/component

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        console.log("App Component");
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: "<app-header></app-header><router-outlet></router-outlet>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-header.component */ "./src/app/app-header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
/* harmony import */ var _menulinks_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menulinks.components */ "./src/app/menulinks.components.ts");
/* harmony import */ var _shopping_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping/products.component */ "./src/app/shopping/products.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");

// app.module.ts











var appRoutes = [{ path: "home", component: _menulinks_components__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "home", component: _menulinks_components__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "list", component: _menulinks_components__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], children: [
            { path: "", component: _shopping_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
            { path: ":categoryID", component: _shopping_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] }
        ] },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: _menulinks_components__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
        console.log("App Module");
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // Register components
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"], _menulinks_components__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _menulinks_components__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _menulinks_components__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]],
            // Startup Component
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            // Module dependencies
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { useHash: true }), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
            // Register Services
            providers: [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());

// without browsermodule, normal modules are not capable to render custom tags


/***/ }),

/***/ "./src/app/header.component.html":
/*!***************************************!*\
  !*** ./src/app/header.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header.component.html -->\r\n<nav class=\"navbar bg-dark navbar-expand-sm navbar-dark\">\r\n\t<a class=\"navbar-brand\" href=\"\" routerLinkActive=\"active\" routerLink=\"/\">Brand</a>\r\n\t<ul class=\"navbar-nav\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a routerLinkActive=\"active\" routerLink=\"/home\" class=\"nav-link\">Home</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\" *ngIf=\"!isAdminLoggedIn()\">\r\n\t\t\t<a routerLinkActive=\"active\" routerLink=\"login/signin\" class=\"nav-link\">Sign In</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\" *ngIf=\"!isAdminLoggedIn()\">\r\n\t\t\t<a routerLinkActive=\"active\" routerLink=\"login/signup\" class=\"nav-link\">Sign Up</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a routerLinkActive=\"active\" routerLink=\"/list\" class=\"nav-link\">Shopping-List</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\" *ngIf=\"isAdminLoggedIn()\">\r\n\t\t\t<a routerLinkActive=\"active\" routerLink=\"/categories\" class=\"nav-link\">Categories</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\" *ngIf=\"isAdminLoggedIn()\">\r\n\t\t\t<a routerLinkActive=\"active\" routerLink=\"login/signout\" class=\"nav-link\">Sign Out</a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/list.component.html":
/*!*************************************!*\
  !*** ./src/app/list.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- list.component.html -->\r\n<div class=\"row\">\r\n\t<div class=\"card-header bg-info\">\r\n\t\t<b>Categories</b>\r\n\t</div>\r\n\t<div class=\"card-body\">\r\n\t\t<ul class=\"list-group\">\r\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let item of categoryLinks\">\r\n\t\t\t\t<a [routerLink]=\"item.id\">{{ item.name }}</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"col-sm-7\">\r\n\t\t<!-- <app-products></app-products> -->\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\t<div class=\"col-sm-5 card\">\r\n\t\t<app-cartitems></app-cartitems>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/menulinks.components.ts":
/*!*****************************************!*\
  !*** ./src/app/menulinks.components.ts ***!
  \*****************************************/
/*! exports provided: HomeComponent, ListComponent, NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/category.service */ "./src/app/shared/services/category.service.ts");

// menulinks.components.ts


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.mycontent = "My Sample Content";
        this.count = 0;
    }
    HomeComponent.prototype.incrementCount = function () {
        this.count++;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: "<h1>Welcome to my Shopping App</h1> ONEWAY<input type=\"number\" value={{count}}/>\n\tMVVM<input type=\"number\" [(ngModel)]=\"count\"/>\n\t{{count}}<button class=\"btn btn-primary\" (click)=\"incrementCount()\">+</button>"
        })
    ], HomeComponent);
    return HomeComponent;
}());

var ListComponent = /** @class */ (function () {
    function ListComponent(categoryservice) {
        this.categoryservice = categoryservice;
        this.categoryLinks = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryservice.getCategories().subscribe(function (data) { return _this.categoryLinks = data; }, function (err) { return console.log("Error", err); });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], ListComponent);
    return ListComponent;
}());

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "not-found",
            template: "<h1>Angular gone crazy!</h1>"
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/models/cartitem.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/cartitem.model.ts ***!
  \******************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
// cartitem.model.ts
var CartItem = /** @class */ (function () {
    function CartItem(id, name, price, qty) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/category.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/category.model.ts ***!
  \******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
// category.model.ts
var Category = /** @class */ (function () {
    function Category(id, name) {
        this.id = id;
        this.name = name;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/models/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
// product.model.ts
var Product = /** @class */ (function () {
    // // 1. Define data members
    // public id:number
    // public name: string
    // public price: number
    // public description: string
    // // 2. Initialize data members
    // constructor(id:number, name:string, price:number, description:string) {
    // 	this.id = id;
    // 	this.name = name;
    // 	this.price = price;
    // 	this.description = description;
    // }
    // define and initialize in single place
    function Product(id, name, price, description, categoryID) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.categoryID = categoryID;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/guards/login.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/guards/login.guard.ts ***!
  \**********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");

// login.guard.ts


var LoginGuard = /** @class */ (function () {
    function LoginGuard(loginservice) {
        this.loginservice = loginservice;
    }
    LoginGuard.prototype.canActivate = function () {
        return this.loginservice.getIsAdminLoggedIn();
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/shared/mysign.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/mysign.component.ts ***!
  \********************************************/
/*! exports provided: MySignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySignComponent", function() { return MySignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// mysign.component.ts

var MySignComponent = /** @class */ (function () {
    function MySignComponent() {
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log("My Sign Constructor", this.title);
    }
    MySignComponent.prototype.handleButtonClick = function (usr, pwd) {
        console.log(usr, pwd);
        this.myEvent.emit({
            'username': usr,
            'password': pwd
        });
    };
    MySignComponent.prototype.ngOnDestroy = function () {
        console.log("My Sign destroyed", this.title);
    };
    MySignComponent.prototype.ngOnInit = function () {
        console.log("My Sign initialized", this.title);
    };
    MySignComponent.prototype.ngOnChanges = function () {
        console.log("My Sign changed", this.title);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MySignComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MySignComponent.prototype, "myEvent", void 0);
    MySignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-sign",
            template: "<h2>{{ title }}</h2>\n\t<form>\n\t\tUserName<input type=\"text\" placeholder=\"Enter User Name\" name=\"\" #txtUser> <br>\n\t\tPassword<input type=\"password\" name=\"\" #txtPwd> <br>\n\t\t<button class=\"btn btn-primary\" type=\"button\" (click)=\"handleButtonClick(txtUser.value,txtPwd.value)\">{{ title }}\n\t\t</button>\n\t</form>\n\t"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MySignComponent);
    return MySignComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDataPipe", function() { return SearchDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// search.pipe.ts
// defining custom pipes - pipe decorator, implement pipetransform, register under declarations

var SearchDataPipe = /** @class */ (function () {
    function SearchDataPipe() {
    }
    SearchDataPipe.prototype.transform = function (input, queryString, field_name) {
        console.log(queryString);
        if (queryString != "" && queryString != undefined && field_name != undefined) {
            return input.filter(function (e) { return e[field_name].toLowerCase().indexOf(queryString.toLowerCase()) > -1; });
        }
        else {
            return input;
        }
    };
    SearchDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchData'
        })
    ], SearchDataPipe);
    return SearchDataPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// cart.service.ts

var CartService = /** @class */ (function () {
    function CartService() {
        this.cartData = [];
        // removeCartItem(cartitem:CartItem) {
        // 	this.cartData.splice(this.cartData.indexOf(cartitem),1)
        // }
    }
    CartService.prototype.getCartItems = function () {
        return this.cartData;
    };
    CartService.prototype.addCartItem = function (cartitem) {
        this.cartData.push(cartitem);
    };
    CartService.prototype.removeCartItem = function (idx) {
        this.cartData.splice(idx, 1);
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// category.service.ts


// no need to register in the root module
var CategoryService = /** @class */ (function () {
    // injecting http service to categoryService, return type of all httpClient methods are observable
    // events of the observable are listened using subscribe method
    // when we receive data, onNext() is triggered
    function CategoryService(http) {
        this.http = http;
        this.restURL = "http://localhost:3000/wscategories";
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.restURL);
    };
    CategoryService.prototype.addCategory = function (newcategory) {
        return this.http.post(this.restURL, newcategory);
    };
    CategoryService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.restURL + '/' + id);
    };
    CategoryService.prototype.updateCategory = function (modifiedCategory) {
        return this.http.put(this.restURL + '/' + modifiedCategory.id, modifiedCategory);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// login.service.ts

var LoginService = /** @class */ (function () {
    function LoginService() {
        this.isAdminLoggedIn = false;
    }
    LoginService.prototype.getIsAdminLoggedIn = function () {
        return this.isAdminLoggedIn;
    };
    LoginService.prototype.setIsAdminLoggedIn = function (newval) {
        this.isAdminLoggedIn = newval;
    };
    LoginService.prototype.isValidUser = function (username, password) {
        var flag = false;
        if (username == "admin") {
            flag = true;
        }
        this.isAdminLoggedIn = flag;
        return flag;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product.model */ "./src/app/models/product.model.ts");

// product.service.ts


var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productsData = [];
        this.productsData = [
            new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](1, 'Bravia', 56000, "Sony TV", 2),
            new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](1, 'Xiaomi 4K', 39000, "Xiaomi TV", 3),
            new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](1, 'Panasonic 4K', 66000, "Panasonic TV", 3),
            new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](1, 'LG 4K', 56000, "LG TV", 2),
        ];
    }
    ProductService.prototype.getProducts = function () {
        return this.productsData;
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mysign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mysign.component */ "./src/app/shared/mysign.component.ts");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// shared.module.ts




var SharedModule = /** @class */ (function () {
    function SharedModule() {
        console.log("Shared Module");
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mysign_component__WEBPACK_IMPORTED_MODULE_2__["MySignComponent"], _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchDataPipe"]],
            exports: [_mysign_component__WEBPACK_IMPORTED_MODULE_2__["MySignComponent"], _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchDataPipe"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping/cartitems.component.html":
/*!***************************************************!*\
  !*** ./src/app/shopping/cartitems.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Cart Items are: <span class=\"badge badge-primary\">{{ cartItems.length }}</span></h3>\n<table class=\"table table-bordered\">\n\t<tr>\n\t\t<th>Name</th><th>Price</th><th>Quantity</th><th>Amount</th><th></th>\n\t</tr>\n\t<tr *ngIf=\"cartItems.length == 0\">\n\t\t<td colspan=\"4\">No item found.</td>\n\t</tr>\n\t<tr *ngFor=\"let item of cartItems; let i = index\">\n\t\t<td>{{ item.name }}</td>\n\t\t<td>{{ item.price | currency : \"GBP\" }}</td>\n\t\t<td><input type=\"number\" name=\"Quantity\" [(ngModel)]=\"item.qty\" style=\"width: 50px;\"></td>\n\t\t<td>{{ item.price * item.qty | currency : \"GBP\"}} <button class=\"btn btn-danger btn-sm\" (click)=\"deleteFromCart(i)\">X</button></td>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"3\">Total Amount</td>\n\t\t<td colspan=\"1\">{{ totalAmount() | currency : \"GBP\"}}</td>\n\t</tr>\n</table>"

/***/ }),

/***/ "./src/app/shopping/cartitems.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shopping/cartitems.component.ts ***!
  \*************************************************/
/*! exports provided: CartitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartitemsComponent", function() { return CartitemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");



var CartitemsComponent = /** @class */ (function () {
    function CartitemsComponent(cartservice) {
        this.cartservice = cartservice;
        this.cartItems = [];
    }
    CartitemsComponent.prototype.ngOnInit = function () {
        this.cartItems = this.cartservice.getCartItems();
    };
    CartitemsComponent.prototype.deleteFromCart = function (idx) {
        this.cartservice.removeCartItem(idx);
    };
    CartitemsComponent.prototype.totalAmount = function () {
        var total = 0;
        for (var _i = 0, _a = this.cartItems; _i < _a.length; _i++) {
            var cartitem = _a[_i];
            total += cartitem.price * cartitem.qty;
        }
        return total;
    };
    CartitemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartitems',
            template: __webpack_require__(/*! ./cartitems.component.html */ "./src/app/shopping/cartitems.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartitemsComponent);
    return CartitemsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/shopping/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- category.component.html -->\r\n\r\n<h2> Manage Categories </h2>\r\n<form>\r\n\t<input name=\"categoryID\" [(ngModel)]=\"fromCategory.id\" placeholder=\"Category ID\" readonly>\r\n\t<input name=\"categoryName\" [(ngModel)]=\"fromCategory.name\" placeholder=\"Category Name\">\r\n\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\r\n</form>\r\n\r\n<ul *ngFor=\"let item of categories\">\r\n\t<li>{{ item.id }}</li>\r\n\t<li>{{ item.name }}</li>\r\n\t<li><button class=\"btn btn-danger\" (click)=\"delete(item.id)\">Delete</button><button class=\"btn btn-success\" (click)=edit(item)>Edit</button></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/shopping/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/category.model */ "./src/app/models/category.model.ts");

// category.component.ts



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryservice) {
        this.categoryservice = categoryservice;
        this.categories = [];
        this.fromCategory = new _models_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"](null, null);
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryservice.getCategories().subscribe(function (data) {
            _this.categories = data;
        }, function (err) {
            console.log("Error", err);
        });
    };
    CategoryComponent.prototype.save = function () {
        var _this = this;
        if (this.fromCategory.id == undefined) {
            this.categoryservice.addCategory(this.fromCategory).subscribe(function (data) {
                console.log(data);
                _this.categories.push(data);
                _this.fromCategory = new _models_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"](null, null);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.categoryservice.updateCategory(this.fromCategory).subscribe(function (data) {
                console.log(data);
                var idx = _this.categories.findIndex(function (e) { return e.id == data.id; });
                _this.categories[idx] = data;
            }, function (err) {
                console.log(err);
            });
        }
    };
    CategoryComponent.prototype.delete = function (id) {
        var _this = this;
        this.categoryservice.deleteCategory(id).subscribe(function (data) {
            console.log(data);
            var idx = _this.categories.findIndex(function (e) { return e.id == id; });
            _this.categories.splice(idx, 1);
        }, function (err) {
            console.log(err);
        });
    };
    CategoryComponent.prototype.edit = function (selectedCategory) {
        // this.fromCategory = selectedCategory // this will change instantly which we dont want.
        Object.assign(this.fromCategory, selectedCategory); // javascript method
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/shopping/category.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/shopping/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/shopping/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>List of Products:</h3>\n<div>{{ currentDate | date : \"MMM dd yyyy\"}}</div>\n<div>Search: <input [(ngModel)]=\"queryString\"></div>\n<div class=\"card-deck\">\n  <div class=\"card\" *ngFor=\"let product of products | searchData: queryString: 'name' \">\n    <!-- <img src=\"...\" class=\"card-img-top\" alt=\"...\"> -->\n    <div class=\"card-header bg-warning\">\n    \t{{ product.name | uppercase }}\n    </div>\n    <div class=\"card-body\">\n      <!-- <h5 class=\"card-title\">Card title</h5> -->\n      <p class=\"card-text\">{{ product.description }}</p>\n      <p class=\"card-text\"><small class=\"text-muted\">{{ product.price | currency : 'GBP' }}</small></p>\n    </div>\n\t<div class=\"card-footer\">\n\t\t<button class=\"btn btn-primary\" (click)=\"addProductToCart(product)\">Add to Cart</button>\n\t</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _models_cartitem_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/cartitem.model */ "./src/app/models/cartitem.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productservice, cartservice, activatedRoute) {
        this.productservice = productservice;
        this.cartservice = cartservice;
        this.activatedRoute = activatedRoute;
        this.products = [];
        this.currentDate = new Date();
        this.queryString = "";
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.products = this.productservice.getProducts()
        this.activatedRoute.params.subscribe(function (data) {
            console.log(data);
            if (data.categoryID == undefined) {
                _this.products = _this.productservice.getProducts();
            }
            else {
                _this.productservice.getProducts().filter(function (e) { return e.categoryID == data.categoryID; });
            }
        });
    };
    ProductsComponent.prototype.addProductToCart = function (product) {
        this.cartservice.addCartItem(new _models_cartitem_model__WEBPACK_IMPORTED_MODULE_4__["CartItem"](product.id, product.name, product.price, 1));
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/shopping/products.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/shopping/products.component.ts");
/* harmony import */ var _cartitems_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartitems.component */ "./src/app/shopping/cartitems.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shopping/category.component */ "./src/app/shopping/category.component.ts");
/* harmony import */ var _shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/guards/login.guard */ "./src/app/shared/guards/login.guard.ts");

// shopping.module.ts









var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
        console.log("Shopping Module");
    }
    ShoppingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({ declarations: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _cartitems_component__WEBPACK_IMPORTED_MODULE_3__["CartitemsComponent"], _shopping_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"]],
            exports: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _cartitems_component__WEBPACK_IMPORTED_MODULE_3__["CartitemsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{ path: "categories", component: _shopping_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"], canActivate: [_shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_9__["LoginGuard"]] }])
            ] //ngFor
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingModule);
    return ShoppingModule;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
// main.ts
console.log("inside main.ts");


// platform definiton happens here.
// identify platform
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SE7EN\angularproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map