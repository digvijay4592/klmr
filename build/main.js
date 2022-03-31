webpackJsonp([0],{

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addprestart/addprestart.module": [
		161
	],
	"../pages/cabsand-addprestart/cabsand-addprestart.module": [
		165
	],
	"../pages/cabsand-prestart/cabsand-prestart.module": [
		167
	],
	"../pages/dashboard/dashboard.module": [
		168
	],
	"../pages/klmr-fuel-add/klmr-fuel-add.module": [
		171
	],
	"../pages/klmr-fuel-truck/klmr-fuel-truck.module": [
		174
	],
	"../pages/klmr-fuel/klmr-fuel.module": [
		173
	],
	"../pages/login/login.module": [
		176
	],
	"../pages/prestart/prestart.module": [
		177
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddprestartPageModule", function() { return AddprestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addprestart__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddprestartPageModule = /** @class */ (function () {
    function AddprestartPageModule() {
    }
    AddprestartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addprestart__["a" /* AddprestartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addprestart__["a" /* AddprestartPage */]),
            ],
        })
    ], AddprestartPageModule);
    return AddprestartPageModule;
}());

//# sourceMappingURL=addprestart.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddprestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prestart_prestart__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AddprestartPage = /** @class */ (function () {
    function AddprestartPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.selectedFleetItems = [];
        this.isUpdate = false;
        this.params = {};
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        if (this.params) {
            this.isUpdate = true;
        }
        this.createPrestart = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            hours: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            kilometers: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            drivername: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            oils_added: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        console.log("param", this.params);
    }
    AddprestartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
        this.getappColor();
        this.getMetaData();
    };
    AddprestartPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddprestartPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFleetList()];
                    case 1:
                        _a.fleetList = _b.sent();
                        if (this.params) {
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddprestartPage.prototype.getFleetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fleetList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/fleet/get", false)
                        .then(function (result) {
                        console.log("result", result);
                        _this.utiltiy.stopLoading();
                        if (result.status) {
                            return result.result;
                        }
                    }, function (err) {
                        _this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                        return [];
                    })];
            });
        });
    };
    AddprestartPage.prototype.regenerateForm = function () {
        console.log("hurrayyy");
        this.createPrestart.patchValue({
            user_id: this.params.user_id,
            date: this.params.date,
            hours: this.params.hours,
            kilometers: this.params.kilometers,
            drivername: this.params.drivername,
            location: this.params.location,
            oils_added: this.params.oils_added,
        });
        this.selectedFleet = this.params.fleet_no;
        this.fleetChanged(this.params.fleet_no);
    };
    AddprestartPage.prototype.fleetChanged = function (fleetData) {
        console.log(this.fleetList, "fleetName", fleetData);
        var index = this.fleetList.findIndex(function (list_) { return list_.fleet_no.toLowerCase() == fleetData.toLowerCase(); });
        if (index == -1) {
            return;
        }
        this.createPrestart.patchValue({
            fleet_no: fleetData,
        });
        var vehicles = this.fleetList[index].vehicles;
        var status = vehicles.includes(",");
        var vehicleList = [];
        console.log("status", status);
        if (status) {
            vehicleList = vehicles.split(",");
        }
        else {
            vehicleList.push(vehicles);
        }
        this.generateFleetItemList(vehicleList);
    };
    AddprestartPage.prototype.generateFleetItemList = function (list) {
        var _this = this;
        this.selectedFleetItems = [];
        list.forEach(function (vehicle_, i) {
            var obj = {};
            if (_this.isUpdate) {
                var status_1 = _this.params.item_status.includes(",");
                if (status_1) {
                    var item_status = _this.params.item_status.split(",");
                    var comment = _this.params.comment.split(",");
                    obj = {
                        "name": vehicle_,
                        "status": item_status[i],
                        "comments": comment[i],
                    };
                }
                else {
                    obj = {
                        "name": vehicle_,
                        "status": _this.params.item_status,
                        "comments": _this.params.comment,
                    };
                }
            }
            else {
                obj = {
                    "name": vehicle_,
                    "status": null,
                    "comments": "",
                };
            }
            _this.selectedFleetItems.push(obj);
        });
        console.log("vehicleList", this.selectedFleetItems);
    };
    AddprestartPage.prototype.submit = function () {
        var _this = this;
        console.log("this.credentialsForm.value", this.createPrestart.value);
        var items = "";
        var item_status = "";
        var comment = "";
        var formKeys = Object.keys(this.createPrestart.value);
        this.selectedFleetItems.forEach(function (element) {
            items = items + element.name + ",";
            item_status = item_status + element.status + ",";
            comment = comment + element.comments + ",";
        });
        items = items.slice(0, items.length - 1);
        item_status = item_status.slice(0, item_status.length - 1);
        comment = comment.slice(0, comment.length - 1);
        if (this.isUpdate) {
            var string_1 = "";
            formKeys.forEach(function (key) {
                if (string_1.length == 0) {
                    string_1 = string_1 + "" + key + "=" + _this.createPrestart.value[key];
                }
                else {
                    string_1 = string_1 + "&" + key + "=" + _this.createPrestart.value[key];
                }
            });
            var body = string_1 + "&items[]=" + ("" + items) + "&item_status[]=" + ("" + item_status) + "&comment[]=" + ("" + comment);
            console.log("string-1", body);
            this.updatePrestart(body, this.params.id);
        }
        else {
            var formData_1 = new FormData();
            formKeys.forEach(function (key) {
                formData_1.append(key, _this.createPrestart.value[key]);
            });
            formData_1.append("items[]", items);
            formData_1.append("item_status[]", item_status);
            formData_1.append("comment[]", comment);
            this.addPrestart(formData_1);
        }
    };
    AddprestartPage.prototype.addPrestart = function (formData) {
        var _this = this;
        this.api.post("/prestart/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__prestart_prestart__["a" /* PrestartPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    AddprestartPage.prototype.updatePrestart = function (formData, id) {
        var _this = this;
        this.api.put("/prestart/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__prestart_prestart__["a" /* PrestartPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    AddprestartPage.prototype.stringFromArray = function () {
    };
    AddprestartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addprestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/addprestart/addprestart.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n  <ion-navbar>\n    <ion-title *ngIf="!isUpdate">Add Prestart</ion-title>\n    <ion-title *ngIf="isUpdate">Update Prestart</ion-title>\n    <ion-buttons end> <!-- Here we use end -->\n      <button ion-button icon-only  color="light" [disabled]="!createPrestart.valid" (click)="submit()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item margin-bottom >\n    <ion-label>Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="fleetChanged(selectedFleet)">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row  padding-bottom >\n    <ion-card no-margin >\n      <form [formGroup]="createPrestart"  novalidate>\n      <ion-list >\n\n        <ion-item>\n          <ion-label floating >Date</ion-label>\n          <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date" ></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>User Id</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="user_id"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Hours</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="hours"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Kilometers</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="kilometers"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Driver Name</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="drivername"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Location</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input>\n        </ion-item>\n\n        <ion-item margin-bottom>\n          <ion-label floating>Oils/Coolant added</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="oils_added"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n</form>\n\n    </ion-card>\n  </ion-row>\n\n  <ion-row *ngIf="selectedFleetItems.length > 0" >\n    <ion-card no-margin *ngFor="let items of selectedFleetItems">\n      <ion-card-content  >\n        <ion-card-title>\n          {{items.name}}\n        </ion-card-title>\n\n        <ion-row radio-group [(ngModel)]="items.status">\n          <ion-col col-6>\n            <ion-label no-margin>Good</ion-label>\n            <ion-radio value="Good" ></ion-radio>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label no-margin>Faulty</ion-label>\n            <ion-radio value="Faulty"></ion-radio>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="items.status == \'Faulty\'">\n          <ion-col >\n            <ion-label no-margin>Comments</ion-label>\n            <ion-input class="border-1px-solid" type="text" [(ngModel)]="items.comments"></ion-input>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/addprestart/addprestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], AddprestartPage);
    return AddprestartPage;
}());

