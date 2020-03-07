(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#photo {\n    width: 200px;\n    height: 200px;\n    background-image: url(/assets/img/travel-kevin-photo.jpg);\n    background-size: cover;\n    background-position: right center;\n    border-radius: 50%;\n}\n\n.padding-top {\n    padding-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseURBQXlEO0lBQ3pELHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaG90byB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL3RyYXZlbC1rZXZpbi1waG90by5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBhZGRpbmctdG9wIHtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top\">\n  <h2>Travel Kevin BKH</h2>\n  <h4>旅遊凱文</h4>\n  <div id=\"photo\" class=\"col-md-5\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.language = 'ch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _np_np_grid_np_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./np/np-grid/np-grid.component */ "./src/app/np/np-grid/np-grid.component.ts");
/* harmony import */ var _np_np_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./np/np.component */ "./src/app/np/np.component.ts");
/* harmony import */ var _np_np_main_np_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./np/np-main/np-main.component */ "./src/app/np/np-main/np-main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _np_np_table_np_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./np/np-table/np-table.component */ "./src/app/np/np-table/np-table.component.ts");
/* harmony import */ var _np_np_content_np_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./np/np-content/np-content.component */ "./src/app/np/np-content/np-content.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _pg_pg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pg/pg.component */ "./src/app/pg/pg.component.ts");

















