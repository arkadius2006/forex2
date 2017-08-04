webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n.about-card {\n  width: 600px;\n}\n*/\n\n.about-header-image {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/dollaricon.png") + ");\n  background-size: cover;\n}\n\na {\n  color: darkorange;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"about-card\">\n\n  <md-card-header>\n    <div md-card-avatar class=\"about-header-image\"></div>\n    <md-card-title>FX workbench</md-card-title>\n    <md-card-subtitle>Single page application featuring FX trading user interface</md-card-subtitle>\n  </md-card-header>\n\n  <md-card-content>\n\n    <p>\n      Uses live market data feed for major\n      currency pairs (updated every 1 sec). Buy/sell functionality is provided for demo purposes only, no actual orders\n      are sent to exchange.\n    </p>\n\n    <p>\n      Provides position & PnL keeping as well as transaction history. No backend, state is not persisted when page is\n      reloaded.\n    </p>\n\n    <p>\n      This application is developed on <a href=\"https://angular.io\">Angular 2</a>.\n    </p>\n  </md-card-content>\n\n  <md-card-actions>\n    <a href=\"https://github.com/arkadius2006/forex2\">View source on GitHib</a>\n  </md-card-actions>\n</md-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-about-component',
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container>\n  <input mdInput #inputField placeholder=\"Account\" [mdAutocomplete]=\"auto\" [formControl]=\"accountCtrl\">\n</md-input-container>\n\n<md-autocomplete #auto=\"mdAutocomplete\">\n  <md-option *ngFor=\"let account of filteredAccounts | async\" [value]=\"account\">\n    {{ account }}\n  </md-option>\n</md-autocomplete>\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent() {
        var _this = this;
        this.accounts = ACCOUNTS;
        this.accountCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]();
        this.filteredAccounts = this.accountCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterAccounts(name); });
    }
    AccountComponent.prototype.filterAccounts = function (val) {
        if (val) {
            val.trim().toLowerCase();
            return this.accounts.filter(function (s) { return s.toLowerCase()
                .trim()
                .replace('/', '')
                .indexOf(val.trim().toLowerCase()) >= 0; });
        }
        else {
            return this.accounts;
        }
    };
    AccountComponent.prototype.get = function () {
        return this.inputField.nativeElement.value;
    };
    return AccountComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputField'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AccountComponent.prototype, "inputField", void 0);
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-account-component',
        template: __webpack_require__("../../../../../src/app/account/account.component.html"),
    }),
    __metadata("design:paramtypes", [])
], AccountComponent);

var ACCOUNTS = [
    'Arkady/UBS',
    'Arkady/DB',
    'Arkady/JPM',
    'Arkady/GS'
];
var _a;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\n  <md-card-content>\n\n\n    <md-tab-group dynamicHeight=\"true\">\n\n      <md-tab>\n\n        <ng-template md-tab-label>\n          Market data\n        </ng-template>\n\n        <app-market-component></app-market-component>\n\n      </md-tab>\n\n      <md-tab>\n\n        <ng-template md-tab-label>\n          Order\n        </ng-template>\n\n        <app-order-component></app-order-component>\n\n      </md-tab>\n\n      <md-tab>\n        <ng-template md-tab-label>\n          Position and PnL\n        </ng-template>\n\n        <app-position-component></app-position-component>\n\n      </md-tab>\n\n      <md-tab>\n        <ng-template md-tab-label>\n          Trade capture\n        </ng-template>\n\n        <app-trade-component></app-trade-component>\n\n      </md-tab>\n\n      <md-tab>\n        <ng-template md-tab-label>\n          About\n        </ng-template>\n\n        <app-about-component></app-about-component>\n\n      </md-tab>\n    </md-tab-group>\n\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_market_component__ = __webpack_require__("../../../../../src/app/market/market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_position_component__ = __webpack_require__("../../../../../src/app/position/position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trade_trade_component__ = __webpack_require__("../../../../../src/app/trade/trade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__currency_pair_currency_pair_component__ = __webpack_require__("../../../../../src/app/currency-pair/currency-pair.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__finance_domain_TradeManager__ = __webpack_require__("../../../../../src/app/finance-domain/TradeManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__finance_domain_PositionManager__ = __webpack_require__("../../../../../src/app/finance-domain/PositionManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__finance_domain_RandomMarketManager__ = __webpack_require__("../../../../../src/app/finance-domain/RandomMarketManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__finance_domain_ForgeMarketManager__ = __webpack_require__("../../../../../src/app/finance-domain/ForgeMarketManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__finance_domain_MockExchange__ = __webpack_require__("../../../../../src/app/finance-domain/MockExchange.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// todo rename this file to forex module
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__market_market_component__["a" /* MarketComponent */], __WEBPACK_IMPORTED_MODULE_5__position_position_component__["a" /* PositionComponent */], __WEBPACK_IMPORTED_MODULE_6__trade_trade_component__["a" /* TradeComponent */], __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_12__account_account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_13__currency_pair_currency_pair_component__["a" /* CurrencyPairComponent */], __WEBPACK_IMPORTED_MODULE_19__order_order_component__["a" /* OrderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["D" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* StyleModule */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["D" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* StyleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__finance_domain_TradeManager__["a" /* TradeManager */], __WEBPACK_IMPORTED_MODULE_15__finance_domain_PositionManager__["a" /* PositionManager */], __WEBPACK_IMPORTED_MODULE_16__finance_domain_RandomMarketManager__["a" /* RandomMarketManager */], __WEBPACK_IMPORTED_MODULE_17__finance_domain_ForgeMarketManager__["a" /* ForgeMarketManager */], __WEBPACK_IMPORTED_MODULE_18__finance_domain_MockExchange__["a" /* MockExchange */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/currency-pair/currency-pair.component.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container>\n  <input mdInput #inputField placeholder=\"Currency pair\" [mdAutocomplete]=\"auto\" [formControl]=\"currencyPairCtrl\">\n</md-input-container>\n\n<md-autocomplete #auto=\"mdAutocomplete\">\n  <md-option *ngFor=\"let currencyPair of filteredCurrencyPairs | async\" [value]=\"currencyPair\">\n    {{ currencyPair }}\n  </md-option>\n</md-autocomplete>\n"

/***/ }),

/***/ "../../../../../src/app/currency-pair/currency-pair.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finance_domain_CurrencyPair__ = __webpack_require__("../../../../../src/app/finance-domain/CurrencyPair.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPairComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrencyPairComponent = (function () {
    function CurrencyPairComponent() {
        var _this = this;
        this.currencyPairs = __WEBPACK_IMPORTED_MODULE_4__finance_domain_CurrencyPair__["b" /* MAJOR_CURRENCY_PAIRS */];
        this.currencyPairCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]();
        this.filteredCurrencyPairs = this.currencyPairCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterCurrencyPairs(name); });
    }
    CurrencyPairComponent.prototype.filterCurrencyPairs = function (name) {
        console.log(name);
        return this.currencyPairs;
    };
    CurrencyPairComponent.prototype.get = function () {
        return this.inputField.nativeElement.value;
    };
    return CurrencyPairComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputField'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], CurrencyPairComponent.prototype, "inputField", void 0);
CurrencyPairComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-currency-pair',
        template: __webpack_require__("../../../../../src/app/currency-pair/currency-pair.component.html"),
    }),
    __metadata("design:paramtypes", [])
], CurrencyPairComponent);

