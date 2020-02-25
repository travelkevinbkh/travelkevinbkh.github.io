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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

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
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]
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

module.exports = "#photo{\n    width: 200px;\n    height: 200px;\n    background-image: url(/assets/img/travel-kevin-photo.jpg);\n    background-size: cover;\n    background-position: right center;\n    border-radius: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5REFBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxrQkFBa0I7RUFDcEIiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGhvdG97XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL3RyYXZlbC1rZXZpbi1waG90by5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfSJdfQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWdyaWQvbWVudS1ncmlkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu-grid/menu-grid.component.html":
/*!****************************************************!*\
  !*** ./src/app/menu-grid/menu-grid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"https://media.istockphoto.com/vectors/vector-realistic-isolated-404-not-found-error-lettering-with-glitch-vector-id990584628\" alt=\"Smiley face\" height=\"100\" width=\"100\">\n<h5>{{ nameCh }}</h5>\n<h6>{{ nameEn }}<span>, {{ state }}</span></h6>\n"

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


var MenuGridComponent = /** @class */ (function () {
    function MenuGridComponent() {
    }
    MenuGridComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuGridComponent.prototype, "nameCh", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuGridComponent.prototype, "nameEn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuGridComponent.prototype, "state", void 0);
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

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>總共有{{ parkList.getLength() }}個國家公園</h2>\n  <p>點選不同國家公園查看遊記與旅遊影片</p>\n  <div class=\"row\">\n    <app-menu-grid \n      *ngFor=\"let name of parkList.getNameUrls()\"\n      class=\"col-lg-4\"\n      [routerLink]=\"['/us-national-parks', name]\"\n      [nameCh]=\"parkList.getNameCh(name)\"\n      [nameEn]=\"parkList.getNameEn(name)\"\n      [state]=\"parkList.getState(name)\"\n    ></app-menu-grid>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent, ParkList, StateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkList", function() { return ParkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateList", function() { return StateList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.parkList = new ParkList();
    }
    MenuComponent.prototype.ngOnInit = function () {
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

var ParkList = /** @class */ (function () {
    function ParkList() {
        this.parkList = new Map([
            // East Region
            ['acadia', ['阿卡迪亞', 'Acadia', 'ME']],
            ['hot-strings', ['溫泉', 'Hot Strings', 'AR']],
            ['great-smoky-mountains', ['大煙山', 'Great Smoky Mountains', 'TN/NC']],
            ['shenandoah', ['仙納度', 'Shenandoah', 'VA']],
            ['isle-royale', ['皇家島', 'Isle Royale', 'MI']],
            ['mammoth-cave', ['猛獁洞', 'Mammoth Cave', 'KY']],
            ['everglade', ['大沼澤', 'Everglade', 'FL']],
            ['virgin-islands', ['維京群島', 'Virgin Islands', 'VI']],
            ['voyageurs', ['探險家', 'Voyageurs', 'MN']],
            ['biscayne', ['畢思肯', 'Biscayne', 'FL']],
            ['dry-tortugas', ['干龜', 'Dry Tortugas', 'FL']],
            ['cuyahoga-valley', ['庫雅荷加谷', 'Cuyahoga Valley', 'OH']],
            ['congaree', ['坎格瑞', 'Congaree', 'SC']],
            ['indiana-dunes', ['印第安納沙丘', 'Indiana Dunes', 'IN']],
            ['gateway-arch', ['聖路易斯拱門', 'Gateway Arch', 'MO']],
            // Mountain Region
            ['yellowstone', ['黃石', 'Yellowstone', 'WY/MT/ID']],
            ['wind-cave', ['風穴', 'Wind Cave', 'SD']],
            ['glacier', ['冰河', 'Glacier', 'MT']],
            ['rocky-mountain', ['洛磯山', 'Rocky Mountain', 'CO']],
            ['grand-teton', ['大提頓', 'Grand Teton', 'WY']],
            ['carlsbad-caverns', ['卡爾斯巴德洞窟', 'Carlsbad Caverns', 'NM']],
            ['big-bend', ['大彎曲', 'Big Bend', 'TX']],
            ['guadalupe-mountains', ['瓜達洛普山', 'Guadalupe Mountains', 'TX']],
            ['badlands', ['惡地', 'Badlands', 'SD']],
            ['theodore-roosevelt', ['羅斯福', 'Theodore Roosevelt', 'ND']],
            ['great-sand-dunes', ['大沙丘', 'Great Sand Dunes', 'CO']],
            ['white-sands', ['白沙', 'White Sands', 'NM']],
            // Southwest Region
            ['mesa-verde', ['梅薩維德', 'Mesa Verde', 'CO']],
            ['grande-canyon', ['大峽谷', 'Grande Canyon', 'AZ']],
            ['zion', ['錫安', 'Zion', 'UT']],
            ['bryce-canyon', ['布萊斯峽谷', 'Bryce Canyon', 'UT']],
            ['petrified-forest', ['石化林', 'Petrified Forest', 'AZ']],
            ['canyonlands', ['峽谷地', 'Canyonlands', 'UT']],
            ['arches', ['拱門', 'Arches', 'UT']],
            ['capitol-reef', ['圓頂礁', 'Capitol Reef', 'UT']],
            ['great-basin', ['大盆地', 'Great Basin', 'NV']],
            ['saguaro', ['巨人柱', 'Saguaro', 'AZ']],
            ['black-canyon-of-the-gunnison', ['甘尼遜黑峽谷', 'Black Canyon of the Gunnison', 'CO']],
            // West Region
            ['sequoia', ['紅衫', 'Sequoia', 'CA']],
            ['yosemite', ['優勝美地', 'Yosemite', 'CA']],
            ['mount-rainier', ['雷尼爾山', 'Mount Rainier', 'WA']],
            ['crater-lake', ['火山口湖', 'Crater Lake', 'OR']],
            ['lassen-volcanic', ['拉森火山', 'Lassen Volcanic', 'CA']],
            ['olympic', ['奧林匹克', 'Olympic', 'WA']],
            ['kings-canyon', ['國王峽谷', 'Kings Canyon', 'CA']],
            ['north-cascades', ['北瀑布', 'North Cascades', 'WA']],
            ['redwood', ['紅木', 'Redwood', 'CA']],
            ['channel-islands', ['海峽群島', 'Channel Islands', 'CA']],
            ['death-valley', ['死亡谷', 'Death Valley', 'CA/NV']],
            ['joshua-tree', ['約書亞樹', 'Joshua Tree', 'CA']],
            ['pinnacles', ['尖頂', 'Pinnacles', 'CA']],
            // Pacific Region
            ['haleakala', ['哈雷阿卡拉', 'Haleakalā', 'HI']],
            ['hawaii-volcanoes', ['夏威夷火山', "Hawai'i Volcanoes", 'HI']],
            ['denali', ['迪納利', 'Denali', 'AK']],
            ['gates-of-the-arctic', ['北極門', 'Gates of the Arctic', 'AK']],
            ['glacier-bay', ['冰河灣', 'Glacier Bay', 'AK']],
            ['katmai', ['卡特邁', 'Katmai', 'AK']],
            ['kenai-fjords', ['基奈峽灣', 'Kenai Fjords', 'AK']],
            ['kobuk-valley', ['科伯克谷', 'Kobuk Valley', 'AK']],
            ['lake-clark', ['克拉克湖', 'Lake Clark', 'AK']],
            ['wrangell-st-elias', ['弗蘭格爾-聖伊萊亞斯', 'Wrangell-St. Elias', 'AK']],
            ['american-samoa', ['美屬薩摩亞', 'American Samoa', 'AS']],
        ]);
    }
    ParkList.prototype.getLength = function () {
        return this.parkList.size;
    };
    ParkList.prototype.getNameCh = function (name) {
        return this.parkList.get(name)[0] + '國家公園';
    };
    ParkList.prototype.getNameEn = function (name) {
        if (name == 'american-samoa') {
            return ' National Park of ' + this.parkList.get(name)[1];
        }
        else {
            return this.parkList.get(name)[1] + ' National Park';
        }
    };
    ParkList.prototype.getState = function (name) {
        return this.parkList.get(name)[2];
    };
    ParkList.prototype.getNameUrls = function () {
        return Array.from(this.parkList.keys());
    };
    return ParkList;
}());

var StateList = /** @class */ (function () {
    function StateList() {
        this.stateList = new Map([
            ['AL', ['阿拉巴馬', 'Alabama']],
            ['AK', ['阿拉斯加', 'Alaska']],
            ['AZ', ['亞利桑那', 'Arizona']],
            ['AR', ['阿肯色', 'Arkansas']],
            ['CA', ['加利福尼亞', 'California']],
            ['CO', ['科羅拉多', 'Colorado']],
            ['CT', ['康乃狄克', 'Connecticut']],
            ['DE', ['德拉瓦', 'Delaware']],
            ['FL', ['佛羅里達', 'Florida']],
            ['GA', ['喬治亞', 'Georgia']],
            ['HI', ['夏威夷', 'Hawaii']],
            ['ID', ['愛達荷', 'Idaho']],
            ['IL', ['伊利諾', 'Illinois']],
            ['IN', ['印第安納', 'Indiana']],
            ['IA', ['愛荷華', 'Iowa']],
            ['KS', ['堪薩斯', 'Kansas']],
            ['KY', ['肯塔基', 'Kentucky']],
            ['LA', ['路易斯安那', 'Louisiana']],
            ['ME', ['緬因', 'Maine']],
            ['MD', ['馬里蘭', 'Maryland']],
            ['MA', ['麻薩諸塞', 'Massachusetts']],
            ['MI', ['密西根', 'Michigan']],
            ['MN', ['明尼蘇達', 'Minnesota']],
            ['MS', ['密西西比', 'Mississippi']],
            ['MO', ['密蘇里', 'Missouri']],
            ['MT', ['蒙大拿', 'Montana']],
            ['NE', ['內布拉斯加', 'Nebraska']],
            ['NV', ['內華達', 'Nevada']],
            ['NH', ['新罕布夏', 'New Hampshire']],
            ['NJ', ['新澤西', 'New Jersey']],
            ['NM', ['新墨西哥', 'New Mexico']],
            ['NY', ['紐約', 'New York']],
            ['NC', ['北卡羅來納', 'North Carolina']],
            ['ND', ['北達科他', 'North Dakota']],
            ['OH', ['俄亥俄', 'Ohio']],
            ['OK', ['奧克拉荷馬', 'Oklahoma']],
            ['OR', ['奧勒岡', 'Oregon']],
            ['PA', ['賓夕法尼亞', 'Pennsylvania']],
            ['RI', ['羅德島', 'Rhode Island']],
            ['SC', ['南卡羅來納', 'South Carolina']],
            ['SD', ['南達科他', 'South Dakota']],
            ['TN', ['田納西', 'Tennessee']],
            ['TX', ['德克薩斯', 'Texas']],
            ['UT', ['猶他', 'Utah']],
            ['VT', ['佛蒙特', 'Vermont']],
            ['VA', ['維吉尼亞', 'Virginia']],
            ['WA', ['華盛頓', 'Washington']],
            ['WV', ['西維吉尼亞', 'West Virginia']],
            ['WI', ['威斯康辛', 'Wisconsin']],
            ['WY', ['懷俄明', 'Wyoming']],
            ['AS', ['美屬薩摩亞', 'American Samoa']],
            ['VI', ['美屬維京群島', 'Virgin Islands']],
        ]);
    }
    StateList.prototype.getNameCh = function (name) {
        var _this = this;
        var states = name.split("/");
        return states.map(function (state) { return _this.stateList.get(state)[0]; });
    };
    StateList.prototype.getNameEn = function (name) {
        var _this = this;
        var states = name.split("/");
        return states.map(function (state) { return _this.stateList.get(state)[1]; });
    };
    StateList.prototype.getName = function (name) {
        var _this = this;
        var states = name.split("/");
        return states.map(function (state) { return [_this.stateList.get(state)[0], _this.stateList.get(state)[1]]; });
    };
    return StateList;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">{{ name }}</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngFor=\"let category of categories; let i = index\">\n        <a class=\"nav-link\" [routerLink]=\"href[i]\">{{ category }}</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJucC1tYWluL25wLW1haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/np-main/np-main.component.html":
/*!************************************************!*\
  !*** ./src/app/np-main/np-main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{ np.nameCh }}</h2>\n  <h4>{{ np.nameEn }}</h4>\n  <h2>所在地</h2>\n  <h5 *ngFor=\"let state of np.states\">{{ state[0] }}州<span>{{ state[1] }}</span></h5>\n</div>\n"

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
        this.name = this.route.snapshot.params['name'];
        var parkList = new _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["ParkList"]();
        var stateList = new _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["StateList"]();
        var state = parkList.getState(this.name);
        var stateNames = stateList.getName(state);
        this.np = {
            nameCh: parkList.getNameCh(this.name),
            nameEn: parkList.getNameEn(this.name),
            states: stateNames,
        };
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