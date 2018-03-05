webpackJsonp([5],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_location_student_location__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, alert, auth, toast) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.auth = auth;
        this.toast = toast;
    }
    HomePage.prototype.showlocation = function (i) {
        var _this = this;
        console.log(i);
        this.auth.checkbus(i).subscribe(function (data) {
            if (data.value) {
                _this.alert.create({
                    message: "Bus not Yet Started or has reached the College",
                    buttons: ['Ok']
                }).present();
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_location_student_location__["a" /* StudentLocationPage */], { 'busno': i });
            }
        });
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Bus Locator\n    </ion-title>\n    <ion-buttons end><button icon-only ion-button (click)="logout()"> <ion-icon  name="log-out"></ion-icon></button></ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <p>Welcome to Bus Locator</p>\n\n<p>\n  Choose a bus to know the location\n</p>\n\n<ion-card (click) = "showlocation(3)">\n  <img src="assets/imgs/3.jpg"/>\n  </ion-card>\n  <ion-card (click) = "showlocation(4)">\n    <img src="assets/imgs/4.jpg"/>\n    </ion-card>\n    <ion-card (click) = "showlocation(10)">\n      <img src="assets/imgs/10.jpg"/>\n      </ion-card>\n      <ion-card (click) = "showlocation(12)">\n        <img src="assets/imgs/12.jpg"/>\n        </ion-card>\n        <ion-card (click) = "showlocation(18)">\n          <img src="assets/imgs/18.jpg"/>\n          </ion-card>\n          <ion-card (click) = "showlocation(20)">\n            <img src="assets/imgs/20.jpg"/>\n            </ion-card>\n            <ion-card (click) = "showlocation(21)">\n              <img src="assets/imgs/21.jpg"/>\n              </ion-card>\n              <ion-card (click) = "showlocation(22)">\n                <img src="assets/imgs/22.jpg"/>\n                </ion-card>\n                <ion-card (click) = "showlocation(23)">\n                  <img src="assets/imgs/23.jpg"/>\n                  </ion-card>\n                  <ion-card (click) = "showlocation(24)">\n                    <img src="assets/imgs/24.jpg"/>\n                    </ion-card>\n                    <ion-card (click) = "showlocation(34)">\n                      <img src="assets/imgs/34.jpg"/>\n                      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__service_authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_driver__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_authService__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, geo, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.auth = auth;
        this.location = {
            latitude: 0,
            longitude: 0
        };
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].timer(2000, 1000);
        timer.subscribe(function (t) { return _this.tickerFunc(t); });
    };
    LocationPage.prototype.tickerFunc = function (tick) {
        // this.geo.getCurrentPosition().then((data)=>{
        //     console.log(data)
        //     this.location.latitude = data.coords.latitude,
        //     this.location.longitude = data.coords.longitude
        // })
        this.location.latitude = 10.8102317;
        this.location.longitude = 77.0111902;
        console.log(this.location.latitude, this.location.longitude);
        this.auth.updatelocation(this.location.latitude, this.location.longitude).subscribe(function (data) {
            console.log(data);
        });
    };
    LocationPage.prototype.stopdriving = function () {
        var _this = this;
        this.auth.updatelog().subscribe(function (data) {
            console.log(data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__driver_driver__["a" /* DriverPage */]);
        });
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\location\location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bus Locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <agm-map [latitude]="location.latitude" [longitude]="location.longitude" [zoom]="17">\n    <agm-marker [latitude]="location.latitude" [longitude]="location.longitude"></agm-marker>\n  </agm-map>\n  <button ion-button block (click)="stopdriving()"> Stop driving </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__service_authService__["a" /* AuthService */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alert, auth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.auth = auth;
        this.toast = toast;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        this.auth.userExist(form.value.email).subscribe(function (data) {
            if (data == true) {
                _this.alert.create({
                    title: "Warning",
                    message: "User already exist !!!",
                    buttons: ['Ok']
                }).present();
            }
            else {
                _this.user = {
                    email: form.value.email,
                    password: form.value.password,
                    name: form.value.name,
                    age: form.value.age,
                    identityno: form.value.idno,
                    role: form.value.person
                };
                _this.auth.register(_this.user).subscribe(function (data) {
                    if (_this.user.role == 'driver') {
                        _this.auth.addlocation(data.userid).subscribe(function (data1) {
                            _this.auth.adddriver(data.userid).subscribe(function (data2) {
                                console.log(data2);
                            });
                        });
                    }
                    _this.toast.create({
                        message: "User registered Successfully !!!",
                        duration: 1500
                    });
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                });
            }
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bus Locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #form = "ngForm" (ngSubmit)="register(form)">\n        <ion-item>\n          <ion-label fixed>\n            Email\n          </ion-label>\n          <ion-input name = "email" type="email" ngModel required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label fixed>\n              Password\n            </ion-label>\n            <ion-input name = "password" type="password" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              Person\n            </ion-label>\n            <ion-select ngModel name="person">\n              <ion-option value="student">\n                Student\n              </ion-option>\n              <ion-option value ="driver">\n                  Driver\n                </ion-option>\n            </ion-select>\n          </ion-item>\n          <div  *ngIf="form.value.person == \'driver\'">\n          <ion-item>\n              <ion-label fixed>\n                Name\n              </ion-label>\n              <ion-input name = "name" type="text" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>\n                  Age\n                </ion-label>\n                <ion-input name = "age" type="text" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label fixed>\n                    Indentity No\n                  </ion-label>\n                  <ion-input name = "idno" type="text" ngModel required></ion-input>\n                </ion-item>\n                </div>\n          <button ion-button block [disabled]="!form.valid"> Register </button>\n      </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__service_authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authService__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StudentLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentLocationPage = (function () {
    function StudentLocationPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
    }
    StudentLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentLocationPage');
    };
    StudentLocationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.busno = this.navParams.get('busno');
        this.auth.getbusdetails(this.busno).subscribe(function (data) {
            _this.age = data.age;
            _this.longitude = data.longitude;
            _this.latitude = data.latitude;
            _this.name = data.name;
            _this.starttime = data.starttime;
            _this.identity = data.identityno;
        });
    };
    StudentLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student-location',template:/*ion-inline-start:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\student-location\student-location.html"*/'<!--\n  Generated template for the StudentLocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bus Locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <agm-map [latitude]="latitude" [longitude]="longitude" [zoom]="17">\n    <agm-marker [latitude]="latitude" [longitude]="longitude"></agm-marker>\n  </agm-map>\n<p>Name : {{name}}</p>\n<p>Age : {{age}}</p>\n<p>identity no : {{identity}}</p>\n<p>start time : {{starttime}}</p>\n<p>Bus no: {{busno}}</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\student-location\student-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_authService__["a" /* AuthService */]])
    ], StudentLocationPage);
    return StudentLocationPage;
}());