var _a;
//# sourceMappingURL=currency-pair.component.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/Currency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JPY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GBP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AUD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NZD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CAD; });
/* unused harmony export MAJOR_CURRENCIES */

var Currency = (function () {
    function Currency(symbol) {
        this.symbol = symbol;
    }
    Currency.lookup = function (name) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(name)) {
            return null;
        }
        name = name.trim().toLowerCase().replace('/', '');
        var i;
        var c;
        for (i = 0; i < MAJOR_CURRENCIES.length; i += 1) {
            c = MAJOR_CURRENCIES[i];
            if (c.toString().trim().toLowerCase().replace('/', '') === name) {
                return c;
            }
        }
        return null;
    };
    Currency.prototype.toString = function () {
        return this.symbol;
    };
    return Currency;
}());

// todo move inside class
var USD = new Currency('USD');
var JPY = new Currency('JPY');
var EUR = new Currency('EUR');
var GBP = new Currency('GBP');
var CHF = new Currency('CHF');
var AUD = new Currency('AUD');
var NZD = new Currency('NZD');
var CAD = new Currency('CAD');
var MAJOR_CURRENCIES = [USD, JPY, EUR, GBP, CHF, AUD, NZD, CAD];
//# sourceMappingURL=Currency.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/CurrencyPair.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Currency__ = __webpack_require__("../../../../../src/app/finance-domain/Currency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPair; });
/* unused harmony export USDJPY */
/* unused harmony export EURUSD */
/* unused harmony export GBPUSD */
/* unused harmony export USDCHF */
/* unused harmony export EURGBP */
/* unused harmony export EURJPY */
/* unused harmony export EURCHF */
/* unused harmony export AUDUSD */
/* unused harmony export USDCAD */
/* unused harmony export NZDUSD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAJOR_CURRENCY_PAIRS; });


var CurrencyPair = (function () {
    function CurrencyPair(baseCurrency, counterCurrency) {
        this.baseCurrency = baseCurrency;
        this.counterCurrency = counterCurrency;
    }
    CurrencyPair.lookup = function (s) {
        if (s) {
            var i = void 0;
            var cp = void 0;
            for (i = 0; i < MAJOR_CURRENCY_PAIRS.length; i += 1) {
                cp = MAJOR_CURRENCY_PAIRS[i];
                if (cp.toString().toLowerCase().replace('/', '') === s.toLowerCase().replace('/', '')) {
                    return cp;
                }
            }
            return null;
        }
        else {
            return null;
        }
    };
    CurrencyPair.lookupByCurrencies = function (c1, c2) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(c1) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(c2)) {
            return null;
        }
        var i;
        var cp;
        for (i = 0; i < MAJOR_CURRENCY_PAIRS.length; i += 1) {
            cp = MAJOR_CURRENCY_PAIRS[i];
            if (cp.getBaseCurrency() === c1 && cp.getCounterCurrency() === c2) {
                return cp;
            }
        }
        return null;
    };
    CurrencyPair.prototype.toString = function () {
        return this.baseCurrency + '/' + this.counterCurrency;
    };
    CurrencyPair.prototype.getBaseCurrency = function () {
        return this.baseCurrency;
    };
    CurrencyPair.prototype.getCounterCurrency = function () {
        return this.counterCurrency;
    };
    return CurrencyPair;
}());

// major currency pairs
var USDJPY = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */], __WEBPACK_IMPORTED_MODULE_0__Currency__["c" /* JPY */]);
var EURUSD = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["d" /* EUR */], __WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */]);
var GBPUSD = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["e" /* GBP */], __WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */]);
var USDCHF = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */], __WEBPACK_IMPORTED_MODULE_0__Currency__["f" /* CHF */]);
var EURGBP = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["d" /* EUR */], __WEBPACK_IMPORTED_MODULE_0__Currency__["e" /* GBP */]);
var EURJPY = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["d" /* EUR */], __WEBPACK_IMPORTED_MODULE_0__Currency__["c" /* JPY */]);
var EURCHF = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["d" /* EUR */], __WEBPACK_IMPORTED_MODULE_0__Currency__["f" /* CHF */]);
var AUDUSD = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["g" /* AUD */], __WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */]);
var USDCAD = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */], __WEBPACK_IMPORTED_MODULE_0__Currency__["h" /* CAD */]);
var NZDUSD = new CurrencyPair(__WEBPACK_IMPORTED_MODULE_0__Currency__["i" /* NZD */], __WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */]);
var MAJOR_CURRENCY_PAIRS = [USDJPY, EURUSD, GBPUSD, USDCHF, EURGBP, EURJPY, EURCHF, AUDUSD, USDCAD, NZDUSD];
//# sourceMappingURL=CurrencyPair.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/ForgeMarketManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Currency__ = __webpack_require__("../../../../../src/app/finance-domain/Currency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CurrencyPair__ = __webpack_require__("../../../../../src/app/finance-domain/CurrencyPair.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgeMarketManager; });
/* unused harmony export secret */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgeMarketManager = (function () {
    function ForgeMarketManager(http) {
        this.http = http;
        this.marketChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.forgeResponseObserver = new ForgeResponseObserver(this);
        this.queryForge();
    }
    ForgeMarketManager.prototype.asMarketObservable = function () {
        return this.marketChange.asObservable();
    };
    ForgeMarketManager.prototype.getMarket = function () {
        return this.marketChange.getValue();
    };
    ForgeMarketManager.prototype.getQuote = function (currencyPair) {
        var quotes = this.marketChange.getValue();
        var i;
        var q;
        for (i = 0; i < quotes.length; i += 1) {
            q = quotes[i];
            if (currencyPair === q.currencyPair) {
                return q;
            }
        }
        return null;
    };
    ForgeMarketManager.prototype.queryForge = function () {
        console.log('Sending request to forge');
        this.http.get(this.getQuotesUrl()).subscribe(this.forgeResponseObserver);
    };
    ForgeMarketManager.prototype.processResponse = function (response) {
        var _this = this;
        console.log('Received response from forge: ' + response.toString());
        if (response.ok) {
            this.processOkResponse(response);
        }
        else {
            console.error('Error getting data from forge: ' + response.status + ', ' + response.statusText);
        }
        // ask for more
        setTimeout(function () { return _this.queryForge(); }, 1000);
    };
    ForgeMarketManager.prototype.processOkResponse = function (response) {
        var json = response.json();
        var quotes = this.parseJson(json);
        this.marketChange.next(quotes);
    };
    ForgeMarketManager.prototype.parseJson = function (json) {
        var quotes = [];
        var i;
        var item;
        for (i = 0; i < json.length; i += 1) {
            item = json[i];
            if (item) {
                var quote = this.parseQuote(item);
                if (quote) {
                    quotes.push(quote);
                }
            }
        }
        return quotes;
    };
    ForgeMarketManager.prototype.parseQuote = function (item) {
        var symbol = item['symbol'];
        var price = item['price'];
        if (symbol && price) {
            var ccy1 = __WEBPACK_IMPORTED_MODULE_3__Currency__["a" /* Currency */].lookup(symbol.substr(0, 3));
            var ccy2 = __WEBPACK_IMPORTED_MODULE_3__Currency__["a" /* Currency */].lookup(symbol.substr(3, 3));
            var theTimestamp = new Date();
            return {
                timestamp: theTimestamp,
                currencyPair: __WEBPACK_IMPORTED_MODULE_4__CurrencyPair__["a" /* CurrencyPair */].lookupByCurrencies(ccy1, ccy2),
                bid: price,
                ask: price
            };
        }
        else {
            return null;
        }
    };
    ForgeMarketManager.prototype.getQuotesUrl = function () {
        var sum = '';
        var i;
        var cp;
        var count = __WEBPACK_IMPORTED_MODULE_4__CurrencyPair__["b" /* MAJOR_CURRENCY_PAIRS */].length;
        for (i = 0; i < count; i += 1) {
            cp = __WEBPACK_IMPORTED_MODULE_4__CurrencyPair__["b" /* MAJOR_CURRENCY_PAIRS */][i];
            sum += cp.getBaseCurrency().toString() + cp.getCounterCurrency().toString();
            if (i < count - 1) {
                sum += ',';
            }
        }
        return 'https://forex.1forge.com/1.0.2/quotes?pairs=' + sum + '&api_key=' + secret['1forge.com']['api_key'];
    };
    return ForgeMarketManager;
}());
ForgeMarketManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ForgeMarketManager);

