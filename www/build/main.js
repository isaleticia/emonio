webpackJsonp([7],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CsvDetailPage = /** @class */ (function () {
    function CsvDetailPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.device = [];
    }
    CsvDetailPage.prototype.createLineChart = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                datasets: [
                    {
                        label: "egy_watt_a",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(22,93,246,1)",
                        borderColor: "rgba(22,93,246,1)",
                        borderCapStyle: 'square',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(22,93,246),1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [11, 4, 33, 49, 23, 1, 51, 19],
                        spanGaps: false,
                    },
                    {
                        label: "egy_watt_b",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(64,124,27,1)",
                        borderColor: "rgba(64,124,27,1)",
                        borderCapStyle: 'square',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(64,124,27,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [1, 14, 53, 29, 23, 31, 31, 9],
                        spanGaps: false,
                    },
                    {
                        label: "egy_watt_c",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(234,16,16,1)",
                        borderColor: "rgba(234,16,16,1)",
                        borderCapStyle: 'square',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(234,16,16,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [16, 41, 32, 48, 3, 41, 28, 32],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    CsvDetailPage.prototype.onDisconnected = function (device) {
        console.log("Disconnected from " + device.id);
    };
    CsvDetailPage.prototype.ionViewDidLoad = function () {
        this.createLineChart();
        console.log('ionViewDidLoad CsvDetailPage');
    };
    CsvDetailPage.prototype.goToHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], CsvDetailPage.prototype, "lineCanvas", void 0);
    CsvDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-csvDetail',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/csvDetail/csvDetail.html"*/'<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <h6> CSV Data</h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <div class="row header" id="header">\n             <div class="col">Timestamp</div>\n             <div class="col">Localtime</div>\n             <div class="col">Connected</div>\n             <div class="col">vrms</div>\n             <div class="col">irms</div>\n             <div class="col">watt</div>\n             <div class="col">kwh</div>\n\n           </div>\n           <div class="row" id="row">\n             <div class="col">{{ timestamp }}</div>\n             <div class="col">{{ localtime }}</div>\n             <div class="col">{{ connected_a }}</div>\n             <div class="col">{{ vrms_a }}</div>\n             <div class="col">{{ irms_a }}</div>\n             <div class="col">{{ watt_a }}</div>\n             <div class="col">{{ kwh_a }}</div>\n\n           </div>\n           <div class="row" id="row">\n              <div class="col">{{ timestamp_b }}</div>\n              <div class="col">{{ localtime_b }}</div>\n              <div class="col">{{ connected_b }}</div>\n              <div class="col">{{ vrms_b }}</div>\n              <div class="col">{{ irms_b }}</div>\n              <div class="col">{{ watt_b }}</div>\n              <div class="col">{{ kwh_b }}</div>\n           </div>\n           <div class="row" id="row">\n              <div class="col">{{ timestamp_c }}</div>\n              <div class="col">{{ localtime_c }}</div>\n              <div class="col">{{ connected_c }}</div>\n              <div class="col">{{ vrms_c }}</div>\n              <div class="col">{{ irms_c }}</div>\n              <div class="col">{{ watt_c }}</div>\n              <div class="col">{{ kwh_c }}</div>\n           </div>\n  <ion-card>\n       <ion-card-header>\n         Power (watt) [dummy data]\n       </ion-card-header>\n       <ion-card-content>\n         <canvas #lineCanvas></canvas>\n       </ion-card-content>\n     </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/csvDetail/csvDetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], CsvDetailPage);
    return CsvDetailPage;
}());

//# sourceMappingURL=csvDetail.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceInfoPage = /** @class */ (function () {
    function DeviceInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.manu = this.navParams.data.manu;
        this.sysid = this.navParams.data.sysid;
        this.pnpid = this.navParams.data.pnpid;
        this.cert = this.navParams.data.cert;
        this.softwarerevision = this.navParams.data.softwarerevision;
        this.firmware = this.navParams.data.firmware;
        this.hardwarerevision = this.navParams.data.hardwarerevision;
        this.serialnr = this.navParams.data.serialnr;
        this.modelnr = this.navParams.data.modelnr;
    }
    DeviceInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeviceInfoPage');
    };
    DeviceInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-deviceInfo',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/deviceInfo/deviceInfo.html"*/'<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n<ion-content class="bg-style">\n <ion-grid>\n     <ion-row style=\'background-color:#305680; color: white;\'>\n       <ion-col>\n         <h6>Device Information </h6>\n       </ion-col>\n       </ion-row>\n       <p><strong>Model Number</strong> {{modelnr}}</p>\n       <p><strong>Serial Number</strong> {{serialnr}}</p>\n       <p><strong>Firmware Revision</strong> {{firmware}}</p>\n       <p><strong>Hardware Revision </strong>{{hardwarerevision}}</p>\n       <p><strong>Software Revision</strong> {{softwarerevision}}</p>\n       <p><strong>Manufacture Name </strong>{{manu}}</p>\n       <p>{{cert}} <strong>IEEE</strong> Regulatory Certification Data List</p>\n       <p><strong>PnP ID</strong> {{pnpid}}</p>\n     </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/deviceInfo/deviceInfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DeviceInfoPage);
    return DeviceInfoPage;
}());