var appRoutes = [
    { 'path': '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { 'path': 'us-national-parks', component: _np_np_component__WEBPACK_IMPORTED_MODULE_8__["NpComponent"] },
    { 'path': 'us-national-parks/:name', component: _np_np_main_np_main_component__WEBPACK_IMPORTED_MODULE_9__["NpMainComponent"] },
    { 'path': 'photography', component: _pg_pg_component__WEBPACK_IMPORTED_MODULE_16__["PgComponent"] },
    { 'path': 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"] },
    { 'path': 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
    { 'path': '**', redirectTo: '/not-found' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _np_np_grid_np_grid_component__WEBPACK_IMPORTED_MODULE_7__["NpGridComponent"],
                _np_np_component__WEBPACK_IMPORTED_MODULE_8__["NpComponent"],
                _np_np_main_np_main_component__WEBPACK_IMPORTED_MODULE_9__["NpMainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _np_np_table_np_table_component__WEBPACK_IMPORTED_MODULE_13__["NpTableComponent"],
                _np_np_content_np_content_component__WEBPACK_IMPORTED_MODULE_14__["NpContentComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _pg_pg_component__WEBPACK_IMPORTED_MODULE_16__["PgComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-top {\n    padding-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLXRvcCB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top\">\n  <h4>歡迎來到旅遊凱文的家</h4>\n  <p>現在什麼內容都還沒有，敬請包涵。你可以先查看美國國家公園的列表，我的目標是走訪每一個國家公園！</p>\n  <button class=\"btn btn-primary\" [routerLink]=\"['/us-national-parks']\">美國國家公園列表</button>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">{{ name }}</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngFor=\"let category of categories; let i = index\">\n        <a class=\"nav-link\" [routerLink]=\"href[i]\">{{ category }}</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.name = 'Travel Kevin BKH 旅遊凱文';
        this.href = [
            '',
            'us-national-parks',
            'photography',
            'about'
        ];
        this.categories = [
            '首頁',
            '美國國家公園',
            '攝影',
            '關於'
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-top {\n    padding-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctdG9wIHtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top\">\n  <h3>找不到你所輸入的網址，你可能打錯網址囉！</h3>\n  <button class=\"btn btn-primary\" [routerLink]=\"['/']\">前往首頁</button>\n</div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/np/np-content/np-content.component.css":
/*!********************************************************!*\
  !*** ./src/app/np/np-content/np-content.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25wL25wLWNvbnRlbnQvbnAtY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/np/np-content/np-content.component.html":
/*!*********************************************************!*\
  !*** ./src/app/np/np-content/np-content.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  np-content works!\n</p>\n"

/***/ }),

/***/ "./src/app/np/np-content/np-content.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/np/np-content/np-content.component.ts ***!
  \*******************************************************/
/*! exports provided: NpContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpContentComponent", function() { return NpContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NpContentComponent = /** @class */ (function () {
    function NpContentComponent() {
    }
    NpContentComponent.prototype.ngOnInit = function () {
    };
    NpContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-np-content',
            template: __webpack_require__(/*! ./np-content.component.html */ "./src/app/np/np-content/np-content.component.html"),
            styles: [__webpack_require__(/*! ./np-content.component.css */ "./src/app/np/np-content/np-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NpContentComponent);
    return NpContentComponent;
}());



/***/ }),

/***/ "./src/app/np/np-grid/np-grid.component.css":
/*!**************************************************!*\
  !*** ./src/app/np/np-grid/np-grid.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    margin-right: 5px;\n}\n\n.upper-btn {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.lower-btn {\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.btn-hollow {\n\tborder: 3px solid #fff;\n\tcolor: #fff;\n}\n\n.btn-hollow:hover,\n.btn-hollow:active {\n\tcolor: #fff;\n\tbackground: #5b5656;\n}\n\n.img-zoom {\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnAvbnAtZ3JpZC9ucC1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztBQUNaOztBQUNBOztDQUVDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ucC9ucC1ncmlkL25wLWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udXBwZXItYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG93ZXItYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYnRuLWhvbGxvdyB7XG5cdGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG5cdGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1ob2xsb3c6aG92ZXIsXG4uYnRuLWhvbGxvdzphY3RpdmUge1xuXHRjb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZDogIzViNTY1Njtcbn1cblxuLmltZy16b29tIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/np/np-grid/np-grid.component.html":
/*!***************************************************!*\
  !*** ./src/app/np/np-grid/np-grid.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-0\" style=\"margin: 3px;\">\n    <div \n        class=\"img-zoom shadow\"\n        (mouseenter) =\"mouseEnter()\"\n        (mouseleave) =\"mouseLeave()\">\n        <img\n            class=\"card-img-top\"\n            [src]=\"park.getThumbnail()\"\n            [@dimZoom]=\"imgState\"\n            alt=\"Card image cap\">\n        <a class=\"btn upper-btn btn-hollow\"\n            role=\"button\"\n            [@shown]=\"btnState\"\n            [routerLink]=\"['/us-national-parks', park.getParkUrl()]\">\n            前往部落格\n        </a>\n        <a class=\"btn lower-btn btn-hollow\"\n            role=\"button\"\n            [@shown]=\"btnState\"\n            [href]=\"park.getNpsUrl()\"\n            target=\"_blank\">\n            前往官方網站\n        </a>\n    </div>\n    <div class=\"card-body\">\n        <h5>{{ park.getNameCh() }}</h5>\n        <h6>{{ park.getNameEn() }}</h6>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/np/np-grid/np-grid.component.ts":
/*!*************************************************!*\
  !*** ./src/app/np/np-grid/np-grid.component.ts ***!
  \*************************************************/
/*! exports provided: NpGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpGridComponent", function() { return NpGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _np_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../np.component */ "./src/app/np/np.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var NpGridComponent = /** @class */ (function () {
    function NpGridComponent() {
    }
    NpGridComponent.prototype.ngOnInit = function () {
        this.imgState = 'normal';
        this.btnState = 'normal';
    };
    NpGridComponent.prototype.mouseEnter = function () {
        this.imgState = 'zoomed';
        this.btnState = 'zoomed';
    };
    NpGridComponent.prototype.mouseLeave = function () {
        this.imgState = 'normal';
        this.btnState = 'normal';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _np_component__WEBPACK_IMPORTED_MODULE_2__["Park"])
    ], NpGridComponent.prototype, "park", void 0);
    NpGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-np-grid',
            template: __webpack_require__(/*! ./np-grid.component.html */ "./src/app/np/np-grid/np-grid.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('dimZoom', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'scale(1)',
                        filter: 'brightness(100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('zoomed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'scale(1.2)',
                        filter: 'brightness(50%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('normal <=> zoomed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(250))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('shown', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('zoomed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('normal <=> zoomed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(250))
                ])
            ],
            styles: [__webpack_require__(/*! ./np-grid.component.css */ "./src/app/np/np-grid/np-grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NpGridComponent);
    return NpGridComponent;
}());



/***/ }),

/***/ "./src/app/np/np-main/np-main.component.css":
/*!**************************************************!*\
  !*** ./src/app/np/np-main/np-main.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-top {\n    padding-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnAvbnAtbWFpbi9ucC1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ucC9ucC1tYWluL25wLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLXRvcCB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/np/np-main/np-main.component.html":
/*!***************************************************!*\
  !*** ./src/app/np/np-main/np-main.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top\">\n  <h2>{{ park.getNameCh() }}</h2>\n  <h4>{{ park.getNameEn() }}</h4>\n  <h2>所在地</h2>\n  <h5 \n    *ngFor=\"let idx of park.getStateNumberArray()\">\n    {{ park.getStateCh()[idx] }}\n    <span>{{ park.getStateEn()[idx] }}</span>\n  </h5>\n  <div *ngIf=\"park.getVisited()\">\n    <app-np-content></app-np-content>\n  </div>\n  <div *ngIf=\"!park.getVisited()\">\n    <p>此頁面內容尚未完全，歡迎先參考官方網站</p>\n    <a class=\"btn btn-primary\" role=\"button\" [href]=\"park.getNpsUrl()\" target=\"_blank\">官方網站</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/np/np-main/np-main.component.ts":
/*!*************************************************!*\
  !*** ./src/app/np/np-main/np-main.component.ts ***!
  \*************************************************/
/*! exports provided: NpMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpMainComponent", function() { return NpMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _np_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../np.component */ "./src/app/np/np.component.ts");




var NpMainComponent = /** @class */ (function () {
    function NpMainComponent(route) {
        this.route = route;
    }
    NpMainComponent.prototype.ngOnInit = function () {
        this.parkUrl = this.route.snapshot.params['name'];
        var parkList = new _np_component__WEBPACK_IMPORTED_MODULE_3__["ParkList"]();
        this.park = parkList.getPark(this.parkUrl);
    };
    NpMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-np-main',
            template: __webpack_require__(/*! ./np-main.component.html */ "./src/app/np/np-main/np-main.component.html"),
            styles: [__webpack_require__(/*! ./np-main.component.css */ "./src/app/np/np-main/np-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NpMainComponent);
    return NpMainComponent;
}());



/***/ }),

/***/ "./src/app/np/np-table/np-table.component.css":
/*!****************************************************!*\
  !*** ./src/app/np/np-table/np-table.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    height: 60px;\n}\n\n.btn-hollow {\n\tborder: 3px solid #5588a3;\n\tcolor: #5588a3;\n}\n\n.btn-hollow:hover,\n.btn-hollow:active {\n\tcolor: #5588a3;\n\tbackground: #e8e8e8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnAvbnAtdGFibGUvbnAtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztBQUNmOztBQUNBOztDQUVDLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ucC9ucC10YWJsZS9ucC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5idG4taG9sbG93IHtcblx0Ym9yZGVyOiAzcHggc29saWQgIzU1ODhhMztcblx0Y29sb3I6ICM1NTg4YTM7XG59XG4uYnRuLWhvbGxvdzpob3Zlcixcbi5idG4taG9sbG93OmFjdGl2ZSB7XG5cdGNvbG9yOiAjNTU4OGEzO1xuXHRiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/np/np-table/np-table.component.html":
/*!*****************************************************!*\
  !*** ./src/app/np/np-table/np-table.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr \n      *ngFor=\"let park of parkList.getParks(sort); let i = index\" \n      [routerLink]=\"['/us-national-parks', park.getParkUrl()]\">\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>\n        <img\n          [src]=\"park.getThumbnail()\"\n          alt=\"Card image cap\">\n      </td>\n      <td>\n        <strong>{{ park.getNameCh() }}</strong>\n        <p>{{ park.getNameEn() }}</p>\n      </td>\n      <td>\n        <span *ngFor=\"let state of park.getStateCh()\">\n          {{ state }}\n        </span>\n      </td>\n      <td>\n        <a class=\"btn btn-hollow\"\n          role=\"button\"\n          [routerLink]=\"['/us-national-parks', park.getParkUrl()]\">\n          前往部落格\n        </a>\n      </td>\n      <td>\n        <a class=\"btn btn-hollow\"\n          role=\"button\"\n          [href]=\"park.getNpsUrl()\"\n          target=\"_blank\">\n          前往官方網站\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/np/np-table/np-table.component.ts":
/*!***************************************************!*\
  !*** ./src/app/np/np-table/np-table.component.ts ***!
  \***************************************************/
/*! exports provided: NpTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpTableComponent", function() { return NpTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _np_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../np.component */ "./src/app/np/np.component.ts");



