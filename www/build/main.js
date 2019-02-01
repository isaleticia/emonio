webpackJsonp([2],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(91);
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
            selector: 'page-csvDetail',template:/*ion-inline-start:"/Users/anjanadine/emonio/src/pages/csvDetail/csvDetail.html"*/'<ion-header> <br>\n  <ion-navbar>\n    <ion-title>\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="goToDeviceInfoPage()" icon-end>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <strong>CSV </strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-card>\n       <ion-card-header>\n         Leistung in Watt\n       </ion-card-header>\n       <ion-card-content>\n         <canvas #lineCanvas></canvas>\n       </ion-card-content>\n     </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/anjanadine/emonio/src/pages/csvDetail/csvDetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], CsvDetailPage);
    return CsvDetailPage;
}());

//# sourceMappingURL=csvDetail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
            selector: 'page-deviceInfo',template:/*ion-inline-start:"/Users/anjanadine/emonio/src/pages/deviceInfo/deviceInfo.html"*/'<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-style">\n <ion-grid>\n     <ion-row style=\'background-color:#305680; color: white;\'>\n       <ion-col>\n         <strong>Device Information </strong>\n       </ion-col>\n       </ion-row>\n       <ion-row>\n       </ion-row>\n       <p><strong>System ID</strong> {{sysid}}</p>\n           <p><strong>Model Number</strong> {{modelnr}}</p>\n               <p><strong>Serial Number</strong> {{serialnr}}</p>\n                   <p><strong>Firmware Revision</strong> {{firmware}}</p>\n                       <p><strong>Hardware Revision </strong>{{hardwarerevision}}</p>\n                           <p><strong>Software Revision</strong> {{softwarerevision}}</p>\n                           <p><strong>Manufacture Name </strong>{{manu}}</p>\n                           <p>{{cert}} <strong>IEEE</strong> Regulatory Certification Data List</p>\n                           <p><strong>PnP ID</strong> {{pnpid}}</p>\n\n\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/anjanadine/emonio/src/pages/deviceInfo/deviceInfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DeviceInfoPage);
    return DeviceInfoPage;
}());