//# sourceMappingURL=addprestart.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandAddprestartPageModule", function() { return CabsandAddprestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_addprestart__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandAddprestartPageModule = /** @class */ (function () {
    function CabsandAddprestartPageModule() {
    }
    CabsandAddprestartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_addprestart__["a" /* CabsandAddprestartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_addprestart__["a" /* CabsandAddprestartPage */]),
            ],
        })
    ], CabsandAddprestartPageModule);
    return CabsandAddprestartPageModule;
}());

//# sourceMappingURL=cabsand-addprestart.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandAddprestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_prestart_cabsand_prestart__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CabsandAddprestartPage = /** @class */ (function () {
    function CabsandAddprestartPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.defect_clear = null;
        this.selectedFleetItems = [];
        this.isUpdate = false;
        this.params = {};
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        if (this.params) {
            this.isUpdate = true;
        }
        this.createPrestart = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        console.log("param", this.params);
    }
    CabsandAddprestartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
        this.getappColor();
        this.getMetaData();
    };
    CabsandAddprestartPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandAddprestartPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFleetList()];
                    case 1:
                        _a.fleetList = _b.sent();
                        if (this.params) {
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandAddprestartPage.prototype.getFleetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fleetList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/tansix_prestart/fleet/get", false)
                        .then(function (result) {
                        console.log("result", result);
                        _this.utiltiy.stopLoading();
                        if (result.status) {
                            return result.result;
                        }
                    }, function (err) {
                        _this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                        return [];
                    })];
            });
        });
    };
    CabsandAddprestartPage.prototype.regenerateForm = function () {
        this.createPrestart.patchValue({
            user_id: this.params.user_id,
            date: this.params.date,
        });
        this.selectedFleet = this.params.fleet_no;
        this.defect_clear = this.params.defect_clear;
        this.fleetChanged(this.params.fleet_no);
    };
    CabsandAddprestartPage.prototype.fleetChanged = function (fleetData) {
        console.log(this.fleetList, "fleetName", fleetData);
        var index = this.fleetList.findIndex(function (list_) { return list_.fleet_no.toLowerCase() == fleetData.toLowerCase(); });
        if (index == -1) {
            return;
        }
        this.createPrestart.patchValue({
            fleet_no: fleetData,
        });
        var vehicles = this.fleetList[index].items;
        var status = vehicles.includes(",");
        var vehicleList = [];
        console.log("status", status);
        if (status) {
            vehicleList = vehicles.split(",");
        }
        else {
            vehicleList.push(vehicles);
        }
        this.generateFleetItemList(vehicleList);
    };
    CabsandAddprestartPage.prototype.generateFleetItemList = function (list) {
        var _this = this;
        this.selectedFleetItems = [];
        list.forEach(function (vehicle_, i) {
            var obj = {};
            if (_this.isUpdate) {
                var status_1 = _this.params.item_status.includes(",");
                if (status_1) {
                    var item_status = _this.params.item_status.split(",");
                    var comment = _this.params.comment.split(",");
                    obj = {
                        "name": vehicle_,
                        "status": item_status[i],
                        "comments": comment[i],
                    };
                }
                else {
                    obj = {
                        "name": vehicle_,
                        "status": _this.params.item_status,
                        "comments": _this.params.comment,
                    };
                }
            }
            else {
                obj = {
                    "name": vehicle_,
                    "status": null,
                    "comments": "",
                };
            }
            _this.selectedFleetItems.push(obj);
        });
        console.log("vehicleList", this.selectedFleetItems);
    };
    CabsandAddprestartPage.prototype.submit = function () {
        var _this = this;
        if (!this.defect_clear) {
            this.utiltiy.toaster("Kindly select defect clear");
            return;
        }
        console.log("this.credentialsForm.value", this.createPrestart.value);
        var items = "";
        var item_status = "";
        var comment = "";
        var formKeys = Object.keys(this.createPrestart.value);
        this.selectedFleetItems.forEach(function (element) {
            items = items + element.name + ",";
            item_status = item_status + element.status + ",";
            comment = comment + element.comments + ",";
        });
        items = items.slice(0, items.length - 1);
        item_status = item_status.slice(0, item_status.length - 1);
        comment = comment.slice(0, comment.length - 1);
        if (this.isUpdate) {
            var string_1 = "";
            formKeys.forEach(function (key) {
                if (string_1.length == 0) {
                    string_1 = string_1 + "" + key + "=" + _this.createPrestart.value[key];
                }
                else {
                    string_1 = string_1 + "&" + key + "=" + _this.createPrestart.value[key];
                }
            });
            var body = string_1 + "&items[]=" + ("" + items) + "&item_status[]=" + ("" + item_status) + "&comment[]=" + ("" + comment) + "&defect_clear=" + ("" + this.defect_clear);
            console.log("string-1", body);
            this.updatePrestart(body, this.params.id);
        }
        else {
            var formData_1 = new FormData();
            formKeys.forEach(function (key) {
                formData_1.append(key, _this.createPrestart.value[key]);
            });
            formData_1.append("items[]", items);
            formData_1.append("item_status[]", item_status);
            formData_1.append("comment[]", comment);
            formData_1.append("defect_clear", this.defect_clear);
            this.addPrestart(formData_1);
        }
    };
    CabsandAddprestartPage.prototype.addPrestart = function (formData) {
        var _this = this;
        this.api.post("/tansix_prestart/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_prestart_cabsand_prestart__["a" /* CabsandPrestartPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandAddprestartPage.prototype.updatePrestart = function (formData, id) {
        var _this = this;
        this.api.put("/tansix_prestart/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_prestart_cabsand_prestart__["a" /* CabsandPrestartPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandAddprestartPage.prototype.stringFromArray = function () {
    };
    CabsandAddprestartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-addprestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-addprestart/cabsand-addprestart.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n  <ion-navbar>\n    <ion-title *ngIf="!isUpdate">Add CabsandPrestart</ion-title>\n    <ion-title *ngIf="isUpdate">Update CabsandPrestart</ion-title>\n    <ion-buttons end>\n      <!-- Here we use end -->\n      <button ion-button icon-only color="light" [disabled]="!createPrestart.valid" (click)="submit()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item margin-bottom >\n    <ion-label>Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="fleetChanged(selectedFleet)">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row padding-bottom >\n    <ion-card no-margin>\n      <form [formGroup]="createPrestart" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>User Id</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="user_id"></ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n\n    </ion-card>\n  </ion-row>\n<ion-row >\n\n  <ion-card no-margin margin-bottom >\n    <ion-card-header class="padding-border" >\n      <h2> Defect Clear</h2>\n   \n    </ion-card-header>\n    <ion-row radio-group [(ngModel)]="defect_clear" padding-left >\n      <ion-col col-6 margin-bottom>\n        <ion-label no-margin>True</ion-label>\n        <ion-radio value="True" ></ion-radio>\n      </ion-col>\n      <ion-col col-6 margin-bottom>\n        <ion-label no-margin>False</ion-label>\n        <ion-radio value="False"></ion-radio>\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n</ion-row>\n\n\n  <ion-row *ngIf="selectedFleetItems.length > 0" >\n    <ion-card no-margin *ngFor="let items of selectedFleetItems">\n      <ion-card-content>\n        <ion-card-title>\n          {{items.name}}\n        </ion-card-title>\n\n        <ion-row radio-group [(ngModel)]="items.status">\n          <ion-col col-6>\n            <ion-label no-margin>Good</ion-label>\n            <ion-radio value="Good" ></ion-radio>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label no-margin>Faulty</ion-label>\n            <ion-radio value="Faulty"></ion-radio>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="items.status == \'Faulty\'">\n          <ion-col>\n            <ion-label no-margin>Comments</ion-label>\n            <ion-input class="border-1px-solid" type="text" [(ngModel)]="items.comments"></ion-input>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-addprestart/cabsand-addprestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CabsandAddprestartPage);
    return CabsandAddprestartPage;
}());

