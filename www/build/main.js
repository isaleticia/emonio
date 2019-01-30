webpackJsonp([1],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_detail__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(110);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/taake/Downloads/emonio/emonio/src/pages/home/home.html"*/'<html ng-app="myApp">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">\n  <title>Emonio-Homepage</title>\n\n</head>\n<body ng-app="myApp">\n\n<ion-header>\n  <ion-navbar class="home-header">\n  <ion-title  style=\'background-color:#C6C6C6;\'>\n\n      <h3>Available Devices\n        </h3>\n\n  </ion-title>\n  <ion-buttons end >\n    <button ion-button class="refresh-button" (click)="scan()" >\n      <ion-icon name="refresh-circle"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!--\n<ion-header>\n  <ion-toolbar class="home-header">\n    <ion-title  style=\'background-color:#C6C6C6;\'>\n\n      <h3>Available Devices\n      </h3>\n\n    </ion-title>\n    <ion-buttons end >\n      <button ion-button class="refresh-button" (click)="scan()" >\n        <ion-icon name="refresh-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n-->\n<ion-content>\n  <ion-grid>\n  <ion-row style=\'background-color:#305680;\'>\n    <ion-col col-4>\n      <strong>Device</strong>\n    </ion-col>\n    <ion-col col-4>\n      <strong>RSSI</strong>\n    </ion-col>\n    <ion-col col-4>\n      <strong>Status</strong>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5> <button ion-item detail-none *ngFor="let device of devices" (click)="deviceSelected(device)">\n           {{ device.name || \'Unbenannt\' }} </button>\n   </ion-col>\n\n    <ion-col col-3>\n      <button ion-item detail-none *ngFor="let device of devices">\n        <p>{{ device.rssi }} </p>\n      </button>\n    </ion-col>\n    <ion-col col-3>\n      <button ion-item detail-none *ngFor="let device of devices">\n        <p>test</p>\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar class="home-footer">\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n    <ion-buttons>\n      <button ion-button icon-only >\n        <ion-icon name="md-information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n      </ion-col>\n\n<ion-col>\n<ion-buttons>\n    <button ion-button icon-only >\n      <ion-icon name="neuneu"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-col>\n      <ion-col>\n        <ion-buttons>\n      <button ion-button icon-only >\n        <ion-icon name="md-construct"></ion-icon>\n      </button>\n    </ion-buttons>\n      </ion-col>\n      <ion-col>\n    <ion-buttons>\n      <button ion-button icon-only >\n        <ion-icon name="md-download"></ion-icon>\n      </button>\n    </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n</body>\n</html>'/*ion-inline-end:"/Users/taake/Downloads/emonio/emonio/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
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
            selector: 'page-deviceInfo',template:/*ion-inline-start:"/Users/taake/Downloads/emonio/emonio/src/pages/deviceInfo/deviceInfo.html"*/'<ion-header>\n <ion-navbar>\n   <ion-title>\n   </ion-title>\n </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-style">\n <ion-grid>\n     <ion-row style=\'background-color:#305680; color: white;\'>\n       <ion-col>\n         <strong>Device Information </strong>\n       </ion-col>\n       </ion-row>\n       <ion-row>\n       </ion-row>\n       <p><strong>System ID</strong> {{sysid}}</p>\n           <p><strong>Model Number</strong> {{modelnr}}</p>\n               <p><strong>Serial Number</strong> {{serialnr}}</p>\n                   <p><strong>Firmware Revision</strong> {{firmware}}</p>\n                       <p><strong>Hardware Revision </strong>{{hardwarerevision}}</p>\n                           <p><strong>Software Revision</strong> {{softwarerevision}}</p>\n                           <p><strong>Manufacture Name </strong>{{manu}}</p>\n                           <p>{{cert}} <strong>IEEE</strong> Regulatory Certification Data List</p>\n                           <p><strong>PnP ID</strong> {{pnpid}}</p>\n\n\n </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/Users/taake/Downloads/emonio/emonio/src/pages/deviceInfo/deviceInfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DeviceInfoPage);
    return DeviceInfoPage;
}());