var NpTableComponent = /** @class */ (function () {
    function NpTableComponent() {
    }
    NpTableComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _np_component__WEBPACK_IMPORTED_MODULE_2__["ParkList"])
    ], NpTableComponent.prototype, "parkList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NpTableComponent.prototype, "sort", void 0);
    NpTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-np-table',
            template: __webpack_require__(/*! ./np-table.component.html */ "./src/app/np/np-table/np-table.component.html"),
            styles: [__webpack_require__(/*! ./np-table.component.css */ "./src/app/np/np-table/np-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NpTableComponent);
    return NpTableComponent;
}());



/***/ }),

/***/ "./src/app/np/np.component.css":
/*!*************************************!*\
  !*** ./src/app/np/np.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin: 2px;\n}\n\n#menu-button {\n    display: flex;\n    margin-bottom: 10px;\n}\n\n.padding-top {\n    padding-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnAvbnAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ucC9ucC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuI21lbnUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wYWRkaW5nLXRvcCB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/np/np.component.html":
/*!**************************************!*\
  !*** ./src/app/np/np.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top\">\n  <h2>總共有{{ parkList.getLength() }}個國家公園</h2>\n  <p>點選不同國家公園查看遊記與旅遊影片</p>\n  <div class=\"menu-button\">\n    <span>顯示方式：</span>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : style == menuStyle.GRID,\n        'btn-secondary' : style != menuStyle.GRID\n      }\"\n      (click)=\"changeMenuStyle(menuStyle.GRID)\"\n    >格狀</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : style == menuStyle.TABLE,\n        'btn-secondary' : style != menuStyle.TABLE\n      }\"\n      (click)=\"changeMenuStyle(menuStyle.TABLE)\"\n    >列表</button>\n  </div>\n  <div class=\"menu-button\">\n    <span>排序方式：</span>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : sort == menuSort.VISITED,\n        'btn-secondary' : sort != menuSort.VISITED\n      }\"\n      (click)=\"changeMenuSort(menuSort.VISITED)\"\n    >已造訪</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : sort == menuSort.STATE,\n        'btn-secondary' : sort != menuSort.STATE\n      }\"\n      (click)=\"changeMenuSort(menuSort.STATE)\"\n    >英文州名</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : sort == menuSort.NAME,\n        'btn-secondary' : sort != menuSort.NAME\n      }\"\n      (click)=\"changeMenuSort(menuSort.NAME)\"\n    >英文公園名</button>\n  </div>\n  <div *ngIf=\"style == menuStyle.GRID\" class=\"row\">\n    <app-np-grid\n      *ngFor=\"let park of parkList.getParks(sort)\"\n      class=\"col-lg-4\"\n      [park]=\"park\"\n    ></app-np-grid>\n  </div>\n  <div *ngIf=\"style == menuStyle.TABLE\" class=\"row\">\n    <app-np-table\n      [parkList]=\"parkList\"\n      [sort]=\"sort\"\n    ></app-np-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/np/np.component.ts":
/*!************************************!*\
  !*** ./src/app/np/np.component.ts ***!
  \************************************/