//# sourceMappingURL=cabsand-addprestart.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandPrestartPageModule", function() { return CabsandPrestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_prestart__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandPrestartPageModule = /** @class */ (function () {
    function CabsandPrestartPageModule() {
    }
    CabsandPrestartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_prestart__["a" /* CabsandPrestartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_prestart__["a" /* CabsandPrestartPage */]),
            ],
        })
    ], CabsandPrestartPageModule);
    return CabsandPrestartPageModule;
}());

//# sourceMappingURL=cabsand-prestart.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utiltiy = utiltiy;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.logout = function () {
        this.utiltiy.removeStorage("token");
        this.utiltiy.removeStorage("roleID");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/dashboard/dashboard.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="light">Dashboard</ion-title>\n    <ion-buttons end> <!-- Here we use end -->\n      <button ion-button icon-only (click)="logout()" color="light">\n        <ion-icon name="exit"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtiltiyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UtiltiyProvider = /** @class */ (function () {
    function UtiltiyProvider(loadingCtrl, toastCtrl, storage, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    UtiltiyProvider.prototype.startLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            cssClass: 'loader'
        });
        this.loading.present();
    };
    // For stopLoading
    UtiltiyProvider.prototype.stopLoading = function () {
        var _this = this;
        this.loading.dismiss().catch(function () { return _this.loading.dismiss(); });
    };
    // show toast
    UtiltiyProvider.prototype.toaster = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    // For set data inside the local Storage
    UtiltiyProvider.prototype.setStorage = function (key, value) {
        this.storage.set(key, value);
    };
    // For get data from local Storage
    UtiltiyProvider.prototype.getStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage.get(key).then(function (val) {
                        console.log("value is", val);
                        return val;
                    })];
            });
        });
    };
    UtiltiyProvider.prototype.removeStorage = function (key) {
        this.storage.remove(key);
    };
    UtiltiyProvider.prototype.showDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var confirm;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                        title: 'Delete',
                                        message: 'Do you want to delete this record',
                                        buttons: [
                                            {
                                                text: 'No',
                                                handler: function () {
                                                    console.log('Disagree clicked');
                                                    return resolve(false);
                                                }
                                            },
                                            {
                                                text: 'Yes',
                                                handler: function () {
                                                    console.log('Agree clicked');
                                                    return resolve(true);
                                                }
                                            }
                                        ]
                                    })];
                                case 1:
                                    confirm = _a.sent();
                                    return [4 /*yield*/, confirm.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    UtiltiyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UtiltiyProvider);
    return UtiltiyProvider;
}());