//# sourceMappingURL=deviceInfo.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogPage = /** @class */ (function () {
    function LogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogPage');
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-log',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/log/log.html"*/'<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n<ion-content class="">\n <ion-grid>\n     <ion-row style=\'background-color:#305680; color: white;\'>\n       <ion-col>\n         <h6> Log </h6>\n       </ion-col>\n       </ion-row>\n       <ion-row>\n       </ion-row>\n     </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/log/log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilesPage = /** @class */ (function () {
    function FilesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilesPage');
    };
    FilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-files',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/files/files.html"*/'<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n<ion-content class="">\n <ion-grid>\n     <ion-row style=\'background-color:#305680; color: white;\'>\n       <ion-col>\n         <h6> Files</h6>\n       </ion-col>\n       </ion-row>\n      <ion-row>\n    </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/files/files.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FilesPage);
    return FilesPage;
}());

//# sourceMappingURL=files.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThingsboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThingsboardPage = /** @class */ (function () {
    function ThingsboardPage(navCtrl, navParams, theInAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    ThingsboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThingsboardPage');
    };
    ThingsboardPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    ThingsboardPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    ThingsboardPage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_self";
        this.theInAppBrowser.create(url, target, this.options);
    };
    ThingsboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-thingsboard',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/thingsboard/thingsboard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Thingsboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/thingsboard/thingsboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], ThingsboardPage);
    return ThingsboardPage;
}());