/*! exports provided: NpComponent, MenuStyle, MenuSort, Park, ParkList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpComponent", function() { return NpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStyle", function() { return MenuStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSort", function() { return MenuSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Park", function() { return Park; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkList", function() { return ParkList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_us_states_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/us-states.json */ "./src/assets/data/us-states.json");
var _assets_data_us_states_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/us-states.json */ "./src/assets/data/us-states.json", 1);
/* harmony import */ var _assets_data_us_parks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/data/us-parks.json */ "./src/assets/data/us-parks.json");
var _assets_data_us_parks_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/us-parks.json */ "./src/assets/data/us-parks.json", 1);




var NpComponent = /** @class */ (function () {
    function NpComponent() {
        this.parkList = new ParkList();
        this.menuStyle = MenuStyle;
        this.menuSort = MenuSort;
    }
    NpComponent.prototype.ngOnInit = function () {
        this.style = this.menuStyle.GRID;
        this.sort = this.menuSort.VISITED;
    };
    NpComponent.prototype.changeMenuStyle = function (clickedStyle) {
        if (clickedStyle == this.menuStyle.TABLE) {
            this.style = this.menuStyle.TABLE;
        }
        else {
            this.style = this.menuStyle.GRID;
        }
    };
    NpComponent.prototype.changeMenuSort = function (clickedSort) {
        if (clickedSort == this.menuSort.VISITED) {
            this.sort = this.menuSort.VISITED;
        }
        else if (clickedSort == this.menuSort.STATE) {
            this.sort = this.menuSort.STATE;
        }
        else {
            this.sort = this.menuSort.NAME;
        }
    };
    NpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-np',
            template: __webpack_require__(/*! ./np.component.html */ "./src/app/np/np.component.html"),
            styles: [__webpack_require__(/*! ./np.component.css */ "./src/app/np/np.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NpComponent);
    return NpComponent;
}());

var MenuStyle;
(function (MenuStyle) {
    MenuStyle[MenuStyle["GRID"] = 0] = "GRID";
    MenuStyle[MenuStyle["TABLE"] = 1] = "TABLE";
})(MenuStyle || (MenuStyle = {}));
var MenuSort;
(function (MenuSort) {
    MenuSort[MenuSort["VISITED"] = 0] = "VISITED";
    MenuSort[MenuSort["NAME"] = 1] = "NAME";
    MenuSort[MenuSort["STATE"] = 2] = "STATE";
})(MenuSort || (MenuSort = {}));
var Park = /** @class */ (function () {
    function Park(parkUrl, ch, en, states, npsUrl, region, visited) {
        if (parkUrl === void 0) { parkUrl = ''; }
        if (ch === void 0) { ch = ''; }
        if (en === void 0) { en = ''; }
        if (states === void 0) { states = []; }
        if (npsUrl === void 0) { npsUrl = ''; }
        if (region === void 0) { region = ''; }
        if (visited === void 0) { visited = false; }
        this.parkUrl = parkUrl;
        this.ch = ch;
        this.en = en;
        this.states = states;
        this.npsUrl = npsUrl;
        this.region = region;
        this.visited = visited;
        this.stateList = new States();
    }
    Park.prototype.getParkUrl = function () {
        return this.parkUrl;
    };
    Park.prototype.getNameShortCh = function () {
        return this.ch;
    };
    Park.prototype.getNameCh = function () {
        return this.ch + '國家公園';
        ;
    };
    Park.prototype.getNameShortEn = function () {
        return this.en;
    };
    Park.prototype.getNameEn = function () {
        if (this.parkUrl == 'american-samoa') {
            return ' National Park of ' + this.en;
        }
        else {
            return this.en + ' National Park';
        }
    };
    Park.prototype.getStateNumberArray = function () {
        return Array.from({ length: this.states.length }, function (v, i) { return i; });
    };
    Park.prototype.getStateAbbre = function () {
        return this.states;
    };
    Park.prototype.getStateCh = function () {
        var _this = this;
        return this.states.map(function (state) {
            if (state == 'VI' || state == 'AS') {
                return _this.stateList.getNameCh(state);
            }
            else {
                return _this.stateList.getNameCh(state) + '州';
            }
        });
    };
    Park.prototype.getStateEn = function () {
        var _this = this;
        return this.states.map(function (state) { return _this.stateList.getNameEn(state); });
    };
    Park.prototype.getNpsUrl = function () {
        return "https://www.nps.gov/" + this.npsUrl + "/index.htm";
    };
    Park.prototype.getVisited = function () {
        return this.visited;
    };
    Park.prototype.getThumbnail = function () {
        if (this.visited) {
            return "/assets/parks/" + this.parkUrl + "/thumbnail.jpg";
        }
        else {
            return "https://media.istockphoto.com/vectors/vector-realistic-isolated-404-not-found-error-lettering-with-glitch-vector-id990584628";
        }
    };
    return Park;
}());

var ParkList = /** @class */ (function () {
    function ParkList() {
        this.usParks = new Map();
        var parks = _assets_data_us_parks_json__WEBPACK_IMPORTED_MODULE_3__;
        for (var park in parks) {
            var parkDetails = new Park(park, parks[park]['ch'], parks[park]['en'], parks[park]['states'], parks[park]['nps_url'], parks[park]['region'], parks[park]['visited']);
            this.usParks.set(park, parkDetails);
        }
    }
    ParkList.prototype.getLength = function () {
        return this.usParks.size;
    };
    ParkList.prototype.getPark = function (park) {
        return this.usParks.get(park);
    };
    ParkList.prototype.getParks = function (sort) {
        function byVisited(a, b) {
            if ((a.getVisited() && b.getVisited()) ||
                (!a.getVisited() && !b.getVisited())) {
                return a.getParkUrl() < b.getParkUrl() ? -1 : 1;
            }
            else {
                return a.getVisited() ? -1 : 1;
            }
        }
        function byEnName(a, b) {
            return a.getParkUrl() < b.getParkUrl() ? -1 : 1;
        }
        function byState(a, b) {
            return a.getStateAbbre()[0] < b.getStateAbbre()[0] ? -1 : 1;
        }
        if (sort == MenuSort.VISITED) {
            return Array.from(this.usParks.values()).sort(byVisited);
        }
        else if (sort == MenuSort.STATE) {
            return Array.from(this.usParks.values()).sort(byState);
        }
        else {
            return Array.from(this.usParks.values()).sort(byEnName);
        }
    };
    return ParkList;
}());

var States = /** @class */ (function () {
    function States() {
        this.usStates = new Map();
        var states = _assets_data_us_states_json__WEBPACK_IMPORTED_MODULE_2__;
        for (var state in states) {
            var stateDetails = {
                abbre: state,
                ch: states[state]['ch'],
                en: states[state]['en']
            };
            this.usStates.set(state, stateDetails);
        }
    }
    States.prototype.getAbbre = function (name) {
        return this.usStates.get(name).abbre;
    };
    States.prototype.getNameCh = function (name) {
        return this.usStates.get(name).ch;
    };
    States.prototype.getNameEn = function (name) {
        return this.usStates.get(name).en;
    };
    return States;
}());


/***/ }),