//# sourceMappingURL=utiltiy.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.baseUrl = "https://cotest.online/klmr_cabsand/index.php/api"; //  live
    }
    AuthProvider.prototype.login = function (payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + '/login', payload).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                console.log("ERER:", err);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrFuelAddPageModule", function() { return KlmrFuelAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_add__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrFuelAddPageModule = /** @class */ (function () {
    function KlmrFuelAddPageModule() {
    }
    KlmrFuelAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_add__["a" /* KlmrFuelAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_fuel_add__["a" /* KlmrFuelAddPage */]),
            ],
        })
    ], KlmrFuelAddPageModule);
    return KlmrFuelAddPageModule;
}());

//# sourceMappingURL=klmr-fuel-add.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrFuelAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_fuel_klmr_fuel__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var KlmrFuelAddPage = /** @class */ (function () {
    function KlmrFuelAddPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.filledByList = [];
        this.containerList = [
            "Truck",
            "Gerry Cans",
            "Pod",
        ];
        this.isUpdate = false;
        this.params = {};
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        if (this.params) {
            this.isUpdate = true;
        }
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.createFuel = this.formBuilder.group({
            filled_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            odometer: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            diesel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            container: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('0', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel_odr: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        console.log("param", this.params);
    }
    KlmrFuelAddPage.prototype.ionViewDidLoad = function () {
        this.getappColor();
        this.getMetaData();
    };
    KlmrFuelAddPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrFuelAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFleetList()];
                    case 1:
                        _a.fleetList = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.getFilledBtList()];
                    case 2:
                        _b.filledByList = _c.sent();
                        if (this.params) {
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrFuelAddPage.prototype.getFleetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fleetList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/fleet/get", false)
                        .then(function (result) {
                        console.log("result", result);
                        _this.utiltiy.stopLoading();
                        if (result.status) {
                            return result.result;
                        }
                    }, function (err) {
                        _this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                        return [];
                    })];
            });
        });
    };
    KlmrFuelAddPage.prototype.getFilledBtList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.filledByList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/fuel/users/get", false)
                        .then(function (result) {
                        console.log("result", result);
                        result.result.forEach(function (element) {
                            element.name = element.firstName + " " + element.surname;
                        });
                        _this.utiltiy.stopLoading();
                        if (result.status) {
                            return result.result;
                        }
                    }, function (err) {
                        _this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                        return [];
                    })];
            });
        });
    };
    KlmrFuelAddPage.prototype.regenerateForm = function () {
        this.createFuel.patchValue({
            filled_by: this.params.filled_by,
            date: this.params.date,
            odometer: this.params.odometer,
            diesel: this.params.diesel,
            container: this.params.container,
            fleet_no: this.params.fleet_no,
            fuel: this.params.fuel,
            fuel_odr: this.params.fuel_odr,
            amount: this.params.amount,
            location: this.params.location,
        });
        this.filledBy = this.params.filled_by;
        this.selectedConatiner = this.params.container;
        this.selectedFleet = this.params.fleet_no;
    };
    KlmrFuelAddPage.prototype.dropDownChange = function (value, key) {
        this.createFuel.get("" + key).setValue(value);
    };
    KlmrFuelAddPage.prototype.submit = function () {
        var _this = this;
        console.log("this.credentialsForm.value", this.createFuel.value);
        var formKeys = Object.keys(this.createFuel.value);
        if (this.isUpdate) {
            var string_1 = "";
            formKeys.forEach(function (key) {
                if (string_1.length == 0) {
                    string_1 = string_1 + "" + key + "=" + _this.createFuel.value[key];
                }
                else {
                    string_1 = string_1 + "&" + key + "=" + _this.createFuel.value[key];
                }
            });
            var body = string_1;
            console.log("string-1", body);
            this.updateFuel(body, this.params.id);
        }
        else {
            var formData_1 = new FormData();
            formKeys.forEach(function (key) {
                formData_1.append(key, _this.createFuel.value[key]);
            });
            this.addFuel(formData_1);
        }
    };
    KlmrFuelAddPage.prototype.addFuel = function (formData) {
        var _this = this;
        this.api.post("/prestart/fuel/fuel/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_fuel_klmr_fuel__["a" /* KlmrFuelPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelAddPage.prototype.updateFuel = function (formData, id) {
        var _this = this;
        this.api.put("/prestart/fuel/fuel/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_fuel_klmr_fuel__["a" /* KlmrFuelPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-fuel-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-add/klmr-fuel-add.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Fuel</ion-title>\n      <ion-title *ngIf="isUpdate">Update Fuel</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createFuel.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item margin-bottom>\n    <ion-label>Filled By</ion-label>\n    <ion-select [(ngModel)]="filledBy" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(filledBy,\'filled_by\')">\n      <ion-option *ngFor="let filledBy of filledByList;let i = index" [value]="filledBy.name">{{filledBy.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Odometer</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="odometer"></ion-input>\n          </ion-item>\n\n          <ion-row padding-left>\n            <ion-label>Type of Fuel\n            </ion-label>\n          </ion-row>\n          <ion-row radio-group formControlName="diesel" padding>\n            <ion-col col-6>\n              <ion-label no-margin>Diesel</ion-label>\n              <ion-radio value="Diesel"></ion-radio>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label no-margin>Unleaded</ion-label>\n              <ion-radio value="Unleaded"></ion-radio>\n            </ion-col>\n          </ion-row>\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n  <ion-item margin-bottom>\n    <ion-label>Container</ion-label>\n    <ion-select [(ngModel)]="selectedConatiner" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedConatiner,\'container\')">\n      <ion-option *ngFor="let container of containerList;let i = index" [value]="container">{{container}}</ion-option>\n    </ion-select>\n  </ion-item>\n \n  <ion-item margin-bottom>\n    <ion-label>Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedFleet,\'fleet_no\')">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Fuel (In Litres)</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel"></ion-input>\n          </ion-item>\n       \n          <ion-item>\n            <ion-label floating>Amount</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="amount" disabled="true"></ion-input>\n          </ion-item>\n         \n          <ion-item>\n            <ion-label floating>Fuel ODR</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel_odr"></ion-input>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Location</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-add/klmr-fuel-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], KlmrFuelAddPage);
    return KlmrFuelAddPage;
}());

//# sourceMappingURL=klmr-fuel-add.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrFuelPageModule", function() { return KlmrFuelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_fuel__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrFuelPageModule = /** @class */ (function () {
    function KlmrFuelPageModule() {
    }
    KlmrFuelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_fuel__["a" /* KlmrFuelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_fuel__["a" /* KlmrFuelPage */]),
            ],
        })
    ], KlmrFuelPageModule);
    return KlmrFuelPageModule;
}());