//# sourceMappingURL=deviceInfo.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/csvDetail/csvDetail.module": [
		461,
		1
	],
	"../pages/deviceInfo/deviceInfo.module": [
		462,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviceInfo_deviceInfo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__csvDetail_csvDetail__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Bluetooth UUIDs Clemens vorgegeben
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
        this.getEnergy = "energy";
        this.getCsv = "files";
        var device = navParams.get('device');
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
    // connection to the peripheral
    DetailPage.prototype.onConnected = function (device) {
        var _this = this;
        console.log("Connected to " + device.id);
        this.ngZone.run(function () {
            _this.device = device;
        });
        // writes to characteristic
        // last parameter must be an arraybuffer - use stringToBytes() to convert strings to arraybuffers
        // if you want to display the data convert the arraybuffer to string with bytesToString()
        this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.login)).then(function (data) { return console.log("write login commando" + _this.bytesToString(data)); });
        this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.getEnergy)).then(function (data) { return console.log("write energy commando" + _this.bytesToString(data)); });
        this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.getCsv)).then(function (data) { return console.log("write csv download commando" + _this.bytesToString(data)); });
        /* reads the current value of the characteristic
           bytesToString() converts output (arraybuffer) to string
           parse the JSON String to JS Object to access specific value */
        this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(function (buffer) {
            try {
                _this.csvData = new Uint8Array(buffer);
                _this.ngZone.run(function () {
                    console.log("CSV: " + _this.bytesToString(_this.csvData));
                });
            }
            catch (e) {
                console.log("Parse Error");
            }
        });
        this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(function (buffer) {
            try {
                _this.energyData = JSON.parse(_this.bytesToString(new Uint8Array(buffer)));
                _this.ngZone.run(function () {
                    _this.vrms0 = _this.energyData.phase[0].vrms;
                    _this.irms0 = _this.energyData.phase[0].irms;
                    _this.watt0 = _this.energyData.phase[0].watt;
                    _this.var0 = _this.energyData.phase[0].var;
                    _this.va0 = _this.energyData.phase[0].va;
                    _this.freq0 = _this.energyData.phase[0].freq;
                    _this.phi0 = _this.energyData.phase[0].phi;
                    _this.vrms1 = _this.energyData.phase[1].vrms;
                    _this.irms1 = _this.energyData.phase[1].irms;
                    _this.watt1 = _this.energyData.phase[1].watt;
                    _this.var1 = _this.energyData.phase[1].var;
                    _this.va1 = _this.energyData.phase[1].va;
                    _this.freq1 = _this.energyData.phase[1].freq;
                    _this.phi1 = _this.energyData.phase[1].phi;
                    _this.vrms2 = _this.energyData.phase[2].vrms;
                    _this.irms2 = _this.energyData.phase[2].irms;
                    _this.watt2 = _this.energyData.phase[2].watt;
                    _this.var2 = _this.energyData.phase[2].var;
                    _this.va2 = _this.energyData.phase[2].va;
                    _this.freq2 = _this.energyData.phase[2].freq;
                    _this.phi2 = _this.energyData.phase[2].phi;
                    _this.createLineChart();
                });
            }
            catch (e) {
                console.log("Parse Error");
            }
        });
        // subscribe for notifications when value changes
        this.ble.startNotification(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).subscribe(function (buffer) {
            try {
                _this.energyData = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                _this.ngZone.run(function () {
                    _this.vrms0 = _this.energyData.phase[0].vrms;
                    _this.irms0 = _this.energyData.phase[0].irms;
                    _this.watt0 = _this.energyData.phase[0].watt;
                    _this.var0 = _this.energyData.phase[0].var;
                    _this.va0 = _this.energyData.phase[0].va;
                    _this.freq0 = _this.energyData.phase[0].freq;
                    _this.phi0 = _this.energyData.phase[0].phi;
                    _this.vrms1 = _this.energyData.phase[1].vrms;
                    _this.irms1 = _this.energyData.phase[1].irms;
                    _this.watt1 = _this.energyData.phase[1].watt;
                    _this.var1 = _this.energyData.phase[1].var;
                    _this.va1 = _this.energyData.phase[1].va;
                    _this.freq1 = _this.energyData.phase[1].freq;
                    _this.phi1 = _this.energyData.phase[1].phi;
                    _this.vrms2 = _this.energyData.phase[2].vrms;
                    _this.irms2 = _this.energyData.phase[2].irms;
                    _this.watt2 = _this.energyData.phase[2].watt;
                    _this.var2 = _this.energyData.phase[2].var;
                    _this.va2 = _this.energyData.phase[2].va;
                    _this.freq2 = _this.energyData.phase[2].freq;
                    _this.phi2 = _this.energyData.phase[2].phi;
                    _this.createLineChart();
                    console.log(_this.bytesToString(_this.energyData));
                });
            }
            catch (e) {
                console.log("Parse Error");
            }
        });
        this.ble.read(device.id, '180A', '2A23').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.sysid = _this.bytesToString(data);
            });
        });
        //     this.ble.read(device.id, '180A', '2A24').then(function(buffer) {        //model nr  x
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A24').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.modelnr = _this.bytesToString(data);
            });
        });
        //     // 2A25 serial nr    x
        //     this.ble.read(device.id, '180A', '2A25').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A25').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.serialnr = _this.bytesToString(data);
            });
        });
        //     //hardware revision string 2A27      x
        //     this.ble.read(device.id, '180A', '2A27').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A27').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.hardwarerevision = _this.bytesToString(data);
            });
        });
        //     //frimware 2A26     x
        //     this.ble.read(device.id, '180A', '2A26').then(function(buffer) {
        //       this.variable=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //
        //     });
        //
        //
        this.ble.read(device.id, '180A', '2A26').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.firmware = _this.bytesToString(data);
            });
        });
        //     //software revision string 2A28   x
        //     this.ble.read(device.id, '180A', '2A28').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A28').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.softwarerevision = _this.bytesToString(data);
            });
        });
        //     // this.ble.read(device.id, '180A', '2A29').then(function(buffer) {          //manufacturer   x
        //     //   this.manu=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     // });
        //
        //
        // // MANUFACTURER TWO  DELETE MANUFACTURER AFTERWARDS
        //
        //
        //
        this.ble.read(device.id, '180A', '2A29').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.manu = _this.bytesToString(data);
            });
        });
        //
        //
        //
        //
        //     //2A2A certification data list      noo
        //     this.ble.read(device.id, '180A', '2A2A').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        this.ble.read(device.id, '180A', '2A2A').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.cert = _this.bytesToString(data);
            });
        });
        //
        //     //pnp id 2A50 noooo
        //     this.ble.read(device.id, '180A', '2A50').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        this.ble.read(device.id, '180A', '2A50').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.pnpid = _this.bytesToString(data);
            });
        });
    };
    DetailPage.prototype.createLineChart = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Phase A", "Phase B", "Phase C"],
                datasets: [
                    {
                        label: "in Watt",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(234,16,16,1)",
                        borderColor: "rgba(234,16,16,1)",
                        borderCapStyle: 'butt',
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
                        data: [parseInt(this.vrms0), parseInt(this.vrms1), parseInt(this.vrms2)],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    DetailPage.prototype.onDisconnected = function (device) {
        console.log("Disconnected from " + device.id);
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        setTimeout(function () {
        }, 5000);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], DetailPage.prototype, "lineCanvas", void 0);
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/anjanadine/emonio/src/pages/detail/detail.html"*/'<ion-header> <br>\n  <ion-navbar>\n    <ion-title>\n      {{ device.name || \'Unnamed\'}}\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="goToDeviceInfoPage()" icon-end>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <strong>Firmware </strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 style="background:#305680">\n\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase A\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase B\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase C\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        U\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ vrms0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ vrms1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ vrms2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        I\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ irms0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ irms1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ irms2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        P\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ watt0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ watt1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ watt2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        S\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ var0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ var1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ var2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        Q\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ va0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ va1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ va0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        t\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ freq0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ freq1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ freq2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        cos\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ phi0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ phi1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ phi2 }}\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n       <ion-card-header>\n         Leistung in Watt\n       </ion-card-header>\n       <ion-card-content>\n         <canvas #lineCanvas></canvas>\n       </ion-card-content>\n     </ion-card>\n\n</ion-content>\n<!-- alter footer ohne custom icons\n<ion-footer >\n  <ion-toolbar class="emonio-footer">\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-information-circle"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-settings"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-document"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-folder"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-download"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n-->\n<ion-footer >\n  <ion-toolbar class="emonio-footer">\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-information-circle"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-settings"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="noun_log_1131852"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-folder"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button>\n            <ion-icon name="noun_CSV_1126810" (click)="goToCsvDetailPage()"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/anjanadine/emonio/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_bluetooth_serial__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deviceInfo_deviceInfo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_csvDetail_csvDetail__ = __webpack_require__(113);
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
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_deviceInfo_deviceInfo__["a" /* DeviceInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_csvDetail_csvDetail__["a" /* CsvDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/csvDetail/csvDetail.module#CsvDetailPageModule', name: 'CsvDetailPage', segment: 'csvDetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deviceInfo/deviceInfo.module#DeviceInfoPageModule', name: 'DeviceInfoPage', segment: 'deviceInfo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_deviceInfo_deviceInfo__["a" /* DeviceInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_csvDetail_csvDetail__["a" /* CsvDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 177,
	"./af.js": 177,
	"./ar": 178,
	"./ar-dz": 179,
	"./ar-dz.js": 179,
	"./ar-kw": 180,
	"./ar-kw.js": 180,
	"./ar-ly": 181,
	"./ar-ly.js": 181,
	"./ar-ma": 182,
	"./ar-ma.js": 182,
	"./ar-sa": 183,
	"./ar-sa.js": 183,
	"./ar-tn": 184,
	"./ar-tn.js": 184,
	"./ar.js": 178,
	"./az": 185,
	"./az.js": 185,
	"./be": 186,
	"./be.js": 186,
	"./bg": 187,
	"./bg.js": 187,
	"./bm": 188,
	"./bm.js": 188,
	"./bn": 189,
	"./bn.js": 189,
	"./bo": 190,
	"./bo.js": 190,
	"./br": 191,
	"./br.js": 191,
	"./bs": 192,
	"./bs.js": 192,
	"./ca": 193,
	"./ca.js": 193,
	"./cs": 194,
	"./cs.js": 194,
	"./cv": 195,
	"./cv.js": 195,
	"./cy": 196,
	"./cy.js": 196,
	"./da": 197,
	"./da.js": 197,
	"./de": 198,
	"./de-at": 199,
	"./de-at.js": 199,
	"./de-ch": 200,
	"./de-ch.js": 200,
	"./de.js": 198,
	"./dv": 201,
	"./dv.js": 201,
	"./el": 202,
	"./el.js": 202,
	"./en-au": 203,
	"./en-au.js": 203,
	"./en-ca": 204,
	"./en-ca.js": 204,
	"./en-gb": 205,
	"./en-gb.js": 205,
	"./en-ie": 206,
	"./en-ie.js": 206,
	"./en-il": 207,
	"./en-il.js": 207,
	"./en-nz": 208,
	"./en-nz.js": 208,
	"./eo": 209,
	"./eo.js": 209,
	"./es": 210,
	"./es-do": 211,
	"./es-do.js": 211,
	"./es-us": 212,
	"./es-us.js": 212,
	"./es.js": 210,
	"./et": 213,
	"./et.js": 213,
	"./eu": 214,
	"./eu.js": 214,
	"./fa": 215,
	"./fa.js": 215,
	"./fi": 216,
	"./fi.js": 216,
	"./fo": 217,
	"./fo.js": 217,
	"./fr": 218,
	"./fr-ca": 219,
	"./fr-ca.js": 219,
	"./fr-ch": 220,
	"./fr-ch.js": 220,
	"./fr.js": 218,
	"./fy": 221,
	"./fy.js": 221,
	"./gd": 222,
	"./gd.js": 222,
	"./gl": 223,
	"./gl.js": 223,
	"./gom-latn": 224,
	"./gom-latn.js": 224,
	"./gu": 225,
	"./gu.js": 225,
	"./he": 226,
	"./he.js": 226,
	"./hi": 227,
	"./hi.js": 227,
	"./hr": 228,
	"./hr.js": 228,
	"./hu": 229,
	"./hu.js": 229,
	"./hy-am": 230,
	"./hy-am.js": 230,
	"./id": 231,
	"./id.js": 231,
	"./is": 232,
	"./is.js": 232,
	"./it": 233,
	"./it.js": 233,
	"./ja": 234,
	"./ja.js": 234,
	"./jv": 235,
	"./jv.js": 235,
	"./ka": 236,
	"./ka.js": 236,
	"./kk": 237,
	"./kk.js": 237,
	"./km": 238,
	"./km.js": 238,
	"./kn": 239,
	"./kn.js": 239,
	"./ko": 240,
	"./ko.js": 240,
	"./ku": 241,
	"./ku.js": 241,
	"./ky": 242,
	"./ky.js": 242,
	"./lb": 243,
	"./lb.js": 243,
	"./lo": 244,
	"./lo.js": 244,
	"./lt": 245,
	"./lt.js": 245,
	"./lv": 246,
	"./lv.js": 246,
	"./me": 247,
	"./me.js": 247,
	"./mi": 248,
	"./mi.js": 248,
	"./mk": 249,
	"./mk.js": 249,
	"./ml": 250,
	"./ml.js": 250,
	"./mn": 251,
	"./mn.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 253,
	"./ms-my": 254,
	"./ms-my.js": 254,
	"./ms.js": 253,
	"./mt": 255,
	"./mt.js": 255,
	"./my": 256,
	"./my.js": 256,
	"./nb": 257,
	"./nb.js": 257,
	"./ne": 258,
	"./ne.js": 258,
	"./nl": 259,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 259,
	"./nn": 261,
	"./nn.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./tg": 282,
	"./tg.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 288,
	"./tzm-latn": 289,
	"./tzm-latn.js": 289,
	"./tzm.js": 288,
	"./ug-cn": 290,
	"./ug-cn.js": 290,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
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
webpackContext.id = 421;

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/anjanadine/emonio/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/anjanadine/emonio/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_detail__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(89);
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
    function HomePage(navCtrl, ble, ngZone, ToastController) {
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.ToastController = ToastController;
        this.devices = [];
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/anjanadine/emonio/src/pages/home/home.html"*/'<html ng-app="myApp">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">\n\n  <title>Emonio-Homepage</title>\n\n</head>\n<ion-header>\n  <ion-navbar>\n  <ion-title class="home-header"> List of Available Devices</ion-title>\n  <ion-buttons end>\n    <button ion-button class="refresh-button" (click)="scan()">\n      <ion-icon name="ios-refresh"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n  <ion-row style=\'background-color:#305680;\'>\n    <ion-col col-4>\n      <strong>Device</strong>\n    </ion-col>\n    <ion-col col-4>\n      <strong>RSSI</strong>\n    </ion-col>\n    <ion-col col-4>\n      <strong>Status</strong>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5> <button ion-item detail-none *ngFor="let device of devices" (click)="deviceSelected(device)">\n           {{ device.name || \'Unbenannt\' }} </button>\n   </ion-col>\n\n    <ion-col col-3>\n      <button ion-item detail-none *ngFor="let device of devices">\n        <p>{{ device.rssi }} </p>\n      </button>\n    </ion-col>\n    <ion-col col-3>\n      <button ion-item detail-none *ngFor="let device of devices">\n        <p>test</p>\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar class="home-footer">\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n    <ion-buttons>\n      <button ion-button icon-only >\n        <ion-icon name="md-information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n      </ion-col>\n\n<ion-col>\n<ion-buttons>\n    <button ion-button icon-only >\n      <ion-icon name="neuneu"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-col>\n      <ion-col>\n        <ion-buttons>\n      <button ion-button icon-only >\n        <ion-icon name="md-construct"></ion-icon>\n      </button>\n    </ion-buttons>\n      </ion-col>\n      <ion-col>\n    <ion-buttons>\n      <button ion-button icon-only >\n        <ion-icon name="md-download"></ion-icon>\n      </button>\n    </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n<!--\n\n\ntest code fuer detail.html\n\n\n        -->\n</html>\n'/*ion-inline-end:"/Users/anjanadine/emonio/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map