//# sourceMappingURL=student-location.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/driver/driver.module": [
		704,
		4
	],
	"../pages/location/location.module": [
		705,
		3
	],
	"../pages/login/login.module": [
		706,
		2
	],
	"../pages/register/register.module": [
		707,
		1
	],
	"../pages/student-location/student-location.module": [
		708,
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
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_authService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_driver_driver__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_location_location__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_student_location_student_location__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_driver_driver__["a" /* DriverPage */], __WEBPACK_IMPORTED_MODULE_14__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_student_location_student_location__["a" /* StudentLocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/driver/driver.module#DriverPageModule', name: 'DriverPage', segment: 'driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-location/student-location.module#StudentLocationPageModule', name: 'StudentLocationPage', segment: 'student-location', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyARLFLhp39oDBEOaW7j_oYQi9nZ7TA380Y'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_driver_driver__["a" /* DriverPage */], __WEBPACK_IMPORTED_MODULE_14__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_student_location_student_location__["a" /* StudentLocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__service_authService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.userExist = function (email) {
        return this.http.post("https://tranquil-meadow-57430.herokuapp.com/checkuser", { email: email }).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.register = function (user) {
        return this.http.post("https://tranquil-meadow-57430.herokuapp.com/register", user).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.addlocation = function (userid) {
        return this.http.post("https://tranquil-meadow-57430.herokuapp.com/addlocation", { userid: userid }).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.updatelocation = function (latitude, longitude) {
        return this.http.put("https://tranquil-meadow-57430.herokuapp.com/updatelocation", { latitude: latitude, longitude: longitude, userid: localStorage.getItem('userid') }).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.login = function (email, password) {
        return this.http.post("https://tranquil-meadow-57430.herokuapp.com/login", { email: email, password: password }).map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    AuthService.prototype.getuser = function () {
        return this.http.get("https://tranquil-meadow-57430.herokuapp.com/user/" + localStorage.getItem('userid')).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.getuserrole = function () {
        return localStorage.getItem('role');
    };
    AuthService.prototype.isUser = function () {
        return localStorage.getItem('token') != null;
    };
    AuthService.prototype.adddriver = function (userid) {
        return this.http.post("https://tranquil-meadow-57430.herokuapp.com/adddriver", { userid: userid }).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.startdriving = function (busno, starttime) {
        return this.http.put("https://tranquil-meadow-57430.herokuapp.com/startdriving", { userid: localStorage.getItem('userid'), busno: busno, starttime: starttime }).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.checkbus = function (busno) {
        return this.http.post("https://tranquil-meadow-57430.herokuapp.com/checkbus", { busno: busno }).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.getbusdetails = function (busno) {
        return this.http.get("https://tranquil-meadow-57430.herokuapp.com/getbusdetails/" + busno).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.updatelog = function () {
        return this.http.put("https://tranquil-meadow-57430.herokuapp.com/updatelog", { userid: localStorage.getItem("userid") }).map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_authService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_driver__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toast_toast_controller__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, toast, navParams, nav, auth) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.nav = nav;
        this.auth = auth;
    }
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.auth.login(form.value.email, form.value.password).subscribe(function (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userid", data.userid);
            localStorage.setItem("role", data.role);
            if (_this.auth.getuserrole() == 'driver') {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__driver_driver__["a" /* DriverPage */]);
            }
            else if (_this.auth.getuserrole() == 'student') {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.toast.create({
                    message: data.message
                }).present();
            }
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bus Locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form #form = "ngForm" (ngSubmit)="login(form)">\n  <ion-item>\n    <ion-label fixed>\n      Email\n    </ion-label>\n    <ion-input name = "email" type="email" ngModel required></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label fixed>\n        Password\n      </ion-label>\n      <ion-input name = "password" type="password" ngModel required></ion-input>\n    </ion-item>\n    <button ion-button block [disabled]="!form.valid"> Login </button>\n</form>\n<button ion-button block (click)="register()">Register</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toast_toast_controller__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__service_authService__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverPage = (function () {
    function DriverPage(navCtrl, alert, geo, navParams, auth) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.geo = geo;
        this.navParams = navParams;
        this.auth = auth;
    }
    DriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverPage');
    };
    DriverPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getuser().subscribe(function (data) {
            _this.user = data;
            _this.name = _this.user.name;
            console.log(data);
        });
    };
    DriverPage.prototype.drive = function (form) {
        var _this = this;
        this.auth.checkbus(form.value.busno).subscribe(function (data) {
            if (data.value == true) {
                _this.auth.startdriving(form.value.busno, form.value.starttime).subscribe(function (data) {
                    console.log(data);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */]);
                });
            }
            else {
                _this.alert.create({
                    message: "bus already started choose some other bus",
                    buttons: ['Ok']
                }).present();
                console.log();
            }
        });
    };
    DriverPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\driver\driver.html"*/'<!--\n  Generated template for the DriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bus Locator</ion-title>\n   <ion-buttons end><button icon-only ion-button (click)="logout()"> <ion-icon  name="log-out"></ion-icon></button></ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>Welcome {{ name }}</p>\n<p>Choose which bus number you are going to ride</p>\n<form #form = "ngForm" (ngSubmit)="drive(form)">\n  <ion-item>\n    <ion-label fixed>\n      Start time\n    </ion-label>\n    <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" ngModel name="starttime"></ion-datetime>\n  </ion-item>\n    <ion-item>\n      <ion-label>\n        Bus No\n      </ion-label>\n      <ion-select ngModel name="busno">\n        <ion-option value="3">\n          3\n        </ion-option>\n        <ion-option value ="4">\n           4\n          </ion-option>\n          <ion-option value ="10">\n            10\n           </ion-option>\n           <ion-option value ="12">\n            12\n           </ion-option>\n           <ion-option value ="18">\n            18\n           </ion-option>\n           <ion-option value ="20">\n            20\n           </ion-option>\n           <ion-option value ="21">\n            21\n           </ion-option>\n           <ion-option value ="22">\n            22\n           </ion-option>\n           <ion-option value ="23">\n            23\n           </ion-option>\n           <ion-option value ="24">\n            24\n           </ion-option>\n           <ion-option value ="34">\n            34\n           </ion-option>\n         \n      </ion-select>\n    </ion-item>\n    <button ion-button block [disabled]="!form.valid">Start Driving</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\pages\driver\driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_authService__["a" /* AuthService */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_authService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_driver_driver__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.auth = auth;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        if (this.auth.isUser()) {
            if (this.auth.getuserrole() == 'driver') {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_driver_driver__["a" /* DriverPage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
            }
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Nandhu\Desktop\bus locator\bus_locator\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__service_authService__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map