var ForgeResponseObserver = (function () {
    function ForgeResponseObserver(forgeMarketManager) {
        this.forgeMarketManager = forgeMarketManager;
        this.next = function (value) {
            forgeMarketManager.processResponse(value);
        };
    }
    return ForgeResponseObserver;
}());
// todo move to config and hide
var secret = {
    '1forge.com': {
        'api_key': 'vO3LdQiJcUjzle3R8WcYj2I8v7QYMnPf'
    }
};
var _a;
//# sourceMappingURL=ForgeMarketManager.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/MockExchange.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TradeStatus__ = __webpack_require__("../../../../../src/app/finance-domain/TradeStatus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Side__ = __webpack_require__("../../../../../src/app/finance-domain/Side.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ForgeMarketManager__ = __webpack_require__("../../../../../src/app/finance-domain/ForgeMarketManager.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockExchange; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MockExchange = (function () {
    function MockExchange(marketManager) {
        this.marketManager = marketManager;
        this.tradeChange = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    MockExchange.prototype.submit = function (order) {
        var trade = this.execute(order);
        if (trade) {
            this.tradeChange.next(trade);
        }
        else {
            console.log('Exchange cannot execute order ' + JSON.stringify(order));
        }
    };
    MockExchange.prototype.asTradeObservable = function () {
        return this.tradeChange.asObservable();
    };
    MockExchange.prototype.execute = function (order) {
        console.log(JSON.stringify(order));
        var quote = this.marketManager.getQuote(order.currencyPair);
        var rate;
        if (quote) {
            switch (order.side) {
                case __WEBPACK_IMPORTED_MODULE_2__Side__["a" /* BUY */]: {
                    rate = quote.bid;
                    break;
                }
                case __WEBPACK_IMPORTED_MODULE_2__Side__["b" /* SELL */]: {
                    rate = quote.ask;
                    break;
                }
                default: {
                    console.error('Unknown side: ' + order.side);
                    return null;
                }
            }
            return {
                currencyPair: order.currencyPair,
                quantity: order.quantity,
                side: order.side,
                account: order.account,
                tradeDate: new Date(),
                settlementDate: new Date(),
                status: __WEBPACK_IMPORTED_MODULE_1__TradeStatus__["a" /* CAPTURED */],
                rate: rate
            };
        }
        return null;
    };
    return MockExchange;
}());
MockExchange = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ForgeMarketManager__["a" /* ForgeMarketManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ForgeMarketManager__["a" /* ForgeMarketManager */]) === "function" && _a || Object])
], MockExchange);