//# sourceMappingURL=klmr-fuel.module.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrFuelTruckPageModule", function() { return KlmrFuelTruckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrFuelTruckPageModule = /** @class */ (function () {
    function KlmrFuelTruckPageModule() {
    }
    KlmrFuelTruckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck__["a" /* KlmrFuelTruckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck__["a" /* KlmrFuelTruckPage */]),
            ],
        })
    ], KlmrFuelTruckPageModule);
    return KlmrFuelTruckPageModule;
}());

//# sourceMappingURL=klmr-fuel-truck.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrFuelTruckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the KlmrFuelTruckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KlmrFuelTruckPage = /** @class */ (function () {
    function KlmrFuelTruckPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KlmrFuelTruckPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KlmrFuelTruckPage');
    };
    KlmrFuelTruckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-fuel-truck',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-truck/klmr-fuel-truck.html"*/'<!--\n  Generated template for the KlmrFuelTruckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>klmr-fuel-truck</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-truck/klmr-fuel-truck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], KlmrFuelTruckPage);
    return KlmrFuelTruckPage;
}());

//# sourceMappingURL=klmr-fuel-truck.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestartPageModule", function() { return PrestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prestart__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrestartPageModule = /** @class */ (function () {
    function PrestartPageModule() {
    }
    PrestartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prestart__["a" /* PrestartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prestart__["a" /* PrestartPage */]),
            ],
        })
    ], PrestartPageModule);
    return PrestartPageModule;
}());

