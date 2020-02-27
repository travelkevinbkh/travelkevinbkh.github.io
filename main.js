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

module.exports = "<app-navbar></app-navbar>\n<div style=\"display:inline-block; height:100px; width:100%\">My Text Here</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _menu_grid_menu_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-grid/menu-grid.component */ "./src/app/menu-grid/menu-grid.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _np_main_np_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./np-main/np-main.component */ "./src/app/np-main/np-main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-table/menu-table.component */ "./src/app/menu-table/menu-table.component.ts");













var appRoutes = [
    { 'path': '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { 'path': 'us-national-parks', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"] },
    { 'path': 'us-national-parks/:name', component: _np_main_np_main_component__WEBPACK_IMPORTED_MODULE_8__["NpMainComponent"] },
    { 'path': 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] },
    { 'path': '**', redirectTo: '/not-found' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _menu_grid_menu_grid_component__WEBPACK_IMPORTED_MODULE_6__["MenuGridComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _np_main_np_main_component__WEBPACK_IMPORTED_MODULE_8__["NpMainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_12__["MenuTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = "#photo{\n    width: 200px;\n    height: 200px;\n    background-image: url(/assets/img/travel-kevin-photo.jpg);\n    background-size: cover;\n    background-position: right center;\n    border-radius: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bob3Rve1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy90cmF2ZWwta2V2aW4tcGhvdG8uanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>歡迎來到旅遊凱文的家</h4>\n  <div id=\"photo\" class=\"col-md-5\"></div>\n  <p>現在什麼內容都還沒有，敬請包涵。你可以先查看美國國家公園的列表，我的目標是走訪每一個國家公園！</p>\n  <button class=\"btn btn-primary\" [routerLink]=\"['/us-national-parks']\">美國國家公園列表</button>\n</div>\n"

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

/***/ "./src/app/menu-grid/menu-grid.component.css":
/*!***************************************************!*\
  !*** ./src/app/menu-grid/menu-grid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1ncmlkL21lbnUtZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVudS1ncmlkL21lbnUtZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu-grid/menu-grid.component.html":
/*!****************************************************!*\
  !*** ./src/app/menu-grid/menu-grid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"margin: 3px;\">\n    <img class=\"card-img-top\" src=\"https://media.istockphoto.com/vectors/vector-realistic-isolated-404-not-found-error-lettering-with-glitch-vector-id990584628\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n        <h5>{{ park.getNameCh() }}</h5>\n        <h6>{{ park.getNameEn() }}</h6>\n        <p>{{ park.getStateShort() }}</p>\n        <a class=\"btn btn-success\"\n            role=\"button\"\n            [routerLink]=\"['/us-national-parks', park.getParkUrl()]\">\n            前往部落格\n        </a>\n        <a class=\"btn btn-primary\"\n            role=\"button\"\n            [href]=\"park.getNpsUrl()\"\n            target=\"_blank\">\n            前往官方網站\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-grid/menu-grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menu-grid/menu-grid.component.ts ***!
  \**************************************************/
/*! exports provided: MenuGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGridComponent", function() { return MenuGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");



var MenuGridComponent = /** @class */ (function () {
    function MenuGridComponent() {
    }
    MenuGridComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["Park"])
    ], MenuGridComponent.prototype, "park", void 0);
    MenuGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-grid',
            template: __webpack_require__(/*! ./menu-grid.component.html */ "./src/app/menu-grid/menu-grid.component.html"),
            styles: [__webpack_require__(/*! ./menu-grid.component.css */ "./src/app/menu-grid/menu-grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuGridComponent);
    return MenuGridComponent;
}());



/***/ }),

/***/ "./src/app/menu-table/menu-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/menu-table/menu-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtdGFibGUvbWVudS10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu-table/menu-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/menu-table/menu-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">中文名</th>\n      <th scope=\"col\">英文名</th>\n      <th scope=\"col\">所在地</th>\n      <th scope=\"col\">部落格</th>\n      <th scope=\"col\">國家公園官方網站</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr \n      *ngFor=\"let park of parkList.getParks(sort); let i = index\" \n      [routerLink]=\"['/us-national-parks', park.getParkUrl()]\">\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>{{ park.getNameCh() }}</td>\n      <td>{{ park.getNameEn() }}</td>\n      <td>{{ park.getStateShort() }}</td>\n      <td>\n        <a class=\"btn btn-success\"\n          role=\"button\"\n          [routerLink]=\"['/us-national-parks', park.getParkUrl()]\">\n          前往部落格\n        </a>\n      </td>\n      <td>\n        <a class=\"btn btn-primary\"\n          role=\"button\"\n          [href]=\"park.getNpsUrl()\"\n          target=\"_blank\">\n          前往官方網站\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/menu-table/menu-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/menu-table/menu-table.component.ts ***!
  \****************************************************/
/*! exports provided: MenuTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTableComponent", function() { return MenuTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");



var MenuTableComponent = /** @class */ (function () {
    function MenuTableComponent() {
    }
    MenuTableComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["ParkList"])
    ], MenuTableComponent.prototype, "parkList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MenuTableComponent.prototype, "sort", void 0);
    MenuTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-table',
            template: __webpack_require__(/*! ./menu-table.component.html */ "./src/app/menu-table/menu-table.component.html"),
            styles: [__webpack_require__(/*! ./menu-table.component.css */ "./src/app/menu-table/menu-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuTableComponent);
    return MenuTableComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin: 2px;\n}\n\n#menu-button {\n    display: flex;\n    margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4jbWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>總共有{{ parkList.getLength() }}個國家公園</h2>\n  <p>點選不同國家公園查看遊記與旅遊影片</p>\n  <div class=\"menu-button\">\n    <span>顯示方式：</span>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : style == menuStyle.TABLE,\n        'btn-secondary' : style != menuStyle.TABLE\n      }\"\n      (click)=\"changeMenuStyle(menuStyle.TABLE)\"\n    >列表</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : style == menuStyle.GRID,\n        'btn-secondary' : style != menuStyle.GRID\n      }\"\n      (click)=\"changeMenuStyle(menuStyle.GRID)\"\n    >格狀</button>\n  </div>\n  <div class=\"menu-button\">\n    <span>排序方式：</span>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : sort == menuSort.DEFAULT,\n        'btn-secondary' : sort != menuSort.DEFAULT\n      }\"\n      (click)=\"changeMenuSort(menuSort.DEFAULT)\"\n    >預設</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : sort == menuSort.STATE,\n        'btn-secondary' : sort != menuSort.STATE\n      }\"\n      (click)=\"changeMenuSort(menuSort.STATE)\"\n    >按照州</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{\n        'btn-primary' : sort == menuSort.NAME,\n        'btn-secondary' : sort != menuSort.NAME\n      }\"\n      (click)=\"changeMenuSort(menuSort.NAME)\"\n    >按照名</button>\n  </div>\n  <div *ngIf=\"style == menuStyle.GRID\" class=\"row\">\n    <app-menu-grid\n      *ngFor=\"let park of parkList.getParks(sort)\"\n      class=\"col-lg-4\"\n      [routerLink]=\"['/us-national-parks', park.getParkUrl()]\"\n      [park]=\"park\"\n    ></app-menu-grid>\n  </div>\n  <div *ngIf=\"style == menuStyle.TABLE\" class=\"row\">\n    <app-menu-table\n      [parkList]=\"parkList\"\n      [sort]=\"sort\"\n    ></app-menu-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent, MenuStyle, MenuSort, Park, ParkList, States */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStyle", function() { return MenuStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSort", function() { return MenuSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Park", function() { return Park; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkList", function() { return ParkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_us_states_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/us-states.json */ "./src/assets/data/us-states.json");
var _assets_data_us_states_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/us-states.json */ "./src/assets/data/us-states.json", 1);
/* harmony import */ var _assets_data_us_parks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/data/us-parks.json */ "./src/assets/data/us-parks.json");
var _assets_data_us_parks_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/us-parks.json */ "./src/assets/data/us-parks.json", 1);