//# sourceMappingURL=deviceInfo.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deviceInfo/deviceInfo.module": [
		460,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviceInfo_deviceInfo__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
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
        this.energyGet = "energy";
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
        this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.energyGet)).then(function (data) { return console.log("write energy commando" + _this.bytesToString(data)); });
        /* reads the current value of the characteristic
           bytesToString() converts output (arraybuffer) to string
           parse the JSON String to JS Object to access specific value */
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
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], DetailPage.prototype, "lineCanvas", void 0);
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/taake/Downloads/emonio/emonio/src/pages/detail/detail.html"*/'<ion-header> <br>\n  <ion-navbar>\n    <ion-title>\n      {{ device.name || \'Unnamed\'}}\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="goToDeviceInfoPage()" icon-end>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <strong>Firmware </strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 style="background:#305680">\n\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase A\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase B\n      </ion-col>\n      <ion-col col-3 style="background:#305680">\n        Phase C\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        U\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ vrms0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ vrms1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ vrms2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        I\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ irms0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ irms1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ irms2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        P\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ watt0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ watt1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ watt2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        S\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ var0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ var1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ var2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        Q\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ va0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ va1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ va0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        t\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ freq0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ freq1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ freq2 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        cos\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ phi0 }}\n      </ion-col>\n\n      <ion-col col-3 style="background:#848484">\n        {{ phi1 }}\n      </ion-col>\n      <ion-col col-3 style="background:#848484">\n        {{ phi2 }}\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n       <ion-card-header>\n         Leistung in Watt\n       </ion-card-header>\n       <ion-card-content>\n         <canvas #lineCanvas></canvas>\n       </ion-card-content>\n     </ion-card>\n\n</ion-content>\n<!-- alter footer ohne custom icons\n<ion-footer >\n  <ion-toolbar class="emonio-footer">\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-information-circle"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-settings"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-document"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-folder"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-download"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n-->\n<ion-footer >\n  <ion-toolbar class="emonio-footer">\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-information-circle"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-settings"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="noun_log_1131852"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="md-folder"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col>\n        <ion-buttons>\n          <button ion-button icon-only >\n            <ion-icon name="noun_CSV_1126810"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/taake/Downloads/emonio/emonio/src/pages/detail/detail.html"*/,
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

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_bluetooth_serial__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deviceInfo_deviceInfo__ = __webpack_require__(112);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_deviceInfo_deviceInfo__["a" /* DeviceInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
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
                __WEBPACK_IMPORTED_MODULE_11__pages_deviceInfo_deviceInfo__["a" /* DeviceInfoPage */]
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

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-il": 246,
	"./en-il.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es-us": 251,
	"./es-us.js": 251,
	"./es.js": 249,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ku": 280,
	"./ku.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mn": 290,
	"./mn.js": 290,
	"./mr": 291,
	"./mr.js": 291,
	"./ms": 292,
	"./ms-my": 293,
	"./ms-my.js": 293,
	"./ms.js": 292,
	"./mt": 294,
	"./mt.js": 294,
	"./my": 295,
	"./my.js": 295,
	"./nb": 296,
	"./nb.js": 296,
	"./ne": 297,
	"./ne.js": 297,
	"./nl": 298,
	"./nl-be": 299,
	"./nl-be.js": 299,
	"./nl.js": 298,
	"./nn": 300,
	"./nn.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./tg": 321,
	"./tg.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./ug-cn": 329,
	"./ug-cn.js": 329,
	"./uk": 330,
	"./uk.js": 330,
	"./ur": 331,
	"./ur.js": 331,
	"./uz": 332,
	"./uz-latn": 333,
	"./uz-latn.js": 333,
	"./uz.js": 332,
	"./vi": 334,
	"./vi.js": 334,
	"./x-pseudo": 335,
	"./x-pseudo.js": 335,
	"./yo": 336,
	"./yo.js": 336,
	"./zh-cn": 337,
	"./zh-cn.js": 337,
	"./zh-hk": 338,
	"./zh-hk.js": 338,
	"./zh-tw": 339,
	"./zh-tw.js": 339
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
webpackContext.id = 440;

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(111);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/taake/Downloads/emonio/emonio/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/taake/Downloads/emonio/emonio/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map