//# sourceMappingURL=prestart.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_prestart_prestart_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addprestart_addprestart_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_prestart_prestart__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_crud_crud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cabsand_prestart_cabsand_prestart_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cabsand_addprestart_cabsand_addprestart_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_klmr_fuel_klmr_fuel_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_klmr_fuel_truck_klmr_fuel_truck_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_klmr_fuel_add_klmr_fuel_add_module__ = __webpack_require__(171);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_prestart_prestart_module__["PrestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_addprestart_addprestart_module__["AddprestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_cabsand_prestart_cabsand_prestart_module__["CabsandPrestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_cabsand_addprestart_cabsand_addprestart_module__["CabsandAddprestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_klmr_fuel_klmr_fuel_module__["KlmrFuelPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_klmr_fuel_truck_klmr_fuel_truck_module__["KlmrFuelTruckPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_klmr_fuel_add_klmr_fuel_add_module__["KlmrFuelAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addprestart/addprestart.module#AddprestartPageModule', name: 'AddprestartPage', segment: 'addprestart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-addprestart/cabsand-addprestart.module#CabsandAddprestartPageModule', name: 'CabsandAddprestartPage', segment: 'cabsand-addprestart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-prestart/cabsand-prestart.module#CabsandPrestartPageModule', name: 'CabsandPrestartPage', segment: 'cabsand-prestart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-fuel-add/klmr-fuel-add.module#KlmrFuelAddPageModule', name: 'KlmrFuelAddPage', segment: 'klmr-fuel-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-fuel/klmr-fuel.module#KlmrFuelPageModule', name: 'KlmrFuelPage', segment: 'klmr-fuel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-fuel-truck/klmr-fuel-truck.module#KlmrFuelTruckPageModule', name: 'KlmrFuelTruckPage', segment: 'klmr-fuel-truck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prestart/prestart.module#PrestartPageModule', name: 'PrestartPage', segment: 'prestart', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_prestart_prestart__["a" /* PrestartProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_crud_crud__["a" /* CrudProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_prestart_prestart__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cabsand_prestart_cabsand_prestart__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_klmr_fuel_klmr_fuel__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_klmr_fuel_truck_klmr_fuel_truck__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, events, splashScreen, utility) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.events = events;
        this.splashScreen = splashScreen;
        this.utility = utility;
        this.showLevel1 = null;
        this.showLevel2 = null;
        this.sideMenu = [];
        this.currentGroup = null;
        this.initializeApp();
        events.subscribe('chnageSideMenu', function (role) {
            _this.roleBasedSideMenu(role);
        });
        events.subscribe('currentClass', function (selectedGroup) {
            _this.changeGroup(selectedGroup);
        });
        // used for an example of ngFor and navigation
        this.sideMenu = [
            {
                "category": "Klmr",
                "colorCode": "#b71464",
                "subs": [
                    {
                        "title": "Prestart",
                        "component": __WEBPACK_IMPORTED_MODULE_8__pages_prestart_prestart__["a" /* PrestartPage */],
                    },
                    {
                        "title": "Fuel",
                        "component": __WEBPACK_IMPORTED_MODULE_10__pages_klmr_fuel_klmr_fuel__["a" /* KlmrFuelPage */],
                    },
                    {
                        "title": "Fuel Truck",
                        "component": __WEBPACK_IMPORTED_MODULE_11__pages_klmr_fuel_truck_klmr_fuel_truck__["a" /* KlmrFuelTruckPage */],
                    },
                ]
            },
            {
                "category": "Cabsand",
                "colorCode": "#b1651c",
                "subs": [
                    {
                        "title": "Prestart",
                        "component": __WEBPACK_IMPORTED_MODULE_9__pages_cabsand_prestart_cabsand_prestart__["a" /* CabsandPrestartPage */],
                    },
                ]
            },
        ];
    }
    MyApp.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.logout = function () {
        this.utility.removeStorage("token");
        this.utility.removeStorage("roleID");
        this.utility.removeStorage("primaryColor");
        this.utility.removeStorage("currentClass");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.toggleLevel1 = function (idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        }
        else {
            this.showLevel1 = idx;
        }
    };
    ;
    MyApp.prototype.toggleLevel2 = function (idx) {
        if (this.isLevel2Shown(idx)) {
            this.showLevel1 = null;
            this.showLevel2 = null;
        }
        else {
            this.showLevel1 = idx;
            this.showLevel2 = idx;
        }
    };
    ;
    MyApp.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    ;
    MyApp.prototype.isLevel2Shown = function (idx) {
        return this.showLevel2 === idx;
    };
    ;
    MyApp.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, roleId, currentGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utility.getStorage("token")];
                    case 1:
                        status = _a.sent();
                        return [4 /*yield*/, this.utility.getStorage("roleID")];
                    case 2:
                        roleId = _a.sent();
                        return [4 /*yield*/, this.utility.getStorage("currentClass")];
                    case 3:
                        currentGroup = _a.sent();
                        if (status) {
                            this.roleBasedSideMenu(roleId);
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                            // this.utility.setStorage("primaryColor",'#b71464');
                        }
                        else {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                        }
                        if (currentGroup) {
                            this.changeGroup(currentGroup);
                        }
                        else {
                            this.pages = [
                                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */] },
                            ];
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.getState();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.changeGroup = function (group) {
        this.currentGroup = group;
        if (group == "klmr") {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                {
                    "title": "Prestart",
                    "component": __WEBPACK_IMPORTED_MODULE_8__pages_prestart_prestart__["a" /* PrestartPage */],
                },
                {
                    "title": "Fuel",
                    "component": __WEBPACK_IMPORTED_MODULE_10__pages_klmr_fuel_klmr_fuel__["a" /* KlmrFuelPage */],
                },
            ];
        }
        else if (group == "cabsand") {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                {
                    "title": "Prestart",
                    "component": __WEBPACK_IMPORTED_MODULE_9__pages_cabsand_prestart_cabsand_prestart__["a" /* CabsandPrestartPage */],
                },
            ];
        }
        else if (group == "home") {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            ];
        }
    };
    MyApp.prototype.roleBasedSideMenu = function (role) {
        if (role == "1") {
            // this.pages = [
            //   { title: 'Dashboard', component: DashboardPage },
            //   { title: 'Prestart', component: PrestartPage },
            //   { title: 'Cabsand Prestart', component: CabsandPrestartPage },
            // ];
        }
        else {
            // this.pages = [
            //   { title: 'Dashboard', component: DashboardPage },
            //   { title: 'List', component: ListPage }
            // ];
        }
    };
    MyApp.prototype.openPage = function (page) {
        // this.utility.setStorage("primaryColor",parent.colorCode);
        // this.getappColor();
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header> \n    <ion-toolbar [color]="currentGroup == \'cabsand\'?\'dark\':\'primarybackground\' ">\n      <ion-title>Menu</ion-title>\n      <ion-buttons end> <!-- Here we use end -->\n        <button menuToggle ion-button icon-only (click)="logout()" color="light">\n          <ion-icon name="exit"></ion-icon>\n        </button>\n    </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <!-- <ion-content>\n    <ion-list>\n      <span *ngFor="let p of sideMenu; let i=index" text-wrap (click)="toggleLevel1(\'idx\'+i)" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}">\n        <button ion-button icon-end full [ngStyle]="{\'background-color\':appColor == \'#b71464\'?\'#b1651c\':\'#b71464\'}">\n          {{p.category}}\n          <ion-icon color="success" item-right [name]="isLevel1Shown(\'idx\'+i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n        </button>\n        \n        <ion-list *ngIf="isLevel1Shown(\'idx\'+i)">\n          <ion-item *ngFor="let s of p.subs; let i2=index" text-wrap (click)="toggleLevel2(\'idx\'+i+\'idx\'+i2)" [ngClass]="{active: isLevel2Shown(\'idx\'+i+\'idx\'+i2)}">\n            <h4 menuClose (click)="openPage(p,s)">\n              {{s.title}}\n            </h4>\n          </ion-item>\n        </ion-list>\n      </span>\n    </ion-list>\n  </ion-content> -->\n\n  <button ion-button icon-only>\n    <ion-icon name="home"></ion-icon>\n  </button>\n  \n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrestartProvider = /** @class */ (function () {
    function PrestartProvider(http) {
        this.http = http;
        this.baseUrl = "http://cotest.online/klmr_cabsand/index.php/api"; //  live
    }
    PrestartProvider.prototype.getPrestartList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + '/prestart/get').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                console.log("ERER:", err);
            });
        });
    };
    PrestartProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PrestartProvider);
    return PrestartProvider;
}());