var _a;
//# sourceMappingURL=MockExchange.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/PositionManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Currency__ = __webpack_require__("../../../../../src/app/finance-domain/Currency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TradeManager__ = __webpack_require__("../../../../../src/app/finance-domain/TradeManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Side__ = __webpack_require__("../../../../../src/app/finance-domain/Side.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ForgeMarketManager__ = __webpack_require__("../../../../../src/app/finance-domain/ForgeMarketManager.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PositionManager = (function () {
    function PositionManager(marketManager, tradeManager) {
        this.marketManager = marketManager;
        this.positionChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.pnlChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.positions = [];
        this.pnl = 0;
        this.latestQuotes = [];
        tradeManager.asTradeObservable().subscribe(new PositionKeeper(this));
        marketManager.asMarketObservable().subscribe(new PnlKeeper(this));
    }
    PositionManager.prototype.getPositions = function () {
        return this.positions;
    };
    PositionManager.prototype.getPnl = function () {
        return this.pnl;
    };
    PositionManager.prototype.asPositionObservable = function () {
        return this.positionChange.asObservable();
    };
    PositionManager.prototype.asPnlObservable = function () {
        return this.pnlChange.asObservable();
    };
    PositionManager.prototype.processTrades = function (trades) {
        this.positions = [];
        this.pnl = 0;
        var i;
        for (i = 0; i < trades.length; i += 1) {
            this.processTrade(trades[i]);
        }
        this.triggerPositionChanged();
        this.triggerPnlChanged();
    };
    PositionManager.prototype.processTrade = function (t) {
        var baseCurrency = t.currencyPair.getBaseCurrency();
        var counterCurrency = t.currencyPair.getCounterCurrency();
        var baseAmount;
        var counterAmount;
        switch (t.side) {
            case __WEBPACK_IMPORTED_MODULE_4__Side__["a" /* BUY */]: {
                baseAmount = t.quantity;
                counterAmount = -t.rate * baseAmount;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_4__Side__["b" /* SELL */]: {
                baseAmount = -t.quantity;
                counterAmount = t.rate * baseAmount;
                break;
            }
            default: {
                console.error('Unknown side: ' + t.side);
                return;
            }
        }
        this.adjust(t.account, baseCurrency, baseAmount);
        this.adjust(t.account, counterCurrency, counterAmount);
    };
    PositionManager.prototype.adjust = function (account, currency, amount) {
        var pos = this.get(account, currency);
        pos.quantity += amount;
        this.pnl += this.computePnl(currency, amount);
    };
    PositionManager.prototype.get = function (account, currency) {
        var i;
        var pos;
        for (i = 0; i < this.positions.length; i += 1) {
            pos = this.positions[i];
            if (pos.currency === currency && pos.account === account) {
                return pos;
            }
        }
        // not found
        pos = {
            currency: currency,
            account: account,
            quantity: 0
        };
        this.positions.push(pos);
        return pos;
    };
    PositionManager.prototype.processMarketData = function (quotes) {
        this.latestQuotes = quotes;
        // update pnl
        this.pnl = 0;
        var i;
        var pos;
        for (i = 0; i < this.positions.length; i += 1) {
            pos = this.positions[i];
            this.pnl += this.computePnl(pos.currency, pos.quantity);
        }
        this.triggerPnlChanged();
    };
    PositionManager.prototype.computePnl = function (currency, amount) {
        if (currency === __WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */]) {
            return amount;
        }
        var i;
        var q;
        for (i = 0; i < this.latestQuotes.length; i += 1) {
            q = this.latestQuotes[i];
            var cp = q.currencyPair;
            if (cp.getBaseCurrency() === __WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */]) {
                return amount / q.bid;
            }
            else if (cp.getCounterCurrency() === __WEBPACK_IMPORTED_MODULE_0__Currency__["b" /* USD */]) {
                return amount * q.ask;
            }
        }
        console.error('Cannot convert ' + currency.toString() + ' to USD');
        return 0; // todo
    };
    PositionManager.prototype.triggerPositionChanged = function () {
        this.positionChange.next(this.positions);
    };
    PositionManager.prototype.triggerPnlChanged = function () {
        this.pnlChange.next(this.pnl);
    };
    return PositionManager;
}());
PositionManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ForgeMarketManager__["a" /* ForgeMarketManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ForgeMarketManager__["a" /* ForgeMarketManager */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__TradeManager__["a" /* TradeManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__TradeManager__["a" /* TradeManager */]) === "function" && _b || Object])
], PositionManager);