//# sourceMappingURL=thingsboard.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/csvDetail/csvDetail.module": [
		869,
		6
	],
	"../pages/deviceInfo/deviceInfo.module": [
		870,
		5
	],
	"../pages/files/files.module": [
		871,
		4
	],
	"../pages/infopage/infopage.module": [
		872,
		3
	],
	"../pages/log/log.module": [
		873,
		2
	],
	"../pages/settings/settings.module": [
		874,
		1
	],
	"../pages/thingsboard/thingsboard.module": [
		875,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviceInfo_deviceInfo__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble___ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__csvDetail_csvDetail__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_log__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__infopage_infopage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__files_files__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// Emonio Bluetooth UUIDs
var SERVICE_UUID = 'E1C98240-3037-419A-AEA4-BD9CC9C49A61';
var WRITE_CHARACTERISTIC = '00000002-EBB1-4BDA-9EDF-D0F5F8A11181';
var RECEIVE_CHARACTERISTIC = '00000003-EBB1-4BDA-9EDF-D0F5F8A11181';
var RECEIVE_CSVDATA_CHARACTERISTIC = '00000004-EBB1-4BDA-9EDF-D0F5F8A11181';
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.device = [];
        this.login = "login admin:emonio";
        this.energyCommando = "energy";
        this.download = "download" + this.device['name'] + "-01.csv";
        this.meterWatt0 = [];
        this.meterWatt1 = [];
        this.meterWatt2 = [];
        var device = navParams.get('device');
        // connect to selected device
        this.ble.connect(device.id).subscribe(function (device) { return _this.onConnected(device); }, function (device) { return _this.onDisconnected(device); });
    }
    // converts a string to arraybuffer
    DetailPage.prototype.stringToBytes = function (string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    };
    // converts arraybuffer to string
    DetailPage.prototype.bytesToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    /*while connection is successfull:
    - writes egy commando to characteristic every 2 sec
    - reads & stores egy values for table visualization
    - subscribes to characteristic & stores mtr values then creates line chart
    */
    DetailPage.prototype.onConnected = function (device) {
        var _this = this;
        console.log("Connected to " + device.id);
        this.ngZone.run(function () {
            _this.device = device;
        });
        this.writeCommando(this.login);
        this.getEnergyDataEvery2Sec();
        this.subscribeToMsgCharacteristic();
        this.createLineChart();
        // write download commando read csv data - then convert csv to JSON and store values
        this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.download)).then(function (data) { return console.log("write download commando" + _this.bytesToString(data)); });
        this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("status csv file (OK or ERROR): " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                console.log(_this.csvFile = _this.bytesToString(data));
            });
        });
        this.ble.read(device.id, SERVICE_UUID, RECEIVE_CSVDATA_CHARACTERISTIC).then(function (buffer) {
            _this.csvFile = new Uint8Array(buffer);
            console.log("current CSV File: " + _this.bytesToString(_this.csvFile));
            _this.ngZone.run(function () {
                console.log(_this.csvFile = _this.bytesToString(_this.csvFile));
                _this.csvFileObject = JSON.parse(_this.csvJSON(_this.csvFile));
                _this.timestamp = _this.csvFileObject[0].timestamp;
                _this.localtime = _this.csvFileObject[0].localtime;
                _this.connected_a = _this.csvFileObject[0].connected_a;
                _this.vrms_a = _this.csvFileObject[0].vrms_a;
                _this.irms_a = _this.csvFileObject[0].irms_a;
                _this.watt_a = _this.csvFileObject[0].watt_a;
                _this.kwh_a = _this.csvFileObject[0].kwh_a;
                _this.timestamp_b = _this.csvFileObject[1].timestamp;
                _this.localtime_b = _this.csvFileObject[1].localtime;
                _this.connected_b = _this.csvFileObject[1].connected_b;
                _this.vrms_b = _this.csvFileObject[1].vrms_b;
                _this.irms_b = _this.csvFileObject[1].irms_b;
                _this.watt_b = _this.csvFileObject[1].watt_b;
                _this.kwh_b = _this.csvFileObject[1].kwh_b;
                _this.timestamp_c = _this.csvFileObject[2].timestamp;
                _this.localtime_c = _this.csvFileObject[2].localtime;
                _this.connected_c = _this.csvFileObject[2].connected_b;
                _this.vrms_c = _this.csvFileObject[2].vrms_c;
                _this.irms_c = _this.csvFileObject[2].irms_c;
                _this.watt_c = _this.csvFileObject[2].watt_c;
                _this.kwh_c = _this.csvFileObject[2].kwh_c;
            });
        });
        this.ble.read(device.id, '180A', '2A23').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.sysid = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A24').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.modelnr = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A25').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.serialnr = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A27').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.hardwarerevision = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A26').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.firmware = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A28').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.softwarerevision = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A29').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.manu = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A2A').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.cert = _this.bytesToString(data);
            });
        });
        this.ble.read(device.id, '180A', '2A50').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.pnpid = _this.bytesToString(data);
            });
        });
    };
    //writes to characteristic
    DetailPage.prototype.writeCommando = function (commando) {
        var _this = this;
        this.ble.write(this.device['id'], SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(commando)).then(function (data) { return console.log("write commando" + _this.bytesToString(data)); });
    };
    //reads data if type is egy & stores each egy data value
    DetailPage.prototype.readEnergyData = function () {
        var _this = this;
        this.ble.read(this.device['id'], SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(function (buffer) {
            try {
                _this.data = JSON.parse(_this.bytesToString(new Uint8Array(buffer)));
                if (_this.data.type == "egy") {
                    _this.ngZone.run(function () {
                        _this.vrms0 = _this.data.phase[0].vrms;
                        _this.irms0 = _this.data.phase[0].irms;
                        _this.watt0 = _this.data.phase[0].watt;
                        _this.var0 = _this.data.phase[0].var;
                        _this.va0 = _this.data.phase[0].va;
                        _this.freq0 = _this.data.phase[0].freq;
                        _this.phi0 = _this.data.phase[0].phi;
                        _this.vrms1 = _this.data.phase[1].vrms;
                        _this.irms1 = _this.data.phase[1].irms;
                        _this.watt1 = _this.data.phase[1].watt;
                        _this.var1 = _this.data.phase[1].var;
                        _this.va1 = _this.data.phase[1].va;
                        _this.freq1 = _this.data.phase[1].freq;
                        _this.phi1 = _this.data.phase[1].phi;
                        _this.vrms2 = _this.data.phase[2].vrms;
                        _this.irms2 = _this.data.phase[2].irms;
                        _this.watt2 = _this.data.phase[2].watt;
                        _this.var2 = _this.data.phase[2].var;
                        _this.va2 = _this.data.phase[2].va;
                        _this.freq2 = _this.data.phase[2].freq;
                        _this.phi2 = _this.data.phase[2].phi;
                        console.log("egy data read: " + JSON.stringify(_this.data));
                    });
                }
            }
            catch (e) {
                console.log("Parse Error read");
            }
        });
    };
    //function to write egy commando to characteristic & read output - every 2 sec
    DetailPage.prototype.getEnergyDataEvery2Sec = function () {
        var _this = this;
        try {
            setInterval(function () {
                _this.writeCommando(_this.energyCommando);
                _this.readEnergyData();
            }, 2000);
        }
        catch (e) {
            console.log(" get egy data failed");
        }
    };
    // subscribe for notifications when value changes
    DetailPage.prototype.subscribeToMsgCharacteristic = function () {
        var _this = this;
        this.ble.startNotification(this.device['id'], SERVICE_UUID, RECEIVE_CHARACTERISTIC).subscribe(function (buffer) {
            try {
                _this.data = JSON.parse(_this.bytesToString(new Uint8Array(buffer)));
                if (_this.data.type == "egy") {
                    _this.ngZone.run(function () {
                        _this.vrms0 = _this.data.phase[0].vrms;
                        _this.irms0 = _this.data.phase[0].irms;
                        _this.watt0 = _this.data.phase[0].watt;
                        _this.var0 = _this.data.phase[0].var;
                        _this.va0 = _this.data.phase[0].va;
                        _this.freq0 = _this.data.phase[0].freq;
                        _this.phi0 = _this.data.phase[0].phi;
                        _this.vrms1 = _this.data.phase[1].vrms;
                        _this.irms1 = _this.data.phase[1].irms;
                        _this.watt1 = _this.data.phase[1].watt;
                        _this.var1 = _this.data.phase[1].var;
                        _this.va1 = _this.data.phase[1].va;
                        _this.freq1 = _this.data.phase[1].freq;
                        _this.phi1 = _this.data.phase[1].phi;
                        _this.vrms2 = _this.data.phase[2].vrms;
                        _this.irms2 = _this.data.phase[2].irms;
                        _this.watt2 = _this.data.phase[2].watt;
                        _this.var2 = _this.data.phase[2].var;
                        _this.va2 = _this.data.phase[2].va;
                        _this.freq2 = _this.data.phase[2].freq;
                        _this.phi2 = _this.data.phase[2].phi;
                        console.log("egy data n: " + JSON.stringify(_this.data));
                    });
                }
                else if (_this.data.type == "mtr") {
                    _this.meterWatt0 = _this.data.phase[0].watt;
                    _this.meterWatt1 = _this.data.phase[1].watt;
                    _this.meterWatt2 = _this.data.phase[2].watt;
                    _this.addData(_this.lineChart, new Date().toLocaleTimeString());
                    console.log("meter data n: " + JSON.stringify(_this.data));
                }
            }
            catch (e) {
                console.log("Parse Error notify");
            }
        });
    };
    //creates line chart with received mtr values
    DetailPage.prototype.createLineChart = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                // labels: [new Date()],
                datasets: [
                    {
                        label: "Phase A",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgb(255,0,0)",
                        borderColor: "rgb(255,0,0)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(255,0,0)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: true,
                        showLine: true,
                    },
                    {
                        label: "Phase B",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(22,93,246,1)",
                        borderColor: "rgba(22,93,246,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(22,93,246,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false,
                        showLine: true
                    },
                    {
                        label: "Phase C",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgb(50,205,50)",
                        borderColor: "rgb(50,205,50)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(50,205,50)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: [],
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false,
                        showLine: true
                    }
                ]
            },
        });
    };
    // add values to all datasets & update chart
    DetailPage.prototype.addData = function (chart, label) {
        if (chart.data.labels.length < 4) {
            chart.data.labels.push(label);
            chart.data.datasets[0].data.push(this.meterWatt0);
            chart.data.datasets[1].data.push(this.meterWatt1);
            chart.data.datasets[2].data.push(this.meterWatt2);
            chart.update();
        }
        else if (chart.data.labels.length = 4) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
            chart.data.datasets[1].data.shift();
            chart.data.datasets[2].data.shift();
            chart.update();
        }
    };
    //convert CSV to JSON
    DetailPage.prototype.csvJSON = function (csvFile) {
        var lines = csvFile.split("\n");
        var result = [];
        var headers = ["timestamp", "localtime", "connected_a", "vrms_a", "irms_a", "watt_a", "kwh_a", "connected_b", "vrms_b", "irms_b", "watt_b", "kwh_b", "connected_c", "vrms_c", "irms_c", "watt_c", "kwh_c"];
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(";");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        //return result; //JavaScript object
        console.log("HALLO JSON String : " + JSON.stringify(result));
        return JSON.stringify(result); //JSON
    };
    DetailPage.prototype.onDisconnected = function (device) {
        console.log("Disconnected from " + device.id);
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave disconnecting Bluetooth');
        this.ble.disconnect(this.device['id']).then(function () { return console.log('Disconnected'); }, function () { return console.log('ERROR disconnecting'); });
    };
    DetailPage.prototype.goToHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    DetailPage.prototype.goToDeviceInfoPage = function () {
        console.log(this.manu + 'pushed in');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__deviceInfo_deviceInfo__["a" /* DeviceInfoPage */], { manu: this.manu, sysid: this.sysid, pnpid: this.pnpid,
            cert: this.cert, softwarerevision: this.softwarerevision, firmware: this.firmware, hardwarerevision: this.hardwarerevision,
            serialnr: this.serialnr, modelnr: this.modelnr });
    };
    DetailPage.prototype.goToCsvDetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__csvDetail_csvDetail__["a" /* CsvDetailPage */]);
    };
    DetailPage.prototype.goToInfoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__infopage_infopage__["a" /* InfopagePage */]);
    };
    DetailPage.prototype.goToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    DetailPage.prototype.goToLogPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__log_log__["a" /* LogPage */]);
    };
    DetailPage.prototype.goToFilesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__files_files__["a" /* FilesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], DetailPage.prototype, "lineCanvas", void 0);
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/detail/detail.html"*/'<ion-header><br>\n  <ion-navbar>\n    <ion-title>\n      {{ device.name || \'Unnamed\'}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <h6> Energy Measurement Data </h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 style="background:#305680">\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase A\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase B\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase C\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        U\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ vrms0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ vrms1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ vrms2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        I\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ irms0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ irms1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ irms2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        P\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ watt0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ watt1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ watt2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        S\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ var0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ var1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ var2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        Q\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ va0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ va1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ va0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        t\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ freq0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ freq1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ freq2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        cos\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ phi0 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ phi1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ phi2 }}\n      </ion-col>\n      <ion-card>\n        <ion-card-header> Power (watt) </ion-card-header>\n           <ion-card-content>\n             <canvas #lineCanvas></canvas>\n           </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer >\n  <ion-toolbar class="emonio-footer">\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only (click)="goToDeviceInfoPage()">\n            <ion-icon name="md-information-circle"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only (click)="goToSettings()" >\n            <ion-icon name="md-settings"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only (click)="goToLogPage()">\n            <ion-icon name="noun_log_1131852"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only (click)="goToFilesPage()">\n            <ion-icon name="md-folder"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button  (click)="goToCsvDetailPage()">\n            <ion-icon name="noun_CSV_1126810"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble___["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(499);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble___ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_deviceInfo_deviceInfo__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_csvDetail_csvDetail__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_thingsboard_thingsboard__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_infopage_infopage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_log_log__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_files_files__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_deviceInfo_deviceInfo__["a" /* DeviceInfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_csvDetail_csvDetail__["a" /* CsvDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_thingsboard_thingsboard__["a" /* ThingsboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_infopage_infopage__["a" /* InfopagePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_log_log__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_files_files__["a" /* FilesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/csvDetail/csvDetail.module#CsvDetailPageModule', name: 'CsvDetailPage', segment: 'csvDetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deviceInfo/deviceInfo.module#DeviceInfoPageModule', name: 'DeviceInfoPage', segment: 'deviceInfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/files/files.module#FilesPageModule', name: 'FilesPage', segment: 'files', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infopage/infopage.module#InfopagePageModule', name: 'InfopagePage', segment: 'infopage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log/log.module#LogPageModule', name: 'LogPage', segment: 'log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thingsboard/thingsboard.module#ThingsboardPageModule', name: 'ThingsboardPage', segment: 'thingsboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_deviceInfo_deviceInfo__["a" /* DeviceInfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_csvDetail_csvDetail__["a" /* CsvDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_thingsboard_thingsboard__["a" /* ThingsboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_infopage_infopage__["a" /* InfopagePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_log_log__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_files_files__["a" /* FilesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble___["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 238,
	"./af.js": 238,
	"./ar": 239,
	"./ar-dz": 240,
	"./ar-dz.js": 240,
	"./ar-kw": 241,
	"./ar-kw.js": 241,
	"./ar-ly": 242,
	"./ar-ly.js": 242,
	"./ar-ma": 243,
	"./ar-ma.js": 243,
	"./ar-sa": 244,
	"./ar-sa.js": 244,
	"./ar-tn": 245,
	"./ar-tn.js": 245,
	"./ar.js": 239,
	"./az": 246,
	"./az.js": 246,
	"./be": 247,
	"./be.js": 247,
	"./bg": 248,
	"./bg.js": 248,
	"./bm": 249,
	"./bm.js": 249,
	"./bn": 250,
	"./bn.js": 250,
	"./bo": 251,
	"./bo.js": 251,
	"./br": 252,
	"./br.js": 252,
	"./bs": 253,
	"./bs.js": 253,
	"./ca": 254,
	"./ca.js": 254,
	"./cs": 255,
	"./cs.js": 255,
	"./cv": 256,
	"./cv.js": 256,
	"./cy": 257,
	"./cy.js": 257,
	"./da": 258,
	"./da.js": 258,
	"./de": 259,
	"./de-at": 260,
	"./de-at.js": 260,
	"./de-ch": 261,
	"./de-ch.js": 261,
	"./de.js": 259,
	"./dv": 262,
	"./dv.js": 262,
	"./el": 263,
	"./el.js": 263,
	"./en-au": 264,
	"./en-au.js": 264,
	"./en-ca": 265,
	"./en-ca.js": 265,
	"./en-gb": 266,
	"./en-gb.js": 266,
	"./en-ie": 267,
	"./en-ie.js": 267,
	"./en-il": 268,
	"./en-il.js": 268,
	"./en-nz": 269,
	"./en-nz.js": 269,
	"./eo": 270,
	"./eo.js": 270,
	"./es": 271,
	"./es-do": 272,
	"./es-do.js": 272,
	"./es-us": 273,
	"./es-us.js": 273,
	"./es.js": 271,
	"./et": 274,
	"./et.js": 274,
	"./eu": 275,
	"./eu.js": 275,
	"./fa": 276,
	"./fa.js": 276,
	"./fi": 277,
	"./fi.js": 277,
	"./fo": 278,
	"./fo.js": 278,
	"./fr": 279,
	"./fr-ca": 280,
	"./fr-ca.js": 280,
	"./fr-ch": 281,
	"./fr-ch.js": 281,
	"./fr.js": 279,
	"./fy": 282,
	"./fy.js": 282,
	"./gd": 283,
	"./gd.js": 283,
	"./gl": 284,
	"./gl.js": 284,
	"./gom-latn": 285,
	"./gom-latn.js": 285,
	"./gu": 286,
	"./gu.js": 286,
	"./he": 287,
	"./he.js": 287,
	"./hi": 288,
	"./hi.js": 288,
	"./hr": 289,
	"./hr.js": 289,
	"./hu": 290,
	"./hu.js": 290,
	"./hy-am": 291,
	"./hy-am.js": 291,
	"./id": 292,
	"./id.js": 292,
	"./is": 293,
	"./is.js": 293,
	"./it": 294,
	"./it.js": 294,
	"./ja": 295,
	"./ja.js": 295,
	"./jv": 296,
	"./jv.js": 296,
	"./ka": 297,
	"./ka.js": 297,
	"./kk": 298,
	"./kk.js": 298,
	"./km": 299,
	"./km.js": 299,
	"./kn": 300,
	"./kn.js": 300,
	"./ko": 301,
	"./ko.js": 301,
	"./ku": 302,
	"./ku.js": 302,
	"./ky": 303,
	"./ky.js": 303,
	"./lb": 304,
	"./lb.js": 304,
	"./lo": 305,
	"./lo.js": 305,
	"./lt": 306,
	"./lt.js": 306,
	"./lv": 307,
	"./lv.js": 307,
	"./me": 308,
	"./me.js": 308,
	"./mi": 309,
	"./mi.js": 309,
	"./mk": 310,
	"./mk.js": 310,
	"./ml": 311,
	"./ml.js": 311,
	"./mn": 312,
	"./mn.js": 312,
	"./mr": 313,
	"./mr.js": 313,
	"./ms": 314,
	"./ms-my": 315,
	"./ms-my.js": 315,
	"./ms.js": 314,
	"./mt": 316,
	"./mt.js": 316,
	"./my": 317,
	"./my.js": 317,
	"./nb": 318,
	"./nb.js": 318,
	"./ne": 319,
	"./ne.js": 319,
	"./nl": 320,
	"./nl-be": 321,
	"./nl-be.js": 321,
	"./nl.js": 320,
	"./nn": 322,
	"./nn.js": 322,
	"./pa-in": 323,
	"./pa-in.js": 323,
	"./pl": 324,
	"./pl.js": 324,
	"./pt": 325,
	"./pt-br": 326,
	"./pt-br.js": 326,
	"./pt.js": 325,
	"./ro": 327,
	"./ro.js": 327,
	"./ru": 328,
	"./ru.js": 328,
	"./sd": 329,
	"./sd.js": 329,
	"./se": 330,
	"./se.js": 330,
	"./si": 331,
	"./si.js": 331,
	"./sk": 332,
	"./sk.js": 332,
	"./sl": 333,
	"./sl.js": 333,
	"./sq": 334,
	"./sq.js": 334,
	"./sr": 335,
	"./sr-cyrl": 336,
	"./sr-cyrl.js": 336,
	"./sr.js": 335,
	"./ss": 337,
	"./ss.js": 337,
	"./sv": 338,
	"./sv.js": 338,
	"./sw": 339,
	"./sw.js": 339,
	"./ta": 340,
	"./ta.js": 340,
	"./te": 341,
	"./te.js": 341,
	"./tet": 342,
	"./tet.js": 342,
	"./tg": 343,
	"./tg.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 349,
	"./tzm-latn": 350,
	"./tzm-latn.js": 350,
	"./tzm.js": 349,
	"./ug-cn": 351,
	"./ug-cn.js": 351,
	"./uk": 352,
	"./uk.js": 352,
	"./ur": 353,
	"./ur.js": 353,
	"./uz": 354,
	"./uz-latn": 355,
	"./uz-latn.js": 355,
	"./uz.js": 354,
	"./vi": 356,
	"./vi.js": 356,
	"./x-pseudo": 357,
	"./x-pseudo.js": 357,
	"./yo": 358,
	"./yo.js": 358,
	"./zh-cn": 359,
	"./zh-cn.js": 359,
	"./zh-hk": 360,
	"./zh-hk.js": 360,
	"./zh-tw": 361,
	"./zh-tw.js": 361
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 547;

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_detail__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thingsboard_thingsboard__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__infopage_infopage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, ble, ngZone, ToastController, theInAppBrowser) {
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.ToastController = ToastController;
        this.theInAppBrowser = theInAppBrowser;
        this.devices = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
        this.scan();
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.devices = [];
        this.ble.scan([], 5).subscribe(function (device) { return _this.onDeviceDiscovered(device); }, function (error) { return alert("scan error"); });
        setTimeout(5000);
    };
    HomePage.prototype.onDeviceDiscovered = function (device) {
        var _this = this;
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(function () {
            _this.devices.push(device);
        });
    };
    HomePage.prototype.deviceSelected = function (device) {
        console.log(JSON.stringify(device) + ' selected ');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detail_detail__["a" /* DetailPage */], {
            device: device
        });
    };
    HomePage.prototype.goToDetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detail_detail__["a" /* DetailPage */]);
    };
    HomePage.prototype.goToThingsboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__thingsboard_thingsboard__["a" /* ThingsboardPage */]);
    };
    HomePage.prototype.goToInfoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__infopage_infopage__["a" /* InfopagePage */]);
    };
    HomePage.prototype.goToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    HomePage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    HomePage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_self";
        this.theInAppBrowser.create(url, target, this.options);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/home/home.html"*/'<ion-header><br>\n <ion-navbar>\n <ion-title> List of Available Devices </ion-title>\n <ion-buttons end>\n   <button ion-button (click)="scan()">\n     <ion-icon color="primary" name="ios-refresh"></ion-icon>\n   </button>\n </ion-buttons>\n</ion-navbar>\n</ion-header>\n<ion-content>\n <ion-grid>\n <ion-row style=\'background-color:#305680;\'>\n    <ion-col col-4>\n     <strong><h6>Device</h6></strong>\n   </ion-col>\n   <ion-col col-4 >\n     <strong><h6>RSSI</h6></strong>\n   </ion-col>\n   <ion-col col-4 >\n     <strong><h6>Status</h6></strong>\n   </ion-col>\n </ion-row>\n <ion-row>\n   <ion-col col-5>\n     <button ion-item detail-none *ngFor="let device of devices" (click)="deviceSelected(device)"> {{ device.name || \'Unbenannt\' }} </button>\n  </ion-col>\n   <ion-col col-3>\n     <button ion-item detail-none *ngFor="let device of devices">\n       <p>{{ device.rssi }} </p>\n     </button>\n   </ion-col>\n   <ion-col col-3>\n     <button ion-item detail-none *ngFor="let device of devices">\n       <p>test</p>\n     </button>\n   </ion-col>\n </ion-row>\n </ion-grid>\n</ion-content>\n<ion-footer >\n <ion-toolbar class="home-footer">\n   <ion-row style=\'background-color:#305680; color: white\'>\n     <ion-col>\n   <ion-buttons>\n     <button ion-button icon-only (click)="goToInfoPage()">\n       <ion-icon name="md-information-circle"></ion-icon>\n     </button>\n   </ion-buttons>\n     </ion-col>\n     <ion-col>\n     <ion-buttons>\n         <button ion-button icon-only (click)="openWithInAppBrowser(\'https://demo.thingsboard.io/login\')">\n           <ion-icon name="neuneu"></ion-icon>\n         </button>\n       </ion-buttons>\n     </ion-col>\n     <ion-col>\n       <ion-buttons>\n     <button ion-button icon-only (click)="goToSettings()">\n       <ion-icon name="md-construct"></ion-icon>\n     </button>\n   </ion-buttons>\n     </ion-col>\n     <ion-col>\n   <ion-buttons>\n     <button ion-button icon-only >\n            <ion-icon name="md-download"></ion-icon>\n     </button>\n   </ion-buttons>\n     </ion-col>\n   </ion-row>\n </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/settings/settings.html"*/'\n<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n<ion-content class="">\n <ion-grid>\n     <ion-row style=\'background-color:#305680; color: white;\'>\n       <ion-col>\n         <h6> Settings</h6>\n       </ion-col>\n       </ion-row>\n      <ion-row>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfopagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfopagePage = /** @class */ (function () {
    function InfopagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfopagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfopagePage');
    };
    InfopagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-infopage',template:/*ion-inline-start:"/Users/anjanadine/Emonio-P3-App/src/pages/infopage/infopage.html"*/'<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n\n<ion-content class="">\n <ion-grid>\n     <ion-row style=\'background-color:#305680; color: white;\'>\n       <ion-col>\n         <h6> App Info</h6>\n       </ion-col>\n       </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/anjanadine/Emonio-P3-App/src/pages/infopage/infopage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InfopagePage);
    return InfopagePage;
}());

//# sourceMappingURL=infopage.js.map

/***/ })

},[494]);
//# sourceMappingURL=main.js.map