//# sourceMappingURL=prestart.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrudProvider = /** @class */ (function () {
    function CrudProvider(http) {
        this.http = http;
        this.baseUrl = "https://cotest.online/klmr_cabsand/index.php/api"; //  live
    }
    CrudProvider.prototype.get = function (endpoint, tokenRequired) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + endpoint).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                console.log("ERER:", err);
            });
        });
    };
    CrudProvider.prototype.delete = function (endpoint, tokenRequired) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.baseUrl + endpoint).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                console.log("ERER:", err);
            });
        });
    };
    CrudProvider.prototype.post = function (endpoint, tokenRequired, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + endpoint, payload).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                console.log("ERER:", err);
            });
        });
    };
    CrudProvider.prototype.put = function (endpoint, tokenRequired, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.baseUrl + endpoint, payload, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                console.log("ERER:", err);
            });
        });
    };
    CrudProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CrudProvider);
    return CrudProvider;
}());

//# sourceMappingURL=crud.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addprestart_addprestart__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var PrestartPage = /** @class */ (function () {
    function PrestartPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.prestartList = [];
    }
    PrestartPage.prototype.ionViewDidLoad = function () {
        this.getappColor();
        this.getprestartList();
    };
    PrestartPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PrestartPage.prototype.getprestartList = function () {
        var _this = this;
        this.prestartList = [];
        this.utiltiy.startLoading();
        this.api.get("/prestart/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.prestartList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    PrestartPage.prototype.checkStatus = function (string) {
        return string.includes("Faulty");
    };
    PrestartPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deletePrestart(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrestartPage.prototype.deletePrestart = function (id) {
        var _this = this;
        this.api.delete("/prestart/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.getprestartList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    PrestartPage.prototype.addPrestart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addprestart_addprestart__["a" /* AddprestartPage */], { param: null });
    };
    PrestartPage.prototype.updatePrestart = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addprestart_addprestart__["a" /* AddprestartPage */], { param: prestart });
    };
    PrestartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/prestart/prestart.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Prestart</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addPrestart()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let prestart of  prestartList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col">\n          <h2>\n            <ion-badge item-end [color]="\'primarybackground\' ">{{prestart.id}}</ion-badge>\n            {{prestart.drivername}}\n          </h2>\n          <p>{{prestart.fleet_no}}</p>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="pin" role="img" class="icon icon-md ion-md-pin" aria-label="pin"></ion-icon>\n              <div>{{prestart.location}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="map" role="img" class="icon icon-md ion-md-map" aria-label="map"></ion-icon>\n              <div>{{prestart.kilometers}} km</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="clock" role="img" class="icon icon-md ion-md-clock" aria-label="clock"></ion-icon>\n              <div>{{prestart.hours}} hr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(prestart.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-item (click)="updatePrestart(prestart)">\n      <ion-badge item-start color="secondary" *ngIf="!checkStatus(prestart.item_status)">Good</ion-badge>\n      <ion-badge item-start color="danger" *ngIf="checkStatus(prestart.item_status)">Faulty</ion-badge>\n    </ion-item>\n\n    <ion-card-content (click)="updatePrestart(prestart)">\n      <p>{{prestart.items}}</p>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/prestart/prestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], PrestartPage);
    return PrestartPage;
}());

//# sourceMappingURL=prestart.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandPrestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cabsand_addprestart_cabsand_addprestart__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CabsandPrestartPage = /** @class */ (function () {
    function CabsandPrestartPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.prestartList = [];
    }
    CabsandPrestartPage.prototype.ionViewDidLoad = function () {
        this.getappColor();
        this.getprestartList();
    };
    CabsandPrestartPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandPrestartPage.prototype.getprestartList = function () {
        var _this = this;
        this.prestartList = [];
        this.utiltiy.startLoading();
        this.api.get("/tansix_prestart/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.prestartList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandPrestartPage.prototype.checkStatus = function (string) {
        return string.includes("Faulty");
    };
    CabsandPrestartPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deletePrestart(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandPrestartPage.prototype.deletePrestart = function (id) {
        var _this = this;
        this.api.delete("/tansix_prestart/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.getprestartList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandPrestartPage.prototype.addPrestart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_addprestart_cabsand_addprestart__["a" /* CabsandAddprestartPage */], { param: null });
    };
    CabsandPrestartPage.prototype.updatePrestart = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_addprestart_cabsand_addprestart__["a" /* CabsandAddprestartPage */], { param: prestart });
    };
    CabsandPrestartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-prestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-prestart/cabsand-prestart.html"*/'\n<ion-header>\n  <ion-toolbar [color]="\'dark\'">\n  <ion-navbar>\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="light">Cabsand Prestart</ion-title>\n    <ion-buttons end> <!-- Here we use end -->\n      <button ion-button icon-only  color="light" (click)="addPrestart()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-card *ngFor="let prestart of  prestartList;let i = index" >\n\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col">\n          <h2>\n            <ion-badge item-end [color]="\'dark\'">{{prestart.id}}</ion-badge>\n          </h2>\n          <p>{{prestart.fleet_no}}</p>\n        </ion-col>\n        <ion-col class="col">\n          <button ion-button icon-start clear small class="button button-md button-clear button-clear-md button-small button-small-md">\n            <div>\n              <ion-badge item-start color="secondary" *ngIf="prestart.defect_clear == \'True\'">True</ion-badge>\n              <ion-badge item-start color="danger" *ngIf="prestart.defect_clear == \'False\'">False</ion-badge>\n            </div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-map" aria-label="map"></ion-icon>\n              <div>{{prestart.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(prestart.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n\n    <ion-item (click)="updatePrestart(prestart)">\n      <ion-badge item-start color="secondary" *ngIf="!checkStatus(prestart.item_status)">Good</ion-badge>\n      <ion-badge item-start color="danger"  *ngIf="checkStatus(prestart.item_status)">Faulty</ion-badge>\n    </ion-item>\n  \n    <ion-card-content (click)="updatePrestart(prestart)">\n      <p>{{prestart.items}}</p>\n    </ion-card-content>\n<!--   \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small >\n          <div>\n            <ion-badge item-start color="secondary" *ngIf="prestart.defect_clear == \'True\'">True</ion-badge>\n            <ion-badge item-start color="danger" *ngIf="prestart.defect_clear == \'False\'">False</ion-badge>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col >\n        <button ion-button icon-start clear small [ngStyle]="{\'color\':appColor == \'#b71464\'?\'#b71464\':\'#b1651c\'}">\n          <ion-icon name="calendar"></ion-icon>\n          <div>{{prestart.date}}</div>\n        </button>\n      </ion-col>\n      <ion-col >\n        <button ion-button icon-start clear small color="danger" (click)="deleteRecord(prestart.id)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row> -->\n  \n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-prestart/cabsand-prestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandPrestartPage);
    return CabsandPrestartPage;
}());