/***/ "./src/app/pg/pg.component.css":
/*!*************************************!*\
  !*** ./src/app/pg/pg.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-top {\n    padding-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGcvcGcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BnL3BnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZy10b3Age1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pg/pg.component.html":
/*!**************************************!*\
  !*** ./src/app/pg/pg.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top\">\n  <h2>我是一個攝影師</h2>\n</div>"

/***/ }),

/***/ "./src/app/pg/pg.component.ts":
/*!************************************!*\
  !*** ./src/app/pg/pg.component.ts ***!
  \************************************/
/*! exports provided: PgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgComponent", function() { return PgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgComponent = /** @class */ (function () {
    function PgComponent() {
    }
    PgComponent.prototype.ngOnInit = function () {
    };
    PgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pg',
            template: __webpack_require__(/*! ./pg.component.html */ "./src/app/pg/pg.component.html"),
            styles: [__webpack_require__(/*! ./pg.component.css */ "./src/app/pg/pg.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgComponent);
    return PgComponent;
}());



/***/ }),

/***/ "./src/assets/data/us-parks.json":
/*!***************************************!*\
  !*** ./src/assets/data/us-parks.json ***!
  \***************************************/
/*! exports provided: acadia, hot-strings, great-smoky-mountains, shenandoah, isle-royale, mammoth-cave, everglade, virgin-islands, voyageurs, biscayne, dry-tortugas, cuyahoga-valley, congaree, indiana-dunes, gateway-arch, yellowstone, wind-cave, glacier, rocky-mountain, grand-teton, carlsbad-caverns, big-bend, guadalupe-mountains, badlands, theodore-roosevelt, great-sand-dunes, white-sands, mesa-verde, grand-canyon, zion, bryce-canyon, petrified-forest, canyonlands, arches, capitol-reef, great-basin, saguaro, black-canyon-of-the-gunnison, sequoia, yosemite, mount-rainier, crater-lake, lassen-volcanic, olympic, kings-canyon, north-cascades, redwood, channel-islands, death-valley, joshua-tree, pinnacles, haleakala, hawaii-volcanoes, denali, gates-of-the-arctic, glacier-bay, katmai, kenai-fjords, kobuk-valley, lake-clark, wrangell-st-elias, american-samoa, default */
/***/ (function(module) {

module.exports = {"acadia":{"ch":"阿卡迪亞","en":"Acadia","states":["ME"],"nps_url":"acad","region":"East","visited":false},"hot-strings":{"ch":"溫泉","en":"Hot Strings","states":["AR"],"nps_url":"hosp","region":"East","visited":false},"great-smoky-mountains":{"ch":"大煙山","en":"Great Smoky Mountains","states":["TN","NC"],"nps_url":"grsm","region":"East","visited":false},"shenandoah":{"ch":"仙納度","en":"Shenandoah","states":["VA"],"nps_url":"shen","region":"East","visited":false},"isle-royale":{"ch":"皇家島","en":"Isle Royale","states":["MI"],"nps_url":"isro","region":"East","visited":false},"mammoth-cave":{"ch":"猛獁洞","en":"Mammoth Cave","states":["KY"],"nps_url":"maca","region":"East","visited":false},"everglade":{"ch":"大沼澤","en":"Everglade","states":["FL"],"nps_url":"ever","region":"East","visited":false},"virgin-islands":{"ch":"維京群島","en":"Virgin Islands","states":["VI"],"nps_url":"viis","region":"East","visited":false},"voyageurs":{"ch":"探險家","en":"Voyageurs","states":["MN"],"nps_url":"voya","region":"East","visited":false},"biscayne":{"ch":"畢思肯","en":"Biscayne","states":["FL"],"nps_url":"bisc","region":"East","visited":false},"dry-tortugas":{"ch":"干龜","en":"Dry Tortugas","states":["FL"],"nps_url":"drto","region":"East","visited":false},"cuyahoga-valley":{"ch":"庫雅荷加谷","en":"Cuyahoga Valley","states":["OH"],"nps_url":"cuva","region":"East","visited":false},"congaree":{"ch":"坎格瑞","en":"Congaree","states":["SC"],"nps_url":"cong","region":"East","visited":false},"indiana-dunes":{"ch":"印第安納沙丘","en":"Indiana Dunes","states":["IN"],"nps_url":"indu","region":"East","visited":false},"gateway-arch":{"ch":"聖路易斯拱門","en":"Gateway Arch","states":["MO"],"nps_url":"jeff","region":"East","visited":false},"yellowstone":{"ch":"黃石","en":"Yellowstone","states":["WY","MT","ID"],"nps_url":"yell","region":"Mountain","visited":false},"wind-cave":{"ch":"風穴","en":"Wind Cave","states":["SD"],"nps_url":"wica","region":"Mountain","visited":false},"glacier":{"ch":"冰河","en":"Glacier","states":["MT"],"nps_url":"glac","region":"Mountain","visited":true},"rocky-mountain":{"ch":"洛磯山","en":"Rocky Mountain","states":["CO"],"nps_url":"romo","region":"Mountain","visited":false},"grand-teton":{"ch":"大提頓","en":"Grand Teton","states":["WY"],"nps_url":"grte","region":"Mountain","visited":false},"carlsbad-caverns":{"ch":"卡爾斯巴德洞窟","en":"Carlsbad Caverns","states":["NM"],"nps_url":"cave","region":"Mountain","visited":false},"big-bend":{"ch":"大彎曲","en":"Big Bend","states":["TX"],"nps_url":"bibe","region":"Mountain","visited":false},"guadalupe-mountains":{"ch":"瓜達洛普山","en":"Guadalupe Mountains","states":["TX"],"nps_url":"gumo","region":"Mountain","visited":false},"badlands":{"ch":"惡地","en":"Badlands","states":["SD"],"nps_url":"badl","region":"Mountain","visited":false},"theodore-roosevelt":{"ch":"羅斯福","en":"Theodore Roosevelt","states":["ND"],"nps_url":"thro","region":"Mountain","visited":false},"great-sand-dunes":{"ch":"大沙丘","en":"Great Sand Dunes","states":["CO"],"nps_url":"grsa","region":"Mountain","visited":false},"white-sands":{"ch":"白沙","en":"White Sands","states":["NM"],"nps_url":"whsa","region":"Mountain","visited":false},"mesa-verde":{"ch":"梅薩維德","en":"Mesa Verde","states":["CO"],"nps_url":"meve","region":"Southwest","visited":false},"grand-canyon":{"ch":"大峽谷","en":"Grand Canyon","states":["AZ"],"nps_url":"grca","region":"Southwest","visited":false},"zion":{"ch":"錫安","en":"Zion","states":["UT"],"nps_url":"zion","region":"Southwest","visited":false},"bryce-canyon":{"ch":"布萊斯峽谷","en":"Bryce Canyon","states":["UT"],"nps_url":"brca","region":"Southwest","visited":true},"petrified-forest":{"ch":"石化林","en":"Petrified Forest","states":["AZ"],"nps_url":"pefo","region":"Southwest","visited":true},"canyonlands":{"ch":"峽谷地","en":"Canyonlands","states":["UT"],"nps_url":"cany","region":"Southwest","visited":true},"arches":{"ch":"拱門","en":"Arches","states":["UT"],"nps_url":"arch","region":"Southwest","visited":true},"capitol-reef":{"ch":"圓頂礁","en":"Capitol Reef","states":["UT"],"nps_url":"care","region":"Southwest","visited":false},"great-basin":{"ch":"大盆地","en":"Great Basin","states":["NV"],"nps_url":"grba","region":"Southwest","visited":false},"saguaro":{"ch":"巨人柱","en":"Saguaro","states":["AZ"],"nps_url":"sagu","region":"Southwest","visited":true},"black-canyon-of-the-gunnison":{"ch":"甘尼遜黑峽谷","en":"Black Canyon of the Gunnison","states":["CO"],"nps_url":"blca","region":"Southwest","visited":false},"sequoia":{"ch":"紅衫","en":"Sequoia","states":["CA"],"nps_url":"seki","region":"West","visited":false},"yosemite":{"ch":"優勝美地","en":"Yosemite","states":["CA"],"nps_url":"yose","region":"West","visited":false},"mount-rainier":{"ch":"雷尼爾山","en":"Mount Rainier","states":["WA"],"nps_url":"mora","region":"West","visited":false},"crater-lake":{"ch":"火山口湖","en":"Crater Lake","states":["OR"],"nps_url":"crla","region":"West","visited":false},"lassen-volcanic":{"ch":"拉森火山","en":"Lassen Volcanic","states":["CA"],"nps_url":"lavo","region":"West","visited":false},"olympic":{"ch":"奧林匹克","en":"Olympic","states":["WA"],"nps_url":"olym","region":"West","visited":false},"kings-canyon":{"ch":"國王峽谷","en":"Kings Canyon","states":["CA"],"nps_url":"seki","region":"West","visited":false},"north-cascades":{"ch":"北瀑布","en":"North Cascades","states":["WA"],"nps_url":"noca","region":"West","visited":false},"redwood":{"ch":"紅木","en":"Redwood","states":["CA"],"nps_url":"redw","region":"West","visited":false},"channel-islands":{"ch":"海峽群島","en":"Channel Islands","states":["CA"],"nps_url":"chis","region":"West","visited":false},"death-valley":{"ch":"死亡谷","en":"Death Valley","states":["CA","NV"],"nps_url":"deva","region":"West","visited":true},"joshua-tree":{"ch":"約書亞樹","en":"Joshua Tree","states":["CA"],"nps_url":"jotr","region":"West","visited":false},"pinnacles":{"ch":"尖頂","en":"Pinnacles","states":["CA"],"nps_url":"pinn","region":"West","visited":false},"haleakala":{"ch":"哈雷阿卡拉","en":"Haleakalā","states":["HI"],"nps_url":"hale","region":"Pacific","visited":false},"hawaii-volcanoes":{"ch":"夏威夷火山","en":"Hawai'i Volcanoes","states":["HI"],"nps_url":"havo","region":"Pacific","visited":false},"denali":{"ch":"迪納利","en":"Denali","states":["AK"],"nps_url":"dena","region":"Pacific","visited":false},"gates-of-the-arctic":{"ch":"北極門","en":"Gates of the Arctic","states":["AK"],"nps_url":"gaar","region":"Pacific","visited":false},"glacier-bay":{"ch":"冰河灣","en":"Glacier Bay","states":["AK"],"nps_url":"glba","region":"Pacific","visited":false},"katmai":{"ch":"卡特邁","en":"Katmai","states":["AK"],"nps_url":"katm","region":"Pacific","visited":false},"kenai-fjords":{"ch":"基奈峽灣","en":"Kenai Fjords","states":["AK"],"nps_url":"kefj","region":"Pacific","visited":false},"kobuk-valley":{"ch":"科伯克谷","en":"Kobuk Valley","states":["AK"],"nps_url":"kova","region":"Pacific","visited":false},"lake-clark":{"ch":"克拉克湖","en":"Lake Clark","states":["AK"],"nps_url":"lacl","region":"Pacific","visited":false},"wrangell-st-elias":{"ch":"弗蘭格爾-聖伊萊亞斯","en":"Wrangell-St. Elias","states":["AK"],"nps_url":"wrst","region":"Pacific","visited":false},"american-samoa":{"ch":"美屬薩摩亞","en":"American Samoa","states":["AS"],"nps_url":"npsa","region":"Pacific","visited":false}};

/***/ }),