var PositionKeeper = (function () {
    function PositionKeeper(positionManager) {
        this.next = function (value) {
            positionManager.processTrades(value);
        };
    }
    return PositionKeeper;
}());
var PnlKeeper = (function () {
    function PnlKeeper(positionManager) {
        this.next = function (value) {
            positionManager.processMarketData(value);
        };
    }
    return PnlKeeper;
}());
var _a, _b;
//# sourceMappingURL=PositionManager.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/RandomMarketManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CurrencyPair__ = __webpack_require__("../../../../../src/app/finance-domain/CurrencyPair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomMarketManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RandomMarketManager = (function () {
    function RandomMarketManager() {
        var _this = this;
        this.marketChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        setInterval(function () { return _this.triggerMarketChange(); }, 1000);
    }
    RandomMarketManager.prototype.asMarketObservable = function () {
        return this.marketChange.asObservable();
    };
    RandomMarketManager.prototype.getMarket = function () {
        return this.marketChange.getValue();
    };
    RandomMarketManager.prototype.getQuote = function (currencyPair) {
        var quotes = this.marketChange.getValue();
        var i;
        var q;
        for (i = 0; i < quotes.length; i += 1) {
            q = quotes[i];
            if (currencyPair === q.currencyPair) {
                return q;
            }
        }
        return null;
    };
    RandomMarketManager.prototype.triggerMarketChange = function () {
        var quotes = this.generateRandomMarket();
        this.marketChange.next(quotes);
    };
    RandomMarketManager.prototype.generateRandomMarket = function () {
        var quotes = [];
        var i;
        for (i = 0; i < __WEBPACK_IMPORTED_MODULE_1__CurrencyPair__["b" /* MAJOR_CURRENCY_PAIRS */].length; i += 1) {
            quotes.push(this.generateRandomQuote(__WEBPACK_IMPORTED_MODULE_1__CurrencyPair__["b" /* MAJOR_CURRENCY_PAIRS */][i]));
        }
        return quotes;
    };
    RandomMarketManager.prototype.generateRandomQuote = function (currencyPair) {
        return {
            currencyPair: currencyPair,
            bid: Math.floor(Math.random() * 10000) / 100,
            ask: Math.floor(Math.random() * 10000) / 100,
            timestamp: new Date()
        };
    };
    return RandomMarketManager;
}());
RandomMarketManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RandomMarketManager);

//# sourceMappingURL=RandomMarketManager.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/Side.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Side */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELL; });
var Side = (function () {
    function Side(symbol) {
        this.symbol = symbol;
    }
    Side.prototype.toString = function () {
        return this.symbol;
    };
    return Side;
}());

var BUY = new Side('buy');
var SELL = new Side('sell');
//# sourceMappingURL=Side.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/TradeManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MockExchange__ = __webpack_require__("../../../../../src/app/finance-domain/MockExchange.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradeManager = (function () {
    function TradeManager(exchange) {
        this.exchange = exchange;
        this.tradeChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.tradeChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        exchange.asTradeObservable().subscribe(new TradeKeeper(this));
    }
    TradeManager.prototype.add = function (t) {
        var datacopy = this.tradeChange.getValue().slice();
        datacopy.push(t);
        this.tradeChange.next(datacopy);
    };
    TradeManager.prototype.asTradeObservable = function () {
        return this.tradeChange.asObservable();
    };
    TradeManager.prototype.getTrades = function () {
        return this.tradeChange.getValue();
    };
    return TradeManager;
}());
TradeManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__MockExchange__["a" /* MockExchange */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__MockExchange__["a" /* MockExchange */]) === "function" && _a || Object])
], TradeManager);

var TradeKeeper = (function () {
    function TradeKeeper(tm) {
        this.next = function (val) {
            if (val) {
                console.log(JSON.stringify(val));
                tm.add(val);
            }
        };
    }
    return TradeKeeper;
}());
var _a;
//# sourceMappingURL=TradeManager.js.map

/***/ }),

/***/ "../../../../../src/app/finance-domain/TradeStatus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TradeStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAPTURED; });
/* unused harmony export CONFIRMED */
/* unused harmony export SETTLED */
/* unused harmony export RECONCILED */
var TradeStatus = (function () {
    function TradeStatus(s) {
        this.s = s;
    }
    TradeStatus.prototype.toString = function () {
        return this.s;
    };
    return TradeStatus;
}());

var CAPTURED = new TradeStatus('captured');
var CONFIRMED = new TradeStatus('confirmed');
var SETTLED = new TradeStatus('settled');
var RECONCILED = new TradeStatus('reconciled');
//# sourceMappingURL=TradeStatus.js.map

/***/ }),