//# sourceMappingURL=cabsand-prestart.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, auth, events, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.events = events;
        this.utiltiy = utiltiy;
        this.credentialsForm = this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log("this.credentialsForm.value", this.credentialsForm.value);
        var formData = new FormData();
        formData.append('username', this.credentialsForm.value.username);
        formData.append('password', this.credentialsForm.value.password);
        this.utiltiy.startLoading();
        this.auth.login(formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.data) {
                _this.utiltiy.toaster(result.message);
                _this.events.publish('chnageSideMenu', result.data.roleID);
                _this.utiltiy.setStorage("token", result.token);
                _this.utiltiy.setStorage("roleID", result.data.roleID);
                _this.utiltiy.setStorage("roleName", result.data.roleName);
                _this.utiltiy.setStorage("primaryColor", "#b71464");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }
        }, function (err) {
            console.log("err", err.error.message);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/login/login.html"*/'\n\n<ion-content padding >\n  \n  \n  <ion-row class="margin-top-25" justify-content-center >\n    <img src="../../assets/imgs/logo.png" class="logo-width">\n  </ion-row>\n  \n  <form [formGroup]="credentialsForm"  novalidate >\n\n  <ion-list class="margin-top-25 form-50" >\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName ="username"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName ="password"></ion-input>\n    </ion-item>\n  \n    <ion-row padding-top>\n    <button ion-button block [disabled]="!credentialsForm.valid"  (click)="login()">login</button>\n  </ion-row>\n  </ion-list>\n</form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, utility, events) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.events = events;
        this.currentClass = null;
        this.getStatus();
        this.utility.setStorage("currentClass", "home");
        this.events.publish('currentClass', "home");
        this.currentClass = "home";
    }
    HomePage.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.selectType = function (type) {
        this.currentClass = type;
        console.log("typw", this.currentClass);
        this.utility.setStorage("currentClass", type);
        this.events.publish('currentClass', type);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/home/home.html"*/'<ion-header>\n   <ion-toolbar [color]="currentClass == \'cabsand\'?\'dark\':\'primarybackground\' ">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n <ion-row class="margin-top-25" >\n   <ion-col (click)="selectType(\'klmr\')" [ngClass]="currentClass == \'klmr\' ? \'klmr-background\' : \'\'" text-center>\n    <img src="assets/imgs/klmr.png"  class="logo-img" >\n   </ion-col>\n\n   <ion-col (click)="selectType(\'cabsand\')" [ngClass]="currentClass == \'cabsand\' ? \'cabsand-background\' : \'\'" text-center>\n    <img src="assets/imgs/cabsand.png" class="logo-img"  >\n\n   </ion-col>\n </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrFuelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_fuel_add_klmr_fuel_add__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var KlmrFuelPage = /** @class */ (function () {
    function KlmrFuelPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.fuelList = [];
    }
    KlmrFuelPage.prototype.ionViewDidLoad = function () {
        this.getappColor();
        this.getfuelList();
    };
    KlmrFuelPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrFuelPage.prototype.getfuelList = function () {
        var _this = this;
        this.fuelList = [];
        this.utiltiy.startLoading();
        this.api.get("/prestart/fuel/fuel/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.fuelList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deletePrestart(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrFuelPage.prototype.deletePrestart = function (id) {
        var _this = this;
        this.api.delete("/prestart/fuel/fuel/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.getfuelList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelPage.prototype.addfuel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_fuel_add_klmr_fuel_add__["a" /* KlmrFuelAddPage */], { param: null });
    };
    KlmrFuelPage.prototype.updatePrestart = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_fuel_add_klmr_fuel_add__["a" /* KlmrFuelAddPage */], { param: prestart });
    };
    KlmrFuelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-fuel',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel/klmr-fuel.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Fuel</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addfuel()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  fuelList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updatePrestart(fuel)">\n          <h2>\n            <ion-badge item-end [color]="\'primarybackground\' ">{{fuel.id}}</ion-badge>\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" (click)="updatePrestart(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="pin" role="img" class="icon icon-md ion-md-pin" aria-label="pin"></ion-icon>\n              <div>{{fuel.location}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updatePrestart(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="logo-usd" role="img" class="icon icon-md ion-md-logo-usd" aria-label="map"></ion-icon>\n              <div>{{fuel.amount}}/ltr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updatePrestart(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updatePrestart(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-color-fill" aria-label="calendar"></ion-icon>\n              <div>{{fuel.diesel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updatePrestart(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Litres :</span>\n              <div>{{fuel.fuel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(fuel.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel/klmr-fuel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrFuelPage);
    return KlmrFuelPage;
}());

//# sourceMappingURL=klmr-fuel.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map