/***/ "./src/assets/data/us-states.json":
/*!****************************************!*\
  !*** ./src/assets/data/us-states.json ***!
  \****************************************/
/*! exports provided: AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, AS, VI, default */
/***/ (function(module) {

module.exports = {"AL":{"ch":"阿拉巴馬","en":"Alabama"},"AK":{"ch":"阿拉斯加","en":"Alaska"},"AZ":{"ch":"亞利桑那","en":"Arizona"},"AR":{"ch":"阿肯色","en":"Arkansas"},"CA":{"ch":"加利福尼亞","en":"California"},"CO":{"ch":"科羅拉多","en":"Colorado"},"CT":{"ch":"康乃狄克","en":"Connecticut"},"DE":{"ch":"德拉瓦","en":"Delaware"},"FL":{"ch":"佛羅里達","en":"Florida"},"GA":{"ch":"喬治亞","en":"Georgia"},"HI":{"ch":"夏威夷","en":"Hawaii"},"ID":{"ch":"愛達荷","en":"Idaho"},"IL":{"ch":"伊利諾","en":"Illinois"},"IN":{"ch":"印第安納","en":"Indiana"},"IA":{"ch":"愛荷華","en":"Iowa"},"KS":{"ch":"堪薩斯","en":"Kansas"},"KY":{"ch":"肯塔基","en":"Kentucky"},"LA":{"ch":"路易斯安那","en":"Louisiana"},"ME":{"ch":"緬因","en":"Maine"},"MD":{"ch":"馬里蘭","en":"Maryland"},"MA":{"ch":"麻薩諸塞","en":"Massachusetts"},"MI":{"ch":"密西根","en":"Michigan"},"MN":{"ch":"明尼蘇達","en":"Minnesota"},"MS":{"ch":"密西西比","en":"Mississippi"},"MO":{"ch":"密蘇里","en":"Missouri"},"MT":{"ch":"蒙大拿","en":"Montana"},"NE":{"ch":"內布拉斯加","en":"Nebraska"},"NV":{"ch":"內華達","en":"Nevada"},"NH":{"ch":"新罕布夏","en":"New Hampshire"},"NJ":{"ch":"新澤西","en":"New Jersey"},"NM":{"ch":"新墨西哥","en":"New Mexico"},"NY":{"ch":"紐約","en":"New York"},"NC":{"ch":"北卡羅來納","en":"North Carolina"},"ND":{"ch":"北達科他","en":"North Dakota"},"OH":{"ch":"俄亥俄","en":"Ohio"},"OK":{"ch":"奧克拉荷馬","en":"Oklahoma"},"OR":{"ch":"奧勒岡","en":"Oregon"},"PA":{"ch":"賓夕法尼亞","en":"Pennsylvania"},"RI":{"ch":"羅德島","en":"Rhode Island"},"SC":{"ch":"南卡羅來納","en":"South Carolina"},"SD":{"ch":"南達科他","en":"South Dakota"},"TN":{"ch":"田納西","en":"Tennessee"},"TX":{"ch":"德克薩斯","en":"Texas"},"UT":{"ch":"猶他","en":"Utah"},"VT":{"ch":"佛蒙特","en":"Vermont"},"VA":{"ch":"維吉尼亞","en":"Virginia"},"WA":{"ch":"華盛頓","en":"Washington"},"WV":{"ch":"西維吉尼亞","en":"West Virginia"},"WI":{"ch":"威斯康辛","en":"Wisconsin"},"WY":{"ch":"懷俄明","en":"Wyoming"},"AS":{"ch":"美屬薩摩亞","en":"American Samoa"},"VI":{"ch":"美屬維京群島","en":"Virgin Islands"}};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Kevin/Documents/Github/travel-kevin-bkh/travel-kevin-bkh/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map