/***/ "../../../../../src/app/market/market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.market-form {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.mat-input-container {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px;\n}\n\n.mat-table {\n  overflow: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market/market.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\n  <md-card-content>\n    <md-input-container class=\"market-input-container\" floatPlaceholder=\"auto\">\n      <input mdInput #yourCurrencyPair placeholder=\"Currency pair\">\n    </md-input-container>\n  </md-card-content>\n</md-card>\n\n\n<div class=\"market-container mat-elevation-z8\">\n\n  <md-table #table [dataSource]=\"marketSource\">\n\n    <ng-container cdkColumnDef=\"currencyPair\">\n      <md-header-cell *cdkHeaderCellDef> Currency pair</md-header-cell>\n      <md-cell *cdkCellDef=\"let quote\"> {{quote.currencyPair}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"bid\">\n      <md-header-cell *cdkHeaderCellDef> Bid</md-header-cell>\n      <md-cell *cdkCellDef=\"let quote\"> {{quote.bid}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"ask\">\n      <md-header-cell *cdkHeaderCellDef> Ask</md-header-cell>\n      <md-cell *cdkCellDef=\"let quote\"> {{quote.ask}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"timestamp\">\n      <md-header-cell *cdkHeaderCellDef> Timestamp</md-header-cell>\n      <md-cell *cdkCellDef=\"let quote\"> {{quote.timestamp.toLocaleTimeString()}}</md-cell>\n    </ng-container>\n\n    <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *cdkRowDef=\"let quote; columns: displayedColumns;\"></md-row>\n  </md-table>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/market/market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__finance_domain_MockExchange__ = __webpack_require__("../../../../../src/app/finance-domain/MockExchange.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__finance_domain_ForgeMarketManager__ = __webpack_require__("../../../../../src/app/finance-domain/ForgeMarketManager.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
/* unused harmony export MarketDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MarketComponent = (function () {
    function MarketComponent(marketManager, exchange) {
        this.marketManager = marketManager;
        this.exchange = exchange;
        this.displayedColumns = ['currencyPair', 'bid', 'ask', 'timestamp'];
    }
    MarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketSource = new MarketDataSource(this.marketManager);
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.yourCurrencyPairComponent.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.marketSource) {
                return;
            }
            _this.marketSource.filter = _this.yourCurrencyPairComponent.nativeElement.value;
        });
    };
    return MarketComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('yourCurrencyPair'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], MarketComponent.prototype, "yourCurrencyPairComponent", void 0);
MarketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-market-component',
        styles: [__webpack_require__("../../../../../src/app/market/market.component.css")],
        template: __webpack_require__("../../../../../src/app/market/market.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__finance_domain_ForgeMarketManager__["a" /* ForgeMarketManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__finance_domain_ForgeMarketManager__["a" /* ForgeMarketManager */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__finance_domain_MockExchange__["a" /* MockExchange */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__finance_domain_MockExchange__["a" /* MockExchange */]) === "function" && _c || Object])
], MarketComponent);