var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.parkList = new ParkList();
        this.menuStyle = MenuStyle;
        this.menuSort = MenuSort;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.style = this.menuStyle.TABLE;
        this.sort = this.menuSort.DEFAULT;
    };
    MenuComponent.prototype.changeMenuStyle = function (clickedStyle) {
        if (clickedStyle == this.menuStyle.TABLE) {
            this.style = this.menuStyle.TABLE;
        }
        else {
            this.style = this.menuStyle.GRID;
        }
    };
    MenuComponent.prototype.changeMenuSort = function (clickedSort) {
        if (clickedSort == this.menuSort.DEFAULT) {
            this.sort = this.menuSort.DEFAULT;
        }
        else if (clickedSort == this.menuSort.STATE) {
            this.sort = this.menuSort.STATE;
        }
        else {
            this.sort = this.menuSort.NAME;
        }
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());

var MenuStyle;
(function (MenuStyle) {
    MenuStyle[MenuStyle["GRID"] = 0] = "GRID";
    MenuStyle[MenuStyle["TABLE"] = 1] = "TABLE";
})(MenuStyle || (MenuStyle = {}));
var MenuSort;
(function (MenuSort) {
    MenuSort[MenuSort["DEFAULT"] = 0] = "DEFAULT";
    MenuSort[MenuSort["NAME"] = 1] = "NAME";
    MenuSort[MenuSort["STATE"] = 2] = "STATE";
})(MenuSort || (MenuSort = {}));
var Park = /** @class */ (function () {
    function Park(parkUrl, ch, en, states, npsUrl, region) {
        if (parkUrl === void 0) { parkUrl = ''; }
        if (ch === void 0) { ch = ''; }
        if (en === void 0) { en = ''; }
        if (states === void 0) { states = []; }
        if (npsUrl === void 0) { npsUrl = ''; }
        if (region === void 0) { region = ''; }
        this.parkUrl = parkUrl;
        this.ch = ch;
        this.en = en;
        this.states = states;
        this.npsUrl = npsUrl;
        this.region = region;
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
    Park.prototype.getStateShort = function () {
        return this.states;
    };
    Park.prototype.getStateCh = function () {
        return [];
    };
    Park.prototype.getStateEn = function () {
        return [];
    };
    Park.prototype.getNpsUrl = function () {
        return "https://www.nps.gov/" + this.npsUrl + "/index.htm";
    };
    return Park;
}());

var ParkList = /** @class */ (function () {
    function ParkList() {
        this.usParks = new Map();
        var parks = _assets_data_us_parks_json__WEBPACK_IMPORTED_MODULE_3__;
        for (var park in parks) {
            var parkDetails = new Park(park, parks[park]['ch'], parks[park]['en'], parks[park]['states'], parks[park]['nps_url'], parks[park]['region']);
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
        function byEnName(a, b) {
            return a.getParkUrl() < b.getParkUrl() ? -1 : 1;
        }
        function byState(a, b) {
            return a.getStateShort()[0] < b.getStateShort()[0] ? -1 : 1;
        }
        if (sort == MenuSort.DEFAULT) {
            return Array.from(this.usParks.values());
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
                ch: states[state]['ch'],
                en: states[state]['en']
            };
            this.usStates.set(state, stateDetails);
        }
    }
    States.prototype.getNameCh = function (name) {
        return this.usStates.get(name).ch;
    };
    States.prototype.getNameEn = function (name) {
        return this.usStates.get(name).en;
    };
    States.prototype.getNameArray = function (names) {
        var _this = this;
        return names.map(function (state) { return [_this.getNameCh(state), _this.getNameEn(state)]; });
    };
    return States;
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
            'journey',
            'about',
            'contact'
        ];
        this.categories = [
            '首頁',
            '美國國家公園',
            '旅遊紀錄',
            '關於',
            '聯繫方式'
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>找不到你所輸入的網址，這個頁面我可能還沒時間撰寫內容，或你可能打錯網址囉！</h3>\n  <button class=\"btn btn-primary\" [routerLink]=\"['/']\">回到首頁</button>\n</div>\n"

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

/***/ "./src/app/np-main/np-main.component.css":
/*!***********************************************!*\
  !*** ./src/app/np-main/np-main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25wLW1haW4vbnAtbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/np-main/np-main.component.html":
/*!************************************************!*\
  !*** ./src/app/np-main/np-main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{ park.getNameCh() }}</h2>\n  <h4>{{ park.getNameEn() }}</h4>\n  <h2>所在地</h2>\n  <h5 *ngFor=\"let state of stateNames\">{{ state[0] }}州<span>{{ state[1] }}</span></h5>\n  <p>此頁面內容尚未完全，歡迎先參考官方網站</p>\n  <a class=\"btn btn-primary\" role=\"button\" [href]=\"park.getNpsUrl()\" target=\"_blank\">官方網站</a>\n</div>\n"

/***/ }),

/***/ "./src/app/np-main/np-main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/np-main/np-main.component.ts ***!
  \**********************************************/
/*! exports provided: NpMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpMainComponent", function() { return NpMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");




var NpMainComponent = /** @class */ (function () {
    function NpMainComponent(route) {
        this.route = route;
    }
    NpMainComponent.prototype.ngOnInit = function () {
        this.parkUrl = this.route.snapshot.params['name'];
        var parkList = new _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["ParkList"]();
        this.park = parkList.getPark(this.parkUrl);
        var stateList = new _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["States"]();
        var state = this.park.getStateShort();
        this.stateNames = stateList.getNameArray(state);
    };
    NpMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-np-main',
            template: __webpack_require__(/*! ./np-main.component.html */ "./src/app/np-main/np-main.component.html"),
            styles: [__webpack_require__(/*! ./np-main.component.css */ "./src/app/np-main/np-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NpMainComponent);
    return NpMainComponent;
}());



/***/ }),

/***/ "./src/assets/data/us-parks.json":
/*!***************************************!*\
  !*** ./src/assets/data/us-parks.json ***!
  \***************************************/
/*! exports provided: acadia, hot-strings, great-smoky-mountains, shenandoah, isle-royale, mammoth-cave, everglade, virgin-islands, voyageurs, biscayne, dry-tortugas, cuyahoga-valley, congaree, indiana-dunes, gateway-arch, yellowstone, wind-cave, glacier, rocky-mountain, grand-teton, carlsbad-caverns, big-bend, guadalupe-mountains, badlands, theodore-roosevelt, great-sand-dunes, white-sands, mesa-verde, grand-canyon, zion, bryce-canyon, petrified-forest, canyonlands, arches, capitol-reef, great-basin, saguaro, black-canyon-of-the-gunnison, sequoia, yosemite, mount-rainier, crater-lake, lassen-volcanic, olympic, kings-canyon, north-cascades, redwood, channel-islands, death-valley, joshua-tree, pinnacles, haleakala, hawaii-volcanoes, denali, gates-of-the-arctic, glacier-bay, katmai, kenai-fjords, kobuk-valley, lake-clark, wrangell-st-elias, american-samoa, default */
/***/ (function(module) {

module.exports = {"acadia":{"ch":"阿卡迪亞","en":"Acadia","states":["ME"],"nps_url":"acad","region":"East"},"hot-strings":{"ch":"溫泉","en":"Hot Strings","states":["AR"],"nps_url":"hosp","region":"East"},"great-smoky-mountains":{"ch":"大煙山","en":"Great Smoky Mountains","states":["TN","NC"],"nps_url":"grsm","region":"East"},"shenandoah":{"ch":"仙納度","en":"Shenandoah","states":["VA"],"nps_url":"shen","region":"East"},"isle-royale":{"ch":"皇家島","en":"Isle Royale","states":["MI"],"nps_url":"isro","region":"East"},"mammoth-cave":{"ch":"猛獁洞","en":"Mammoth Cave","states":["KY"],"nps_url":"maca","region":"East"},"everglade":{"ch":"大沼澤","en":"Everglade","states":["FL"],"nps_url":"ever","region":"East"},"virgin-islands":{"ch":"維京群島","en":"Virgin Islands","states":["VI"],"nps_url":"viis","region":"East"},"voyageurs":{"ch":"探險家","en":"Voyageurs","states":["MN"],"nps_url":"voya","region":"East"},"biscayne":{"ch":"畢思肯","en":"Biscayne","states":["FL"],"nps_url":"bisc","region":"East"},"dry-tortugas":{"ch":"干龜","en":"Dry Tortugas","states":["FL"],"nps_url":"drto","region":"East"},"cuyahoga-valley":{"ch":"庫雅荷加谷","en":"Cuyahoga Valley","states":["OH"],"nps_url":"cuva","region":"East"},"congaree":{"ch":"坎格瑞","en":"Congaree","states":["SC"],"nps_url":"cong","region":"East"},"indiana-dunes":{"ch":"印第安納沙丘","en":"Indiana Dunes","states":["IN"],"nps_url":"indu","region":"East"},"gateway-arch":{"ch":"聖路易斯拱門","en":"Gateway Arch","states":["MO"],"nps_url":"jeff","region":"East"},"yellowstone":{"ch":"黃石","en":"Yellowstone","states":["WY","MT","ID"],"nps_url":"yell","region":"Mountain"},"wind-cave":{"ch":"風穴","en":"Wind Cave","states":["SD"],"nps_url":"wica","region":"Mountain"},"glacier":{"ch":"冰河","en":"Glacier","states":["MT"],"nps_url":"glac","region":"Mountain"},"rocky-mountain":{"ch":"洛磯山","en":"Rocky Mountain","states":["CO"],"nps_url":"romo","region":"Mountain"},"grand-teton":{"ch":"大提頓","en":"Grand Teton","states":["WY"],"nps_url":"grte","region":"Mountain"},"carlsbad-caverns":{"ch":"卡爾斯巴德洞窟","en":"Carlsbad Caverns","states":["NM"],"nps_url":"cave","region":"Mountain"},"big-bend":{"ch":"大彎曲","en":"Big Bend","states":["TX"],"nps_url":"bibe","region":"Mountain"},"guadalupe-mountains":{"ch":"瓜達洛普山","en":"Guadalupe Mountains","states":["TX"],"nps_url":"gumo","region":"Mountain"},"badlands":{"ch":"惡地","en":"Badlands","states":["SD"],"nps_url":"badl","region":"Mountain"},"theodore-roosevelt":{"ch":"羅斯福","en":"Theodore Roosevelt","states":["ND"],"nps_url":"thro","region":"Mountain"},"great-sand-dunes":{"ch":"大沙丘","en":"Great Sand Dunes","states":["CO"],"nps_url":"grsa","region":"Mountain"},"white-sands":{"ch":"白沙","en":"White Sands","states":["NM"],"nps_url":"whsa","region":"Mountain"},"mesa-verde":{"ch":"梅薩維德","en":"Mesa Verde","states":["CO"],"nps_url":"meve","region":"Southwest"},"grand-canyon":{"ch":"大峽谷","en":"Grand Canyon","states":["AZ"],"nps_url":"grca","region":"Southwest"},"zion":{"ch":"錫安","en":"Zion","states":["UT"],"nps_url":"zion","region":"Southwest"},"bryce-canyon":{"ch":"布萊斯峽谷","en":"Bryce Canyon","states":["UT"],"nps_url":"brca","region":"Southwest"},"petrified-forest":{"ch":"石化林","en":"Petrified Forest","states":["AZ"],"nps_url":"pefo","region":"Southwest"},"canyonlands":{"ch":"峽谷地","en":"Canyonlands","states":["UT"],"nps_url":"cany","region":"Southwest"},"arches":{"ch":"拱門","en":"Arches","states":["UT"],"nps_url":"arch","region":"Southwest"},"capitol-reef":{"ch":"圓頂礁","en":"Capitol Reef","states":["UT"],"nps_url":"care","region":"Southwest"},"great-basin":{"ch":"大盆地","en":"Great Basin","states":["NV"],"nps_url":"grba","region":"Southwest"},"saguaro":{"ch":"巨人柱","en":"Saguaro","states":["AZ"],"nps_url":"sagu","region":"Southwest"},"black-canyon-of-the-gunnison":{"ch":"甘尼遜黑峽谷","en":"Black Canyon of the Gunnison","states":["CO"],"nps_url":"blca","region":"Southwest"},"sequoia":{"ch":"紅衫","en":"Sequoia","states":["CA"],"nps_url":"seki","region":"West"},"yosemite":{"ch":"優勝美地","en":"Yosemite","states":["CA"],"nps_url":"yose","region":"West"},"mount-rainier":{"ch":"雷尼爾山","en":"Mount Rainier","states":["WA"],"nps_url":"mora","region":"West"},"crater-lake":{"ch":"火山口湖","en":"Crater Lake","states":["OR"],"nps_url":"crla","region":"West"},"lassen-volcanic":{"ch":"拉森火山","en":"Lassen Volcanic","states":["CA"],"nps_url":"lavo","region":"West"},"olympic":{"ch":"奧林匹克","en":"Olympic","states":["WA"],"nps_url":"olym","region":"West"},"kings-canyon":{"ch":"國王峽谷","en":"Kings Canyon","states":["CA"],"nps_url":"seki","region":"West"},"north-cascades":{"ch":"北瀑布","en":"North Cascades","states":["WA"],"nps_url":"noca","region":"West"},"redwood":{"ch":"紅木","en":"Redwood","states":["CA"],"nps_url":"redw","region":"West"},"channel-islands":{"ch":"海峽群島","en":"Channel Islands","states":["CA"],"nps_url":"chis","region":"West"},"death-valley":{"ch":"死亡谷","en":"Death Valley","states":["CA","NV"],"nps_url":"deva","region":"West"},"joshua-tree":{"ch":"約書亞樹","en":"Joshua Tree","states":["CA"],"nps_url":"jotr","region":"West"},"pinnacles":{"ch":"尖頂","en":"Pinnacles","states":["CA"],"nps_url":"pinn","region":"West"},"haleakala":{"ch":"哈雷阿卡拉","en":"Haleakalā","states":["HI"],"nps_url":"hale","region":"Pacific"},"hawaii-volcanoes":{"ch":"夏威夷火山","en":"Hawai'i Volcanoes","states":["HI"],"nps_url":"havo","region":"Pacific"},"denali":{"ch":"迪納利","en":"Denali","states":["AK"],"nps_url":"dena","region":"Pacific"},"gates-of-the-arctic":{"ch":"北極門","en":"Gates of the Arctic","states":["AK"],"nps_url":"gaar","region":"Pacific"},"glacier-bay":{"ch":"冰河灣","en":"Glacier Bay","states":["AK"],"nps_url":"glba","region":"Pacific"},"katmai":{"ch":"卡特邁","en":"Katmai","states":["AK"],"nps_url":"katm","region":"Pacific"},"kenai-fjords":{"ch":"基奈峽灣","en":"Kenai Fjords","states":["AK"],"nps_url":"kefj","region":"Pacific"},"kobuk-valley":{"ch":"科伯克谷","en":"Kobuk Valley","states":["AK"],"nps_url":"kova","region":"Pacific"},"lake-clark":{"ch":"克拉克湖","en":"Lake Clark","states":["AK"],"nps_url":"lacl","region":"Pacific"},"wrangell-st-elias":{"ch":"弗蘭格爾-聖伊萊亞斯","en":"Wrangell-St. Elias","states":["AK"],"nps_url":"wrst","region":"Pacific"},"american-samoa":{"ch":"美屬薩摩亞","en":"American Samoa","states":["AS"],"nps_url":"npsa","region":"Pacific"}};

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