var MarketDataSource = (function (_super) {
    __extends(MarketDataSource, _super);
    function MarketDataSource(marketManager) {
        var _this = _super.call(this) || this;
        _this.marketManager = marketManager;
        _this.filterChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(MarketDataSource.prototype, "filter", {
        get: function () {
            return this.filterChange.value;
        },
        set: function (filter) {
            this.filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    MarketDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.marketManager.asMarketObservable(),
            this.filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this.marketManager.getMarket().slice().filter(function (quote) {
                var theString = _this.filter.trim().toLowerCase().replace('/', '');
                var aString = quote.currencyPair.toString().toLowerCase().replace('/', '');
                return aString.indexOf(theString) !== -1;
            });
        });
    };
    MarketDataSource.prototype.disconnect = function () {
    };
    return MarketDataSource;
}(__WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__["n" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=market.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\n  <md-card-content>\n\n    <app-account-component #yourAccount></app-account-component>\n\n    <md-input-container class=\"market-input-container\" floatPlaceholder=\"auto\">\n      <input mdInput #yourCurrencyPair placeholder=\"Currency pair\">\n    </md-input-container>\n\n    <md-input-container class=\"market-input-container\" floatPlaceholder=\"auto\">\n      <input mdInput #yourQuantity placeholder=\"Quantity\">\n    </md-input-container>\n  </md-card-content>\n\n  <md-card-actions>\n    <div class=\"buyBox\">\n      <button md-button (click)=\"onBuyButtonClicked()\">BUY</button>\n      <label class=\"bidLabel\">Your bid is {{yourBid}}</label>\n    </div>\n\n    <div class=\"sellBox\">\n      <button md-button (click)=\"onSellButtonClicked()\">SELL</button>\n      <label class=\"askLabel\">Your ask is {{yourAsk}}</label>\n    </div>\n\n  </md-card-actions>\n\n</md-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__finance_domain_CurrencyPair__ = __webpack_require__("../../../../../src/app/finance-domain/CurrencyPair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__finance_domain_Side__ = __webpack_require__("../../../../../src/app/finance-domain/Side.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__finance_domain_MockExchange__ = __webpack_require__("../../../../../src/app/finance-domain/MockExchange.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__finance_domain_ForgeMarketManager__ = __webpack_require__("../../../../../src/app/finance-domain/ForgeMarketManager.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var OrderComponent = (function () {
    function OrderComponent(marketManager, exchange) {
        this.marketManager = marketManager;
        this.exchange = exchange;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.yourCurrencyPairComponent.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            _this.updateRates();
        });
        this.marketManager.asMarketObservable().subscribe(function (val) { return _this.updateRates(); });
    };
    OrderComponent.prototype.updateRates = function () {
        var val = this.yourCurrencyPairComponent.nativeElement.value;
        if (val) {
            var cp = __WEBPACK_IMPORTED_MODULE_10__finance_domain_CurrencyPair__["a" /* CurrencyPair */].lookup(val);
            if (cp) {
                var q = this.marketManager.getQuote(cp);
                if (q) {
                    this.yourBid = q.bid;
                    this.yourAsk = q.ask;
                    return;
                }
            }
        }
        this.yourBid = null;
        this.yourAsk = null;
    };
    OrderComponent.prototype.onBuyButtonClicked = function () {
        this.buy(this.yourAccountComponent.get(), this.yourCurrencyPairComponent.nativeElement.value, this.yourQuantityComponent.nativeElement.value);
    };
    OrderComponent.prototype.buy = function (account, pairString, quantityString) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(account) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNull"])(account) || account === '') {
            console.log('Invalid account');
            return;
        }
        var currencyPair;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(pairString) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNull"])(pairString) || pairString === '') {
            console.log('Invalid pairString');
            return;
        }
        currencyPair = __WEBPACK_IMPORTED_MODULE_10__finance_domain_CurrencyPair__["a" /* CurrencyPair */].lookup(pairString);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(currencyPair)) {
            console.log('Invalid currency pairString');
            return;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(quantityString) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNull"])(quantityString) || quantityString === '') {
            console.log('Invalid quantityString');
            return;
        }
        var quantity = parseFloat(quantityString);
        if (quantity > 0) {
        }
        else {
            console.log('Invalid qty');
            return;
        }
        this.doBuy(account, currencyPair, quantity);
    };
    OrderComponent.prototype.doBuy = function (account, currencyPair, quantity) {
        console.log('BUY ' + account + ' ' + currencyPair + ' ' + quantity);
        var order = {
            currencyPair: currencyPair,
            account: account,
            quantity: quantity,
            side: __WEBPACK_IMPORTED_MODULE_11__finance_domain_Side__["a" /* BUY */]
        };
        this.exchange.submit(order);
    };
    OrderComponent.prototype.onSellButtonClicked = function () {
        this.sell(this.yourAccountComponent.get(), this.yourCurrencyPairComponent.nativeElement.value, this.yourQuantityComponent.nativeElement.value);
    };
    OrderComponent.prototype.sell = function (account, pairString, quantityString) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(account) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNull"])(account) || account === '') {
            console.log('Invalid account');
            return;
        }
        var currencyPair;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(pairString) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNull"])(pairString) || pairString === '') {
            console.log('Invalid pairString');
            return;
        }
        currencyPair = __WEBPACK_IMPORTED_MODULE_10__finance_domain_CurrencyPair__["a" /* CurrencyPair */].lookup(pairString);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(currencyPair)) {
            console.log('Invalid currency pairString');
            return;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(quantityString) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isNull"])(quantityString) || quantityString === '') {
            console.log('Invalid quantityString');
            return;
        }
        var quantity = parseFloat(quantityString);
        if (quantity > 0) {
        }
        else {
            console.log('Invalid qty');
            return;
        }
        this.doSell(account, currencyPair, quantity);
    };
    OrderComponent.prototype.doSell = function (account, currencyPair, quantity) {
        console.log('SELL ' + account + ' ' + currencyPair + ' ' + quantity);
        var order = {
            currencyPair: currencyPair,
            account: account,
            quantity: quantity,
            side: __WEBPACK_IMPORTED_MODULE_11__finance_domain_Side__["b" /* SELL */]
        };
        console.log('ATTE ' + order.toString());
        console.log(JSON.stringify(order));
        this.exchange.submit(order);
    };
    return OrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('yourCurrencyPair'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], OrderComponent.prototype, "yourCurrencyPairComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('yourAccount'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */]) === "function" && _b || Object)
], OrderComponent.prototype, "yourAccountComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('yourQuantity'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], OrderComponent.prototype, "yourQuantityComponent", void 0);
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-order-component',
        styles: [__webpack_require__("../../../../../src/app/order/order.component.css")],
        template: __webpack_require__("../../../../../src/app/order/order.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_13__finance_domain_ForgeMarketManager__["a" /* ForgeMarketManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__finance_domain_ForgeMarketManager__["a" /* ForgeMarketManager */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__finance_domain_MockExchange__["a" /* MockExchange */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__finance_domain_MockExchange__["a" /* MockExchange */]) === "function" && _e || Object])
], OrderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/position/position.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".position-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.position-form {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.mat-input-container {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px;\n}\n\n.mat-table {\n  overflow: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/position/position.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\n  <md-card-title>Your PnL is: {{yourPnL.toFixed(2)}} USD</md-card-title>\n\n  <md-card-content>\n\n<!--\n\n    <app-account-component></app-account-component>\n\n-->\n\n    <md-input-container class=\"position-input-container\" floatPlaceholder=\"auto\">\n      <input mdInput #filter placeholder=\"Currency\">\n    </md-input-container>\n\n  </md-card-content>\n\n</md-card>\n\n<div class=\"position-container mat-elevation-z8\">\n  <md-table #table [dataSource]=\"positionSource\">\n\n    <ng-container cdkColumnDef=\"currency\">\n      <md-header-cell *cdkHeaderCellDef> Currency </md-header-cell>\n      <md-cell *cdkCellDef=\"let position\"> {{position.currency}} </md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"quantity\">\n      <md-header-cell *cdkHeaderCellDef> Quantity </md-header-cell>\n      <md-cell *cdkCellDef=\"let position\"> {{position.quantity}} </md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"account\">\n      <md-header-cell *cdkHeaderCellDef> Account </md-header-cell>\n      <md-cell *cdkCellDef=\"let position\"> {{position.account}} </md-cell>\n    </ng-container>\n\n    <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *cdkRowDef=\"let position; columns: displayedColumns;\"></md-row>\n  </md-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/position/position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__finance_domain_PositionManager__ = __webpack_require__("../../../../../src/app/finance-domain/PositionManager.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionComponent; });
/* unused harmony export PositionDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PositionComponent = (function () {
    function PositionComponent(positionManager) {
        this.positionManager = positionManager;
        this.displayedColumns = ['account', 'currency', 'quantity'];
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positionSource = new PositionDataSource(this.positionManager);
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.positionSource) {
                return;
            }
            _this.positionSource.filter = _this.filter.nativeElement.value;
        });
        this.positionManager.asPnlObservable().subscribe(function (val) {
            _this.yourPnL = val;
        });
    };
    return PositionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], PositionComponent.prototype, "filter", void 0);
PositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-position-component',
        styles: [__webpack_require__("../../../../../src/app/position/position.component.css")],
        template: __webpack_require__("../../../../../src/app/position/position.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__finance_domain_PositionManager__["a" /* PositionManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__finance_domain_PositionManager__["a" /* PositionManager */]) === "function" && _b || Object])
], PositionComponent);

var PositionDataSource = (function (_super) {
    __extends(PositionDataSource, _super);
    function PositionDataSource(positionManager) {
        var _this = _super.call(this) || this;
        _this.positionManager = positionManager;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(PositionDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    PositionDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.positionManager.asPositionObservable(),
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this.positionManager.getPositions().slice().filter(function (position) {
                var theString = _this.filter.trim().toLowerCase().replace('/', '');
                var aString = position.currency.toString().toLowerCase().replace('/', '');
                return aString.indexOf(theString) !== -1;
            });
        });
    };
    PositionDataSource.prototype.disconnect = function () { };
    return PositionDataSource;
}(__WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__["n" /* DataSource */]));

var _a, _b;
//# sourceMappingURL=position.component.js.map

/***/ }),

/***/ "../../../../../src/app/trade/trade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".history-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.history-form {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.mat-input-container {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px;\n}\n\n.mat-table {\n  overflow: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trade/trade.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\n  <md-card-content>\n\n<!--\n\n    <app-account-component></app-account-component>\n\n-->\n\n    <md-input-container class=\"history-input-container\" floatPlaceholder=\"auto\">\n      <input mdInput #historyFilterCurrencyPair placeholder=\"Currency pair\">\n    </md-input-container>\n\n\n  </md-card-content>\n\n</md-card>\n\n\n<div class=\"history-container mat-elevation-z8\">\n  <md-table #historyTable [dataSource]=\"historySource\">\n\n    <ng-container cdkColumnDef=\"account\">\n      <md-header-cell *cdkHeaderCellDef> Account</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.account}}</md-cell>\n    </ng-container>\n    <ng-container cdkColumnDef=\"side\">\n      <md-header-cell *cdkHeaderCellDef> Side</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.side}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"quantity\">\n      <md-header-cell *cdkHeaderCellDef> Quantity</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.quantity}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"rate\">\n      <md-header-cell *cdkHeaderCellDef> Exchange rate</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.rate}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"currencyPair\">\n      <md-header-cell *cdkHeaderCellDef> Currency pair</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.currencyPair}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"tradeDate\">\n      <md-header-cell *cdkHeaderCellDef> Trade date</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.tradeDate.toDateString()}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"settlementDate\">\n      <md-header-cell *cdkHeaderCellDef> Settlement date</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.settlementDate.toDateString()}}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"status\">\n      <md-header-cell *cdkHeaderCellDef> Trade status</md-header-cell>\n      <md-cell *cdkCellDef=\"let trade\"> {{trade.status}}</md-cell>\n    </ng-container>\n\n    <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *cdkRowDef=\"let trade; columns: displayedColumns;\"></md-row>\n  </md-table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/trade/trade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__finance_domain_TradeManager__ = __webpack_require__("../../../../../src/app/finance-domain/TradeManager.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeComponent; });
/* unused harmony export TradeDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TradeComponent = (function () {
    function TradeComponent(tradeManager) {
        this.tradeManager = tradeManager;
        this.displayedColumns = ['account', 'side', 'currencyPair', 'quantity', 'rate', 'tradeDate', 'settlementDate', 'status'];
    }
    TradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.historySource = new TradeDataSource(this.tradeManager);
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.historySource) {
                return;
            }
            _this.historySource.filter = _this.filter.nativeElement.value;
        });
    };
    return TradeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('historyFilterCurrencyPair'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], TradeComponent.prototype, "filter", void 0);
TradeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-trade-component',
        styles: [__webpack_require__("../../../../../src/app/trade/trade.component.css")],
        template: __webpack_require__("../../../../../src/app/trade/trade.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__finance_domain_TradeManager__["a" /* TradeManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__finance_domain_TradeManager__["a" /* TradeManager */]) === "function" && _b || Object])
], TradeComponent);

var TradeDataSource = (function (_super) {
    __extends(TradeDataSource, _super);
    function TradeDataSource(tradeManager) {
        var _this = _super.call(this) || this;
        _this.tradeManager = tradeManager;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(TradeDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    TradeDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.tradeManager.asTradeObservable(),
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this.tradeManager.getTrades().slice().filter(function (trade) {
                var theString = _this.filter.trim().toLowerCase().replace('/', '');
                var aString = trade.currencyPair.toString().toLowerCase().replace('/', '');
                return aString.indexOf(theString) !== -1;
            });
        });
    };
    TradeDataSource.prototype.disconnect = function () {
    };
    return TradeDataSource;
}(__WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__["n" /* DataSource */]));

var _a, _b;
//# sourceMappingURL=trade.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/dollaricon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dollaricon.34ce2f742c9e19f84428.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map