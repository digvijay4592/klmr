webpackJsonp([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtiltiyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(178);
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
    UtiltiyProvider.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
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
    UtiltiyProvider.prototype.attentionDialog = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var confirm;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                        title: options.title,
                                        message: options.message,
                                        buttons: [
                                            {
                                                text: options.approveText,
                                                cssClass: 'approveCss',
                                                handler: function () {
                                                    console.log('Agree clicked');
                                                    return resolve(true);
                                                }
                                            },
                                            {
                                                text: options.rejectText,
                                                cssClass: 'rejectCss',
                                                handler: function () {
                                                    console.log('Disagree clicked');
                                                    return resolve(false);
                                                }
                                            },
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
    UtiltiyProvider.prototype.fleetDialog = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var confirm;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                        title: options.title,
                                        inputs: options.data,
                                        buttons: [
                                            {
                                                text: "OK",
                                                cssClass: 'approveCss',
                                                handler: function (data) {
                                                    console.log('OK clicked. Data -> ' + JSON.stringify(data));
                                                    return resolve(data);
                                                }
                                            },
                                            {
                                                text: "Cancel",
                                                cssClass: 'rejectCss',
                                                handler: function () {
                                                    console.log('Disagree clicked');
                                                    return resolve(false);
                                                }
                                            },
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
    UtiltiyProvider.prototype.inputDialog = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        var confirm;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                        enableBackdropDismiss: false,
                                        title: options.title,
                                        inputs: [
                                            {
                                                name: 'comments',
                                                placeholder: 'Comment'
                                            },
                                        ],
                                        buttons: [
                                            {
                                                text: options.approveText,
                                                handler: function (data) {
                                                    console.log('Agree clicked', data.comments);
                                                    if (data.comments.length == 0) {
                                                        _this.toaster("Comment required");
                                                        return false;
                                                    }
                                                    else {
                                                        return resolve(data.comments);
                                                    }
                                                }
                                            },
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], UtiltiyProvider);
    return UtiltiyProvider;
}());

//# sourceMappingURL=utiltiy.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_environment__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utiltiy_utiltiy__ = __webpack_require__(4);
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




var CrudProvider = /** @class */ (function () {
    function CrudProvider(http, utility) {
        this.http = http;
        this.utility = utility;
        console.log(__WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* ENV */].API_URL, "-", __WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* ENV */].DEV_URL);
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* ENV */].API_URL; //  live
    }
    CrudProvider.prototype.get = function (endpoint, tokenRequired) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenRequired = tokenRequired == "false" ? false : true;
                        return [4 /*yield*/, this.getHeaders(tokenRequired)];
                    case 1:
                        headers = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.get(_this.baseUrl + endpoint, { headers: headers }).subscribe(function (data) {
                                    resolve(data);
                                }, function (err) {
                                    reject(err);
                                    console.log("ERER:", err);
                                });
                            })];
                }
            });
        });
    };
    CrudProvider.prototype.delete = function (endpoint, tokenRequired) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenRequired = true;
                        return [4 /*yield*/, this.getHeaders(tokenRequired)];
                    case 1:
                        headers = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.delete(_this.baseUrl + endpoint, { headers: headers }).subscribe(function (data) {
                                    resolve(data);
                                }, function (err) {
                                    reject(err);
                                    console.log("ERER:", err);
                                });
                            })];
                }
            });
        });
    };
    CrudProvider.prototype.post = function (endpoint, tokenRequired, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenRequired = true;
                        return [4 /*yield*/, this.getHeaders(tokenRequired)];
                    case 1:
                        headers = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.post(_this.baseUrl + endpoint, payload, { headers: headers }).subscribe(function (data) {
                                    resolve(data);
                                }, function (err) {
                                    reject(err);
                                    console.log("ERER:", err);
                                });
                            })];
                }
            });
        });
    };
    CrudProvider.prototype.put = function (endpoint, tokenRequired, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenRequired = true;
                        return [4 /*yield*/, this.getHeadersUrlEncoded(tokenRequired)];
                    case 1:
                        headers = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.put(_this.baseUrl + endpoint, payload, { headers: headers }).subscribe(function (data) {
                                    resolve(data);
                                }, function (err) {
                                    reject(err);
                                    console.log("ERER:", err);
                                });
                            })];
                }
            });
        });
    };
    CrudProvider.prototype.putWithourForm = function (endpoint, tokenRequired, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenRequired = true;
                        return [4 /*yield*/, this.getHeaders(tokenRequired)];
                    case 1:
                        headers = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.put(_this.baseUrl + endpoint, payload, { headers: headers }).subscribe(function (data) {
                                    resolve(data);
                                }, function (err) {
                                    reject(err);
                                    console.log("ERER:", err);
                                });
                            })];
                }
            });
        });
    };
    CrudProvider.prototype.generateToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utility.getStorage("token")];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, token];
                }
            });
        });
    };
    CrudProvider.prototype.getHeaders = function (tokenRequired) {
        return __awaiter(this, void 0, void 0, function () {
            var token, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!tokenRequired) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.utility.getStorage("token")];
                    case 1:
                        token = _a.sent();
                        headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                            'Authorization': "Bearer " + token
                        });
                        return [2 /*return*/, headers];
                    case 2: return [2 /*return*/, {}];
                }
            });
        });
    };
    CrudProvider.prototype.getHeadersUrlEncoded = function (tokenRequired) {
        return __awaiter(this, void 0, void 0, function () {
            var token, headers, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!tokenRequired) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.utility.getStorage("token")];
                    case 1:
                        token = _a.sent();
                        headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': "Bearer " + token
                        });
                        return [2 /*return*/, headers];
                    case 2:
                        headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                            'Content-Type': 'application/x-www-form-urlencoded',
                        });
                        return [2 /*return*/, headers];
                }
            });
        });
    };
    CrudProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CrudProvider);
    return CrudProvider;
}());

//# sourceMappingURL=crud.js.map

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrTimesheetCreateAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_timesheet_create_klmr_timesheet_create__ = __webpack_require__(88);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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






var KlmrTimesheetCreateAddPage = /** @class */ (function () {
    function KlmrTimesheetCreateAddPage(navCtrl, navParams, api, utiltiy, formBuilder, modalController, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.viewController = viewController;
        this.jobNumber = "";
        this.activityCode = "";
        this.jobNumberList = [];
        this.list = [];
        this.actiivityCodeList = [];
        this.isUpdate = false;
        this.params = {};
        this.isCopy = false;
        this.jobCardData = false;
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        this.isCopy = this.navParams.get('copy');
        var jobData = this.navParams.get('jobData');
        console.log("isCopy", this.isCopy);
        if (this.params) {
            this.isUpdate = true;
        }
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.createTimeSheet = this.formBuilder.group({
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            activity_code: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            start_time: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            finish_time: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            // activity_type: new FormControl('', [Validators.required]),
            notes: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            smoko: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](false),
            lunch: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](false),
        });
        if (jobData) {
            this.createTimeSheet.patchValue(__assign({}, jobData));
            this.jobCardData = true;
        }
    }
    KlmrTimesheetCreateAddPage.prototype.ionViewDidLoad = function () {
        this.getMetaData();
        this.timeLoop = setInterval(function () {
            var elements = document.getElementsByClassName("select-text");
            // console.log(elements.length,'-',elements);
            if (elements.length > 0) {
                if (elements[0].innerHTML.length != 0) {
                    elements[0].innerHTML = elements[0].innerHTML.split("/")[0];
                }
            }
        }, 500);
    };
    KlmrTimesheetCreateAddPage.prototype.ionViewDidLeave = function () {
        clearInterval(this.timeLoop);
    };
    KlmrTimesheetCreateAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _b.sent();
                        if (userId) {
                            this.createTimeSheet.get("user_id").setValue(userId);
                        }
                        _a = this;
                        return [4 /*yield*/, this.getJobNumberList()];
                    case 2:
                        _a.list = _b.sent();
                        // this.actiivityCodeList = await this.getActivityCodeList();
                        if (this.params) {
                            if (userId) {
                                this.params.user_id = userId;
                            }
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetCreateAddPage.prototype.getJobNumberList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.jobNumberList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/job_no/Job_no_get?folder_name=1", false)
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
    KlmrTimesheetCreateAddPage.prototype.getActivityCodeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.actiivityCodeList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/activity/get", false)
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
    KlmrTimesheetCreateAddPage.prototype.regenerateForm = function () {
        this.createTimeSheet.patchValue({
            date: this.params.date,
            job_no: this.params.job_no,
            activity_code: this.params.activity_code,
            job_description: this.params.job_description,
            start_time: this.params.start_time,
            finish_time: this.params.finish_time,
            // activity_type: this.params.activity_type,
            notes: this.params.notes,
            user_id: this.params.user_id,
            smoko: this.params.smoko == "false" ? false : true,
            lunch: this.params.lunch == "false" ? false : true,
            meal: this.params.meal == "false" ? false : true,
        });
        this.jobNumber = this.params.job_no;
        this.activityCode = this.params.activity_code;
        this.timeChanged();
    };
    KlmrTimesheetCreateAddPage.prototype.endTimeLimiter = function () {
    };
    KlmrTimesheetCreateAddPage.prototype.timeChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // this.ampmToHours("01:00 PM")
                        console.log(this.createTimeSheet.value.finish_time, "time is", this.createTimeSheet.value.start_time);
                        if (!(this.createTimeSheet.value.finish_time && this.createTimeSheet.value.start_time)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.calculateTimeDifference(this.createTimeSheet.value.start_time, this.createTimeSheet.value.finish_time)];
                    case 1:
                        _a.timeDifference = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetCreateAddPage.prototype.calculateTimeDifference = function (startTime, endTime) {
        var start = startTime.split(":");
        var end = endTime.split(":");
        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);
        if (hours < 0)
            hours = hours + 24;
        return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    };
    KlmrTimesheetCreateAddPage.prototype.deductMinutes = function (time, difference) {
        return __awaiter(this, void 0, void 0, function () {
            var minutesToAdd, currentDate, futureDate;
            return __generator(this, function (_a) {
                minutesToAdd = difference;
                currentDate = new Date();
                currentDate.setHours(parseInt(time.split(":")[0]), parseInt(time.split(":")[1]), 0, 0);
                futureDate = new Date(currentDate.getTime() - minutesToAdd * 60000);
                return [2 /*return*/, (futureDate.getHours() <= 9 ? "0" : "") + futureDate.getHours() + ":" + (futureDate.getMinutes() <= 9 ? "0" : "") + futureDate.getMinutes()];
            });
        });
    };
    KlmrTimesheetCreateAddPage.prototype.formatAMPM = function (date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    KlmrTimesheetCreateAddPage.prototype.ampmToHours = function (time) {
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM === "PM" && hours < 12)
            hours = hours + 12;
        if (AMPM === "AM" && hours === 12)
            hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10)
            sHours = "0" + sHours;
        if (minutes < 10)
            sMinutes = "0" + sMinutes;
        console.log("--", (sHours + ":" + sMinutes));
        return (sHours + ":" + sMinutes);
    };
    KlmrTimesheetCreateAddPage.prototype.add = function (item) {
        this.jobNumberList = [];
        this.jobNumber = item.job_no;
        this.createTimeSheet.get("job_no").setValue(item.job_no);
        this.createTimeSheet.get("job_description").setValue(item.job_description);
    };
    KlmrTimesheetCreateAddPage.prototype.removeFocus = function () {
        console.log("ii");
        this.jobNumberList = [];
    };
    KlmrTimesheetCreateAddPage.prototype.search = function () {
        var _this = this;
        // this.jobNumber = this.createTimeSheet.value.job_no;
        if (!this.jobNumber.trim().length) {
            this.jobNumberList = [];
            return;
        }
        this.jobNumberList = this.list.filter(function (item) { return item.job_no.toUpperCase().includes(_this.jobNumber.toUpperCase()); });
    };
    KlmrTimesheetCreateAddPage.prototype.onOpenCommonModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    KlmrTimesheetCreateAddPage.prototype.manupilateList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var manupilatedList;
            return __generator(this, function (_a) {
                manupilatedList = [];
                this.jobNumberList.forEach(function (element) {
                    manupilatedList.push({ 'key': element.job_no, 'value': element.job_no });
                });
                return [2 /*return*/, manupilatedList];
            });
        });
    };
    KlmrTimesheetCreateAddPage.prototype.dropDownChange = function (value, key) {
        // this.createTimeSheet.get(`${key}`).setValue(value);
        this.createTimeSheet.get("job_no").setValue(value);
        // this.createTimeSheet.get(`job_description`).setValue(value.job_description);
        var index = this.list.findIndex(function (list_) { return list_.job_no.toLowerCase() == value.toLowerCase(); });
        if (index != -1) {
            this.createTimeSheet.get("job_description").setValue(this.list[index].job_description);
        }
    };
    KlmrTimesheetCreateAddPage.prototype.submit = function () {
        var _this = this;
        var formKeys = Object.keys(this.createTimeSheet.value);
        if (this.isCopy) {
            var formData_1 = new FormData();
            formKeys.forEach(function (key) {
                if (key == "smoko" || key == "lunch" || key == "meal") {
                    var value = _this.createTimeSheet.value[key] == false ? "false" : "true";
                    formData_1.append(key, value);
                }
                else {
                    formData_1.append(key, _this.createTimeSheet.value[key]);
                }
            });
            this.addTimeSheet(formData_1);
        }
        else {
            if (this.isUpdate) {
                var string_1 = "";
                formKeys.forEach(function (key) {
                    if (string_1.length == 0) {
                        string_1 = string_1 + "" + key + "=" + _this.createTimeSheet.value[key];
                    }
                    else {
                        if (key == "smoko" || key == "lunch" || key == "meal") {
                            var value = _this.createTimeSheet.value[key] == false ? "false" : "true";
                            string_1 = string_1 + "&" + key + "=" + value;
                        }
                        else {
                            string_1 = string_1 + "&" + key + "=" + _this.createTimeSheet.value[key];
                        }
                    }
                });
                var body = string_1;
                console.log("string-1", body);
                this.updateTimeSheet(body, this.params.id);
            }
            else {
                var formData_2 = new FormData();
                formKeys.forEach(function (key) {
                    formData_2.append(key, _this.createTimeSheet.value[key]);
                });
                this.addTimeSheet(formData_2);
            }
        }
        console.log("this.credentialsForm.value", this.createTimeSheet.value);
    };
    KlmrTimesheetCreateAddPage.prototype.addTimeSheet = function (formData) {
        var _this = this;
        this.api.post("/prestart/timesheet/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                if (_this.jobCardData) {
                    _this.viewController.dismiss();
                    return;
                }
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_timesheet_create_klmr_timesheet_create__["a" /* KlmrTimesheetCreatePage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrTimesheetCreateAddPage.prototype.updateTimeSheet = function (formData, id) {
        var _this = this;
        this.api.put("/prestart/timesheet/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_timesheet_create_klmr_timesheet_create__["a" /* KlmrTimesheetCreatePage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrTimesheetCreateAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-timesheet-create-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-create-add/klmr-timesheet-create-add.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="(!isUpdate && !isCopy)">Add Timesheet {{timeDifference}}</ion-title>\n      <ion-title *ngIf="(isUpdate && !isCopy)">Update Timesheet {{timeDifference}}</ion-title>\n      <ion-title *ngIf="isCopy">Copy Timesheet {{timeDifference}}</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="createTimeSheet.invalid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="createTimeSheet" novalidate>\n    <ion-row padding-bottom>\n      <ion-card no-margin>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"\n              (click)="removeFocus()"></ion-datetime>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n\n    <!-- <div class="autocomplete" (click)="removeFocus()"> -->\n      <!-- <ion-item margin-bottom>\n        <ion-label floating>Job No.</ion-label>\n        <ion-input type="text" [(ngModel)]="jobNumber" (keyup)="search()" [ngModelOptions]="{standalone: true}" debounce=500>\n        </ion-input>\n      </ion-item>\n      <ion-list>\n        <ion-item *ngFor="let job of jobNumberList" >\n          <p (click)="add(job)">{{job.job_no}} / {{job.job_description}}</p>\n        </ion-item>\n      </ion-list> -->\n      <ion-item margin-bottom>\n        <ion-label >Job No.</ion-label>\n        <ion-select [(ngModel)]="jobNumber" [selectOptions]="selectOptions" interface="popover"\n          (ngModelChange)="dropDownChange(jobNumber,\'job_no\')" [ngModelOptions]="{standalone: true}">\n          <ion-option *ngFor="let job of list" [value]="job.job_no">\n            {{job.job_no}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n  </form>\n\n\n  <form [formGroup]="createTimeSheet" novalidate>\n\n    <ion-item margin-bottom (click)="removeFocus()">\n      <ion-label floating>Activate Code</ion-label>\n      <ion-input class="border-1px-solid" type="text" formControlName="activity_code"></ion-input>\n\n      <!-- <ion-select [(ngModel)]="activityCode" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(activityCode,\'activity_code\')" (click)="removeFocus()">\n      <ion-option *ngFor="let actiivity of actiivityCodeList" [value]="actiivity.code">{{actiivity.code}}\n        <br>\n        <span>\n        / {{actiivity.description}}\n      </span>\n    </ion-option>\n    </ion-select> -->\n    </ion-item>\n\n  </form>\n\n  <ion-row padding-bottom (click)="removeFocus()">\n    <ion-card no-margin>\n      <form [formGroup]="createTimeSheet" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Job Description</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="job_description" (click)="removeFocus()">\n            </ion-input>\n          </ion-item>\n          <ion-item margin-bottom>\n            <ion-label floating>Notes</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="notes" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createTimeSheet" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Start</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="hh:mm A" formControlName="start_time"\n              (ionChange)="timeChanged()" (click)="removeFocus()"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Finish</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="hh:mm A" formControlName="finish_time"\n              (ionChange)="timeChanged()" (click)="removeFocus()"></ion-datetime>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n  <ion-row padding-bottom>\n\n    <ion-card no-margin>\n      <form [formGroup]="createTimeSheet" novalidate>\n        <ion-row text-center margin-bottom margin-top>\n          <ion-col col-6 margin-top>\n            <ion-label no-margin>Rest?</ion-label>\n            <ion-checkbox formControlName="smoko"></ion-checkbox>\n          </ion-col>\n          <ion-col col-6 margin-top>\n            <ion-label no-margin>Lunch?</ion-label>\n            <ion-checkbox formControlName="lunch"></ion-checkbox>\n          </ion-col>\n          <!-- <ion-col col-4 margin-top>\n            <ion-label no-margin>Meal</ion-label>\n            <ion-checkbox formControlName="meal" ></ion-checkbox>\n          </ion-col> -->\n        </ion-row>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n\n\n\n  <!-- onkeypress="let satisfy = (/^(E|H|M|L|e|h|m|l)$/).test(this.value + event.key); if(!satisfy){this.value = \'\'} return satisfy;" -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-create-add/klmr-timesheet-create-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], KlmrTimesheetCreateAddPage);
    return KlmrTimesheetCreateAddPage;
}());

//# sourceMappingURL=klmr-timesheet-create-add.js.map

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrJobcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_jobcard_add_klmr_jobcard_add__ = __webpack_require__(181);
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





var KlmrJobcardPage = /** @class */ (function () {
    function KlmrJobcardPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.fleetList = [];
        this.jobCardList = [];
    }
    KlmrJobcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KlmrJobcardPage');
        this.getData();
    };
    KlmrJobcardPage.prototype.getData = function () {
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
                        return [4 /*yield*/, this.getJobcardList()];
                    case 2:
                        _b.jobCardList = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrJobcardPage.prototype.getFleetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                this.fleetList = [];
                this.utiltiy.startLoading();
                formData = new FormData();
                formData.append("method_name", "fleet_no_list");
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        _this.utiltiy.stopLoading();
                        if (result.status) {
                            var fleetList = [];
                            result.result.forEach(function (element) {
                                fleetList.push({
                                    type: 'radio',
                                    label: element.fleet_no,
                                    value: element.fleet_no
                                });
                            });
                            return fleetList;
                        }
                    }, function (err) {
                        _this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                        return [];
                    })];
            });
        });
    };
    KlmrJobcardPage.prototype.getJobcardList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", "jobcard_list");
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (result.status) {
                            return result.result;
                        }
                        return [];
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    KlmrJobcardPage.prototype.fleetListPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.fleetDialog({ "title": "Select Fleet", "data": this.fleetList })];
                    case 1:
                        status = _a.sent();
                        console.log(status);
                        if (status) {
                            this.cheeckFleetNo(status);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrJobcardPage.prototype.cheeckFleetNo = function (fleetNo) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "check_fleet");
        formData.append("plant_item", fleetNo);
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.addJobcard(fleetNo);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJobcardPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteJobcard(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrJobcardPage.prototype.deleteJobcard = function (id) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "jobcard_delete");
        formData.append("id", id);
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.getData();
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJobcardPage.prototype.addJobcard = function (fleetNumber) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_jobcard_add_klmr_jobcard_add__["a" /* KlmrJobcardAddPage */], { param: null, fleet: fleetNumber });
    };
    KlmrJobcardPage.prototype.updateJobcard = function (payload) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_jobcard_add_klmr_jobcard_add__["a" /* KlmrJobcardAddPage */], { param: payload, fleet: payload.plant_item });
    };
    KlmrJobcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-jobcard',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jobcard/klmr-jobcard.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Jobcard</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="fleetListPopup()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let job of  jobCardList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updateJobcard(job)">\n          <h2>\n            <ion-badge item-end [color]="\'primarybackground\' ">{{job.id}}</ion-badge>\n            {{job.job_no}}\n          </h2>\n          <!-- <p>{{job.fleet_no}}</p> -->\n        </ion-col>\n\n        <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>In Date : </span>\n              <div>{{job.in_date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n        <!-- <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Requested By :</span>\n              <div>{{job.requested_by}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n       \n        <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Completed By :</span>\n              <div>{{job.completed_by}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n        <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Out Date : </span>\n              <div> {{job.out_date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n       \n        \n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(job.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jobcard/klmr-jobcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrJobcardPage);
    return KlmrJobcardPage;
}());

//# sourceMappingURL=klmr-jobcard.js.map

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandJobcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cabsand_jobcard_add_cabsand_jobcard_add__ = __webpack_require__(185);
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





var CabsandJobcardPage = /** @class */ (function () {
    function CabsandJobcardPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.fleetList = [];
        this.jobCardList = [];
    }
    CabsandJobcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KlmrJobcardPage');
        this.getData();
    };
    CabsandJobcardPage.prototype.getData = function () {
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
                        return [4 /*yield*/, this.getJobcardList()];
                    case 2:
                        _b.jobCardList = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandJobcardPage.prototype.getFleetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                this.fleetList = [];
                this.utiltiy.startLoading();
                formData = new FormData();
                formData.append("method_name", "fleet_no_list");
                return [2 /*return*/, this.api.post("/tansix_prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        _this.utiltiy.stopLoading();
                        if (result.status) {
                            var fleetList = [];
                            result.result.forEach(function (element) {
                                fleetList.push({
                                    type: 'radio',
                                    label: element.fleet_no,
                                    value: element.fleet_no
                                });
                            });
                            return fleetList;
                        }
                    }, function (err) {
                        _this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                        return [];
                    })];
            });
        });
    };
    CabsandJobcardPage.prototype.getJobcardList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", "jobcard_list");
                return [2 /*return*/, this.api.post("/tansix_prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (result.status) {
                            return result.result;
                        }
                        return [];
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    CabsandJobcardPage.prototype.fleetListPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.fleetDialog({ "title": "Select Fleet", "data": this.fleetList })];
                    case 1:
                        status = _a.sent();
                        console.log(status);
                        if (status) {
                            this.cheeckFleetNo(status);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandJobcardPage.prototype.cheeckFleetNo = function (fleetNo) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "check_fleet");
        formData.append("plant_item", fleetNo);
        this.api.post("/tansix_prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.addJobcard(fleetNo);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJobcardPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteJobcard(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandJobcardPage.prototype.deleteJobcard = function (id) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "jobcard_delete");
        formData.append("id", id);
        this.api.post("/tansix_prestart/jobcard", false, formData)
            .then(function (result) {
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.getData();
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJobcardPage.prototype.addJobcard = function (fleetNumber) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_jobcard_add_cabsand_jobcard_add__["a" /* CabsandJobcardAddPage */], { param: null, fleet: fleetNumber });
    };
    CabsandJobcardPage.prototype.updateJobcard = function (payload) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_jobcard_add_cabsand_jobcard_add__["a" /* CabsandJobcardAddPage */], { param: payload, fleet: payload.plant_item });
    };
    CabsandJobcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-jobcard',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jobcard/cabsand-jobcard.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Jobcard</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="fleetListPopup()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let job of  jobCardList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updateJobcard(job)">\n          <h2>\n            <ion-badge item-end [color]="\'dark\' ">{{job.id}}</ion-badge>\n            {{job.job_no}}\n          </h2>\n          <!-- <p>{{job.fleet_no}}</p> -->\n        </ion-col>\n\n        <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>In Date : </span>\n              <div>{{job.in_date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n        <!-- <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Requested By :</span>\n              <div>{{job.requested_by}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n       \n        <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Completed By :</span>\n              <div>{{job.completed_by}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n        <ion-col class="col" (click)="updateJobcard(job)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Out Date : </span>\n              <div> {{job.out_date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n       \n        \n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(job.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jobcard/cabsand-jobcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandJobcardPage);
    return CabsandJobcardPage;
}());

//# sourceMappingURL=cabsand-jobcard.js.map

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__ = __webpack_require__(5);
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




var CabsandNewsPage = /** @class */ (function () {
    function CabsandNewsPage(navCtrl, utility, api, events) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.api = api;
        this.events = events;
        this.horizontalText = "";
        this.newsLiist = [];
        this.getNews();
        // this.navCtrl.swipeBackEnabled = false;
    }
    CabsandNewsPage.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.horizontalText = "";
                return [2 /*return*/];
            });
        });
    };
    CabsandNewsPage.prototype.getNews = function () {
        var _this = this;
        this.newsLiist = [];
        var string = "";
        this.api.get("/prestart/news/News_get", "false")
            .then(function (result) {
            result.result.forEach(function (element) {
                string = string + ("Subject: " + element.subject + " Date: " + element.date + " By:" + element.username + "     ");
            });
            _this.horizontalText = string;
            _this.newsLiist = result.result;
            console.log("result", _this.newsLiist);
            console.log("this.horizontalText ", _this.horizontalText);
        }, function (err) {
        });
    };
    CabsandNewsPage.prototype.dateConvert = function (date) {
        if (date) {
            var dateString = date.split("-");
            return dateString[2] + "-" + dateString[1] + "-" + dateString[0];
        }
        else {
            return "";
        }
    };
    CabsandNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-news',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-news/cabsand-news.html"*/'\n<ion-header>\n  <ion-toolbar [color]="\'dark\'">\n  <ion-navbar>\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="light">News</ion-title>\n \n  </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n  <!-- <ion-slides pager direction="vertical"> -->\n    <span *ngFor="let news of newsLiist;let i = index">\n\n    <!-- <ion-slide > -->\n    <ion-row *ngIf="i != 0" class="row-height"></ion-row>\n      <h2 class="slide-title" >\n        {{news.subject}}\n      </h2>\n      <p ion-text text-left class="inner-news" style="font-size: medium;">\n        <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n        {{dateConvert(news.date)}}\n        <span ion-text color="primarybackground"> {{news.username}}</span>\n      </p>\n      <p class="inner-news" [innerHTML]="news.news">\n      </p>\n    <!-- </ion-slide> -->\n  </span>\n  \n  <!-- </ion-slides> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-news/cabsand-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], CabsandNewsPage);
    return CabsandNewsPage;
}());

//# sourceMappingURL=cabsand-news.js.map

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__ = __webpack_require__(5);
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




var KlmrNewsPage = /** @class */ (function () {
    function KlmrNewsPage(navCtrl, utility, api, events) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.api = api;
        this.events = events;
        this.horizontalText = "";
        this.newsLiist = [];
        this.getNews();
        // this.navCtrl.swipeBackEnabled = false;
    }
    KlmrNewsPage.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.horizontalText = "";
                return [2 /*return*/];
            });
        });
    };
    KlmrNewsPage.prototype.getNews = function () {
        var _this = this;
        this.newsLiist = [];
        var string = "";
        this.api.get("/prestart/news/News_get", "false")
            .then(function (result) {
            result.result.forEach(function (element) {
                string = string + ("Subject: " + element.subject + " Date: " + element.date + " By:" + element.username + "     ");
            });
            _this.horizontalText = string;
            _this.newsLiist = result.result;
            console.log("result", _this.newsLiist);
            console.log("this.horizontalText ", _this.horizontalText);
        }, function (err) {
        });
    };
    KlmrNewsPage.prototype.dateConvert = function (date) {
        if (date) {
            var dateString = date.split("-");
            return dateString[2] + "-" + dateString[1] + "-" + dateString[0];
        }
        else {
            return "";
        }
    };
    KlmrNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-news',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-news/klmr-news.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">News</ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n  <!-- <ion-slides pager direction="vertical"> -->\n    <span *ngFor="let news of newsLiist;let i = index">\n\n    <!-- <ion-slide > -->\n    <ion-row *ngIf="i != 0" class="row-height"></ion-row>\n      <h2 class="slide-title" >\n        {{news.subject}}\n      </h2>\n      <p ion-text text-left class="inner-news" style="font-size: medium;">\n        <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n        {{dateConvert(news.date)}}\n        <span ion-text color="primarybackground"> {{news.username}}</span>\n      </p>\n      <p class="inner-news" [innerHTML]="news.news">\n      </p>\n    <!-- </ion-slide> -->\n  </span>\n  \n  <!-- </ion-slides> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-news/klmr-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], KlmrNewsPage);
    return KlmrNewsPage;
}());

//# sourceMappingURL=klmr-news.js.map

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addprestart_addprestart__ = __webpack_require__(176);
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
            _this.filePathUrl = result.file_uploaded_path;
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
        prestart.file_uploaded_path = this.filePathUrl;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addprestart_addprestart__["a" /* AddprestartPage */], { param: prestart });
    };
    PrestartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/prestart/prestart.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Prestart</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addPrestart()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let prestart of  prestartList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col">\n          <h2>\n            <ion-badge item-end [color]="\'primarybackground\' ">{{prestart.id}}</ion-badge>\n            {{prestart.drivername}}\n          </h2>\n          <p>{{prestart.fleet_no}}</p>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="pin" role="img" class="icon icon-md ion-md-pin" aria-label="pin"></ion-icon>\n              <div>{{prestart.location}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <!-- <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="map" role="img" class="icon icon-md ion-md-map" aria-label="map"></ion-icon>\n              <div>{{prestart.kilometers}} km</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="clock" role="img" class="icon icon-md ion-md-clock" aria-label="clock"></ion-icon>\n              <div>{{prestart.hours}} hr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(prestart.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-item (click)="updatePrestart(prestart)">\n      <ion-badge item-start color="secondary" *ngIf="!checkStatus(prestart.item_status)">Good</ion-badge>\n      <ion-badge item-start color="danger" *ngIf="checkStatus(prestart.item_status)">Faulty</ion-badge>\n    </ion-item>\n\n    <ion-card-content (click)="updatePrestart(prestart)">\n      <p>{{prestart.items}}</p>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/prestart/prestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], PrestartPage);
    return PrestartPage;
}());

//# sourceMappingURL=prestart.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPrestartItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
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
 * Generated class for the SelectPrestartItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectPrestartItemsPage = /** @class */ (function () {
    function SelectPrestartItemsPage(viewCtrl, api, utiltiy) {
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.utiltiy = utiltiy;
        this.itemList = [];
        this.isNoData = false;
    }
    SelectPrestartItemsPage.prototype.ngOnInit = function () {
    };
    SelectPrestartItemsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.viewCtrl.data.list.length) {
            this.itemList = this.viewCtrl.data.list;
            return;
        }
        if (this.viewCtrl.data.fleetId) {
            this.utiltiy.startLoading();
            var formData = new FormData();
            formData.append("method_name", "prestart_items");
            formData.append("fleet_no", this.viewCtrl.data.fleetId);
            this.api.post('/prestart/jobcard', false, formData).then(function (res) {
                console.log(res);
                if (res.message === 'No Data Found') {
                    _this.isNoData = true;
                    _this.utiltiy.stopLoading();
                }
                else {
                    _this.isNoData = false;
                    res.result[0].vehicles.split(',').forEach(function (element) {
                        var data = {
                            isChecked: false,
                            title: element
                        };
                        _this.itemList.push(data);
                    });
                    _this.utiltiy.stopLoading();
                }
            }).catch(function (error) {
                console.log(error);
                _this.isNoData = true;
                _this.utiltiy.stopLoading();
            });
        }
        else {
            this.isNoData = true;
        }
    };
    SelectPrestartItemsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(this.itemList);
    };
    SelectPrestartItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-prestart-items',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/select-prestart-items/select-prestart-items.html"*/' <div class="component-div">\n    <div class="title">\n      <ion-label>Select Prestart Items</ion-label>\n      <ion-icon (click)="closeModal()" class="close-icon" name="close"></ion-icon>\n    </div>\n      <div class="checkbox-content" *ngIf="!isNoData">\n        <div *ngFor="let item of itemList; let i = index" class="item-div">\n          <input class="checkbox-input" [id]="i" type="checkbox" [(ngModel)]="item.isChecked" >\n        <label class="checkbox-label" [for]="i" >{{item.title}}</label>\n      </div>\n      </div>\n    <div *ngIf="isNoData" class="no-data-div">\n      <div class="no-record-text">No Records</div>\n    </div>\n  </div>\n    '/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/select-prestart-items/select-prestart-items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], SelectPrestartItemsPage);
    return SelectPrestartItemsPage;
}());

//# sourceMappingURL=select-prestart-items.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrTimesheetCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__ = __webpack_require__(44);
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





var KlmrTimesheetCreatePage = /** @class */ (function () {
    function KlmrTimesheetCreatePage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
    }
    KlmrTimesheetCreatePage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList();
    };
    KlmrTimesheetCreatePage.prototype.gettimeSheetList = function () {
        var _this = this;
        this.timeSheetList = [];
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "timesheet_list");
        // http://cotest.online/klmr_cabsand/index.php/api/prestart/timesheet/
        // /prestart/timesheet/get
        this.api.post("/prestart/timesheet/approver", true, formData)
            .then(function (result) {
            console.log("result", result);
            _this.timeSheetList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrTimesheetCreatePage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteTimeSheet(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetCreatePage.prototype.acceptRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            "title": '',
                            "message": 'Are you sure?',
                            "approveText": 'Yes',
                            "rejectText": 'No',
                        };
                        return [4 /*yield*/, this.utiltiy.attentionDialog(options)];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.acceptTimesheet(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetCreatePage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    KlmrTimesheetCreatePage.prototype.deleteTimeSheet = function (id) {
        var _this = this;
        this.api.delete("/prestart/timesheet/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.gettimeSheetList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrTimesheetCreatePage.prototype.acceptTimesheet = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        formData.append("method_name", "approver_timesheet_reject_approve_update_status");
                        // formData.append("user_id", userId);
                        formData.append("timesheet_id", id);
                        formData.append("status", '1');
                        // timesheet/approver
                        this.api.post("/prestart/timesheet/approver", false, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.utiltiy.stopLoading();
                            if (result.status) {
                                _this.utiltiy.toaster(result.message);
                                _this.gettimeSheetList();
                            }
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetCreatePage.prototype.addTimeSheet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */], { param: null, copy: false });
    };
    KlmrTimesheetCreatePage.prototype.updateTimeSheet = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */], { param: prestart, copy: false });
    };
    KlmrTimesheetCreatePage.prototype.copyTimeSheet = function (prestart) {
        console.log("copyTimeSheet", prestart);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */], { param: prestart, copy: true });
    };
    KlmrTimesheetCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-timesheet-create',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-create/klmr-timesheet-create.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Time Sheet</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addTimeSheet()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row" justify-content-center align-items-center>\n        <ion-col class="col">\n\n          <button *ngIf="fuel.status == \'0\'" clear="" color="danger" icon-start="" ion-button="" small=""\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"\n            (click)="acceptRecord(fuel.id)"><span class="button-inner">\n              <ion-badge item-end color="primary">\n                <ion-icon name="thumbs-up" role="img" class="icon icon-md ion-md-thumbs-up" aria-label="thumbs-up">\n                </ion-icon> Created\n              </ion-badge>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n\n          <ion-badge item-end color="danger" *ngIf="fuel.status == \'4\'">\n            <ion-icon name="close" role="img" class="icon icon-md ion-md-close" aria-label="close"></ion-icon>\n            Rejected\n          </ion-badge>\n\n          <ion-badge item-end color="pending" *ngIf="fuel.status == \'1\'">\n            <ion-icon name="timer" role="img" class="icon icon-md ion-md-timer" aria-label="timer"></ion-icon>\n            Waiting for Approval\n          </ion-badge>\n\n          <ion-badge item-end color="secondary" *ngIf="fuel.status == \'2\'">\n            <ion-icon name="checkmark" role="img" class="icon icon-md ion-md-checkmark" aria-label="checkmark">\n            </ion-icon> Approved\n          </ion-badge>\n\n          <ion-badge item-end color="secondary" *ngIf="fuel.status == \'3\'">\n            <ion-icon name="checkmark" role="img" class="icon icon-md ion-md-checkmark" aria-label="checkmark">\n            </ion-icon> Processed\n          </ion-badge>\n\n\n        </ion-col>\n        <ion-col class="col">\n          <h2>\n            <!-- <ion-badge item-end [color]="\'primarybackground\' ">{{fuel.id}}</ion-badge> -->\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <!-- <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small="" [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity :</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small="" [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code : &nbsp; </span>\n              <div> {{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small="" [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar">\n              </ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small="" [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start : &nbsp;</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small="" [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Finish : &nbsp;</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <span *ngIf="fuel.status == \'0\'">\n\n          <ion-col class="col">\n            <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(fuel.id)"\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner">\n                <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n          <ion-col class="col">\n            <button clear="" color="primarybackground" icon-start="" ion-button="" small=""\n              (click)="copyTimeSheet(fuel)"\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner">\n                <ion-icon name="copy" role="img" class="icon icon-md ion-md-copy" aria-label="copy"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n          <ion-col class="col">\n            <button clear="" color="primarybackground" icon-start="" ion-button="" small=""\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner" (click)="updateTimeSheet(fuel)">\n                <ion-icon name="create" role="img" class="icon icon-md ion-md-create" aria-label="create"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n        </span>\n\n        <span *ngIf="fuel.status == \'1\'">\n          <ion-col class="col">\n            <button clear="" color="primarybackground" icon-start="" ion-button="" small=""\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner" (click)="updateTimeSheet(fuel)">\n                <ion-icon name="create" role="img" class="icon icon-md ion-md-create" aria-label="create"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n        </span>\n\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-create/klmr-timesheet-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrTimesheetCreatePage);
    return KlmrTimesheetCreatePage;
}());

//# sourceMappingURL=klmr-timesheet-create.js.map

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandPrestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cabsand_addprestart_cabsand_addprestart__ = __webpack_require__(183);
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
            selector: 'page-cabsand-prestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-prestart/cabsand-prestart.html"*/'\n<ion-header>\n  <ion-toolbar [color]="\'dark\'">\n  <ion-navbar>\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="light">Cabsand Prestart</ion-title>\n    <ion-buttons end> <!-- Here we use end -->\n      <button ion-button icon-only  color="light" (click)="addPrestart()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let prestart of  prestartList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col">\n          <h2>\n            <ion-badge item-end [color]="\'dark\' ">{{prestart.id}}</ion-badge>\n            {{prestart.drivername}}\n          </h2>\n          <p>{{prestart.fleet_no}}</p>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="pin" role="img" class="icon icon-md ion-md-pin" aria-label="pin"></ion-icon>\n              <div>{{prestart.location}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <!-- <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="map" role="img" class="icon icon-md ion-md-map" aria-label="map"></ion-icon>\n              <div>{{prestart.kilometers}} km</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="clock" role="img" class="icon icon-md ion-md-clock" aria-label="clock"></ion-icon>\n              <div>{{prestart.hours}} hr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(prestart.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-item (click)="updatePrestart(prestart)">\n      <ion-badge item-start color="secondary" *ngIf="!checkStatus(prestart.item_status)">Good</ion-badge>\n      <ion-badge item-start color="danger" *ngIf="checkStatus(prestart.item_status)">Faulty</ion-badge>\n    </ion-item>\n\n    <ion-card-content (click)="updatePrestart(prestart)">\n      <p>{{prestart.items}}</p>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-prestart/cabsand-prestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandPrestartPage);
    return CabsandPrestartPage;
}());

//# sourceMappingURL=cabsand-prestart.js.map

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandTimesheetCreateAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_timesheet_create_cabsand_timesheet_create__ = __webpack_require__(91);
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






var CabsandTimesheetCreateAddPage = /** @class */ (function () {
    function CabsandTimesheetCreateAddPage(navCtrl, navParams, api, utiltiy, formBuilder, modalController, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.viewController = viewController;
        this.jobNumber = "";
        this.activityCode = "";
        this.jobNumberList = [];
        this.list = [];
        this.actiivityCodeList = [];
        this.isUpdate = false;
        this.params = {};
        this.isCopy = false;
        this.jobCardData = false;
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        this.isCopy = this.navParams.get('copy');
        if (this.params) {
            this.isUpdate = true;
        }
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.createTimeSheet = this.formBuilder.group({
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            activity_code: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            start_time: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            finish_time: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            // activity_type: new FormControl('', [Validators.required]),
            notes: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            smoko: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](false),
            lunch: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](false),
        });
    }
    CabsandTimesheetCreateAddPage.prototype.ionViewDidLoad = function () {
        this.getMetaData();
        this.timeLoop = setInterval(function () {
            var elements = document.getElementsByClassName("select-text");
            // console.log(elements.length,'-',elements);
            if (elements.length > 0) {
                if (elements[0].innerHTML.length != 0) {
                    elements[0].innerHTML = elements[0].innerHTML.split("/")[0];
                }
            }
        }, 500);
    };
    CabsandTimesheetCreateAddPage.prototype.ionViewDidLeave = function () {
        clearInterval(this.timeLoop);
    };
    CabsandTimesheetCreateAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _b.sent();
                        if (userId) {
                            this.createTimeSheet.get("user_id").setValue(userId);
                        }
                        _a = this;
                        return [4 /*yield*/, this.getJobNumberList()];
                    case 2:
                        _a.list = _b.sent();
                        // this.actiivityCodeList = await this.getActivityCodeList();
                        if (this.params) {
                            if (userId) {
                                this.params.user_id = userId;
                            }
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetCreateAddPage.prototype.getJobNumberList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.jobNumberList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/job_no/Job_no_get?folder_name=2", false)
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
    CabsandTimesheetCreateAddPage.prototype.getActivityCodeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.actiivityCodeList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/activity/get", false)
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
    CabsandTimesheetCreateAddPage.prototype.regenerateForm = function () {
        this.createTimeSheet.patchValue({
            date: this.params.date,
            job_no: this.params.job_no,
            activity_code: this.params.activity_code,
            job_description: this.params.job_description,
            start_time: this.params.start_time,
            finish_time: this.params.finish_time,
            // activity_type: this.params.activity_type,
            notes: this.params.notes,
            user_id: this.params.user_id,
            smoko: this.params.smoko == "false" ? false : true,
            lunch: this.params.lunch == "false" ? false : true,
            meal: this.params.meal == "false" ? false : true,
        });
        this.jobNumber = this.params.job_no;
        this.activityCode = this.params.activity_code;
        this.timeChanged();
    };
    CabsandTimesheetCreateAddPage.prototype.endTimeLimiter = function () {
    };
    CabsandTimesheetCreateAddPage.prototype.timeChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // this.ampmToHours("01:00 PM")
                        console.log(this.createTimeSheet.value.finish_time, "time is", this.createTimeSheet.value.start_time);
                        if (!(this.createTimeSheet.value.finish_time && this.createTimeSheet.value.start_time)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.calculateTimeDifference(this.createTimeSheet.value.start_time, this.createTimeSheet.value.finish_time)];
                    case 1:
                        _a.timeDifference = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetCreateAddPage.prototype.calculateTimeDifference = function (startTime, endTime) {
        var start = startTime.split(":");
        var end = endTime.split(":");
        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);
        if (hours < 0)
            hours = hours + 24;
        return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    };
    CabsandTimesheetCreateAddPage.prototype.deductMinutes = function (time, difference) {
        return __awaiter(this, void 0, void 0, function () {
            var minutesToAdd, currentDate, futureDate;
            return __generator(this, function (_a) {
                minutesToAdd = difference;
                currentDate = new Date();
                currentDate.setHours(parseInt(time.split(":")[0]), parseInt(time.split(":")[1]), 0, 0);
                futureDate = new Date(currentDate.getTime() - minutesToAdd * 60000);
                return [2 /*return*/, (futureDate.getHours() <= 9 ? "0" : "") + futureDate.getHours() + ":" + (futureDate.getMinutes() <= 9 ? "0" : "") + futureDate.getMinutes()];
            });
        });
    };
    CabsandTimesheetCreateAddPage.prototype.formatAMPM = function (date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    CabsandTimesheetCreateAddPage.prototype.ampmToHours = function (time) {
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM === "PM" && hours < 12)
            hours = hours + 12;
        if (AMPM === "AM" && hours === 12)
            hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10)
            sHours = "0" + sHours;
        if (minutes < 10)
            sMinutes = "0" + sMinutes;
        console.log("--", (sHours + ":" + sMinutes));
        return (sHours + ":" + sMinutes);
    };
    CabsandTimesheetCreateAddPage.prototype.add = function (item) {
        this.jobNumberList = [];
        this.jobNumber = item.job_no;
        this.createTimeSheet.get("job_no").setValue(item.job_no);
        this.createTimeSheet.get("job_description").setValue(item.job_description);
    };
    CabsandTimesheetCreateAddPage.prototype.removeFocus = function () {
        console.log("ii");
        this.jobNumberList = [];
    };
    CabsandTimesheetCreateAddPage.prototype.search = function () {
        var _this = this;
        if (!this.jobNumber.trim().length) {
            this.jobNumberList = [];
            return;
        }
        this.jobNumberList = this.list.filter(function (item) { return item.job_no.toUpperCase().includes(_this.jobNumber.toUpperCase()); });
    };
    CabsandTimesheetCreateAddPage.prototype.onOpenCommonModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CabsandTimesheetCreateAddPage.prototype.manupilateList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var manupilatedList;
            return __generator(this, function (_a) {
                manupilatedList = [];
                this.jobNumberList.forEach(function (element) {
                    manupilatedList.push({ 'key': element.job_no, 'value': element.job_no });
                });
                return [2 /*return*/, manupilatedList];
            });
        });
    };
    CabsandTimesheetCreateAddPage.prototype.dropDownChange = function (value, key) {
        // this.createTimeSheet.get(`${key}`).setValue(value);
        this.createTimeSheet.get("job_no").setValue(value);
        // this.createTimeSheet.get(`job_description`).setValue(value.job_description);
        var index = this.list.findIndex(function (list_) { return list_.job_no.toLowerCase() == value.toLowerCase(); });
        if (index != -1) {
            this.createTimeSheet.get("job_description").setValue(this.list[index].job_description);
        }
    };
    CabsandTimesheetCreateAddPage.prototype.submit = function () {
        // let startHourMinutes = this.createTimeSheet.value.start_time.split(':');
        // this.createTimeSheet.value.start_time = this.formatAMPM(startHourMinutes);
        // let finishHourMinutes = this.createTimeSheet.value.finish_time.split(':');
        // this.createTimeSheet.value.finish_time = this.formatAMPM(finishHourMinutes);
        var _this = this;
        var formKeys = Object.keys(this.createTimeSheet.value);
        if (this.isCopy) {
            var formData_1 = new FormData();
            formKeys.forEach(function (key) {
                if (key == "smoko" || key == "lunch" || key == "meal") {
                    var value = _this.createTimeSheet.value[key] == false ? "false" : "true";
                    formData_1.append(key, value);
                }
                else {
                    formData_1.append(key, _this.createTimeSheet.value[key]);
                }
            });
            this.addTimeSheet(formData_1);
        }
        else {
            if (this.isUpdate) {
                var string_1 = "";
                formKeys.forEach(function (key) {
                    if (string_1.length == 0) {
                        string_1 = string_1 + "" + key + "=" + _this.createTimeSheet.value[key];
                    }
                    else {
                        if (key == "smoko" || key == "lunch" || key == "meal") {
                            var value = _this.createTimeSheet.value[key] == false ? "false" : "true";
                            string_1 = string_1 + "&" + key + "=" + value;
                        }
                        else {
                            string_1 = string_1 + "&" + key + "=" + _this.createTimeSheet.value[key];
                        }
                    }
                });
                var body = string_1;
                console.log("string-1", body);
                this.updateTimeSheet(body, this.params.id);
            }
            else {
                var formData_2 = new FormData();
                formKeys.forEach(function (key) {
                    formData_2.append(key, _this.createTimeSheet.value[key]);
                });
                this.addTimeSheet(formData_2);
            }
        }
        console.log("this.credentialsForm.value", this.createTimeSheet.value);
    };
    CabsandTimesheetCreateAddPage.prototype.addTimeSheet = function (formData) {
        var _this = this;
        this.api.post("/tansix_prestart/timesheet/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                if (_this.jobCardData) {
                    _this.viewController.dismiss();
                    return;
                }
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_timesheet_create_cabsand_timesheet_create__["a" /* CabsandTimesheetCreatePage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandTimesheetCreateAddPage.prototype.updateTimeSheet = function (formData, id) {
        var _this = this;
        this.api.put("/tansix_prestart/timesheet/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_timesheet_create_cabsand_timesheet_create__["a" /* CabsandTimesheetCreatePage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandTimesheetCreateAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-timesheet-create-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-create-add/cabsand-timesheet-create-add.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <ion-title *ngIf="(!isUpdate && !isCopy)">Add Timesheet {{timeDifference}}</ion-title>\n      <ion-title *ngIf="(isUpdate && !isCopy)">Update Timesheet {{timeDifference}}</ion-title>\n      <ion-title *ngIf="isCopy">Copy Timesheet {{timeDifference}}</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="createTimeSheet.invalid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="createTimeSheet" novalidate>\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date" (click)="removeFocus()"></ion-datetime>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n\n    <!-- <div class="autocomplete" (click)="removeFocus()" >\n      <ion-item margin-bottom>\n        <ion-label floating>Job No.</ion-label>\n        <ion-input type="text" [(ngModel)]="jobNumber" (keyup)="search()" [ngModelOptions]="{standalone: true}" debounce=500>\n        </ion-input>\n      </ion-item>\n      <ion-list>\n        <ion-item *ngFor="let job of jobNumberList" >\n          <p (click)="add(job)">{{job.job_no}} / {{job.job_description}}</p>\n        </ion-item>\n      </ion-list>\n    </div> -->\n\n    <ion-item margin-bottom>\n      <ion-label >Job No.</ion-label>\n      <ion-select [(ngModel)]="jobNumber" [selectOptions]="selectOptions" interface="popover"\n        (ngModelChange)="dropDownChange(jobNumber,\'job_no\')" [ngModelOptions]="{standalone: true}">\n        <ion-option *ngFor="let job of list" [value]="job.job_no">\n          {{job.job_no}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n\n\n  <form [formGroup]="createTimeSheet" novalidate>\n\n  <ion-item margin-bottom (click)="removeFocus()" >\n    <ion-label floating>Activate Code</ion-label>\n      <ion-input class="border-1px-solid" type="text" formControlName="activity_code"></ion-input>\n\n    <!-- <ion-select [(ngModel)]="activityCode" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(activityCode,\'activity_code\')" (click)="removeFocus()">\n      <ion-option *ngFor="let actiivity of actiivityCodeList" [value]="actiivity.code">{{actiivity.code}}\n        <br>\n        <span>\n        / {{actiivity.description}}\n      </span>\n    </ion-option>\n    </ion-select> -->\n  </ion-item>\n\n</form>\n\n\n\n\n  <ion-row padding-bottom (click)="removeFocus()">\n    <ion-card no-margin>\n      <form [formGroup]="createTimeSheet" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Job Description</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="job_description" (click)="removeFocus()"></ion-input>\n          </ion-item>\n          <ion-item margin-bottom>\n            <ion-label floating>Notes</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="notes" autocomplete="on" autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createTimeSheet" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Start</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="hh:mm A" formControlName="start_time" (ionChange)="timeChanged()" (click)="removeFocus()">\n            </ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Finish</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="hh:mm A" formControlName="finish_time" (ionChange)="timeChanged()" (click)="removeFocus()">\n            </ion-datetime>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n  <ion-row padding-bottom>\n\n    <ion-card no-margin>\n      <form [formGroup]="createTimeSheet" novalidate>\n        <ion-row text-center margin-bottom margin-top>\n          <ion-col col-6 margin-top>\n            <ion-label no-margin>Rest?</ion-label>\n            <ion-checkbox formControlName="smoko"></ion-checkbox>\n          </ion-col>\n          <ion-col col-6 margin-top>\n            <ion-label no-margin>Lunch?</ion-label>\n            <ion-checkbox formControlName="lunch"></ion-checkbox>\n          </ion-col>\n          <!-- <ion-col col-4 margin-top>\n            <ion-label no-margin>Meal</ion-label>\n            <ion-checkbox formControlName="meal" ></ion-checkbox>\n          </ion-col> -->\n        </ion-row>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n\n\n\n  <!-- onkeypress="let satisfy = (/^(E|H|M|L|e|h|m|l)$/).test(this.value + event.key); if(!satisfy){this.value = \'\'} return satisfy;" -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-create-add/cabsand-timesheet-create-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], CabsandTimesheetCreateAddPage);
    return CabsandTimesheetCreateAddPage;
}());

//# sourceMappingURL=cabsand-timesheet-create-add.js.map

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandTimesheetCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cabsand_timesheet_create_add_cabsand_timesheet_create_add__ = __webpack_require__(90);
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





var CabsandTimesheetCreatePage = /** @class */ (function () {
    function CabsandTimesheetCreatePage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
    }
    CabsandTimesheetCreatePage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList();
    };
    CabsandTimesheetCreatePage.prototype.gettimeSheetList = function () {
        var _this = this;
        this.timeSheetList = [];
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "timesheet_list");
        this.api.post("/tansix_prestart/timesheet/approver", true, formData)
            .then(function (result) {
            console.log("result", result);
            _this.timeSheetList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandTimesheetCreatePage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteTimeSheet(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetCreatePage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    CabsandTimesheetCreatePage.prototype.deleteTimeSheet = function (id) {
        var _this = this;
        this.api.delete("/tansix_prestart/timesheet/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.gettimeSheetList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandTimesheetCreatePage.prototype.acceptRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            "title": '',
                            "message": 'Are you sure?',
                            "approveText": 'Yes',
                            "rejectText": 'No',
                        };
                        return [4 /*yield*/, this.utiltiy.attentionDialog(options)];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.acceptTimesheet(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetCreatePage.prototype.acceptTimesheet = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        formData.append("method_name", "approver_timesheet_reject_approve_update_status");
                        // formData.append("user_id", userId);
                        formData.append("timesheet_id", id);
                        formData.append("status", '1');
                        // timesheet/approver
                        this.api.post("/tansix_prestart/timesheet/approver", true, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.utiltiy.stopLoading();
                            if (result.status) {
                                _this.utiltiy.toaster(result.message);
                                _this.gettimeSheetList();
                            }
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetCreatePage.prototype.addTimeSheet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_timesheet_create_add_cabsand_timesheet_create_add__["a" /* CabsandTimesheetCreateAddPage */], { param: null, copy: false });
    };
    CabsandTimesheetCreatePage.prototype.updateTimeSheet = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_timesheet_create_add_cabsand_timesheet_create_add__["a" /* CabsandTimesheetCreateAddPage */], { param: prestart, copy: false });
    };
    CabsandTimesheetCreatePage.prototype.copyTimeSheet = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_timesheet_create_add_cabsand_timesheet_create_add__["a" /* CabsandTimesheetCreateAddPage */], { param: prestart, copy: true });
    };
    CabsandTimesheetCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-timesheet-create',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-create/cabsand-timesheet-create.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Time Sheet</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addTimeSheet()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col">\n\n          <button  *ngIf="fuel.status == \'0\'" clear="" color="danger" icon-start="" ion-button="" small=""\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger" (click)="acceptRecord(fuel.id)"><span\n              class="button-inner">\n              <ion-badge item-end color="primary">\n                <ion-icon name="thumbs-up" role="img" class="icon icon-md ion-md-thumbs-up" aria-label="thumbs-up">\n                </ion-icon> Created\n              </ion-badge>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n          \n          <ion-badge item-end color="danger" *ngIf="fuel.status == \'4\'">\n            <ion-icon name="close" role="img" class="icon icon-md ion-md-close" aria-label="close"></ion-icon>\n            Reject\n          </ion-badge>\n\n          <ion-badge item-end color="pending" *ngIf="fuel.status == \'1\'">\n            <ion-icon name="timer" role="img" class="icon icon-md ion-md-timer" aria-label="timer"></ion-icon>\n            Waiting for Approval\n          </ion-badge>\n          \n          <ion-badge item-end color="secondary" *ngIf="fuel.status == \'2\'">\n            <ion-icon name="checkmark" role="img" class="icon icon-md ion-md-checkmark" aria-label="checkmark">\n            </ion-icon> Approved\n          </ion-badge>\n\n          <ion-badge item-end color="secondary" *ngIf="fuel.status == \'3\'">\n            <ion-icon name="checkmark" role="img" class="icon icon-md ion-md-checkmark" aria-label="checkmark">\n            </ion-icon> Processed\n          </ion-badge>\n\n\n        </ion-col>\n        <ion-col class="col" (click)="updateTimeSheet(fuel)">\n          <h2>\n            <!-- <ion-badge item-end [color]="\'dark\' ">{{fuel.id}}</ion-badge> -->\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" (click)="updateTimeSheet(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity :</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateTimeSheet(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code : &nbsp;</span>\n              <div>{{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateTimeSheet(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateTimeSheet(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start : &nbsp;</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateTimeSheet(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Finish : &nbsp;</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(fuel.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="dark" icon-start="" ion-button="" small="" (click)="copyTimeSheet(fuel)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="copy" role="img" class="icon icon-md ion-md-copy" aria-label="copy"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="dark" icon-start="" ion-button="" small="" (click)="updateTimeSheet(fuel)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="copy" role="img" class="icon icon-md ion-md-copy" aria-label="copy"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n       \n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-create/cabsand-timesheet-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandTimesheetCreatePage);
    return CabsandTimesheetCreatePage;
}());

//# sourceMappingURL=cabsand-timesheet-create.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandFuelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cabsand_fuel_add_cabsand_fuel_add__ = __webpack_require__(187);
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





var CabsandFuelPage = /** @class */ (function () {
    function CabsandFuelPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.fuelList = [];
    }
    CabsandFuelPage.prototype.ionViewDidLoad = function () {
        this.getappColor();
        this.getfuelList();
    };
    CabsandFuelPage.prototype.getappColor = function () {
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
    CabsandFuelPage.prototype.getfuelList = function () {
        var _this = this;
        this.fuelList = [];
        this.utiltiy.startLoading();
        this.api.get("/tansix_prestart/fuel/fuel/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.fuelList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelPage.prototype.deleteRecord = function (id) {
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
    CabsandFuelPage.prototype.deletePrestart = function (id) {
        var _this = this;
        this.api.delete("/tansix_prestart/fuel/fuel/delete/" + id, false)
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
    CabsandFuelPage.prototype.addfuel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_fuel_add_cabsand_fuel_add__["a" /* CabsandFuelAddPage */], { param: null });
    };
    CabsandFuelPage.prototype.updateFuel = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_fuel_add_cabsand_fuel_add__["a" /* CabsandFuelAddPage */], { param: prestart });
    };
    CabsandFuelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-fuel',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel/cabsand-fuel.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Fuel</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addfuel()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  fuelList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updateFuel(fuel)">\n          <h2>\n            <ion-badge item-end [color]="\'dark\' ">{{fuel.id}}</ion-badge>\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" (click)="updateFuel(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="pin" role="img" class="icon icon-md ion-md-pin" aria-label="pin"></ion-icon>\n              <div>{{fuel.location}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuel(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="logo-usd" role="img" class="icon icon-md ion-md-logo-usd" aria-label="map"></ion-icon>\n              <div>{{fuel.amount}}/ltr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuel(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuel(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-color-fill" aria-label="calendar"></ion-icon>\n              <div>{{fuel.diesel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuel(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Litres :</span>\n              <div>{{fuel.fuel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(fuel.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel/cabsand-fuel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandFuelPage);
    return CabsandFuelPage;
}());

//# sourceMappingURL=cabsand-fuel.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandFuelTruckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cabsand_fuel_truck_add_cabsand_fuel_truck_add__ = __webpack_require__(189);
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





var CabsandFuelTruckPage = /** @class */ (function () {
    function CabsandFuelTruckPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.fuelTruckList = [];
    }
    CabsandFuelTruckPage.prototype.ionViewDidLoad = function () {
        this.getfuelTruckList();
    };
    CabsandFuelTruckPage.prototype.getfuelTruckList = function () {
        var _this = this;
        this.fuelTruckList = [];
        this.utiltiy.startLoading();
        this.api.get("/tansix_prestart/fuel/fuel_truck/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.fuelTruckList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelTruckPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteTruckList(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandFuelTruckPage.prototype.deleteTruckList = function (id) {
        var _this = this;
        this.api.delete("/tansix_prestart/fuel/fuel_truck/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.getfuelTruckList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelTruckPage.prototype.addFuelTruck = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_fuel_truck_add_cabsand_fuel_truck_add__["a" /* CabsandFuelTruckAddPage */], { param: null });
    };
    CabsandFuelTruckPage.prototype.updateFuelTruck = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_fuel_truck_add_cabsand_fuel_truck_add__["a" /* CabsandFuelTruckAddPage */], { param: prestart });
    };
    CabsandFuelTruckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-fuel-truck',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel-truck/cabsand-fuel-truck.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Fuel Truck</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addFuelTruck()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  fuelTruckList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <h2>\n            <ion-badge item-end [color]="\'dark\' ">{{fuel.id}}</ion-badge>\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Container :</span>\n              <div>{{fuel.truck}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="logo-usd" role="img" class="icon icon-md ion-md-logo-usd" aria-label="map"></ion-icon>\n              <div>{{fuel.price}}/ltr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-color-fill" aria-label="calendar"></ion-icon>\n              <div>{{fuel.diesel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Litres :</span>\n              <div>{{fuel.fuel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(fuel.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel-truck/cabsand-fuel-truck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandFuelTruckPage);
    return CabsandFuelTruckPage;
}());

//# sourceMappingURL=cabsand-fuel-truck.js.map

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandJsaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cabsand_jsa_add_cabsand_jsa_add__ = __webpack_require__(195);
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





var CabsandJsaPage = /** @class */ (function () {
    function CabsandJsaPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.jsaList = [];
    }
    CabsandJsaPage.prototype.ionViewDidLoad = function () {
        this.getJlaList();
    };
    CabsandJsaPage.prototype.getJlaList = function () {
        var _this = this;
        this.jsaList = [];
        this.utiltiy.startLoading();
        this.api.get("/tansix_prestart/jsa/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.jsaList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJsaPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteJsa(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandJsaPage.prototype.deleteJsa = function (id) {
        var _this = this;
        this.api.delete("/tansix_prestart/jsa/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.getJlaList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJsaPage.prototype.addjsa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_jsa_add_cabsand_jsa_add__["a" /* CabsandJsaAddPage */], { param: null });
    };
    CabsandJsaPage.prototype.updateJsa = function (payload) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cabsand_jsa_add_cabsand_jsa_add__["a" /* CabsandJsaAddPage */], { param: payload });
    };
    CabsandJsaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-jsa',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jsa/cabsand-jsa.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Jsa</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addjsa()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let jsa of  jsaList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <h2>\n            <ion-badge item-end [color]="\'dark\' ">{{jsa.id}}</ion-badge>\n            {{jsa.filled_by}}\n          </h2>\n          <p>{{jsa.fleet_no}}</p>\n        </ion-col>\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="pin" role="img" class="icon icon-md ion-md-pin" aria-label="pin"></ion-icon>\n              <div>{{jsa.location}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <!-- <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="logo-usd" role="img" class="icon icon-md ion-md-logo-usd" aria-label="map"></ion-icon>\n              <div>{{jsa.amount}}/ltr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{jsa.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>CCE :</span>\n              <div>{{jsa.cce}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Staff :</span>\n              <div>{{jsa.staff_username}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(jsa.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jsa/cabsand-jsa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandJsaPage);
    return CabsandJsaPage;
}());

//# sourceMappingURL=cabsand-jsa.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrFuelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_fuel_add_klmr_fuel_add__ = __webpack_require__(210);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrFuelPage);
    return KlmrFuelPage;
}());

//# sourceMappingURL=klmr-fuel.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrFuelTruckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_fuel_truck_add_klmr_fuel_truck_add__ = __webpack_require__(212);
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





var KlmrFuelTruckPage = /** @class */ (function () {
    function KlmrFuelTruckPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.fuelTruckList = [];
    }
    KlmrFuelTruckPage.prototype.ionViewDidLoad = function () {
        this.getfuelTruckList();
    };
    KlmrFuelTruckPage.prototype.getfuelTruckList = function () {
        var _this = this;
        this.fuelTruckList = [];
        this.utiltiy.startLoading();
        this.api.get("/prestart/fuel/fuel_truck/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.fuelTruckList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelTruckPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteTruckList(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrFuelTruckPage.prototype.deleteTruckList = function (id) {
        var _this = this;
        this.api.delete("/prestart/fuel/fuel_truck/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.getfuelTruckList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelTruckPage.prototype.addFuelTruck = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_fuel_truck_add_klmr_fuel_truck_add__["a" /* KlmrFuelTruckAddPage */], { param: null });
    };
    KlmrFuelTruckPage.prototype.updateFuelTruck = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_fuel_truck_add_klmr_fuel_truck_add__["a" /* KlmrFuelTruckAddPage */], { param: prestart });
    };
    KlmrFuelTruckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-fuel-truck',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-truck/klmr-fuel-truck.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Fuel Truck</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addFuelTruck()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  fuelTruckList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <h2>\n            <ion-badge item-end [color]="\'primarybackground\' ">{{fuel.id}}</ion-badge>\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Container :</span>\n              <div>{{fuel.truck}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="logo-usd" role="img" class="icon icon-md ion-md-logo-usd" aria-label="map"></ion-icon>\n              <div>{{fuel.price}}/ltr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-color-fill" aria-label="calendar"></ion-icon>\n              <div>{{fuel.diesel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateFuelTruck(fuel)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Litres :</span>\n              <div>{{fuel.fuel}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(fuel.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-truck/klmr-fuel-truck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrFuelTruckPage);
    return KlmrFuelTruckPage;
}());

//# sourceMappingURL=klmr-fuel-truck.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrJsaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_jsa_add_klmr_jsa_add__ = __webpack_require__(218);
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





var KlmrJsaPage = /** @class */ (function () {
    function KlmrJsaPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.jsaList = [];
    }
    KlmrJsaPage.prototype.ionViewDidLoad = function () {
        this.getJlaList();
    };
    KlmrJsaPage.prototype.getJlaList = function () {
        var _this = this;
        this.jsaList = [];
        this.utiltiy.startLoading();
        this.api.get("/prestart/jsa/get", false)
            .then(function (result) {
            console.log("result", result);
            _this.jsaList = result.result;
            _this.utiltiy.stopLoading();
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJsaPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteJsa(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrJsaPage.prototype.deleteJsa = function (id) {
        var _this = this;
        this.api.delete("/prestart/jsa/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.getJlaList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJsaPage.prototype.addjsa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_jsa_add_klmr_jsa_add__["a" /* KlmrJsaAddPage */], { param: null });
    };
    KlmrJsaPage.prototype.updateJsa = function (payload) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_jsa_add_klmr_jsa_add__["a" /* KlmrJsaAddPage */], { param: payload });
    };
    KlmrJsaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-jsa',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jsa/klmr-jsa.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Jsa</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" (click)="addjsa()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let jsa of  jsaList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <h2>\n            <ion-badge item-end [color]="\'primarybackground\' ">{{jsa.id}}</ion-badge>\n            {{jsa.filled_by}}\n          </h2>\n          <p>{{jsa.fleet_no}}</p>\n        </ion-col>\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="pin" role="img" class="icon icon-md ion-md-pin" aria-label="pin"></ion-icon>\n              <div>{{jsa.location}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <!-- <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="logo-usd" role="img" class="icon icon-md ion-md-logo-usd" aria-label="map"></ion-icon>\n              <div>{{jsa.amount}}/ltr</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{jsa.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>CCE :</span>\n              <div>{{jsa.cce}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" (click)="updateJsa(jsa)">\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Staff :</span>\n              <div>{{jsa.staff_username}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col">\n          <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(jsa.id)"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner">\n              <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jsa/klmr-jsa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrJsaPage);
    return KlmrJsaPage;
}());

//# sourceMappingURL=klmr-jsa.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_news_klmr_news__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cabsand_news_cabsand_news__ = __webpack_require__(56);
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







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, auth, events, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.events = events;
        this.utiltiy = utiltiy;
        this.companyName = "";
        this.getCompanyName();
        this.navCtrl.swipeBackEnabled = false;
        this.credentialsForm = this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
        this.selectOptions = {
            mode: 'ios'
        };
    }
    LoginPage.prototype.getCompanyName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("currentClass")];
                    case 1:
                        currentGroup = _a.sent();
                        console.log("currentGroup", currentGroup);
                        if (currentGroup) {
                            this.companyName = currentGroup;
                            this.events.publish('currentClass', currentGroup);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
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
                _this.utiltiy.setStorage("userId", result.data.id);
                _this.utiltiy.setStorage("name", result.data.firstName + " " + result.data.surname);
                _this.utiltiy.setStorage("permissions", JSON.stringify(result.data.permissions));
                _this.utiltiy.setStorage("primaryColor", "#b71464");
                _this.goTo();
            }
        }, function (err) {
            console.log("err", err.error.message);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    LoginPage.prototype.goTo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("currentClass")];
                    case 1:
                        currentGroup = _a.sent();
                        if (currentGroup == "klmr") {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_news_klmr_news__["a" /* KlmrNewsPage */]);
                        }
                        else if (currentGroup == "cabsand") {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__cabsand_news_cabsand_news__["a" /* CabsandNewsPage */]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.selectType = function (type) {
        console.log("typw", this.companyName);
        this.utiltiy.setStorage("currentClass", type);
        this.events.publish('currentClass', type);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/login/login.html"*/'\n\n<ion-content padding >\n  \n  \n  <ion-row class="margin-top-25" justify-content-center >\n    <img src="assets/imgs/logo.png" class="logo-width" *ngIf="companyName.length == 0">\n    <img src="assets/imgs/klmr.png" class="logo-img" *ngIf="companyName == \'klmr\'">\n    <img src="assets/imgs/cabsand.png" class="logo-img" *ngIf="companyName == \'cabsand\'">\n  </ion-row>\n  \n  <form [formGroup]="credentialsForm"  novalidate >\n\n  <ion-list class="margin-top-25 form-50" >\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName ="username"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName ="password"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-label floating>Choose Company</ion-label>\n      <ion-select [(ngModel)]="companyName" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="selectType(companyName)" [ngModelOptions]="{standalone: true}">\n      <ion-option  value="klmr">KLMR</ion-option>\n      <ion-option  value="cabsand">CABSAND</ion-option>\n    </ion-select>\n    </ion-item>\n  \n    <ion-row padding-top>\n    <button ion-button block [disabled]="(!credentialsForm.valid && companyName.length != 0)"  (click)="login()">login</button>\n  </ion-row>\n  </ion-list>\n</form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
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
webpackEmptyAsyncContext.id = 132;

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addprestart/addprestart.module": [
		175
	],
	"../pages/cabsand-addprestart/cabsand-addprestart.module": [
		182
	],
	"../pages/cabsand-fuel-add/cabsand-fuel-add.module": [
		186
	],
	"../pages/cabsand-fuel-truck-add/cabsand-fuel-truck-add.module": [
		188
	],
	"../pages/cabsand-fuel-truck/cabsand-fuel-truck.module": [
		190
	],
	"../pages/cabsand-fuel/cabsand-fuel.module": [
		191
	],
	"../pages/cabsand-jobcard-add/cabsand-jobcard-add.module": [
		193
	],
	"../pages/cabsand-jobcard/cabsand-jobcard.module": [
		192
	],
	"../pages/cabsand-jsa-add/cabsand-jsa-add.module": [
		194
	],
	"../pages/cabsand-jsa/cabsand-jsa.module": [
		196
	],
	"../pages/cabsand-news/cabsand-news.module": [
		362,
		3
	],
	"../pages/cabsand-prestart-jobcard/cabsand-prestart-jobcard.module": [
		198
	],
	"../pages/cabsand-prestart/cabsand-prestart.module": [
		197
	],
	"../pages/cabsand-timesheet-approvals/cabsand-timesheet-approvals.module": [
		199
	],
	"../pages/cabsand-timesheet-create-add/cabsand-timesheet-create-add.module": [
		202
	],
	"../pages/cabsand-timesheet-create/cabsand-timesheet-create.module": [
		201
	],
	"../pages/cabsand-timesheet-history/cabsand-timesheet-history.module": [
		203
	],
	"../pages/cabsand-timesheet-pending/cabsand-timesheet-pending.module": [
		208
	],
	"../pages/dashboard/dashboard.module": [
		205
	],
	"../pages/jsa/jsa.module": [
		207
	],
	"../pages/klmr-fuel-add/klmr-fuel-add.module": [
		209
	],
	"../pages/klmr-fuel-truck-add/klmr-fuel-truck-add.module": [
		211
	],
	"../pages/klmr-fuel-truck/klmr-fuel-truck.module": [
		213
	],
	"../pages/klmr-fuel/klmr-fuel.module": [
		214
	],
	"../pages/klmr-jobcard-add/klmr-jobcard-add.module": [
		215
	],
	"../pages/klmr-jobcard/klmr-jobcard.module": [
		216
	],
	"../pages/klmr-jsa-add/klmr-jsa-add.module": [
		219
	],
	"../pages/klmr-jsa/klmr-jsa.module": [
		217
	],
	"../pages/klmr-news/klmr-news.module": [
		363,
		2
	],
	"../pages/klmr-prestart-jobcard/klmr-prestart-jobcard.module": [
		220
	],
	"../pages/klmr-timesheet-approvals/klmr-timesheet-approvals.module": [
		221
	],
	"../pages/klmr-timesheet-create-add/klmr-timesheet-create-add.module": [
		227
	],
	"../pages/klmr-timesheet-create/klmr-timesheet-create.module": [
		223
	],
	"../pages/klmr-timesheet-history/klmr-timesheet-history.module": [
		224
	],
	"../pages/klmr-timesheet-pending/klmr-timesheet-pending.module": [
		226
	],
	"../pages/login/login.module": [
		228
	],
	"../pages/news/news.module": [
		364,
		1
	],
	"../pages/popover/popover.module": [
		365,
		0
	],
	"../pages/prestart/prestart.module": [
		230
	],
	"../pages/search/search.module": [
		232
	],
	"../pages/select-prestart-items/select-prestart-items.module": [
		231
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
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddprestartPageModule", function() { return AddprestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addprestart__ = __webpack_require__(176);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addprestart__["a" /* AddprestartPage */]),
            ],
        })
    ], AddprestartPageModule);
    return AddprestartPageModule;
}());

//# sourceMappingURL=addprestart.module.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddprestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prestart_prestart__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__klmr_prestart_jobcard_klmr_prestart_jobcard__ = __webpack_require__(180);
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
    function AddprestartPage(navCtrl, navParams, api, utiltiy, formBuilder, actionSheetController, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.fleetList = [];
        this.locationList = [];
        this.selectedFleetItems = [];
        this.isUpdate = false;
        this.isFaulty = false;
        this.params = {};
        this.vehicleType = "";
        this.notes = '';
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        if (this.params) {
            this.isUpdate = true;
        }
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.createPrestart = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            hours: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('0', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            kilometers: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('0', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
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
            var userId, userName, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _c.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 2:
                        userName = _c.sent();
                        if (userId) {
                            this.createPrestart.get("user_id").setValue(userId);
                            this.createPrestart.get("drivername").setValue(userName);
                        }
                        _a = this;
                        return [4 /*yield*/, this.getFleetList()];
                    case 3:
                        _a.fleetList = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.getLocationList()];
                    case 4:
                        _b.locationList = _c.sent();
                        if (this.params) {
                            this.regenerateForm();
                            this.isFaulty = this.params.item_status.includes("Faulty");
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
    AddprestartPage.prototype.getLocationList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.locationList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/location/get", false)
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
    AddprestartPage.prototype.mobileUploads = function (variableName) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            title: 'Select Image source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        // this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, variableName);
                                    },
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        // this.pickImage(this.camera.PictureSourceType.CAMERA, variableName);
                                    },
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddprestartPage.prototype.pickImage = function (sourceType, variableName, index) {
        // this.loadingService.presentLoading();
        // let image: any;
        // const options: CameraOptions = {
        //   quality: 100,
        //   sourceType: sourceType,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE,
        // };
        // this.camera.getPicture(options).then(
        //   (imageData) => {
        //     image = 'data:image/jpeg;base64,' + imageData;
        // this.base64tofile(image,this.selectedFleetItems[index].name,index);
        //   // this.loadingService.dismissLoading();
        //     }
        //   },
        //   (err) => {
        //     // this.loadingService.dismissLoading();
        //     console.log("errOf Image ", err)
        //   }
        // );
    };
    AddprestartPage.prototype.clearImage = function (i) {
        this.selectedFleetItems[i].photo = '';
    };
    AddprestartPage.prototype.onPhotoGraphy = function (event, type, index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i;
            return __generator(this, function (_a) {
                if (type == 1) {
                }
                else if (type == 2) {
                    for (i = 0; i < event.target.files.length; i++) {
                        this.utiltiy.getBase64(event.target.files[i]).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log("data", data);
                                // this.selectedFleetItems[index].photo = data;
                                this.selectedFleetItems[index].isBase64 = true;
                                this.base64tofile(data, this.selectedFleetItems[index].name, index);
                                return [2 /*return*/];
                            });
                        }); }).catch(function (error) {
                            console.log('error', error);
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    AddprestartPage.prototype.base64tofile = function (base64, fileName, index) {
        return __awaiter(this, void 0, void 0, function () {
            var res, blob, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(base64)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        blob = _a.sent();
                        file = new File([blob], fileName.replace(/ /g, '') + ".png", { type: 'image/png' });
                        this.selectedFleetItems[index].photo = file;
                        console.log(file);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddprestartPage.prototype.regenerateForm = function () {
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
        this.selectedLocation = this.params.location;
        this.fleetChanged(this.params.fleet_no);
    };
    AddprestartPage.prototype.dropDownChange = function (value, key) {
        this.createPrestart.get("" + key).setValue(value);
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
        this.vehicleType = this.fleetList[index].vehicle_category;
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
                    var comment = _this.params.comment.split("||||");
                    var photo = _this.params.photo.split("||||");
                    if (!photo[i]) {
                        photo[i] = "";
                    }
                    console.log("comment", photo);
                    obj = {
                        "name": vehicle_,
                        "status": item_status[i],
                        "comments": comment[i],
                        "photo": photo[i],
                        "isBase64": false,
                    };
                }
                else {
                    obj = {
                        "name": vehicle_,
                        "status": _this.params.item_status,
                        "comments": _this.params.comment,
                        "photo": _this.params.photo,
                        "isBase64": false,
                    };
                }
            }
            else {
                obj = {
                    "name": vehicle_,
                    "status": null,
                    "comments": "",
                    "photo": "",
                    "isBase64": false,
                };
            }
            _this.selectedFleetItems.push(obj);
        });
        console.log("vehicleList", this.selectedFleetItems);
    };
    AddprestartPage.prototype.generateFileFromBase64 = function (list, i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (i == list.length) {
                    return [2 /*return*/, list];
                }
                else {
                    list.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var res, blob, file;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!element.photo.includes("data:image")) return [3 /*break*/, 3];
                                    return [4 /*yield*/, fetch(element.photo)];
                                case 1:
                                    res = _a.sent();
                                    return [4 /*yield*/, res.blob()];
                                case 2:
                                    blob = _a.sent();
                                    file = new File([blob], element.name.replace(/ /g, '') + ".png", { type: 'image/png' });
                                    element.photo = file;
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    i++;
                    this.generateFileFromBase64(list, i);
                }
                return [2 /*return*/];
            });
        });
    };
    AddprestartPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var items, item_status, comment, photo, formKeys, formData_1, formData_2;
            return __generator(this, function (_a) {
                console.log("this.credentialsForm.value", this.createPrestart.value);
                // this.selectedFleetItems = await this.generateFileFromBase64(this.selectedFleetItems,0);
                console.log("vehicleList", this.selectedFleetItems);
                items = "";
                item_status = "";
                comment = "";
                photo = "";
                formKeys = Object.keys(this.createPrestart.value);
                this.selectedFleetItems.forEach(function (element) {
                    items = items + element.name + ",";
                    item_status = item_status + element.status + ",";
                    comment = comment + element.comments + "||||";
                    // photo = photo + element.photo + "||||"
                });
                // console.log("photo", photo)
                // this.selectedFleetItems.forEach((element) => {
                //   if(element.photo != ""){
                //     formData.append("photo[]",element.photo);
                //     formData.append("photo[]","||||");
                //   }else{
                //     formData.append("photo[]","||||");
                //   }
                // })
                items = items.slice(0, items.length - 1);
                item_status = item_status.slice(0, item_status.length - 1);
                // comment = comment.slice(0, comment.length - 1);
                // photo = photo.slice(0, photo.length - 1);
                if (this.isUpdate) {
                    formData_1 = new FormData();
                    formKeys.forEach(function (key) {
                        formData_1.append(key, _this.createPrestart.value[key]);
                    });
                    formData_1.append("id", this.params.id);
                    formData_1.append("method_name", "update_prestart");
                    formData_1.append("items[]", items);
                    formData_1.append("item_status[]", item_status);
                    formData_1.append("comment[]", comment);
                    this.selectedFleetItems.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var file;
                        return __generator(this, function (_a) {
                            if (element.photo != "") {
                                formData_1.append("photo[]", element.photo);
                                // formData.append("photo[]", "||||");
                            }
                            else {
                                file = new File([], "", {});
                                formData_1.append("photo[]", file);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    this.updatePrestart(formData_1);
                }
                else {
                    formData_2 = new FormData();
                    formKeys.forEach(function (key) {
                        formData_2.append(key, _this.createPrestart.value[key]);
                    });
                    formData_2.append("items[]", items);
                    formData_2.append("item_status[]", item_status);
                    formData_2.append("comment[]", comment);
                    this.selectedFleetItems.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var file;
                        return __generator(this, function (_a) {
                            if (element.photo != "") {
                                formData_2.append("photo[]", element.photo);
                                // formData.append("photo[]", "||||");
                            }
                            else {
                                file = new File([], "", {});
                                formData_2.append("photo[]", file);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    this.addPrestart(formData_2);
                }
                return [2 /*return*/];
            });
        });
    };
    AddprestartPage.prototype.getImage = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("this.params.file_uploaded_path+path", this.params.file_uploaded_path + path);
                return [2 /*return*/, this.params.file_uploaded_path + path];
            });
        });
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
    AddprestartPage.prototype.updatePrestart = function (formData) {
        // this.api.put(`/prestart/update/${id}`, false, formData)
        //   .then((result: any) => {
        //     console.log("result", result)
        //     this.utiltiy.stopLoading();
        //     if (result.status) {
        //       this.utiltiy.toaster(result.message);
        //       this.navCtrl.setRoot(PrestartPage);
        //     }
        var _this = this;
        //   }, err => {
        //     console.log("err", err)
        //     this.utiltiy.stopLoading();
        //     this.utiltiy.toaster(err.error.message);
        //   })
        this.api.post("/prestart/Prestart", false, formData)
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
    AddprestartPage.prototype.createJob = function () {
        this.params.notes = this.notes;
        this.params.fleetList = this.selectedFleetItems;
        this.params.jobDescription = "Fleet number - " + this.params.fleet_no + ", Prestart number - " + this.params.id + ", Jobcard created by - " + this.params.drivername;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__klmr_prestart_jobcard_klmr_prestart_jobcard__["a" /* KlmrPrestartJobcardPage */], { param: null, fleet: null, payload: this.params });
    };
    AddprestartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addprestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/addprestart/addprestart.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Prestart</ion-title>\n      <ion-title *ngIf="isUpdate">Update Prestart</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createPrestart.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item margin-bottom>\n    <ion-label>Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="fleetChanged(selectedFleet)">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row *ngIf="selectedFleetItems.length > 0" padding-bottom>\n    <ion-card no-margin *ngFor="let items of selectedFleetItems;let i = index">\n      <ion-card-content>\n        <ion-card-title>\n          {{items.name}}\n        </ion-card-title>\n\n        <ion-row radio-group [(ngModel)]="items.status">\n          <ion-col col-6>\n            <ion-label no-margin>Good</ion-label>\n            <ion-radio mode="md" value="Good"></ion-radio>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label no-margin>Faulty</ion-label>\n            <ion-radio mode="md" value="Faulty"></ion-radio>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="items.status == \'Faulty\'">\n          <ion-col>\n            <ion-label no-margin>Comments</ion-label>\n            <ion-input class="border-1px-solid" type="text" [(ngModel)]="items.comments"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="items.status == \'Faulty\'">\n          <ion-col col-7>\n            <div *ngIf="(platform.is(\'cordova\'))">\n              <button ion-button  color="primarybackground" (click)="onPhotoGraphy($event, 1,i)">Upload Image\n              </button>\n            </div>\n            <div *ngIf="(!platform.is(\'cordova\'))">\n              <input type=\'file\' value="items.photo" multiple (change)="onPhotoGraphy($event, 2,i)">\n            </div>\n          </ion-col>\n          <ion-col col-4 *ngIf="(items.photo != \'\'&& items.isBase64)">\n            <!-- <img class="img-thumbnail" [src]="items.photo"> -->\n          </ion-col>\n          <ion-col col-4 *ngIf="(items.photo != \'\'&& !items.isBase64)">\n            <img class="img-thumbnail" src="{{params.file_uploaded_path}}{{items.photo}}">\n          </ion-col>\n          <ion-col col-1 *ngIf="items.photo != \'\'">\n            <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" (click)="clearImage(i)" aria-label="trash"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n\n  </ion-row>\n  <ion-row *ngIf="isFaulty" padding-bottom>\n    <ion-card no-margin>\n      <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-textarea class="border-1px-solid" type="text" autocomplete="on" autocorrect="on" [(ngModel)]="notes"></ion-textarea>\n      </ion-item>\n      <ion-row text-left padding >\n        <button ion-button small color="primarybackground" (click)="createJob()">Create Job Card</button>\n      </ion-row>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createPrestart" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n          <!-- <ion-item>\n          <ion-label floating>User Id</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="user_id"></ion-input>\n        </ion-item> -->\n\n          <ion-item *ngIf="(vehicleType == \'Light Plant\' || vehicleType == \'Plant Equipment\')">\n            <ion-label floating>Hours</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="hours"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="(vehicleType == \'Heavy Vehicle\' || vehicleType == \'Light Vehicle\')">\n            <ion-label floating>Kilometers</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="kilometers"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Driver Name</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="drivername"></ion-input>\n          </ion-item>\n\n          <!-- <ion-item> -->\n          <!-- <ion-label floating>Location</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input> -->\n\n          <ion-item>\n            <ion-label floating>Location</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedLocation" [selectOptions]="selectOptions"\n              interface="popover" (ngModelChange)="dropDownChange(selectedLocation,\'location\')"\n              [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let location of locationList;let i = index" [value]="location.location">\n                {{location.location}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <!-- </ion-item> -->\n\n          <ion-item margin-bottom>\n            <ion-label floating>Oils/Coolant added</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="oils_added"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </form>\n\n    </ion-card>\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/addprestart/addprestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], AddprestartPage);
    return AddprestartPage;
}());

//# sourceMappingURL=addprestart.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    PRODUCTION: true,
    API_URL: 'https://cotest.online/klmr_cabsand/index.php/api',
    DEV_URL: 'https://hub.klmrcivil.com.au/index.php/api',
    QA_URL: 'https://hub-qa.klmrcivil.com.au/index.php/api',
};
// QA_URL    : 'https://hub.klmrcivil.com.au/index.php/api', 
//# sourceMappingURL=environment.js.map

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrPrestartJobcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_jobcard_klmr_jobcard__ = __webpack_require__(50);
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






var KlmrPrestartJobcardPage = /** @class */ (function () {
    function KlmrPrestartJobcardPage(navCtrl, navParams, api, utiltiy, formBuilder, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.isUpdate = false;
        this.requestedList = [];
        this.priorityList = [];
        this.statusList = [];
        this.completedList = [];
        this.jobTypeList = [];
        this.fleetList = [];
        this.commentList = [];
        this.selectedRequest = "";
        this.selectedPriority = "";
        this.selectedStatus = "";
        this.selectedCompletd = "";
        this.selectedJobtype = "";
        this.selectedJob = "";
        this.selectedFleet = "";
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        this.fleetId = this.navParams.get('fleet');
        this.payload = this.navParams.get('payload');
        if (this.params) {
            this.isUpdate = true;
        }
        console.log("this.payload", this.payload);
        this.geenerateComments();
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.jobCardForm = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            comment: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            plant_item: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            in_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            requested_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            notes: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            completed_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            out_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_type: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            service_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            machine_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            prestart_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        this.regenerateForm();
    }
    KlmrPrestartJobcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KlmrJobcardAddPage');
        this.getMetaData();
    };
    KlmrPrestartJobcardPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _g.sent();
                        if (userId) {
                            this.jobCardForm.get("user_id").setValue(userId);
                        }
                        if (this.fleetId) {
                            this.jobCardForm.get("prestart_id").setValue("0");
                            this.jobCardForm.get("plant_item").setValue(this.fleetId);
                            this.jobCardForm.get("job_description").setValue("Fleet Number " + this.fleetId);
                        }
                        this.utiltiy.startLoading();
                        _a = this;
                        return [4 /*yield*/, this.getData("requested_list")];
                    case 2:
                        _a.requestedList = _g.sent();
                        _b = this;
                        return [4 /*yield*/, this.getData("priority_list")];
                    case 3:
                        _b.priorityList = _g.sent();
                        _c = this;
                        return [4 /*yield*/, this.getData("status_list")];
                    case 4:
                        _c.statusList = _g.sent();
                        _d = this;
                        return [4 /*yield*/, this.getData("completed_list")];
                    case 5:
                        _d.completedList = _g.sent();
                        _e = this;
                        return [4 /*yield*/, this.getData("job_type_list")];
                    case 6:
                        _e.jobTypeList = _g.sent();
                        if (!this.isUpdate) return [3 /*break*/, 8];
                        _f = this;
                        return [4 /*yield*/, this.getData("fleet_no_list")];
                    case 7:
                        _f.fleetList = _g.sent();
                        _g.label = 8;
                    case 8:
                        this.utiltiy.stopLoading();
                        // this.locationList = await this.getLocationList();
                        if (this.params) {
                            this.getComment(this.params.id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrPrestartJobcardPage.prototype.regenerateForm = function () {
        this.jobCardForm.get("notes").setValue(this.payload.notes);
        this.jobCardForm.get("job_description").setValue(this.payload.jobDescription);
        this.jobCardForm.get("plant_item").setValue(this.payload.fleet_no);
        this.jobCardForm.get("prestart_id").setValue(this.payload.id);
    };
    KlmrPrestartJobcardPage.prototype.geenerateComments = function () {
        var _this = this;
        this.payload.fleetList.forEach(function (element) {
            if (element.status == "Faulty") {
                element.user = _this.payload.drivername;
                _this.commentList.push(element);
            }
        });
    };
    KlmrPrestartJobcardPage.prototype.getComment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", "comments");
                formData.append("id", id);
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (result.status) {
                            _this.commentList = result.result;
                        }
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    KlmrPrestartJobcardPage.prototype.getData = function (methodName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", methodName);
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (methodName == "requested_list") {
                            result.result.forEach(function (element) {
                                element.name = element.firstName + " " + element.surname;
                            });
                        }
                        if (result.status) {
                            return result.result;
                        }
                        return true;
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    KlmrPrestartJobcardPage.prototype.jobChanged = function (id) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "job_no");
        formData.append("job_no", id);
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            if (result.status) {
                _this.jobCardForm.get("job_no").setValue(result.result);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
            _this.utiltiy.stopLoading();
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrPrestartJobcardPage.prototype.dropDownChange = function (value, key) {
        this.jobCardForm.get("" + key).setValue(value);
    };
    KlmrPrestartJobcardPage.prototype.submit = function () {
        var _this = this;
        var formKeys = Object.keys(this.jobCardForm.value);
        var formData = new FormData();
        if (this.isUpdate) {
            formData.append("method_name", "jobcard_update");
            // formData.append("status", "Active");
            formData.append("id", this.params.id);
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
        else {
            formData.append("method_name", "jobcard_store_data");
            // formData.append("status", "Active");
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
    };
    KlmrPrestartJobcardPage.prototype.jobCard = function (formData) {
        var _this = this;
        this.utiltiy.startLoading();
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_jobcard_klmr_jobcard__["a" /* KlmrJobcardPage */]);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrPrestartJobcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-prestart-jobcard',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-prestart-jobcard/klmr-prestart-jobcard.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Jobcard</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!jobCardForm.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n\n          <ion-item *ngIf="isUpdate">\n            <ion-label floating>Fleet Information</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n            (ngModelChange)="dropDownChange(selectedFleet,\'plant_item\')" [ngModelOptions]="{standalone: true}">\n            <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}\n            </ion-option>\n          </ion-select>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>Select Job No.</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJob" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="jobChanged(selectedJob)" [ngModelOptions]="{standalone: true}">\n              <ion-option value="J">H (High) </ion-option>\n              <ion-option value="O">M (Medium) </ion-option>\n              <ion-option value="N">L (Low)</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Job No.</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="job_no" disabled="true"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>In Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="in_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Description</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="job_description" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n\n          \n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n    <div style="max-height: 100px; overflow-y: auto;" *ngIf="commentList.leength !=0">\n      <div class="list-group">\n        <ion-row style="background-color: #f2f2f2;border: none;margin-bottom: 3px;" *ngFor="let comment of commentList">\n         <ion-col col-6>\n           <p padding>\n          {{comment.name}} <br>\n           <b> {{comment.user}}</b>\n          </p>\n         </ion-col>\n         <ion-col col-6>\n          <p padding>\n            {{comment.comments}} <br>\n           \n         </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item >\n            <ion-label floating>Mechanic Notes</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="notes" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Other Defected notes</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="comment" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Job Status</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedStatus" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedStatus,\'job_status\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let status of statusList;let i = index" [value]="status.Status">{{status.Status}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Completed By</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedCompletd" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedCompletd,\'completed_by\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let completed of completedList;let i = index" [value]="completed.Person">\n                {{completed.Person}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Type</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJobtype" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedJobtype,\'job_type\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let job of jobTypeList;let i = index" [value]="job.job_type">{{job.job_type}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item >\n            <ion-label floating>Machine hrs</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="machine_hrs"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Out Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="out_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Hrs At Service</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="service_hrs"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-prestart-jobcard/klmr-prestart-jobcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], KlmrPrestartJobcardPage);
    return KlmrPrestartJobcardPage;
}());

//# sourceMappingURL=klmr-prestart-jobcard.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrJobcardAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_jobcard_klmr_jobcard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_prestart_items_select_prestart_items__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__klmr_timesheet_create_add_klmr_timesheet_create_add__ = __webpack_require__(44);
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








var KlmrJobcardAddPage = /** @class */ (function () {
    function KlmrJobcardAddPage(navCtrl, navParams, api, utiltiy, formBuilder, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.isUpdate = false;
        this.requestedList = [];
        this.priorityList = [];
        this.statusList = [];
        this.completedList = [];
        this.jobTypeList = [];
        this.fleetList = [];
        this.preStartItemList = [];
        this.commentList = [];
        this.allPrestartData = [];
        this.selectedRequest = "";
        this.selectedPriority = "";
        this.selectedStatus = "";
        this.selectedCompletd = "";
        this.selectedJobtype = "";
        this.selectedJob = "";
        this.selectedFleet = "";
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        this.fleetId = this.navParams.get('fleet');
        if (this.params) {
            this.isUpdate = true;
        }
        console.log("this.fleetId", this.fleetId);
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.jobCardForm = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            comment: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            plant_item: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            in_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            requested_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            completed_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            out_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_type: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            service_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            machine_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            prestart_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            commentValidation: this.formBuilder.array([]),
        });
    }
    KlmrJobcardAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KlmrJobcardAddPage');
        this.getMetaData();
    };
    KlmrJobcardAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _g.sent();
                        if (userId) {
                            this.jobCardForm.get("user_id").setValue(userId);
                        }
                        if (this.fleetId) {
                            this.jobCardForm.get("prestart_id").setValue("0");
                            this.jobCardForm.get("plant_item").setValue(this.fleetId);
                            this.jobCardForm.get("job_description").setValue("Fleet Number " + this.fleetId);
                        }
                        this.utiltiy.startLoading();
                        _a = this;
                        return [4 /*yield*/, this.getData("requested_list")];
                    case 2:
                        _a.requestedList = _g.sent();
                        _b = this;
                        return [4 /*yield*/, this.getData("priority_list")];
                    case 3:
                        _b.priorityList = _g.sent();
                        _c = this;
                        return [4 /*yield*/, this.getData("status_list")];
                    case 4:
                        _c.statusList = _g.sent();
                        _d = this;
                        return [4 /*yield*/, this.getData("completed_list")];
                    case 5:
                        _d.completedList = _g.sent();
                        _e = this;
                        return [4 /*yield*/, this.getData("job_type_list")];
                    case 6:
                        _e.jobTypeList = _g.sent();
                        if (!this.isUpdate) return [3 /*break*/, 8];
                        _f = this;
                        return [4 /*yield*/, this.getData("fleet_no_list")];
                    case 7:
                        _f.fleetList = _g.sent();
                        _g.label = 8;
                    case 8:
                        this.utiltiy.stopLoading();
                        // this.locationList = await this.getLocationList();
                        if (this.params) {
                            this.getComment(this.params.id);
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrJobcardAddPage.prototype.regenerateForm = function () {
        this.jobCardForm.patchValue({
            user_id: this.params.user_id,
            comment: this.params.comment,
            job_no: this.params.job_no,
            plant_item: this.params.plant_item,
            in_date: this.params.in_date,
            job_description: this.params.job_description,
            requested_by: this.params.requested_by,
            priority: this.params.priority,
            job_status: this.params.job_status,
            completed_by: this.params.completed_by,
            out_date: this.params.out_date,
            job_type: this.params.job_type,
            service_hrs: this.params.service_hrs,
            machine_hrs: this.params.machine_hrs,
            prestart_id: this.params.prestart_id,
        });
        this.selectedRequest = this.params.requested_by;
        this.selectedPriority = this.params.priority;
        this.selectedStatus = this.params.job_status;
        this.selectedCompletd = this.params.completed_by;
        this.selectedJobtype = this.params.job_type;
        this.selectedFleet = this.params.plant_item;
    };
    KlmrJobcardAddPage.prototype.selectPrestart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__select_prestart_items_select_prestart_items__["a" /* SelectPrestartItemsPage */], {
                            fleetId: this.fleetId,
                            list: this.allPrestartData
                        }, { enableBackdropDismiss: false })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss(function (data) {
                            _this.allPrestartData = data;
                            _this.preStartItemList = data.filter(function (element) {
                                return element.isChecked === true;
                            });
                            _this.jobCardForm.setControl('commentValidation', _this.formBuilder.array([]));
                            for (var _i = 0, _a = _this.preStartItemList; _i < _a.length; _i++) {
                                var item = _a[_i];
                                var commentForm = _this.formBuilder.group({
                                    title: item.title,
                                    comment: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
                                    file: ['']
                                });
                                _this.comments.push(commentForm);
                            }
                            console.log('jobCardForm', _this.jobCardForm);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(KlmrJobcardAddPage.prototype, "comments", {
        get: function () {
            return this.jobCardForm.controls['commentValidation'];
        },
        enumerable: true,
        configurable: true
    });
    KlmrJobcardAddPage.prototype.getComment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", "comments");
                formData.append("id", id);
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (result.status) {
                            _this.commentList = result.result;
                        }
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    KlmrJobcardAddPage.prototype.getData = function (methodName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", methodName);
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (methodName == "requested_list") {
                            result.result.forEach(function (element) {
                                element.name = element.firstName + " " + element.surname;
                            });
                        }
                        if (result.status) {
                            return result.result;
                        }
                        return true;
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    KlmrJobcardAddPage.prototype.jobChanged = function (id) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "job_no");
        formData.append("job_no", id);
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            if (result.status) {
                _this.jobCardForm.get("job_no").setValue(result.result);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
            _this.utiltiy.stopLoading();
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJobcardAddPage.prototype.dropDownChange = function (value, key) {
        this.jobCardForm.get("" + key).setValue(value);
    };
    KlmrJobcardAddPage.prototype.submit = function () {
        var _this = this;
        var formKeys = Object.keys(this.jobCardForm.value);
        var formData = new FormData();
        if (this.isUpdate) {
            formData.append("method_name", "jobcard_update");
            // formData.append("status", "Active");
            formData.append("id", this.params.id);
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
        else {
            formData.append("method_name", "jobcard_store_data");
            // formData.append("status", "Active");
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
    };
    KlmrJobcardAddPage.prototype.addTimeSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.jobCardForm.get('job_no').valid || !this.jobCardForm.get('job_description').valid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__klmr_timesheet_create_add_klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */], { param: null, copy: false, jobData: { job_no: this.jobCardForm.value.job_no, job_description: this.jobCardForm.value.job_description } })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrJobcardAddPage.prototype.jobCard = function (formData) {
        var _this = this;
        this.utiltiy.startLoading();
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_jobcard_klmr_jobcard__["a" /* KlmrJobcardPage */]);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJobcardAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-jobcard-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jobcard-add/klmr-jobcard-add.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Jobcard</ion-title>\n      <ion-title *ngIf="isUpdate">Update Jobcard</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!jobCardForm.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n\n          <ion-item *ngIf="isUpdate">\n            <ion-label floating>Fleet Information</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n            (ngModelChange)="dropDownChange(selectedFleet,\'plant_item\')" [ngModelOptions]="{standalone: true}">\n            <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}\n            </ion-option>\n          </ion-select>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>Select Job No.</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJob" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="jobChanged(selectedJob)" [ngModelOptions]="{standalone: true}">\n              <ion-option value="J">H (High) </ion-option>\n              <ion-option value="O">M (Medium) </ion-option>\n              <ion-option value="N">L (Low)</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Job No.</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="job_no" disabled="true"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>In Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="in_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Description</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="job_description" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n\n          \n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n    <div style="max-height: 100px; overflow-y: auto;" *ngIf="commentList.leength !=0">\n      <div class="list-group">\n        <ion-row style="background-color: #f2f2f2;border: none;margin-bottom: 3px;" *ngFor="let comment of commentList">\n         <p padding>\n         {{comment.comment}} <br>\n          By<b> {{comment.firstName}} {{comment.surname}}</b>\n         </p>\n        </ion-row>\n      </div>\n    </div>\n\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Comments</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="comment" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <button color="primarybackground" ion-button class="select-pre-btn" small (click)="addTimeSheet()">Create timesheet</button>\n        <button color="primarybackground" ion-button class="select-pre-btn" small (click)="selectPrestart()">Select Prestart Items</button>\n        \n        <div style="margin: 16px;">\n            <table    *ngIf="jobCardForm.get(\'commentValidation\')[\'controls\'].length > 0"\n              formArrayName="commentValidation">\n              <tr>\n                <th class="tbl-item-width">Items</th>\n                <th style="width:30%">Comment</th>\n                <th>Image</th>\n              </tr>\n              <tr   *ngFor="let item of jobCardForm.get(\'commentValidation\')[\'controls\']" [formGroup]="item">\n                <td class="tbl-item-width"><div>{{item.value.title}}</div></td>\n                <td ><textarea formControlName="comment"  class="text-area" rows="3" cols="30"></textarea></td>\n                <td> <input type="file" formControlName="file"   accept="image/*" #typeFile><button class="close-btn" (click)="typeFile.value = \'\'"><ion-icon  name="close"></ion-icon></button></td>\n              </tr>\n            </table>\n          </div>\n      </form>\n    </ion-card>\n  </ion-row>\n    <!-- <ion-row padding-bottom>\n      <ion-card no-margin>    \n      </ion-card>\n    </ion-row> -->\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n\n          <!-- <ion-item>\n            <ion-label>Requested By</ion-label>\n            <ion-select [(ngModel)]="selectedRequest" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedRequest,\'requested_by\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let request of requestedList;let i = index" [value]="request.name">{{request.name}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Priority</ion-label>\n            <ion-select [(ngModel)]="selectedPriority" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedPriority,\'priority\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let priority of priorityList;let i = index" [value]="priority.Priority">\n                {{priority.Priority}}\n              </ion-option>\n            </ion-select>\n          </ion-item> -->\n\n          <ion-item>\n            <ion-label floating>Job Status</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedStatus" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedStatus,\'job_status\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let status of statusList;let i = index" [value]="status.Status">{{status.Status}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Completed By</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedCompletd" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedCompletd,\'completed_by\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let completed of completedList;let i = index" [value]="completed.Person">\n                {{completed.Person}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Type</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJobtype" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedJobtype,\'job_type\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let job of jobTypeList;let i = index" [value]="job.job_type">{{job.job_type}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item >\n            <ion-label floating>Machine hrs</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="machine_hrs"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Out Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="out_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Hrs At Service</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="service_hrs"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jobcard-add/klmr-jobcard-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], KlmrJobcardAddPage);
    return KlmrJobcardAddPage;
}());

//# sourceMappingURL=klmr-jobcard-add.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandAddprestartPageModule", function() { return CabsandAddprestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_addprestart__ = __webpack_require__(183);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_addprestart__["a" /* CabsandAddprestartPage */]),
            ],
        })
    ], CabsandAddprestartPageModule);
    return CabsandAddprestartPageModule;
}());

//# sourceMappingURL=cabsand-addprestart.module.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandAddprestartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_prestart_cabsand_prestart__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cabsand_prestart_jobcard_cabsand_prestart_jobcard__ = __webpack_require__(184);
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
    function CabsandAddprestartPage(navCtrl, navParams, api, utiltiy, formBuilder, actionSheetController, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.fleetList = [];
        this.locationList = [];
        this.selectedFleetItems = [];
        this.isUpdate = false;
        this.isFaulty = false;
        this.params = {};
        this.vehicleType = "";
        this.notes = '';
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        if (this.params) {
            this.isUpdate = true;
        }
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.createPrestart = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            hours: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('0', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            kilometers: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('0', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            drivername: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            oils_added: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
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
            var userId, userName, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _c.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 2:
                        userName = _c.sent();
                        if (userId) {
                            this.createPrestart.get("user_id").setValue(userId);
                            this.createPrestart.get("drivername").setValue(userName);
                        }
                        _a = this;
                        return [4 /*yield*/, this.getFleetList()];
                    case 3:
                        _a.fleetList = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.getLocationList()];
                    case 4:
                        _b.locationList = _c.sent();
                        if (this.params) {
                            this.regenerateForm();
                            this.isFaulty = this.params.item_status.includes("Faulty");
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
    CabsandAddprestartPage.prototype.getLocationList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.locationList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/tansix_prestart/location/get", false)
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
    CabsandAddprestartPage.prototype.mobileUploads = function (variableName) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            title: 'Select Image source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        // this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, variableName);
                                    },
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        // this.pickImage(this.camera.PictureSourceType.CAMERA, variableName);
                                    },
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandAddprestartPage.prototype.pickImage = function (sourceType, variableName, index) {
        // this.loadingService.presentLoading();
        // let image: any;
        // const options: CameraOptions = {
        //   quality: 100,
        //   sourceType: sourceType,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE,
        // };
        // this.camera.getPicture(options).then(
        //   (imageData) => {
        //     image = 'data:image/jpeg;base64,' + imageData;
        // this.base64tofile(image,this.selectedFleetItems[index].name,index);
        //   // this.loadingService.dismissLoading();
        //     }
        //   },
        //   (err) => {
        //     // this.loadingService.dismissLoading();
        //     console.log("errOf Image ", err)
        //   }
        // );
    };
    CabsandAddprestartPage.prototype.clearImage = function (i) {
        this.selectedFleetItems[i].photo = '';
    };
    CabsandAddprestartPage.prototype.onPhotoGraphy = function (event, type, index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i;
            return __generator(this, function (_a) {
                if (type == 1) {
                }
                else if (type == 2) {
                    for (i = 0; i < event.target.files.length; i++) {
                        this.utiltiy.getBase64(event.target.files[i]).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log("data", data);
                                // this.selectedFleetItems[index].photo = data;
                                this.selectedFleetItems[index].isBase64 = true;
                                this.base64tofile(data, this.selectedFleetItems[index].name, index);
                                return [2 /*return*/];
                            });
                        }); }).catch(function (error) {
                            console.log('error', error);
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CabsandAddprestartPage.prototype.base64tofile = function (base64, fileName, index) {
        return __awaiter(this, void 0, void 0, function () {
            var res, blob, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(base64)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        blob = _a.sent();
                        file = new File([blob], fileName.replace(/ /g, '') + ".png", { type: 'image/png' });
                        this.selectedFleetItems[index].photo = file;
                        console.log(file);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandAddprestartPage.prototype.regenerateForm = function () {
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
        this.selectedLocation = this.params.location;
        this.fleetChanged(this.params.fleet_no);
    };
    CabsandAddprestartPage.prototype.dropDownChange = function (value, key) {
        this.createPrestart.get("" + key).setValue(value);
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
        this.vehicleType = this.fleetList[index].vehicle_category;
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
    CabsandAddprestartPage.prototype.generateFleetItemList = function (list) {
        var _this = this;
        this.selectedFleetItems = [];
        list.forEach(function (vehicle_, i) {
            var obj = {};
            if (_this.isUpdate) {
                var status_1 = _this.params.item_status.includes(",");
                if (status_1) {
                    var item_status = _this.params.item_status.split(",");
                    var comment = _this.params.comment.split("||||");
                    var photo = _this.params.photo.split("||||");
                    if (!photo[i]) {
                        photo[i] = "";
                    }
                    console.log("comment", photo);
                    obj = {
                        "name": vehicle_,
                        "status": item_status[i],
                        "comments": comment[i],
                        "photo": photo[i],
                        "isBase64": false,
                    };
                }
                else {
                    obj = {
                        "name": vehicle_,
                        "status": _this.params.item_status,
                        "comments": _this.params.comment,
                        "photo": _this.params.photo,
                        "isBase64": false,
                    };
                }
            }
            else {
                obj = {
                    "name": vehicle_,
                    "status": null,
                    "comments": "",
                    "photo": "",
                    "isBase64": false,
                };
            }
            _this.selectedFleetItems.push(obj);
        });
        console.log("vehicleList", this.selectedFleetItems);
    };
    CabsandAddprestartPage.prototype.generateFileFromBase64 = function (list, i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (i == list.length) {
                    return [2 /*return*/, list];
                }
                else {
                    list.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var res, blob, file;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!element.photo.includes("data:image")) return [3 /*break*/, 3];
                                    return [4 /*yield*/, fetch(element.photo)];
                                case 1:
                                    res = _a.sent();
                                    return [4 /*yield*/, res.blob()];
                                case 2:
                                    blob = _a.sent();
                                    file = new File([blob], element.name.replace(/ /g, '') + ".png", { type: 'image/png' });
                                    element.photo = file;
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    i++;
                    this.generateFileFromBase64(list, i);
                }
                return [2 /*return*/];
            });
        });
    };
    CabsandAddprestartPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var items, item_status, comment, photo, formKeys, formData_1, formData_2;
            return __generator(this, function (_a) {
                console.log("this.credentialsForm.value", this.createPrestart.value);
                // this.selectedFleetItems = await this.generateFileFromBase64(this.selectedFleetItems,0);
                console.log("vehicleList", this.selectedFleetItems);
                items = "";
                item_status = "";
                comment = "";
                photo = "";
                formKeys = Object.keys(this.createPrestart.value);
                this.selectedFleetItems.forEach(function (element) {
                    items = items + element.name + ",";
                    item_status = item_status + element.status + ",";
                    comment = comment + element.comments + "||||";
                    // photo = photo + element.photo + "||||"
                });
                // console.log("photo", photo)
                // this.selectedFleetItems.forEach((element) => {
                //   if(element.photo != ""){
                //     formData.append("photo[]",element.photo);
                //     formData.append("photo[]","||||");
                //   }else{
                //     formData.append("photo[]","||||");
                //   }
                // })
                items = items.slice(0, items.length - 1);
                item_status = item_status.slice(0, item_status.length - 1);
                // comment = comment.slice(0, comment.length - 1);s
                // photo = photo.slice(0, photo.length - 1);
                if (this.isUpdate) {
                    formData_1 = new FormData();
                    formKeys.forEach(function (key) {
                        formData_1.append(key, _this.createPrestart.value[key]);
                    });
                    formData_1.append("id", this.params.id);
                    formData_1.append("method_name", "update_prestart");
                    formData_1.append("items[]", items);
                    formData_1.append("item_status[]", item_status);
                    formData_1.append("comment[]", comment);
                    this.selectedFleetItems.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var file;
                        return __generator(this, function (_a) {
                            if (element.photo != "") {
                                formData_1.append("photo[]", element.photo);
                                // formData.append("photo[]", "||||");
                            }
                            else {
                                file = new File([], "", {});
                                formData_1.append("photo[]", file);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    this.updatePrestart(formData_1);
                }
                else {
                    formData_2 = new FormData();
                    formKeys.forEach(function (key) {
                        formData_2.append(key, _this.createPrestart.value[key]);
                    });
                    formData_2.append("items[]", items);
                    formData_2.append("item_status[]", item_status);
                    formData_2.append("comment[]", comment);
                    this.selectedFleetItems.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var file;
                        return __generator(this, function (_a) {
                            if (element.photo != "") {
                                formData_2.append("photo[]", element.photo);
                                // formData.append("photo[]", "||||");
                            }
                            else {
                                file = new File([], "", {});
                                formData_2.append("photo[]", file);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    this.addPrestart(formData_2);
                }
                return [2 /*return*/];
            });
        });
    };
    CabsandAddprestartPage.prototype.getImage = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("this.params.file_uploaded_path+path", this.params.file_uploaded_path + path);
                return [2 /*return*/, this.params.file_uploaded_path + path];
            });
        });
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
    CabsandAddprestartPage.prototype.updatePrestart = function (formData) {
        // this.api.put(`/prestart/update/${id}`, false, formData)
        //   .then((result: any) => {
        //     console.log("result", result)
        //     this.utiltiy.stopLoading();
        //     if (result.status) {
        //       this.utiltiy.toaster(result.message);
        //       this.navCtrl.setRoot(PrestartPage);
        //     }
        var _this = this;
        //   }, err => {
        //     console.log("err", err)
        //     this.utiltiy.stopLoading();
        //     this.utiltiy.toaster(err.error.message);
        //   })
        this.api.post("/tansix_prestart/Prestart", false, formData)
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
    CabsandAddprestartPage.prototype.createJob = function () {
        this.params.notes = this.notes;
        this.params.fleetList = this.selectedFleetItems;
        this.params.jobDescription = "Fleet number - " + this.params.fleet_no + ", Prestart number - " + this.params.id + ", Jobcard created by - " + this.params.drivername;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cabsand_prestart_jobcard_cabsand_prestart_jobcard__["a" /* CabsandPrestartJobcardPage */], { param: null, fleet: null, payload: this.params });
    };
    CabsandAddprestartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-addprestart',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-addprestart/cabsand-addprestart.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\'">\n  <ion-navbar>\n    <ion-title *ngIf="!isUpdate">Add CabsandPrestart</ion-title>\n    <ion-title *ngIf="isUpdate">Update CabsandPrestart</ion-title>\n    <ion-buttons end>\n      <!-- Here we use end -->\n      <button ion-button icon-only color="light" [disabled]="!createPrestart.valid" (click)="submit()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item margin-bottom >\n    <ion-label>Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="fleetChanged(selectedFleet)">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-row *ngIf="selectedFleetItems.length > 0" padding-bottom>\n    <ion-card no-margin *ngFor="let items of selectedFleetItems">\n      <ion-card-content  >\n        <ion-card-title>\n          {{items.name}}\n        </ion-card-title>\n\n        <ion-row radio-group selectOptions="{mode: \'android\'}" [(ngModel)]="items.status" >\n          <ion-col col-6>\n            <ion-label no-margin>Good</ion-label>\n            <ion-radio mode="md" mode="md" value="Good" ></ion-radio>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label no-margin>Faulty</ion-label>\n            <ion-radio mode="md" value="Faulty"></ion-radio>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="items.status == \'Faulty\'">\n          <ion-col>\n            <ion-label no-margin>Comments</ion-label>\n            <ion-input class="border-1px-solid" type="text" [(ngModel)]="items.comments"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="items.status == \'Faulty\'">\n          <ion-col col-7>\n            <div *ngIf="(platform.is(\'cordova\'))">\n              <button ion-button  color="primarybackground" (click)="onPhotoGraphy($event, 1,i)">Upload Image\n              </button>\n            </div>\n            <div *ngIf="(!platform.is(\'cordova\'))">\n              <input type=\'file\' value="items.photo" multiple (change)="onPhotoGraphy($event, 2,i)">\n            </div>\n          </ion-col>\n          <ion-col col-4 *ngIf="(items.photo != \'\'&& items.isBase64)">\n            <!-- <img class="img-thumbnail" [src]="items.photo"> -->\n          </ion-col>\n          <ion-col col-4 *ngIf="(items.photo != \'\'&& !items.isBase64)">\n            <img class="img-thumbnail" src="{{params.file_uploaded_path}}{{items.photo}}">\n          </ion-col>\n          <ion-col col-1 *ngIf="items.photo != \'\'">\n            <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" (click)="clearImage(i)" aria-label="trash"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n\n      </ion-card-content>\n    </ion-card>\n\n    \n\n  </ion-row>\n  <ion-row *ngIf="isFaulty" padding-bottom>\n    <ion-card no-margin>\n      <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-textarea class="border-1px-solid" type="text" autocomplete="on" autocorrect="on" [(ngModel)]="notes"></ion-textarea>\n      </ion-item>\n      <ion-row text-left padding >\n        <button ion-button small color="dark" (click)="createJob()">Create Job Card</button>\n      </ion-row>\n    </ion-card>\n  </ion-row>\n\n  <ion-row  padding-bottom >\n    <ion-card no-margin >\n      <form [formGroup]="createPrestart"  novalidate>\n      <ion-list >\n\n        <ion-item>\n          <ion-label floating >Date</ion-label>\n          <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date" ></ion-datetime>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label floating>User Id</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="user_id"></ion-input>\n        </ion-item> -->\n      \n        <ion-item *ngIf="(vehicleType == \'Light Plant\' || vehicleType == \'Plant Equipment\')">\n          <ion-label floating>Hours</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="hours"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="(vehicleType == \'Heavy Vehicle\' || vehicleType == \'Light Vehicle\')">\n          <ion-label floating>Kilometers</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="kilometers"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Driver Name</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="drivername"></ion-input>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label floating>Location</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input>\n        </ion-item> -->\n\n\n        <ion-item  >\n          <ion-label floating>Location</ion-label>\n          <ion-select class="border-1px-solid" [(ngModel)]="selectedLocation" [selectOptions]="selectOptions" interface="popover"\n            (ngModelChange)="dropDownChange(selectedLocation,\'location\')" [ngModelOptions]="{standalone: true}">\n            <ion-option *ngFor="let location of locationList;let i = index" [value]="location.location">{{location.location}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item margin-bottom>\n          <ion-label floating>Oils/Coolant added</ion-label>\n          <ion-input class="border-1px-solid" type="text" formControlName="oils_added"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n</form>\n\n    </ion-card>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-addprestart/cabsand-addprestart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], CabsandAddprestartPage);
    return CabsandAddprestartPage;
}());

//# sourceMappingURL=cabsand-addprestart.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandPrestartJobcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_jobcard_cabsand_jobcard__ = __webpack_require__(51);
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






var CabsandPrestartJobcardPage = /** @class */ (function () {
    function CabsandPrestartJobcardPage(navCtrl, navParams, api, utiltiy, formBuilder, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.isUpdate = false;
        this.requestedList = [];
        this.priorityList = [];
        this.statusList = [];
        this.completedList = [];
        this.jobTypeList = [];
        this.fleetList = [];
        this.commentList = [];
        this.selectedRequest = "";
        this.selectedPriority = "";
        this.selectedStatus = "";
        this.selectedCompletd = "";
        this.selectedJobtype = "";
        this.selectedJob = "";
        this.selectedFleet = "";
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        this.fleetId = this.navParams.get('fleet');
        this.payload = this.navParams.get('payload');
        if (this.params) {
            this.isUpdate = true;
        }
        console.log("this.payload", this.payload);
        this.geenerateComments();
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.jobCardForm = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            comment: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            plant_item: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            in_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            requested_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            notes: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            completed_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            out_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_type: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            service_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            machine_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            prestart_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        this.regenerateForm();
    }
    CabsandPrestartJobcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KlmrJobcardAddPage');
        this.getMetaData();
    };
    CabsandPrestartJobcardPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _f.sent();
                        if (userId) {
                            this.jobCardForm.get("user_id").setValue(userId);
                        }
                        if (this.fleetId) {
                            this.jobCardForm.get("prestart_id").setValue("0");
                            this.jobCardForm.get("plant_item").setValue(this.fleetId);
                            this.jobCardForm.get("job_description").setValue("Fleet Number " + this.fleetId);
                        }
                        this.utiltiy.startLoading();
                        _a = this;
                        return [4 /*yield*/, this.getData("requested_list")];
                    case 2:
                        _a.requestedList = _f.sent();
                        _b = this;
                        return [4 /*yield*/, this.getData("priority_list")];
                    case 3:
                        _b.priorityList = _f.sent();
                        _c = this;
                        return [4 /*yield*/, this.getData("status_list")];
                    case 4:
                        _c.statusList = _f.sent();
                        _d = this;
                        return [4 /*yield*/, this.getData("completed_list")];
                    case 5:
                        _d.completedList = _f.sent();
                        _e = this;
                        return [4 /*yield*/, this.getData("job_type_list")];
                    case 6:
                        _e.jobTypeList = _f.sent();
                        this.utiltiy.stopLoading();
                        // this.locationList = await this.getLocationList();
                        if (this.params) {
                            this.getComment(this.params.id);
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandPrestartJobcardPage.prototype.regenerateForm = function () {
        this.jobCardForm.get("notes").setValue(this.payload.notes);
        this.jobCardForm.get("job_description").setValue(this.payload.jobDescription);
        this.jobCardForm.get("plant_item").setValue(this.payload.fleet_no);
        this.jobCardForm.get("prestart_id").setValue(this.payload.id);
    };
    CabsandPrestartJobcardPage.prototype.geenerateComments = function () {
        var _this = this;
        this.payload.fleetList.forEach(function (element) {
            if (element.status == "Faulty") {
                element.user = _this.payload.drivername;
                _this.commentList.push(element);
            }
        });
    };
    CabsandPrestartJobcardPage.prototype.getComment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", "comments");
                formData.append("id", id);
                return [2 /*return*/, this.api.post("/tansix_prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (result.status) {
                            _this.commentList = result.result;
                        }
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    CabsandPrestartJobcardPage.prototype.getData = function (methodName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", methodName);
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (methodName == "requested_list") {
                            result.result.forEach(function (element) {
                                element.name = element.firstName + " " + element.surname;
                            });
                        }
                        if (result.status) {
                            return result.result;
                        }
                        return true;
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    CabsandPrestartJobcardPage.prototype.jobChanged = function (id) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "job_no");
        formData.append("job_no", id);
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            if (result.status) {
                _this.jobCardForm.get("job_no").setValue(result.result);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
            _this.utiltiy.stopLoading();
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandPrestartJobcardPage.prototype.dropDownChange = function (value, key) {
        this.jobCardForm.get("" + key).setValue(value);
    };
    CabsandPrestartJobcardPage.prototype.submit = function () {
        var _this = this;
        var formKeys = Object.keys(this.jobCardForm.value);
        var formData = new FormData();
        if (this.isUpdate) {
            formData.append("method_name", "jobcard_update");
            // formData.append("status", "Active");
            formData.append("id", this.params.id);
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
        else {
            formData.append("method_name", "jobcard_store_data");
            // formData.append("status", "Active");
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
    };
    CabsandPrestartJobcardPage.prototype.jobCard = function (formData) {
        var _this = this;
        this.utiltiy.startLoading();
        this.api.post("/tansix_prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_jobcard_cabsand_jobcard__["a" /* CabsandJobcardPage */]);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandPrestartJobcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-prestart-jobcard',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-prestart-jobcard/cabsand-prestart-jobcard.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Jobcard</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!jobCardForm.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n\n          <ion-item *ngIf="isUpdate">\n            <ion-label floating>Fleet Information</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n            (ngModelChange)="dropDownChange(selectedFleet,\'plant_item\')" [ngModelOptions]="{standalone: true}">\n            <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}\n            </ion-option>\n          </ion-select>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>Select Job No.</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJob" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="jobChanged(selectedJob)" [ngModelOptions]="{standalone: true}">\n              <ion-option value="J">H (High) </ion-option>\n              <ion-option value="O">M (Medium) </ion-option>\n              <ion-option value="N">L (Low)</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Job No.</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="job_no" disabled="true"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>In Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="in_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Description</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="job_description" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n\n          \n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n    <div style="max-height: 100px; overflow-y: auto;" *ngIf="commentList.leength !=0">\n      <div class="list-group">\n        <ion-row style="background-color: #f2f2f2;border: none;margin-bottom: 3px;" *ngFor="let comment of commentList">\n         <ion-col col-6>\n           <p padding>\n          {{comment.name}} <br>\n           <b> {{comment.user}}</b>\n          </p>\n         </ion-col>\n         <ion-col col-6>\n          <p padding>\n            {{comment.comments}} <br>\n           \n         </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item >\n            <ion-label floating>Mechanic Notes</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="notes" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Other Defected notes</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="comment" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Job Status</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedStatus" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedStatus,\'job_status\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let status of statusList;let i = index" [value]="status.Status">{{status.Status}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Completed By</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedCompletd" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedCompletd,\'completed_by\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let completed of completedList;let i = index" [value]="completed.Person">\n                {{completed.Person}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Type</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJobtype" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedJobtype,\'job_type\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let job of jobTypeList;let i = index" [value]="job.job_type">{{job.job_type}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item >\n            <ion-label floating>Machine hrs</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="machine_hrs"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Out Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="out_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Hrs At Service</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="service_hrs"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-prestart-jobcard/cabsand-prestart-jobcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], CabsandPrestartJobcardPage);
    return CabsandPrestartJobcardPage;
}());

//# sourceMappingURL=cabsand-prestart-jobcard.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandJobcardAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_jobcard_cabsand_jobcard__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_prestart_items_select_prestart_items__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cabsand_timesheet_create_add_cabsand_timesheet_create_add__ = __webpack_require__(90);
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








var CabsandJobcardAddPage = /** @class */ (function () {
    function CabsandJobcardAddPage(navCtrl, navParams, api, utiltiy, formBuilder, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.isUpdate = false;
        this.requestedList = [];
        this.priorityList = [];
        this.statusList = [];
        this.completedList = [];
        this.jobTypeList = [];
        this.fleetList = [];
        this.preStartItemList = [];
        this.commentList = [];
        this.allPrestartData = [];
        this.selectedRequest = "";
        this.selectedPriority = "";
        this.selectedStatus = "";
        this.selectedCompletd = "";
        this.selectedJobtype = "";
        this.selectedJob = "";
        this.selectedFleet = "";
        this.selectOptions = {
            mode: 'ios'
        };
        this.params = this.navParams.get('param');
        this.fleetId = this.navParams.get('fleet');
        if (this.params) {
            this.isUpdate = true;
        }
        console.log("this.fleetId", this.fleetId);
        var currentDate = new Date();
        var date = currentDate.toISOString().split('T')[0];
        this.jobCardForm = this.formBuilder.group({
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            comment: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            plant_item: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            in_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            requested_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            job_status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            completed_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            out_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            job_type: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            service_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            machine_hrs: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            prestart_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            commentValidation: this.formBuilder.array([]),
        });
    }
    CabsandJobcardAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KlmrJobcardAddPage');
        this.getMetaData();
    };
    CabsandJobcardAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _g.sent();
                        if (userId) {
                            this.jobCardForm.get("user_id").setValue(userId);
                        }
                        if (this.fleetId) {
                            this.jobCardForm.get("prestart_id").setValue("0");
                            this.jobCardForm.get("plant_item").setValue(this.fleetId);
                            this.jobCardForm.get("job_description").setValue("Fleet Number " + this.fleetId);
                        }
                        this.utiltiy.startLoading();
                        _a = this;
                        return [4 /*yield*/, this.getData("requested_list")];
                    case 2:
                        _a.requestedList = _g.sent();
                        _b = this;
                        return [4 /*yield*/, this.getData("priority_list")];
                    case 3:
                        _b.priorityList = _g.sent();
                        _c = this;
                        return [4 /*yield*/, this.getData("status_list")];
                    case 4:
                        _c.statusList = _g.sent();
                        _d = this;
                        return [4 /*yield*/, this.getData("completed_list")];
                    case 5:
                        _d.completedList = _g.sent();
                        _e = this;
                        return [4 /*yield*/, this.getData("job_type_list")];
                    case 6:
                        _e.jobTypeList = _g.sent();
                        if (!this.isUpdate) return [3 /*break*/, 8];
                        _f = this;
                        return [4 /*yield*/, this.getData("fleet_no_list")];
                    case 7:
                        _f.fleetList = _g.sent();
                        _g.label = 8;
                    case 8:
                        this.utiltiy.stopLoading();
                        // this.locationList = await this.getLocationList();
                        if (this.params) {
                            this.getComment(this.params.id);
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandJobcardAddPage.prototype.regenerateForm = function () {
        this.jobCardForm.patchValue({
            user_id: this.params.user_id,
            comment: this.params.comment,
            job_no: this.params.job_no,
            plant_item: this.params.plant_item,
            in_date: this.params.in_date,
            job_description: this.params.job_description,
            requested_by: this.params.requested_by,
            priority: this.params.priority,
            job_status: this.params.job_status,
            completed_by: this.params.completed_by,
            out_date: this.params.out_date,
            job_type: this.params.job_type,
            service_hrs: this.params.service_hrs,
            machine_hrs: this.params.machine_hrs,
            prestart_id: this.params.prestart_id,
        });
        this.selectedRequest = this.params.requested_by;
        this.selectedPriority = this.params.priority;
        this.selectedStatus = this.params.job_status;
        this.selectedCompletd = this.params.completed_by;
        this.selectedJobtype = this.params.job_type;
        this.selectedFleet = this.params.plant_item;
    };
    CabsandJobcardAddPage.prototype.getComment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", "comments");
                formData.append("id", id);
                return [2 /*return*/, this.api.post("/tansix_prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (result.status) {
                            _this.commentList = result.result;
                        }
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    CabsandJobcardAddPage.prototype.selectPrestart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__select_prestart_items_select_prestart_items__["a" /* SelectPrestartItemsPage */], {
                            fleetId: this.fleetId,
                            list: this.allPrestartData
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss(function (data) {
                            _this.allPrestartData = data;
                            _this.preStartItemList = data.filter(function (element) {
                                return element.isChecked === true;
                            });
                            _this.jobCardForm.setControl('commentValidation', _this.formBuilder.array([]));
                            for (var _i = 0, _a = _this.preStartItemList; _i < _a.length; _i++) {
                                var item = _a[_i];
                                var commentForm = _this.formBuilder.group({
                                    title: item.title,
                                    comment: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
                                    file: ['']
                                });
                                _this.comments.push(commentForm);
                            }
                            console.log('jobCardForm', _this.jobCardForm);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CabsandJobcardAddPage.prototype, "comments", {
        get: function () {
            return this.jobCardForm.controls['commentValidation'];
        },
        enumerable: true,
        configurable: true
    });
    CabsandJobcardAddPage.prototype.getData = function (methodName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append("method_name", methodName);
                return [2 /*return*/, this.api.post("/prestart/jobcard", false, formData)
                        .then(function (result) {
                        console.log("result", result);
                        if (methodName == "requested_list") {
                            result.result.forEach(function (element) {
                                element.name = element.firstName + " " + element.surname;
                            });
                        }
                        if (result.status) {
                            return result.result;
                        }
                        return true;
                    }, function (err) {
                        console.log("err", err);
                        // this.utiltiy.stopLoading();
                        _this.utiltiy.toaster(err.error.message);
                    })];
            });
        });
    };
    CabsandJobcardAddPage.prototype.jobChanged = function (id) {
        var _this = this;
        this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("method_name", "job_no");
        formData.append("job_no", id);
        this.api.post("/prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            if (result.status) {
                _this.jobCardForm.get("job_no").setValue(result.result);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
            _this.utiltiy.stopLoading();
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJobcardAddPage.prototype.dropDownChange = function (value, key) {
        this.jobCardForm.get("" + key).setValue(value);
    };
    CabsandJobcardAddPage.prototype.submit = function () {
        var _this = this;
        var formKeys = Object.keys(this.jobCardForm.value);
        var formData = new FormData();
        if (this.isUpdate) {
            formData.append("method_name", "jobcard_update");
            // formData.append("status", "Active");
            formData.append("id", this.params.id);
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
        else {
            formData.append("method_name", "jobcard_store_data");
            // formData.append("status", "Active");
            formKeys.forEach(function (key) {
                formData.append(key, _this.jobCardForm.value[key]);
            });
            this.jobCard(formData);
        }
    };
    CabsandJobcardAddPage.prototype.addTimeSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.jobCardForm.get('job_no').valid || !this.jobCardForm.get('job_description').valid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__cabsand_timesheet_create_add_cabsand_timesheet_create_add__["a" /* CabsandTimesheetCreateAddPage */], { param: null, copy: false, jobData: { job_no: this.jobCardForm.value.job_no, job_description: this.jobCardForm.value.job_description } })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandJobcardAddPage.prototype.jobCard = function (formData) {
        var _this = this;
        this.utiltiy.startLoading();
        this.api.post("/tansix_prestart/jobcard", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_jobcard_cabsand_jobcard__["a" /* CabsandJobcardPage */]);
            }
            else {
                _this.utiltiy.toaster(result.message);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJobcardAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-jobcard-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jobcard-add/cabsand-jobcard-add.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Jobcard</ion-title>\n      <ion-title *ngIf="isUpdate">Update Jobcard</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!jobCardForm.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n\n          <ion-item *ngIf="isUpdate">\n            <ion-label floating>Fleet Information</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n            (ngModelChange)="dropDownChange(selectedFleet,\'plant_item\')" [ngModelOptions]="{standalone: true}">\n            <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}\n            </ion-option>\n          </ion-select>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>Select Job No.</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJob" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="jobChanged(selectedJob)" [ngModelOptions]="{standalone: true}">\n              <ion-option value="J">H (High) </ion-option>\n              <ion-option value="O">M (Medium) </ion-option>\n              <ion-option value="N">L (Low)</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Job No.</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="job_no" disabled="true"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>In Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="in_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Description</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="job_description" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n\n          \n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n    <div style="max-height: 100px; overflow-y: auto;" *ngIf="commentList.leength !=0">\n      <div class="list-group">\n        <ion-row style="background-color: #f2f2f2;border: none;margin-bottom: 3px;" *ngFor="let comment of commentList">\n         <p padding>\n         {{comment.comment}} <br>\n          By<b> {{comment.firstName}} {{comment.surname}}</b>\n         </p>\n        </ion-row>\n      </div>\n    </div>\n\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Comments</ion-label>\n            <ion-textarea class="border-1px-solid" type="text" formControlName="comment" autocomplete="on"\n              autocorrect="on"></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <button color="dark" ion-button class="select-pre-btn" small (click)="addTimeSheet()">Create timesheet</button>\n        <button color="dark" ion-button class="select-pre-btn" small (click)="selectPrestart()">Select Prestart Items</button>\n        <div style="margin: 16px;">\n          <table    *ngIf="jobCardForm.get(\'commentValidation\')[\'controls\'].length > 0"\n            formArrayName="commentValidation">\n            <tr>\n              <th class="tbl-item-width">Items</th>\n              <th style="width:30%">Comment</th>\n              <th>Image</th>\n            </tr>\n            <tr   *ngFor="let item of jobCardForm.get(\'commentValidation\')[\'controls\']" [formGroup]="item">\n              <td class="tbl-item-width"><div>{{item.value.title}}</div></td>\n              <td ><textarea formControlName="comment"  class="text-area" rows="3" cols="30"></textarea></td>\n              <td> <input type="file" formControlName="file"   accept="image/*" #typeFile><button class="close-btn" (click)="typeFile.value = \'\'"><ion-icon  name="close"></ion-icon></button></td>\n            </tr>\n          </table>\n        </div>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n\n          <!-- <ion-item>\n            <ion-label>Requested By</ion-label>\n            <ion-select [(ngModel)]="selectedRequest" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedRequest,\'requested_by\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let request of requestedList;let i = index" [value]="request.name">{{request.name}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Priority</ion-label>\n            <ion-select [(ngModel)]="selectedPriority" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedPriority,\'priority\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let priority of priorityList;let i = index" [value]="priority.Priority">\n                {{priority.Priority}}\n              </ion-option>\n            </ion-select>\n          </ion-item> -->\n\n          <ion-item>\n            <ion-label floating>Job Status</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedStatus" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedStatus,\'job_status\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let status of statusList;let i = index" [value]="status.Status">{{status.Status}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Completed By</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedCompletd" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedCompletd,\'completed_by\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let completed of completedList;let i = index" [value]="completed.Person">\n                {{completed.Person}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Job Type</ion-label>\n            <ion-select class="border-1px-solid" [(ngModel)]="selectedJobtype" [selectOptions]="selectOptions" interface="popover"\n              (ngModelChange)="dropDownChange(selectedJobtype,\'job_type\')" [ngModelOptions]="{standalone: true}">\n              <ion-option *ngFor="let job of jobTypeList;let i = index" [value]="job.job_type">{{job.job_type}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="jobCardForm" novalidate>\n        <ion-list>\n          <ion-item >\n            <ion-label floating>Machine hrs</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="machine_hrs"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Out Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="out_date"></ion-datetime>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Hrs At Service</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="service_hrs"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jobcard-add/cabsand-jobcard-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], CabsandJobcardAddPage);
    return CabsandJobcardAddPage;
}());

//# sourceMappingURL=cabsand-jobcard-add.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandFuelAddPageModule", function() { return CabsandFuelAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_add__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandFuelAddPageModule = /** @class */ (function () {
    function CabsandFuelAddPageModule() {
    }
    CabsandFuelAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_add__["a" /* CabsandFuelAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_add__["a" /* CabsandFuelAddPage */]),
            ],
        })
    ], CabsandFuelAddPageModule);
    return CabsandFuelAddPageModule;
}());

//# sourceMappingURL=cabsand-fuel-add.module.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandFuelAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_fuel_cabsand_fuel__ = __webpack_require__(92);
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






var CabsandFuelAddPage = /** @class */ (function () {
    function CabsandFuelAddPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.filledByList = [];
        this.containerList = [
            // "Truck",
            // "Gerry Cans",
            "Pod",
        ];
        this.fuelList = [
            "Diesel",
        ];
        this.serviceStationList = [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
        ];
        this.serviceStationName = "";
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
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            odometer: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            diesel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Diesel', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            container: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Pod', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel_odr: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel_station: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Service 1', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        console.log("param", this.params);
    }
    CabsandFuelAddPage.prototype.ionViewDidLoad = function () {
        this.getappColor();
        this.getMetaData();
    };
    CabsandFuelAddPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userName, userId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 2:
                        userName = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 3:
                        userId = _b.sent();
                        if (userName) {
                            this.createFuel.get("filled_by").setValue(userName);
                            this.createFuel.get("user_id").setValue(userId);
                            this.filledBy = userName;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandFuelAddPage.prototype.getMetaData = function () {
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
    CabsandFuelAddPage.prototype.getFleetList = function () {
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
    CabsandFuelAddPage.prototype.getFilledBtList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.filledByList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/tansix_prestart/fuel/users/get", false)
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
    CabsandFuelAddPage.prototype.regenerateForm = function () {
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
            fuel_station: this.params.fuel_station,
        });
        this.serviceStationName = this.params.fuel_station;
        this.filledBy = this.params.filled_by;
        this.selectedConatiner = this.params.container;
        this.selectedFleet = this.params.fleet_no;
        this.selectedFuel = this.params.diesel;
    };
    CabsandFuelAddPage.prototype.dropDownChange = function (value, key) {
        this.createFuel.get("" + key).setValue(value);
        if (key == "diesel" || key == "container") {
            this.fuelCalculator();
        }
    };
    CabsandFuelAddPage.prototype.fuelCalculator = function () {
        if (this.createFuel.value.container.length != 0 && this.createFuel.value.diesel.length != 0 && this.createFuel.value.fuel.length != 0) {
            this.fetchAmount();
        }
    };
    CabsandFuelAddPage.prototype.fetchAmount = function () {
        var _this = this;
        this.createFuel.get('amount').setValue("");
        // this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("container", this.createFuel.value.container);
        formData.append("diesel", this.createFuel.value.diesel);
        formData.append("fuel", this.createFuel.value.fuel);
        this.api.post("/tansix_prestart/fuel/fuel/detail", false, formData)
            .then(function (result) {
            // this.utiltiy.stopLoading();
            if (result.status) {
                if (result.result.success) {
                    _this.createFuel.get('amount').setValue(result.result.price);
                }
                else {
                    _this.utiltiy.toaster(result.result.error);
                }
            }
        }, function (err) {
            console.log("err", err);
            // this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelAddPage.prototype.submit = function () {
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
    CabsandFuelAddPage.prototype.addFuel = function (formData) {
        var _this = this;
        this.api.post("/tansix_prestart/fuel/fuel/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_fuel_cabsand_fuel__["a" /* CabsandFuelPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelAddPage.prototype.updateFuel = function (formData, id) {
        var _this = this;
        this.api.put("/tansix_prestart/fuel/fuel/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_fuel_cabsand_fuel__["a" /* CabsandFuelPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-fuel-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel-add/cabsand-fuel-add.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\'">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Fuel</ion-title>\n      <ion-title *ngIf="isUpdate">Update Fuel</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createFuel.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item margin-bottom>\n    <ion-label>Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedFleet,\'fleet_no\')">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom>\n    <ion-label>Filled By</ion-label>\n    <ion-select [(ngModel)]="filledBy" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(filledBy,\'filled_by\')">\n      <ion-option *ngFor="let filledBy of filledByList;let i = index" [value]="filledBy.name">{{filledBy.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n          <ion-item  >\n            <ion-label floating>Odometer</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="odometer"></ion-input>\n          </ion-item>\n\n          <ion-row radio-group formControlName="diesel"  justify-content-center align-items-center text-center>\n            <ion-col col-4 text-left padding-left>\n              <ion-label>Type of Fuel\n              </ion-label>\n            </ion-col>\n            <ion-col col-4>\n              <ion-label no-margin>Diesel</ion-label>\n              <ion-radio mode="md" value="Diesel"></ion-radio>\n            </ion-col>\n            <ion-col col-4>\n              \n            </ion-col>\n           \n          </ion-row>\n          \n          \n          <ion-row radio-group formControlName="container"  justify-content-center align-items-center text-center>\n            <ion-col col-4 text-left padding-left>\n              <ion-label>Container\n              </ion-label>\n            </ion-col>\n            <ion-col col-4>\n              <ion-label no-margin>Pod</ion-label>\n              <ion-radio mode="md" value="Pod"></ion-radio>\n            </ion-col>\n            <ion-col col-4>\n              <ion-label no-margin>Service Station</ion-label>\n              <ion-radio mode="md" value="Service Station"></ion-radio>\n            </ion-col>\n           \n          </ion-row>\n\n\n          \n\n          <!-- <ion-row padding-left>\n            <ion-label>Type of Fuel\n            </ion-label>\n          </ion-row>\n          <ion-row radio-group formControlName="diesel" padding>\n            <ion-col col-6>\n              <ion-label no-margin>Diesel</ion-label>\n              <ion-radio mode="md" value="Diesel"></ion-radio>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label no-margin>Unleaded</ion-label>\n              <ion-radio mode="md" value="Unleaded"></ion-radio>\n            </ion-col>\n          </ion-row> -->\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n  <!-- <ion-item margin-bottom>\n    <ion-label>Type of Fuel</ion-label>\n    <ion-select [(ngModel)]="selectedFuel" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedFuel,\'diesel\')">\n      <ion-option *ngFor="let fuel of fuelList;let i = index" [value]="fuel">{{fuel}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom>\n    <ion-label>Container</ion-label>\n    <ion-select [(ngModel)]="selectedConatiner" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedConatiner,\'container\')">\n      <ion-option *ngFor="let container of containerList;let i = index" [value]="container">{{container}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n\n\n\n  <!-- <ion-item margin-bottom>\n    <ion-label>Fuel Station </ion-label>\n    <ion-select [(ngModel)]="serviceStationName" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(serviceStationName,\'fuel_station\')">\n      <ion-option *ngFor="let service of serviceStationList;let i = index" [value]="service">{{service}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n \n  \n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Fuel (In Litres)</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel" (keyup)="fuelCalculator()"></ion-input>\n          </ion-item>\n       \n          <ion-item>\n            <ion-label floating>Amount</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="amount" disabled="true"></ion-input>\n          </ion-item>\n         \n          <ion-item>\n            <ion-label floating>Fuel ODR</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel_odr"></ion-input>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Location</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel-add/cabsand-fuel-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CabsandFuelAddPage);
    return CabsandFuelAddPage;
}());

//# sourceMappingURL=cabsand-fuel-add.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandFuelTruckAddPageModule", function() { return CabsandFuelTruckAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_truck_add__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandFuelTruckAddPageModule = /** @class */ (function () {
    function CabsandFuelTruckAddPageModule() {
    }
    CabsandFuelTruckAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_truck_add__["a" /* CabsandFuelTruckAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_truck_add__["a" /* CabsandFuelTruckAddPage */]),
            ],
        })
    ], CabsandFuelTruckAddPageModule);
    return CabsandFuelTruckAddPageModule;
}());

//# sourceMappingURL=cabsand-fuel-truck-add.module.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandFuelTruckAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_fuel_truck_cabsand_fuel_truck__ = __webpack_require__(93);
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






var CabsandFuelTruckAddPage = /** @class */ (function () {
    function CabsandFuelTruckAddPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.filledByList = [];
        this.containerList = [
            // "Truck",
            // "Gerry Cans",
            "Pod",
        ];
        this.serviceStationList = [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
        ];
        this.serviceStationName = "";
        this.selectedConatiner = "Pod";
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
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            filled_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            truck: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Pod', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            diesel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Diesel', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            price: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        console.log("param", this.params);
    }
    CabsandFuelTruckAddPage.prototype.ionViewDidLoad = function () {
        this.getMetaData();
    };
    CabsandFuelTruckAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userName, userId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFilledBtList()];
                    case 1:
                        _a.filledByList = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 2:
                        userName = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 3:
                        userId = _b.sent();
                        if (userName) {
                            this.createFuel.get("filled_by").setValue(userName);
                            this.createFuel.get("user_id").setValue(userId);
                            this.filledBy = userName;
                        }
                        if (this.params) {
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandFuelTruckAddPage.prototype.fuelCalculator = function (evnt) {
        this.createFuel.get("amount").setValue(this.createFuel.value.fuel * this.createFuel.value.price);
    };
    CabsandFuelTruckAddPage.prototype.getFilledBtList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.filledByList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/tansix_prestart/fuel/users/get", false)
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
    CabsandFuelTruckAddPage.prototype.regenerateForm = function () {
        this.createFuel.patchValue({
            date: this.params.date,
            filled_by: this.params.filled_by,
            truck: this.params.truck,
            diesel: this.params.diesel,
            fuel: this.params.fuel,
            price: this.params.price,
            amount: this.params.amount,
        });
        this.filledBy = this.params.filled_by;
        // this.serviceStationName = this.params.fuel_station;
        // this.selectedConatiner = this.params.truck;
    };
    CabsandFuelTruckAddPage.prototype.dropDownChange = function (value, key) {
        this.createFuel.get("" + key).setValue(value);
    };
    CabsandFuelTruckAddPage.prototype.submit = function () {
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
            var body = string_1 + "&reminder_fuel=" + ("" + this.createFuel.value['fuel']);
            ;
            console.log("string-1", body);
            this.updateFuelTruck(body, this.params.id);
        }
        else {
            var formData_1 = new FormData();
            formKeys.forEach(function (key) {
                formData_1.append(key, _this.createFuel.value[key]);
            });
            formData_1.append("reminder_fuel", this.createFuel.value['fuel']);
            this.addFuelTruck(formData_1);
        }
    };
    CabsandFuelTruckAddPage.prototype.addFuelTruck = function (formData) {
        var _this = this;
        this.api.post("/tansix_prestart/fuel/fuel_truck/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_fuel_truck_cabsand_fuel_truck__["a" /* CabsandFuelTruckPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelTruckAddPage.prototype.updateFuelTruck = function (formData, id) {
        var _this = this;
        this.api.put("/tansix_prestart/fuel/fuel_truck/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_fuel_truck_cabsand_fuel_truck__["a" /* CabsandFuelTruckPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandFuelTruckAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-fuel-truck-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel-truck-add/cabsand-fuel-truck-add.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Fuel Truck</ion-title>\n      <ion-title *ngIf="isUpdate">Update Fuel Truck</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createFuel.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-row padding-bottom>\n    <ion-card no-margin class="full-width">\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n         \n          <ion-row radio-group formControlName="diesel"  justify-content-center align-items-center text-center>\n            <ion-col col-6 text-left padding-left>\n              <ion-label>Type of Fuel\n              </ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label no-margin>Diesel</ion-label>\n              <ion-radio mode="md" value="Diesel"></ion-radio>\n            </ion-col>\n           \n          </ion-row>\n          \n          \n          <ion-row radio-group formControlName="truck"  justify-content-center align-items-center text-center>\n            <ion-col col-6 text-left padding-left>\n              <ion-label>Container\n              </ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label no-margin>Pod</ion-label>\n              <ion-radio mode="md" value="Pod"></ion-radio>\n            </ion-col>\n           \n          </ion-row>\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-item margin-bottom>\n    <ion-label>Filled By</ion-label>\n    <ion-select [(ngModel)]="filledBy" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(filledBy,\'filled_by\')">\n      <ion-option *ngFor="let filledBy of filledByList;let i = index" [value]="filledBy.name">{{filledBy.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n\n \n\n  <ion-row padding-bottom>\n    <ion-card no-margin class="full-width">\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Fuel (In Litres)</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel" type="number" (keyup)="fuelCalculator($event)"></ion-input>\n          </ion-item>\n       \n          <ion-item>\n            <ion-label floating>Price (Per Litre)</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="price" type="number" (keyup)="fuelCalculator($event)"></ion-input>\n          </ion-item>\n         \n          <ion-item margin-bottom>\n            <ion-label floating>Total Amount</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="amount" disabled="true"></ion-input>\n          </ion-item>\n\n          \n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <!-- <ion-item margin-bottom>\n    <ion-label>Fuel Station </ion-label>\n    <ion-select [(ngModel)]="serviceStationName" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(serviceStationName,\'fuel_station\')">\n      <ion-option *ngFor="let service of serviceStationList;let i = index" [value]="service">{{service}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row padding-bottom *ngIf="serviceStationName.length > 0">\n    <ion-card no-margin class="full-width">\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Cents (Per Litre)</ion-label>\n            <ion-input class="border-1px-solid" type="number" formControlName="cents"  ></ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row> -->\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-fuel-truck-add/cabsand-fuel-truck-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CabsandFuelTruckAddPage);
    return CabsandFuelTruckAddPage;
}());

//# sourceMappingURL=cabsand-fuel-truck-add.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandFuelTruckPageModule", function() { return CabsandFuelTruckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_truck__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandFuelTruckPageModule = /** @class */ (function () {
    function CabsandFuelTruckPageModule() {
    }
    CabsandFuelTruckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_truck__["a" /* CabsandFuelTruckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_fuel_truck__["a" /* CabsandFuelTruckPage */]),
            ],
        })
    ], CabsandFuelTruckPageModule);
    return CabsandFuelTruckPageModule;
}());

//# sourceMappingURL=cabsand-fuel-truck.module.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandFuelPageModule", function() { return CabsandFuelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandFuelPageModule = /** @class */ (function () {
    function CabsandFuelPageModule() {
    }
    CabsandFuelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_fuel__["a" /* CabsandFuelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_fuel__["a" /* CabsandFuelPage */]),
            ],
        })
    ], CabsandFuelPageModule);
    return CabsandFuelPageModule;
}());

//# sourceMappingURL=cabsand-fuel.module.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandJobcardPageModule", function() { return CabsandJobcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_jobcard__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandJobcardPageModule = /** @class */ (function () {
    function CabsandJobcardPageModule() {
    }
    CabsandJobcardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_jobcard__["a" /* CabsandJobcardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_jobcard__["a" /* CabsandJobcardPage */]),
            ],
        })
    ], CabsandJobcardPageModule);
    return CabsandJobcardPageModule;
}());

//# sourceMappingURL=cabsand-jobcard.module.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandJobcardAddPageModule", function() { return CabsandJobcardAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_jobcard_add__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandJobcardAddPageModule = /** @class */ (function () {
    function CabsandJobcardAddPageModule() {
    }
    CabsandJobcardAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_jobcard_add__["a" /* CabsandJobcardAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_jobcard_add__["a" /* CabsandJobcardAddPage */]),
            ],
        })
    ], CabsandJobcardAddPageModule);
    return CabsandJobcardAddPageModule;
}());

//# sourceMappingURL=cabsand-jobcard-add.module.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandJsaAddPageModule", function() { return CabsandJsaAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_jsa_add__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandJsaAddPageModule = /** @class */ (function () {
    function CabsandJsaAddPageModule() {
    }
    CabsandJsaAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_jsa_add__["a" /* CabsandJsaAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_jsa_add__["a" /* CabsandJsaAddPage */]),
            ],
        })
    ], CabsandJsaAddPageModule);
    return CabsandJsaAddPageModule;
}());

//# sourceMappingURL=cabsand-jsa-add.module.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandJsaAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cabsand_jsa_cabsand_jsa__ = __webpack_require__(94);
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






var CabsandJsaAddPage = /** @class */ (function () {
    function CabsandJsaAddPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.filledByList = [];
        this.filledBy = [];
        this.isUpdate = false;
        this.params = {};
        this.riskLevelOptions = [
            "E",
            "H",
            "M",
            "L"
        ];
        this.riskLevel = {
            "Catastrophic": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            },
            "Critical": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            },
            "Marginal": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            },
            "Negligible": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            }
        };
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
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            task: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            team_member: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]([], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            risk_show: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            cce: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            staff_username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            risk_level: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
        });
        console.log("param", this.params);
    }
    CabsandJsaAddPage.prototype.ionViewDidLoad = function () {
        this.getMetaData();
    };
    CabsandJsaAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, userName;
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
                        if (!this.params) return [3 /*break*/, 3];
                        this.regenerateForm();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 4:
                        userName = _c.sent();
                        this.createFuel.get('staff_username').setValue(userName);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CabsandJsaAddPage.prototype.getFleetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fleetList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/tansix_prestart/jsa/fleet/get", false)
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
    CabsandJsaAddPage.prototype.getFilledBtList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.filledByList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/tansix_prestart/fuel/users/get", false)
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
    CabsandJsaAddPage.prototype.regenerateForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fillerBy, status, values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillerBy = [];
                        status = this.params.team_member.includes(",");
                        if (status) {
                            fillerBy = this.params.team_member.split(",");
                        }
                        else {
                            fillerBy = [this.params.team_member];
                        }
                        if (!(this.params.risk_show == "Yes")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.regenerateRiskLevel(this.params.risk_level)];
                    case 1:
                        values = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.createFuel.patchValue({
                            date: this.params.date,
                            location: this.params.location,
                            task: this.params.task,
                            fleet_no: this.params.fleet_no,
                            team_member: fillerBy,
                            risk_show: this.params.risk_show,
                            cce: this.params.cce,
                            staff_username: this.params.staff_username,
                        });
                        this.filledBy = fillerBy;
                        this.selectedCCE = this.params.cce,
                            this.selectedRisk = this.params.risk_show,
                            this.selectedFleet = this.params.fleet_no;
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandJsaAddPage.prototype.regenerateRiskLevel = function (risk_level) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                risk_level.forEach(function (risk_level_, i) {
                    _this.riskLevel[risk_level_.severity][risk_level_.risk_type] = risk_level_.risk_code;
                    return true;
                });
                return [2 /*return*/];
            });
        });
    };
    CabsandJsaAddPage.prototype.dropDownChange = function (value, key) {
        this.createFuel.get("" + key).setValue(value);
    };
    CabsandJsaAddPage.prototype.submit = function () {
        console.log("this.credentialsForm.value", this.createFuel.value);
        this.createFuel.value.risk_level = this.createFuel.value.risk_show == "Yes" ? this.riskLevel : {};
        var payload = {
            "formData": this.createFuel.value
        };
        if (this.isUpdate) {
            this.updateJsa(payload, this.params.id);
        }
        else {
            this.addJsa(payload);
        }
    };
    CabsandJsaAddPage.prototype.addJsa = function (formData) {
        var _this = this;
        this.api.post("/tansix_prestart/jsa/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_jsa_cabsand_jsa__["a" /* CabsandJsaPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJsaAddPage.prototype.updateJsa = function (formData, id) {
        var _this = this;
        this.api.putWithourForm("/tansix_prestart/jsa/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cabsand_jsa_cabsand_jsa__["a" /* CabsandJsaPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    CabsandJsaAddPage.prototype.validateInput = function (group, key) {
        var value = this.riskLevel[group][key].toLowerCase();
        if (value == "e" || value == "h" || value == "m" || value == "l") {
            this.riskLevel[group][key] = value.toUpperCase();
        }
        else {
            this.riskLevel[group][key] = null;
            this.utiltiy.toaster("Only E,H,M,L allowed!");
        }
        console.log("riskLevel", this.riskLevel[group][key]);
        console.log("riskLevel", this.riskLevel);
    };
    CabsandJsaAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-jsa-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jsa-add/cabsand-jsa-add.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\'">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Jsa</ion-title>\n      <ion-title *ngIf="isUpdate">Update Jsa</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createFuel.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n          <ion-item  >\n            <ion-label floating>Location</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input>\n          </ion-item>\n          <ion-item  margin-bottom>\n            <ion-label floating>Task Assessed</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="task"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedFleet,\'fleet_no\')" class="width-75 align-right">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">JSA Team members</ion-label>\n    <ion-select [(ngModel)]="filledBy" [selectOptions]="selectOptions" interface="popover"\n      multiple  (ngModelChange)="dropDownChange(filledBy,\'team_member\')" class="width-75 align-right">\n      <ion-option *ngFor="let filledBy of filledByList;let i = index" [value]="filledBy.name">{{filledBy.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">Risk Level</ion-label>\n    <ion-select [(ngModel)]="selectedRisk" [selectOptions]="selectOptions" interface="popover"\n    (ngModelChange)="dropDownChange(selectedRisk,\'risk_show\')" class="width-75 align-right">\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-row padding-bottom *ngIf="selectedRisk == \'Yes\'">\n    <ion-card no-margin>\n      <p padding-left padding-top>\n       <b>E =</b> Extremely Hgh Risk <br><b>H =</b>  High Risk <br><b>M =</b>  Moderatee Low Risk<br>  <b>L =</b>  Low Risk\n      </p>\n\n      <table style="width:100%">\n        <tr>\n          <th colspan="7">Risk Assessment Code Matrix</th>\n        </tr>\n        <tr>\n          <th rowspan="2"> </th>\n          <th colspan="7">PROBABILITY</th>\n        </tr>\n        <tr>\n          <th>Frequent</th>\n          <th>Likely</th>\n          <th>Occasional</th>\n          <th>Seldom</th>\n          <th>Unlikely</th>\n        </tr>\n        <tr>\n          <th >Catastrophic</th>\n          <td >\n          <ion-select [(ngModel)]="riskLevel.Catastrophic.Frequent" [selectOptions]="selectOptions" interface="popover" id="1" class="width-100" >\n            <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n          </ion-select>\n          </td>\n\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Likely"  [selectOptions]="selectOptions" interface="popover" id="2" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Occasional" [selectOptions]="selectOptions" interface="popover" id="3" class="width-100"> \n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Seldom" [selectOptions]="selectOptions" interface="popover" id="4" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Unlikely" [selectOptions]="selectOptions" interface="popover" id="5" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n\n        <tr>\n          <th >Critical</th>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Frequent" [selectOptions]="selectOptions" interface="popover" id="6" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Likely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Occasional" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Seldom" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Unlikely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n       \n        <tr>\n          <th >Marginal</th>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Frequent" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Likely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Occasional" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Seldom" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Unlikely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n       \n        <tr>\n          <th >Marginal</th>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Frequent" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Likely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Occasional" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Seldom" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Unlikely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n       \n      </table>\n    </ion-card>\n  </ion-row>\n  \n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">CCE</ion-label>\n    <ion-select  [(ngModel)]="selectedCCE"  class="width-75 align-right" [selectOptions]="selectOptions" interface="popover"\n    (ngModelChange)="dropDownChange(selectedCCE,\'cce\')"\n     >\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row margin-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n          <ion-item  margin-bottom>\n            <ion-label floating>Staff Name</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="staff_username" [disabled]="true"></ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  \n  <!-- onkeypress="let satisfy = (/^(E|H|M|L|e|h|m|l)$/).test(this.value + event.key); if(!satisfy){this.value = \'\'} return satisfy;" -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-jsa-add/cabsand-jsa-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CabsandJsaAddPage);
    return CabsandJsaAddPage;
}());

//# sourceMappingURL=cabsand-jsa-add.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandJsaPageModule", function() { return CabsandJsaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_jsa__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandJsaPageModule = /** @class */ (function () {
    function CabsandJsaPageModule() {
    }
    CabsandJsaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_jsa__["a" /* CabsandJsaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_jsa__["a" /* CabsandJsaPage */]),
            ],
        })
    ], CabsandJsaPageModule);
    return CabsandJsaPageModule;
}());

//# sourceMappingURL=cabsand-jsa.module.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandPrestartPageModule", function() { return CabsandPrestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_prestart__ = __webpack_require__(89);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_prestart__["a" /* CabsandPrestartPage */]),
            ],
        })
    ], CabsandPrestartPageModule);
    return CabsandPrestartPageModule;
}());

//# sourceMappingURL=cabsand-prestart.module.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandPrestartJobcardPageModule", function() { return CabsandPrestartJobcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_prestart_jobcard__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandPrestartJobcardPageModule = /** @class */ (function () {
    function CabsandPrestartJobcardPageModule() {
    }
    CabsandPrestartJobcardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_prestart_jobcard__["a" /* CabsandPrestartJobcardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_prestart_jobcard__["a" /* CabsandPrestartJobcardPage */]),
            ],
        })
    ], CabsandPrestartJobcardPageModule);
    return CabsandPrestartJobcardPageModule;
}());

//# sourceMappingURL=cabsand-prestart-jobcard.module.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandTimesheetApprovalsPageModule", function() { return CabsandTimesheetApprovalsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_approvals__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandTimesheetApprovalsPageModule = /** @class */ (function () {
    function CabsandTimesheetApprovalsPageModule() {
    }
    CabsandTimesheetApprovalsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_approvals__["a" /* CabsandTimesheetApprovalsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_approvals__["a" /* CabsandTimesheetApprovalsPage */]),
            ],
        })
    ], CabsandTimesheetApprovalsPageModule);
    return CabsandTimesheetApprovalsPageModule;
}());

//# sourceMappingURL=cabsand-timesheet-approvals.module.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandTimesheetApprovalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
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




var CabsandTimesheetApprovalsPage = /** @class */ (function () {
    function CabsandTimesheetApprovalsPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
    }
    CabsandTimesheetApprovalsPage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList();
    };
    CabsandTimesheetApprovalsPage.prototype.gettimeSheetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSheetList = [];
                        this.utiltiy.startLoading();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        formData.append("method_name", "all_approver_list");
                        this.api.post("/tansix_prestart/timesheet/approver", true, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.utiltiy.stopLoading();
                            _this.timeSheetList = result.result;
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetApprovalsPage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    CabsandTimesheetApprovalsPage.prototype.acceptRejetc = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, status, option, comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            "title": 'Confirmation',
                            "message": '',
                            "approveText": 'Accept',
                            "rejectText": 'Reject',
                        };
                        return [4 /*yield*/, this.utiltiy.attentionDialog(options)];
                    case 1:
                        status = _a.sent();
                        if (!status) return [3 /*break*/, 2];
                        this.approveDisaaprove(id, "2", "");
                        return [3 /*break*/, 4];
                    case 2:
                        option = {
                            "title": 'Comment',
                            "approveText": 'send',
                        };
                        return [4 /*yield*/, this.utiltiy.inputDialog(option)];
                    case 3:
                        comment = _a.sent();
                        this.approveDisaaprove(id, "4", comment);
                        console.log("comment", comment);
                        _a.label = 4;
                    case 4:
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetApprovalsPage.prototype.approveDisaaprove = function (id, status, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                this.utiltiy.startLoading();
                formData = new FormData();
                formData.append("timesheet_id", id);
                formData.append("status", status);
                formData.append("comments", comment);
                formData.append("method_name", "approver_timesheet_reject_approve_update_status");
                this.api.post("/tansix_prestart/timesheet/approver", true, formData)
                    .then(function (result) {
                    console.log("result", result);
                    _this.utiltiy.stopLoading();
                    _this.gettimeSheetList();
                }, function (err) {
                    console.log("err", err);
                    _this.utiltiy.stopLoading();
                    _this.utiltiy.toaster(err.error.message);
                });
                return [2 /*return*/];
            });
        });
    };
    CabsandTimesheetApprovalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-timesheet-approvals',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-approvals/cabsand-timesheet-approvals.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Approvals</ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" >\n          <h2>\n            <!-- <ion-badge item-end [color]="\'dark\' ">{{fuel.id}}</ion-badge> -->\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity:</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code:</span>\n              <div>{{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start:</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Finish :</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small="" [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger" (click)="acceptRejetc(fuel.id)"><span\n              class="button-inner">\n              <ion-icon name="more" role="img" class="icon icon-md ion-md-more" aria-label="more"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        \n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-approvals/cabsand-timesheet-approvals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandTimesheetApprovalsPage);
    return CabsandTimesheetApprovalsPage;
}());

//# sourceMappingURL=cabsand-timesheet-approvals.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandTimesheetCreatePageModule", function() { return CabsandTimesheetCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_create__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandTimesheetCreatePageModule = /** @class */ (function () {
    function CabsandTimesheetCreatePageModule() {
    }
    CabsandTimesheetCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_create__["a" /* CabsandTimesheetCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_create__["a" /* CabsandTimesheetCreatePage */]),
            ],
        })
    ], CabsandTimesheetCreatePageModule);
    return CabsandTimesheetCreatePageModule;
}());

//# sourceMappingURL=cabsand-timesheet-create.module.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandTimesheetCreateAddPageModule", function() { return CabsandTimesheetCreateAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_create_add__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandTimesheetCreateAddPageModule = /** @class */ (function () {
    function CabsandTimesheetCreateAddPageModule() {
    }
    CabsandTimesheetCreateAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_create_add__["a" /* CabsandTimesheetCreateAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_create_add__["a" /* CabsandTimesheetCreateAddPage */]),
            ],
        })
    ], CabsandTimesheetCreateAddPageModule);
    return CabsandTimesheetCreateAddPageModule;
}());

//# sourceMappingURL=cabsand-timesheet-create-add.module.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandTimesheetHistoryPageModule", function() { return CabsandTimesheetHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_history__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandTimesheetHistoryPageModule = /** @class */ (function () {
    function CabsandTimesheetHistoryPageModule() {
    }
    CabsandTimesheetHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_history__["a" /* CabsandTimesheetHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_history__["a" /* CabsandTimesheetHistoryPage */]),
            ],
        })
    ], CabsandTimesheetHistoryPageModule);
    return CabsandTimesheetHistoryPageModule;
}());

//# sourceMappingURL=cabsand-timesheet-history.module.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandTimesheetHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
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




var CabsandTimesheetHistoryPage = /** @class */ (function () {
    function CabsandTimesheetHistoryPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
        this.weeklySelectedDate = '';
        this.dateFilterList = [];
    }
    CabsandTimesheetHistoryPage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList(null);
    };
    CabsandTimesheetHistoryPage.prototype.gettimeSheetList = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSheetList = [];
                        this.utiltiy.startLoading();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        // formData.append("user_id", userId);
                        // formData.append("status", "2");
                        formData.append("method_name", "history_list");
                        if (filter) {
                            formData.append("date_filter", filter);
                        }
                        this.api.post("/tansix_prestart/timesheet/approver/Approver", true, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.timeSheetList = result.result;
                            if (result.result.length > 0) {
                                var temp = result.extra_data.date_filter_list.filter(function (e) { return e != ''; });
                                _this.dateFilterList = temp;
                            }
                            else {
                                _this.utiltiy.toaster(result.message);
                            }
                            _this.utiltiy.stopLoading();
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetHistoryPage.prototype.searchByDate = function () {
        this.gettimeSheetList(this.weeklySelectedDate);
    };
    CabsandTimesheetHistoryPage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    CabsandTimesheetHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-timesheet-history',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-history/cabsand-timesheet-history.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">History</ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col class="search-wrapper flex-center">\n      <ion-item no-lines>\n        <ion-label *ngIf="!weeklySelectedDate">Select Weekly Date</ion-label>\n        <ion-select [(ngModel)]="weeklySelectedDate" (ngModelChange)="searchByDate()">\n          <ion-option value="all">All</ion-option>\n          <ion-option [value]="item" *ngFor="let item of dateFilterList.slice().reverse()">{{item}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div (click)="searchByDate()" class="search-icon flex-center"><ion-icon color="light" name="search"></ion-icon></div>\n    </ion-col>\n  </ion-row>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" >\n          <h2>\n            <!-- <ion-badge item-end [color]="\'dark\' ">{{fuel.id}}</ion-badge> -->\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity:</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code:</span>\n              <div>{{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start:</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Finish :</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        \n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-history/cabsand-timesheet-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandTimesheetHistoryPage);
    return CabsandTimesheetHistoryPage;
}());

//# sourceMappingURL=cabsand-timesheet-history.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(206);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__ = __webpack_require__(4);
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
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/dashboard/dashboard.html"*/'\n\n<ion-content padding>\n  <p padding-left>In Progress</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsaPageModule", function() { return JsaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsa__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JsaPageModule = /** @class */ (function () {
    function JsaPageModule() {
    }
    JsaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jsa__["a" /* JsaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jsa__["a" /* JsaPage */]),
            ],
        })
    ], JsaPageModule);
    return JsaPageModule;
}());

//# sourceMappingURL=jsa.module.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabsandTimesheetPendingPageModule", function() { return CabsandTimesheetPendingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_pending__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CabsandTimesheetPendingPageModule = /** @class */ (function () {
    function CabsandTimesheetPendingPageModule() {
    }
    CabsandTimesheetPendingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_pending__["a" /* CabsandTimesheetPendingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cabsand_timesheet_pending__["a" /* CabsandTimesheetPendingPage */]),
            ],
        })
    ], CabsandTimesheetPendingPageModule);
    return CabsandTimesheetPendingPageModule;
}());

//# sourceMappingURL=cabsand-timesheet-pending.module.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrFuelAddPageModule", function() { return KlmrFuelAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_add__ = __webpack_require__(210);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_fuel_add__["a" /* KlmrFuelAddPage */]),
            ],
        })
    ], KlmrFuelAddPageModule);
    return KlmrFuelAddPageModule;
}());

//# sourceMappingURL=klmr-fuel-add.module.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrFuelAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_fuel_klmr_fuel__ = __webpack_require__(95);
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
            // "Truck",
            // "Gerry Cans",
            "Pod",
        ];
        this.fuelList = [
            "Diesel",
        ];
        this.serviceStationList = [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
        ];
        this.serviceStationName = "";
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
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            odometer: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            diesel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Diesel', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            container: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Pod', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel_odr: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel_station: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Service 1', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        console.log("param", this.params);
    }
    KlmrFuelAddPage.prototype.ionViewDidLoad = function () {
        this.getappColor();
        this.getMetaData();
    };
    KlmrFuelAddPage.prototype.getappColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userName, userId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.utiltiy.getStorage("primaryColor")];
                    case 1:
                        _a.appColor = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 2:
                        userName = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 3:
                        userId = _b.sent();
                        if (userName) {
                            this.createFuel.get("filled_by").setValue(userName);
                            this.createFuel.get("user_id").setValue(userId);
                            this.filledBy = userName;
                        }
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
            fuel_station: this.params.fuel_station,
        });
        this.serviceStationName = this.params.fuel_station;
        this.filledBy = this.params.filled_by;
        this.selectedConatiner = this.params.container;
        this.selectedFleet = this.params.fleet_no;
        this.selectedFuel = this.params.diesel;
    };
    KlmrFuelAddPage.prototype.dropDownChange = function (value, key) {
        this.createFuel.get("" + key).setValue(value);
        if (key == "diesel" || key == "container") {
            this.fuelCalculator();
        }
    };
    KlmrFuelAddPage.prototype.fuelCalculator = function () {
        if (this.createFuel.value.container.length != 0 && this.createFuel.value.diesel.length != 0 && this.createFuel.value.fuel.length != 0) {
            this.fetchAmount();
        }
    };
    KlmrFuelAddPage.prototype.fetchAmount = function () {
        var _this = this;
        this.createFuel.get('amount').setValue("");
        // this.utiltiy.startLoading();
        var formData = new FormData();
        formData.append("container", this.createFuel.value.container);
        formData.append("diesel", this.createFuel.value.diesel);
        formData.append("fuel", this.createFuel.value.fuel);
        this.api.post("/prestart/fuel/fuel/detail", false, formData)
            .then(function (result) {
            // this.utiltiy.stopLoading();
            if (result.status) {
                if (result.result.success) {
                    _this.createFuel.get('amount').setValue(result.result.price);
                }
                else {
                    _this.utiltiy.toaster(result.result.error);
                }
            }
        }, function (err) {
            console.log("err", err);
            // this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
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
            selector: 'page-klmr-fuel-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-add/klmr-fuel-add.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Fuel</ion-title>\n      <ion-title *ngIf="isUpdate">Update Fuel</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createFuel.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item margin-bottom>\n    <ion-label>Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedFleet,\'fleet_no\')">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom>\n    <ion-label>Filled By</ion-label>\n    <ion-select [(ngModel)]="filledBy" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(filledBy,\'filled_by\')">\n      <ion-option *ngFor="let filledBy of filledByList;let i = index" [value]="filledBy.name">{{filledBy.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n          <ion-item  >\n            <ion-label floating>Odometer</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="odometer"></ion-input>\n          </ion-item>\n\n          <ion-row radio-group formControlName="diesel"  justify-content-center align-items-center text-center>\n            <ion-col col-4 text-left padding-left>\n              <ion-label>Type of Fuel\n              </ion-label>\n            </ion-col>\n            <ion-col col-4>\n              <ion-label no-margin>Diesel</ion-label>\n              <ion-radio mode="md" value="Diesel"></ion-radio>\n            </ion-col>\n            <ion-col col-4>\n              \n            </ion-col>\n           \n          </ion-row>\n          \n          \n          <ion-row radio-group formControlName="container"  justify-content-center align-items-center text-center>\n            <ion-col col-4 text-left padding-left>\n              <ion-label>Container\n              </ion-label>\n            </ion-col>\n            <ion-col col-4>\n              <ion-label no-margin>Pod</ion-label>\n              <ion-radio mode="md" value="Pod"></ion-radio>\n            </ion-col>\n            <ion-col col-4>\n              <ion-label no-margin>Service Station</ion-label>\n              <ion-radio mode="md" value="Service Station"></ion-radio>\n            </ion-col>\n           \n          </ion-row>\n\n\n          \n\n          <!-- <ion-row padding-left>\n            <ion-label>Type of Fuel\n            </ion-label>\n          </ion-row>\n          <ion-row radio-group formControlName="diesel" padding>\n            <ion-col col-6>\n              <ion-label no-margin>Diesel</ion-label>\n              <ion-radio mode="md" value="Diesel"></ion-radio>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label no-margin>Unleaded</ion-label>\n              <ion-radio mode="md" value="Unleaded"></ion-radio>\n            </ion-col>\n          </ion-row> -->\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n  <!-- <ion-item margin-bottom>\n    <ion-label>Type of Fuel</ion-label>\n    <ion-select [(ngModel)]="selectedFuel" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedFuel,\'diesel\')">\n      <ion-option *ngFor="let fuel of fuelList;let i = index" [value]="fuel">{{fuel}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom>\n    <ion-label>Container</ion-label>\n    <ion-select [(ngModel)]="selectedConatiner" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedConatiner,\'container\')">\n      <ion-option *ngFor="let container of containerList;let i = index" [value]="container">{{container}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n\n\n\n  <!-- <ion-item margin-bottom>\n    <ion-label>Fuel Station </ion-label>\n    <ion-select [(ngModel)]="serviceStationName" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(serviceStationName,\'fuel_station\')">\n      <ion-option *ngFor="let service of serviceStationList;let i = index" [value]="service">{{service}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n \n  \n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Fuel (In Litres)</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel" (keyup)="fuelCalculator()"></ion-input>\n          </ion-item>\n       \n          <ion-item>\n            <ion-label floating>Amount</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="amount" disabled="true"></ion-input>\n          </ion-item>\n         \n          <ion-item>\n            <ion-label floating>Fuel ODR</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel_odr"></ion-input>\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label floating>Location</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-add/klmr-fuel-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], KlmrFuelAddPage);
    return KlmrFuelAddPage;
}());

//# sourceMappingURL=klmr-fuel-add.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrFuelTruckAddPageModule", function() { return KlmrFuelTruckAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck_add__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrFuelTruckAddPageModule = /** @class */ (function () {
    function KlmrFuelTruckAddPageModule() {
    }
    KlmrFuelTruckAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck_add__["a" /* KlmrFuelTruckAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck_add__["a" /* KlmrFuelTruckAddPage */]),
            ],
        })
    ], KlmrFuelTruckAddPageModule);
    return KlmrFuelTruckAddPageModule;
}());

//# sourceMappingURL=klmr-fuel-truck-add.module.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrFuelTruckAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_fuel_truck_klmr_fuel_truck__ = __webpack_require__(96);
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






var KlmrFuelTruckAddPage = /** @class */ (function () {
    function KlmrFuelTruckAddPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.filledByList = [];
        this.containerList = [
            // "Truck",
            // "Gerry Cans",
            "Pod",
        ];
        this.serviceStationList = [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
        ];
        this.serviceStationName = "";
        this.selectedConatiner = "Pod";
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
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            filled_by: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            user_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            truck: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Pod', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            diesel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Diesel', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fuel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            price: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        console.log("param", this.params);
    }
    KlmrFuelTruckAddPage.prototype.ionViewDidLoad = function () {
        this.getMetaData();
    };
    KlmrFuelTruckAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userName, userId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFilledBtList()];
                    case 1:
                        _a.filledByList = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 2:
                        userName = _b.sent();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 3:
                        userId = _b.sent();
                        if (userName) {
                            this.createFuel.get("filled_by").setValue(userName);
                            this.createFuel.get("user_id").setValue(userId);
                            this.filledBy = userName;
                        }
                        if (this.params) {
                            this.regenerateForm();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrFuelTruckAddPage.prototype.fuelCalculator = function (evnt) {
        this.createFuel.get("amount").setValue(this.createFuel.value.fuel * this.createFuel.value.price);
    };
    KlmrFuelTruckAddPage.prototype.getFilledBtList = function () {
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
    KlmrFuelTruckAddPage.prototype.regenerateForm = function () {
        this.createFuel.patchValue({
            date: this.params.date,
            filled_by: this.params.filled_by,
            truck: this.params.truck,
            diesel: this.params.diesel,
            fuel: this.params.fuel,
            price: this.params.price,
            amount: this.params.amount,
        });
        this.filledBy = this.params.filled_by;
        // this.serviceStationName = this.params.fuel_station;
        // this.selectedConatiner = this.params.truck;
    };
    KlmrFuelTruckAddPage.prototype.dropDownChange = function (value, key) {
        this.createFuel.get("" + key).setValue(value);
    };
    KlmrFuelTruckAddPage.prototype.submit = function () {
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
            var body = string_1 + "&reminder_fuel=" + ("" + this.createFuel.value['fuel']);
            ;
            console.log("string-1", body);
            this.updateFuelTruck(body, this.params.id);
        }
        else {
            var formData_1 = new FormData();
            formKeys.forEach(function (key) {
                formData_1.append(key, _this.createFuel.value[key]);
            });
            formData_1.append("reminder_fuel", this.createFuel.value['fuel']);
            this.addFuelTruck(formData_1);
        }
    };
    KlmrFuelTruckAddPage.prototype.addFuelTruck = function (formData) {
        var _this = this;
        this.api.post("/prestart/fuel/fuel_truck/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_fuel_truck_klmr_fuel_truck__["a" /* KlmrFuelTruckPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelTruckAddPage.prototype.updateFuelTruck = function (formData, id) {
        var _this = this;
        this.api.put("/prestart/fuel/fuel_truck/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_fuel_truck_klmr_fuel_truck__["a" /* KlmrFuelTruckPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrFuelTruckAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-fuel-truck-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-truck-add/klmr-fuel-truck-add.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Fuel Truck</ion-title>\n      <ion-title *ngIf="isUpdate">Update Fuel Truck</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createFuel.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-row padding-bottom>\n    <ion-card no-margin class="full-width">\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n         \n          <ion-row radio-group formControlName="diesel"  justify-content-center align-items-center text-center>\n            <ion-col col-6 text-left padding-left>\n              <ion-label>Type of Fuel\n              </ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label no-margin>Diesel</ion-label>\n              <ion-radio mode="md" value="Diesel"></ion-radio>\n            </ion-col>\n           \n          </ion-row>\n          \n          \n          <ion-row radio-group formControlName="truck"  justify-content-center align-items-center text-center>\n            <ion-col col-6 text-left padding-left>\n              <ion-label>Container\n              </ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label no-margin>Pod</ion-label>\n              <ion-radio mode="md" value="Pod"></ion-radio>\n            </ion-col>\n           \n          </ion-row>\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-item margin-bottom>\n    <ion-label>Filled By</ion-label>\n    <ion-select [(ngModel)]="filledBy" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(filledBy,\'filled_by\')">\n      <ion-option *ngFor="let filledBy of filledByList;let i = index" [value]="filledBy.name">{{filledBy.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n\n \n\n  <ion-row padding-bottom>\n    <ion-card no-margin class="full-width">\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Fuel (In Litres)</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="fuel" type="number" (keyup)="fuelCalculator($event)"></ion-input>\n          </ion-item>\n       \n          <ion-item>\n            <ion-label floating>Price (Per Litre)</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="price" type="number" (keyup)="fuelCalculator($event)"></ion-input>\n          </ion-item>\n         \n          <ion-item margin-bottom>\n            <ion-label floating>Total Amount</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="amount" disabled="true"></ion-input>\n          </ion-item>\n\n          \n\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <!-- <ion-item margin-bottom>\n    <ion-label>Fuel Station </ion-label>\n    <ion-select [(ngModel)]="serviceStationName" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(serviceStationName,\'fuel_station\')">\n      <ion-option *ngFor="let service of serviceStationList;let i = index" [value]="service">{{service}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row padding-bottom *ngIf="serviceStationName.length > 0">\n    <ion-card no-margin class="full-width">\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n          <ion-item margin-bottom>\n            <ion-label floating>Cents (Per Litre)</ion-label>\n            <ion-input class="border-1px-solid" type="number" formControlName="cents"  ></ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row> -->\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-fuel-truck-add/klmr-fuel-truck-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], KlmrFuelTruckAddPage);
    return KlmrFuelTruckAddPage;
}());

//# sourceMappingURL=klmr-fuel-truck-add.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrFuelTruckPageModule", function() { return KlmrFuelTruckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck__ = __webpack_require__(96);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_fuel_truck__["a" /* KlmrFuelTruckPage */]),
            ],
        })
    ], KlmrFuelTruckPageModule);
    return KlmrFuelTruckPageModule;
}());

//# sourceMappingURL=klmr-fuel-truck.module.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrFuelPageModule", function() { return KlmrFuelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_fuel__ = __webpack_require__(95);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_fuel__["a" /* KlmrFuelPage */]),
            ],
        })
    ], KlmrFuelPageModule);
    return KlmrFuelPageModule;
}());

//# sourceMappingURL=klmr-fuel.module.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrJobcardAddPageModule", function() { return KlmrJobcardAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_jobcard_add__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrJobcardAddPageModule = /** @class */ (function () {
    function KlmrJobcardAddPageModule() {
    }
    KlmrJobcardAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_jobcard_add__["a" /* KlmrJobcardAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_jobcard_add__["a" /* KlmrJobcardAddPage */]),
            ],
        })
    ], KlmrJobcardAddPageModule);
    return KlmrJobcardAddPageModule;
}());

//# sourceMappingURL=klmr-jobcard-add.module.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrJobcardPageModule", function() { return KlmrJobcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_jobcard__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrJobcardPageModule = /** @class */ (function () {
    function KlmrJobcardPageModule() {
    }
    KlmrJobcardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_jobcard__["a" /* KlmrJobcardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_jobcard__["a" /* KlmrJobcardPage */]),
            ],
        })
    ], KlmrJobcardPageModule);
    return KlmrJobcardPageModule;
}());

//# sourceMappingURL=klmr-jobcard.module.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrJsaPageModule", function() { return KlmrJsaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_jsa__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrJsaPageModule = /** @class */ (function () {
    function KlmrJsaPageModule() {
    }
    KlmrJsaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_jsa__["a" /* KlmrJsaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_jsa__["a" /* KlmrJsaPage */]),
            ],
        })
    ], KlmrJsaPageModule);
    return KlmrJsaPageModule;
}());

//# sourceMappingURL=klmr-jsa.module.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrJsaAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__klmr_jsa_klmr_jsa__ = __webpack_require__(97);
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






var KlmrJsaAddPage = /** @class */ (function () {
    function KlmrJsaAddPage(navCtrl, navParams, api, utiltiy, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.formBuilder = formBuilder;
        this.fleetList = [];
        this.filledByList = [];
        this.filledBy = [];
        this.isUpdate = false;
        this.params = {};
        this.riskLevelOptions = [
            "E",
            "H",
            "M",
            "L"
        ];
        this.riskLevel = {
            "Catastrophic": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            },
            "Critical": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            },
            "Marginal": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            },
            "Negligible": {
                "Frequent": null,
                "Likely": null,
                "Occasional": null,
                "Seldom": null,
                "Unlikely": null
            }
        };
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
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](date, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            task: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            fleet_no: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            team_member: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]([], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            risk_show: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            cce: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            staff_username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            risk_level: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
        });
        console.log("param", this.params);
    }
    KlmrJsaAddPage.prototype.ionViewDidLoad = function () {
        this.getMetaData();
    };
    KlmrJsaAddPage.prototype.getMetaData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, userName;
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
                        if (!this.params) return [3 /*break*/, 3];
                        this.regenerateForm();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.utiltiy.getStorage("name")];
                    case 4:
                        userName = _c.sent();
                        this.createFuel.get('staff_username').setValue(userName);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    KlmrJsaAddPage.prototype.getFleetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fleetList = [];
                this.utiltiy.startLoading();
                return [2 /*return*/, this.api.get("/prestart/jsa/fleet/get", false)
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
    KlmrJsaAddPage.prototype.getFilledBtList = function () {
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
    KlmrJsaAddPage.prototype.regenerateForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fillerBy, status, values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillerBy = [];
                        status = this.params.team_member.includes(",");
                        if (status) {
                            fillerBy = this.params.team_member.split(",");
                        }
                        else {
                            fillerBy = [this.params.team_member];
                        }
                        if (!(this.params.risk_show == "Yes")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.regenerateRiskLevel(this.params.risk_level)];
                    case 1:
                        values = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.createFuel.patchValue({
                            date: this.params.date,
                            location: this.params.location,
                            task: this.params.task,
                            fleet_no: this.params.fleet_no,
                            team_member: fillerBy,
                            risk_show: this.params.risk_show,
                            cce: this.params.cce,
                            staff_username: this.params.staff_username,
                        });
                        this.filledBy = fillerBy;
                        this.selectedCCE = this.params.cce,
                            this.selectedRisk = this.params.risk_show,
                            this.selectedFleet = this.params.fleet_no;
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrJsaAddPage.prototype.regenerateRiskLevel = function (risk_level) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                risk_level.forEach(function (risk_level_, i) {
                    _this.riskLevel[risk_level_.severity][risk_level_.risk_type] = risk_level_.risk_code;
                    return true;
                });
                return [2 /*return*/];
            });
        });
    };
    KlmrJsaAddPage.prototype.dropDownChange = function (value, key) {
        this.createFuel.get("" + key).setValue(value);
    };
    KlmrJsaAddPage.prototype.submit = function () {
        console.log("this.credentialsForm.value", this.createFuel.value);
        this.createFuel.value.risk_level = this.createFuel.value.risk_show == "Yes" ? this.riskLevel : {};
        var payload = {
            "formData": this.createFuel.value
        };
        if (this.isUpdate) {
            this.updateJsa(payload, this.params.id);
        }
        else {
            this.addJsa(payload);
        }
    };
    KlmrJsaAddPage.prototype.addJsa = function (formData) {
        var _this = this;
        this.api.post("/prestart/jsa/store", false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_jsa_klmr_jsa__["a" /* KlmrJsaPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJsaAddPage.prototype.updateJsa = function (formData, id) {
        var _this = this;
        this.api.putWithourForm("/prestart/jsa/update/" + id, false, formData)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__klmr_jsa_klmr_jsa__["a" /* KlmrJsaPage */]);
            }
        }, function (err) {
            console.log("err", err);
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrJsaAddPage.prototype.validateInput = function (group, key) {
        var value = this.riskLevel[group][key].toLowerCase();
        if (value == "e" || value == "h" || value == "m" || value == "l") {
            this.riskLevel[group][key] = value.toUpperCase();
        }
        else {
            this.riskLevel[group][key] = null;
            this.utiltiy.toaster("Only E,H,M,L allowed!");
        }
        console.log("riskLevel", this.riskLevel[group][key]);
        console.log("riskLevel", this.riskLevel);
    };
    KlmrJsaAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-jsa-add',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jsa-add/klmr-jsa-add.html"*/'<ion-header>\n  <ion-toolbar [color]="primarybackground ">\n    <ion-navbar>\n      <ion-title *ngIf="!isUpdate">Add Jsa</ion-title>\n      <ion-title *ngIf="isUpdate">Update Jsa</ion-title>\n      <ion-buttons end>\n        <!-- Here we use end -->\n        <button ion-button icon-only color="light" [disabled]="!createFuel.valid" (click)="submit()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row padding-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime class="border-1px-solid" displayFormat="DD/MM/YYYY" formControlName="date"></ion-datetime>\n          </ion-item>\n\n          <ion-item  >\n            <ion-label floating>Location</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="location"></ion-input>\n          </ion-item>\n          <ion-item  margin-bottom>\n            <ion-label floating>Task Assessed</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="task"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">Fleet No.</ion-label>\n    <ion-select [(ngModel)]="selectedFleet" [selectOptions]="selectOptions" interface="popover"\n      (ngModelChange)="dropDownChange(selectedFleet,\'fleet_no\')" class="width-75 align-right">\n      <ion-option *ngFor="let fleet of fleetList;let i = index" [value]="fleet.fleet_no">{{fleet.fleet_no}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">JSA Team members</ion-label>\n    <ion-select [(ngModel)]="filledBy" [selectOptions]="selectOptions" interface="popover"\n      multiple  (ngModelChange)="dropDownChange(filledBy,\'team_member\')" class="width-75 align-right">\n      <ion-option *ngFor="let filledBy of filledByList;let i = index" [value]="filledBy.name">{{filledBy.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">Risk Level</ion-label>\n    <ion-select [(ngModel)]="selectedRisk" [selectOptions]="selectOptions" interface="popover"\n    (ngModelChange)="dropDownChange(selectedRisk,\'risk_show\')" class="width-75 align-right">\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-row padding-bottom *ngIf="selectedRisk == \'Yes\'">\n    <ion-card no-margin>\n      <p padding-left padding-top>\n       <b>E =</b> Extremely Hgh Risk <br><b>H =</b>  High Risk <br><b>M =</b>  Moderatee Low Risk<br>  <b>L =</b>  Low Risk\n      </p>\n\n      <table style="width:100%">\n        <tr>\n          <th colspan="7">Risk Assessment Code Matrix</th>\n        </tr>\n        <tr>\n          <th rowspan="2"> </th>\n          <th colspan="7">PROBABILITY</th>\n        </tr>\n        <tr>\n          <th>Frequent</th>\n          <th>Likely</th>\n          <th>Occasional</th>\n          <th>Seldom</th>\n          <th>Unlikely</th>\n        </tr>\n        <tr>\n          <th >Catastrophic</th>\n          <td >\n          <ion-select [(ngModel)]="riskLevel.Catastrophic.Frequent" [selectOptions]="selectOptions" interface="popover" id="1" class="width-100" >\n            <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n          </ion-select>\n          </td>\n\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Likely"  [selectOptions]="selectOptions" interface="popover" id="2" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Occasional" [selectOptions]="selectOptions" interface="popover" id="3" class="width-100"> \n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Seldom" [selectOptions]="selectOptions" interface="popover" id="4" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Catastrophic.Unlikely" [selectOptions]="selectOptions" interface="popover" id="5" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n\n        <tr>\n          <th >Critical</th>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Frequent" [selectOptions]="selectOptions" interface="popover" id="6" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Likely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Occasional" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Seldom" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Critical.Unlikely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n       \n        <tr>\n          <th >Marginal</th>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Frequent" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Likely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Occasional" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Seldom" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Marginal.Unlikely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n       \n        <tr>\n          <th >Marginal</th>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Frequent" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Likely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Occasional" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Seldom" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n          <td >\n            <ion-select [(ngModel)]="riskLevel.Negligible.Unlikely" [selectOptions]="selectOptions" interface="popover" class="width-100">\n              <ion-option *ngFor="let riskLevel of riskLevelOptions;let i = index" [value]="riskLevel">{{riskLevel}}</ion-option>\n            </ion-select>\n          </td>\n        </tr>\n       \n      </table>\n    </ion-card>\n  </ion-row>\n            <!-- <ion-input maxlength="1" type="text" [(ngModel)]="riskLevel.Negligible.Unlikely" (keyup)="validateInput(\'Negligible\',\'Unlikely\')"></ion-input> -->\n  \n  <ion-item margin-bottom class="width-100">\n    <ion-label class="width-50">CCE</ion-label>\n    <ion-select  [(ngModel)]="selectedCCE" class="width-75 align-right" [selectOptions]="selectOptions" interface="popover"\n    (ngModelChange)="dropDownChange(selectedCCE,\'cce\')"\n     >\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-row margin-bottom>\n    <ion-card no-margin>\n      <form [formGroup]="createFuel" novalidate>\n        <ion-list>\n          <ion-item  margin-bottom>\n            <ion-label floating>Staff Name</ion-label>\n            <ion-input class="border-1px-solid" type="text" formControlName="staff_username" [disabled]="true"></ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card>\n  </ion-row>\n\n  \n  <!-- onkeypress="let satisfy = (/^(E|H|M|L|e|h|m|l)$/).test(this.value + event.key); if(!satisfy){this.value = \'\'} return satisfy;" -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-jsa-add/klmr-jsa-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], KlmrJsaAddPage);
    return KlmrJsaAddPage;
}());

//# sourceMappingURL=klmr-jsa-add.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrJsaAddPageModule", function() { return KlmrJsaAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_jsa_add__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrJsaAddPageModule = /** @class */ (function () {
    function KlmrJsaAddPageModule() {
    }
    KlmrJsaAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_jsa_add__["a" /* KlmrJsaAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_jsa_add__["a" /* KlmrJsaAddPage */]),
            ],
        })
    ], KlmrJsaAddPageModule);
    return KlmrJsaAddPageModule;
}());

//# sourceMappingURL=klmr-jsa-add.module.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrPrestartJobcardPageModule", function() { return KlmrPrestartJobcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_prestart_jobcard__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrPrestartJobcardPageModule = /** @class */ (function () {
    function KlmrPrestartJobcardPageModule() {
    }
    KlmrPrestartJobcardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_prestart_jobcard__["a" /* KlmrPrestartJobcardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_prestart_jobcard__["a" /* KlmrPrestartJobcardPage */]),
            ],
        })
    ], KlmrPrestartJobcardPageModule);
    return KlmrPrestartJobcardPageModule;
}());

//# sourceMappingURL=klmr-prestart-jobcard.module.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrTimesheetApprovalsPageModule", function() { return KlmrTimesheetApprovalsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_approvals__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrTimesheetApprovalsPageModule = /** @class */ (function () {
    function KlmrTimesheetApprovalsPageModule() {
    }
    KlmrTimesheetApprovalsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_approvals__["a" /* KlmrTimesheetApprovalsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_approvals__["a" /* KlmrTimesheetApprovalsPage */]),
            ],
        })
    ], KlmrTimesheetApprovalsPageModule);
    return KlmrTimesheetApprovalsPageModule;
}());

//# sourceMappingURL=klmr-timesheet-approvals.module.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrTimesheetApprovalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__ = __webpack_require__(44);
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






var KlmrTimesheetApprovalsPage = /** @class */ (function () {
    function KlmrTimesheetApprovalsPage(popoverCtrl, navCtrl, navParams, api, utiltiy) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
    }
    KlmrTimesheetApprovalsPage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList();
    };
    KlmrTimesheetApprovalsPage.prototype.gettimeSheetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSheetList = [];
                        this.utiltiy.startLoading();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        formData.append("method_name", "all_approver_list");
                        this.api.post("/prestart/timesheet/approver", true, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.utiltiy.stopLoading();
                            _this.timeSheetList = result.result;
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetApprovalsPage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    KlmrTimesheetApprovalsPage.prototype.acceptRejetc = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, status, option, comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            "title": 'Confirmation',
                            "message": '',
                            "approveText": 'Accept',
                            "rejectText": 'Reject',
                        };
                        return [4 /*yield*/, this.utiltiy.attentionDialog(options)];
                    case 1:
                        status = _a.sent();
                        if (!status) return [3 /*break*/, 2];
                        this.approveDisaaprove(id, "2", "");
                        return [3 /*break*/, 4];
                    case 2:
                        option = {
                            "title": 'Comment',
                            "approveText": 'send',
                        };
                        return [4 /*yield*/, this.utiltiy.inputDialog(option)];
                    case 3:
                        comment = _a.sent();
                        this.approveDisaaprove(id, "4", comment);
                        console.log("comment", comment);
                        _a.label = 4;
                    case 4:
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetApprovalsPage.prototype.approveDisaaprove = function (id, status, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData;
            return __generator(this, function (_a) {
                this.utiltiy.startLoading();
                formData = new FormData();
                formData.append("timesheet_id", id);
                formData.append("status", status);
                formData.append("comments", comment);
                formData.append("method_name", "approver_timesheet_reject_approve_update_status");
                this.api.post("/prestart/timesheet/approver", true, formData)
                    .then(function (result) {
                    console.log("result", result);
                    _this.utiltiy.stopLoading();
                    _this.gettimeSheetList();
                }, function (err) {
                    console.log("err", err);
                    _this.utiltiy.stopLoading();
                    _this.utiltiy.toaster(err.error.message);
                });
                return [2 /*return*/];
            });
        });
    };
    KlmrTimesheetApprovalsPage.prototype.updateTimeSheet = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */], { param: prestart, copy: false });
    };
    KlmrTimesheetApprovalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-timesheet-approvals',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-approvals/klmr-timesheet-approvals.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Approvals</ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" >\n          <h2>\n            <!-- <ion-badge item-end [color]="\'primarybackground\' ">{{fuel.id}}</ion-badge> -->\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <!-- <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity:</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code:</span>\n              <div>{{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start:</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Finish :</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        \n        <ion-col class="col">\n          <button clear="" icon-start="" ion-button="" small="" \n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger" (click)="acceptRejetc(fuel.id)"><span\n              class="button-inner">\n              <ion-icon name="checkmark" role="img" class="icon icon-md ion-md-checkmark" aria-label="checkmark"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n        <ion-col class="col">\n          <button clear="" color="primarybackground" icon-start="" ion-button="" small=""\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n              class="button-inner" (click)="updateTimeSheet(fuel)">\n              <ion-icon name="create" role="img" class="icon icon-md ion-md-create" aria-label="create"></ion-icon>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n     \n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-approvals/klmr-timesheet-approvals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrTimesheetApprovalsPage);
    return KlmrTimesheetApprovalsPage;
}());

//# sourceMappingURL=klmr-timesheet-approvals.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrTimesheetCreatePageModule", function() { return KlmrTimesheetCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_create__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrTimesheetCreatePageModule = /** @class */ (function () {
    function KlmrTimesheetCreatePageModule() {
    }
    KlmrTimesheetCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_create__["a" /* KlmrTimesheetCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_create__["a" /* KlmrTimesheetCreatePage */]),
            ],
        })
    ], KlmrTimesheetCreatePageModule);
    return KlmrTimesheetCreatePageModule;
}());

//# sourceMappingURL=klmr-timesheet-create.module.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrTimesheetHistoryPageModule", function() { return KlmrTimesheetHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_history__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrTimesheetHistoryPageModule = /** @class */ (function () {
    function KlmrTimesheetHistoryPageModule() {
    }
    KlmrTimesheetHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_history__["a" /* KlmrTimesheetHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_history__["a" /* KlmrTimesheetHistoryPage */]),
            ],
        })
    ], KlmrTimesheetHistoryPageModule);
    return KlmrTimesheetHistoryPageModule;
}());

//# sourceMappingURL=klmr-timesheet-history.module.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrTimesheetHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__ = __webpack_require__(44);
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





var KlmrTimesheetHistoryPage = /** @class */ (function () {
    function KlmrTimesheetHistoryPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
        this.weeklySelectedDate = null;
        this.dateFilterList = [];
    }
    KlmrTimesheetHistoryPage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList(null);
    };
    KlmrTimesheetHistoryPage.prototype.gettimeSheetList = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSheetList = [];
                        this.utiltiy.startLoading();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        // formData.append("user_id", userId);
                        // formData.append("status", "2");
                        formData.append("method_name", "history_list");
                        if (filter) {
                            formData.append("date_filter", filter);
                        }
                        this.api.post("/prestart/timesheet/approver/Approver", true, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.timeSheetList = result.result;
                            if (result.result.length > 0) {
                                var temp = result.extra_data.date_filter_list.filter(function (e) { return e != ''; });
                                _this.dateFilterList = temp;
                            }
                            else {
                                _this.utiltiy.toaster(result.message);
                            }
                            _this.utiltiy.stopLoading();
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetHistoryPage.prototype.searchByDate = function () {
        this.gettimeSheetList(this.weeklySelectedDate);
    };
    KlmrTimesheetHistoryPage.prototype.deleteRecord = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utiltiy.showDialog()];
                    case 1:
                        status = _a.sent();
                        if (status) {
                            this.deleteTimeSheet(id);
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetHistoryPage.prototype.deleteTimeSheet = function (id) {
        var _this = this;
        this.api.delete("/prestart/timesheet/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.searchByDate();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrTimesheetHistoryPage.prototype.updateTimeSheet = function (prestart) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */], { param: prestart, copy: false });
    };
    KlmrTimesheetHistoryPage.prototype.copyTimeSheet = function (prestart) {
        console.log("copyTimeSheet", prestart);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__klmr_timesheet_create_add_klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */], { param: prestart, copy: true });
    };
    KlmrTimesheetHistoryPage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    KlmrTimesheetHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-timesheet-history',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-history/klmr-timesheet-history.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">History</ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col class="search-wrapper flex-center">\n      <ion-item no-lines>\n        <ion-label *ngIf="!weeklySelectedDate">Select Weekly Date</ion-label>\n        <ion-select [(ngModel)]="weeklySelectedDate" (ngModelChange)="searchByDate()">\n          <ion-option [value]="null">All</ion-option>\n          <ion-option [value]="item" *ngFor="let item of dateFilterList.slice().reverse()">{{item}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div (click)="searchByDate()" class="search-icon flex-center"><ion-icon color="light" name="search"></ion-icon></div>\n    </ion-col>\n  </ion-row>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n\n        <ion-col class="col">\n\n          <button *ngIf="fuel.status == \'0\'" clear="" color="danger" icon-start="" ion-button="" small=""\n            class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"\n            (click)="acceptRecord(fuel.id)"><span class="button-inner">\n              <ion-badge item-end color="primary">\n                <ion-icon name="thumbs-up" role="img" class="icon icon-md ion-md-thumbs-up" aria-label="thumbs-up">\n                </ion-icon> Created\n              </ion-badge>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n\n          <ion-badge item-end color="danger" *ngIf="fuel.status == \'4\'">\n            <ion-icon name="close" role="img" class="icon icon-md ion-md-close" aria-label="close"></ion-icon>\n            Rejected\n          </ion-badge>\n\n          <ion-badge item-end color="pending" *ngIf="fuel.status == \'1\'">\n            <ion-icon name="timer" role="img" class="icon icon-md ion-md-timer" aria-label="timer"></ion-icon>\n            Waiting for Approval\n          </ion-badge>\n\n          <ion-badge item-end color="secondary" *ngIf="fuel.status == \'2\'">\n            <ion-icon name="checkmark" role="img" class="icon icon-md ion-md-checkmark" aria-label="checkmark">\n            </ion-icon> Approved\n          </ion-badge>\n\n          <ion-badge item-end color="secondary" *ngIf="fuel.status == \'3\'">\n            <ion-icon name="checkmark" role="img" class="icon icon-md ion-md-checkmark" aria-label="checkmark">\n            </ion-icon> Processed\n          </ion-badge>\n\n\n        </ion-col>\n\n        <ion-col class="col" >\n          <h2>\n            <!-- <ion-badge item-end [color]="\'primarybackground\' ">{{fuel.id}}</ion-badge> -->\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <!-- <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity:</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col> -->\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code:</span>\n              <div>{{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start:</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Finish :</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n\n        <span *ngIf="fuel.status == \'0\'">\n\n          <ion-col class="col">\n            <button clear="" color="danger" icon-start="" ion-button="" small="" (click)="deleteRecord(fuel.id)"\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner">\n                <ion-icon name="trash" role="img" class="icon icon-md ion-md-trash" aria-label="trash"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n          <ion-col class="col">\n            <button clear="" color="primarybackground" icon-start="" ion-button="" small=""\n              (click)="copyTimeSheet(fuel)"\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner">\n                <ion-icon name="copy" role="img" class="icon icon-md ion-md-copy" aria-label="copy"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n          <ion-col class="col">\n            <button clear="" color="primarybackground" icon-start="" ion-button="" small=""\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner" (click)="updateTimeSheet(fuel)">\n                <ion-icon name="create" role="img" class="icon icon-md ion-md-create" aria-label="create"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n        </span>\n\n        <span *ngIf="fuel.status == \'1\'">\n          <ion-col class="col">\n            <button clear="" color="primarybackground" icon-start="" ion-button="" small=""\n              class="button button-md button-clear button-clear-md button-small button-small-md button-clear-md-danger"><span\n                class="button-inner" (click)="updateTimeSheet(fuel)">\n                <ion-icon name="create" role="img" class="icon icon-md ion-md-create" aria-label="create"></ion-icon>\n              </span>\n              <div class="button-effect"></div>\n            </button>\n          </ion-col>\n        </span>\n\n     \n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-history/klmr-timesheet-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrTimesheetHistoryPage);
    return KlmrTimesheetHistoryPage;
}());

//# sourceMappingURL=klmr-timesheet-history.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrTimesheetPendingPageModule", function() { return KlmrTimesheetPendingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_pending__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrTimesheetPendingPageModule = /** @class */ (function () {
    function KlmrTimesheetPendingPageModule() {
    }
    KlmrTimesheetPendingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_pending__["a" /* KlmrTimesheetPendingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_pending__["a" /* KlmrTimesheetPendingPage */]),
            ],
        })
    ], KlmrTimesheetPendingPageModule);
    return KlmrTimesheetPendingPageModule;
}());

//# sourceMappingURL=klmr-timesheet-pending.module.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmrTimesheetCreateAddPageModule", function() { return KlmrTimesheetCreateAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_create_add__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KlmrTimesheetCreateAddPageModule = /** @class */ (function () {
    function KlmrTimesheetCreateAddPageModule() {
    }
    KlmrTimesheetCreateAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__klmr_timesheet_create_add__["a" /* KlmrTimesheetCreateAddPage */]),
            ],
        })
    ], KlmrTimesheetCreateAddPageModule);
    return KlmrTimesheetCreateAddPageModule;
}());

//# sourceMappingURL=klmr-timesheet-create-add.module.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(98);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_environment__ = __webpack_require__(177);
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
        console.log(__WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* ENV */].API_URL);
        console.log(__WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* ENV */].QA_URL);
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* ENV */].API_URL; //  live
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
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestartPageModule", function() { return PrestartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prestart__ = __webpack_require__(86);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prestart__["a" /* PrestartPage */]),
            ],
        })
    ], PrestartPageModule);
    return PrestartPageModule;
}());

//# sourceMappingURL=prestart.module.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPrestartItemsPageModule", function() { return SelectPrestartItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_prestart_items__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectPrestartItemsPageModule = /** @class */ (function () {
    function SelectPrestartItemsPageModule() {
    }
    SelectPrestartItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_prestart_items__["a" /* SelectPrestartItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_prestart_items__["a" /* SelectPrestartItemsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], SelectPrestartItemsPageModule);
    return SelectPrestartItemsPageModule;
}());

//# sourceMappingURL=select-prestart-items.module.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_crud_crud__ = __webpack_require__(5);
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
    function HomePage(navCtrl, utility, api, events) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.api = api;
        this.events = events;
        this.horizontalText = "";
        this.newsLiist = [];
        this.currentClass = null;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/imgs/klmr.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/imgs/klmr.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/imgs/klmr.png",
            }
        ];
        // this.utility.setStorage("currentClass","home");
        // this.events.publish('currentClass',"home");
        this.getNews();
        this.currentClass = "home";
        this.navCtrl.swipeBackEnabled = false;
    }
    HomePage.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // setTimeout(() => {
                this.horizontalText = "";
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.getNews = function () {
        var _this = this;
        this.newsLiist = [];
        var string = "";
        this.api.get("/prestart/news/get", "false")
            .then(function (result) {
            result.result.forEach(function (element) {
                string = string + ("Subject: " + element.subject + " Date: " + element.date + " By:" + element.username + "     ");
            });
            _this.horizontalText = string;
            _this.newsLiist = result.result;
            console.log("result", _this.newsLiist);
            console.log("this.horizontalText ", _this.horizontalText);
        }, function (err) {
        });
    };
    HomePage.prototype.dateConvert = function (date) {
        if (date) {
            var dateString = date.split("-");
            return dateString[2] + "-" + dateString[1] + "-" + dateString[0];
        }
        else {
            return "";
        }
    };
    HomePage.prototype.selectType = function () {
        // this.currentClass = type;
        // console.log("typw",this.currentClass);
        // this.utility.setStorage("currentClass",type);
        // this.events.publish('currentClass',type);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/home/home.html"*/'<ion-header>\n   <ion-toolbar [color]="\'primarybackground\' ">\n        \n        <ion-buttons end >\n          <button ion-button (click)="selectType()" >Login</button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n  <!-- <ion-slides pager direction="vertical"> -->\n    <span *ngFor="let news of newsLiist;let i = index">\n\n    <!-- <ion-slide > -->\n    <ion-row *ngIf="i != 0" class="row-height"></ion-row>\n      <h2 class="slide-title" >\n        {{news.subject}}\n      </h2>\n      <p ion-text text-left class="inner-news" style="font-size: medium;">\n        <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n        {{dateConvert(news.date)}}\n        <span ion-text color="primarybackground"> {{news.username}}</span>\n      </p>\n      <p class="inner-news" [innerHTML]="news.news">\n      </p>\n    <!-- </ion-slide> -->\n  </span>\n  \n  <!-- </ion-slides> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__ = __webpack_require__(5);
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




var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, utility, api, events) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.api = api;
        this.events = events;
        this.horizontalText = "";
        this.newsLiist = [];
        this.getNews();
        this.navCtrl.swipeBackEnabled = false;
    }
    NewsPage.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.horizontalText = "";
                return [2 /*return*/];
            });
        });
    };
    NewsPage.prototype.getNews = function () {
        var _this = this;
        this.newsLiist = [];
        var string = "";
        this.api.get("/prestart/news/News_get", "false")
            .then(function (result) {
            result.result.forEach(function (element) {
                string = string + ("Subject: " + element.subject + " Date: " + element.date + " By:" + element.username + "     ");
            });
            _this.horizontalText = string;
            _this.newsLiist = result.result;
            console.log("result", _this.newsLiist);
            console.log("this.horizontalText ", _this.horizontalText);
        }, function (err) {
        });
    };
    NewsPage.prototype.dateConvert = function (date) {
        if (date) {
            var dateString = date.split("-");
            return dateString[2] + "-" + dateString[1] + "-" + dateString[0];
        }
        else {
            return "";
        }
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/news/news.html"*/'\n\n<ion-content class="tutorial-page">\n  <!-- <ion-slides pager direction="vertical"> -->\n    <span *ngFor="let news of newsLiist;let i = index">\n\n    <!-- <ion-slide > -->\n    <ion-row *ngIf="i != 0" class="row-height"></ion-row>\n      <h2 class="slide-title" >\n        {{news.subject}}\n      </h2>\n      <p ion-text text-left class="inner-news" style="font-size: medium;">\n        <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n        {{dateConvert(news.date)}}\n        <span ion-text color="primarybackground"> {{news.username}}</span>\n      </p>\n      <p class="inner-news" [innerHTML]="news.news">\n      </p>\n    <!-- </ion-slide> -->\n  </span>\n  \n  <!-- </ion-slides> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fingerprint_aio__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_prestart_prestart_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addprestart_addprestart_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_prestart_prestart__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cabsand_prestart_cabsand_prestart_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cabsand_addprestart_cabsand_addprestart_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_klmr_fuel_klmr_fuel_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_klmr_fuel_truck_klmr_fuel_truck_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_klmr_fuel_add_klmr_fuel_add_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_klmr_fuel_truck_add_klmr_fuel_truck_add_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cabsand_fuel_cabsand_fuel_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cabsand_fuel_truck_cabsand_fuel_truck_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cabsand_fuel_add_cabsand_fuel_add_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_cabsand_fuel_truck_add_cabsand_fuel_truck_add_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_jsa_jsa_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_klmr_jsa_klmr_jsa_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_klmr_jsa_add_klmr_jsa_add_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_cabsand_jsa_cabsand_jsa_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_cabsand_jsa_add_cabsand_jsa_add_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_klmr_timesheet_create_klmr_timesheet_create_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_klmr_timesheet_create_add_klmr_timesheet_create_add_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_search_search_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_cabsand_timesheet_create_cabsand_timesheet_create_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_cabsand_timesheet_create_add_cabsand_timesheet_create_add_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ionic_marquee__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_news_news__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_klmr_news_klmr_news__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_cabsand_news_cabsand_news__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_klmr_timesheet_approvals_klmr_timesheet_approvals_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_klmr_timesheet_history_klmr_timesheet_history_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_klmr_timesheet_pending_klmr_timesheet_pending_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_cabsand_timesheet_approvals_cabsand_timesheet_approvals_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_cabsand_timesheet_history_cabsand_timesheet_history_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_cabsand_timesheet_pending_cabsand_timesheet_pending_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_klmr_jobcard_klmr_jobcard_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_klmr_jobcard_add_klmr_jobcard_add_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_cabsand_jobcard_cabsand_jobcard_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_cabsand_jobcard_add_cabsand_jobcard_add_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_klmr_prestart_jobcard_klmr_prestart_jobcard_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_cabsand_prestart_jobcard_cabsand_prestart_jobcard_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_select_prestart_items_select_prestart_items_module__ = __webpack_require__(231);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_klmr_news_klmr_news__["a" /* KlmrNewsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_cabsand_news_cabsand_news__["a" /* CabsandNewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_prestart_prestart_module__["PrestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_addprestart_addprestart_module__["AddprestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_cabsand_prestart_cabsand_prestart_module__["CabsandPrestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_cabsand_addprestart_cabsand_addprestart_module__["CabsandAddprestartPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_klmr_fuel_klmr_fuel_module__["KlmrFuelPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_klmr_fuel_truck_klmr_fuel_truck_module__["KlmrFuelTruckPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_klmr_jsa_klmr_jsa_module__["KlmrJsaPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_klmr_jsa_add_klmr_jsa_add_module__["KlmrJsaAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_klmr_fuel_add_klmr_fuel_add_module__["KlmrFuelAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_klmr_fuel_truck_add_klmr_fuel_truck_add_module__["KlmrFuelTruckAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_cabsand_fuel_cabsand_fuel_module__["CabsandFuelPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_cabsand_fuel_truck_cabsand_fuel_truck_module__["CabsandFuelTruckPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_cabsand_fuel_add_cabsand_fuel_add_module__["CabsandFuelAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_cabsand_fuel_truck_add_cabsand_fuel_truck_add_module__["CabsandFuelTruckAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_jsa_jsa_module__["JsaPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_cabsand_jsa_cabsand_jsa_module__["CabsandJsaPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_cabsand_jsa_add_cabsand_jsa_add_module__["CabsandJsaAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_klmr_timesheet_create_klmr_timesheet_create_module__["KlmrTimesheetCreatePageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_klmr_timesheet_create_add_klmr_timesheet_create_add_module__["KlmrTimesheetCreateAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_cabsand_timesheet_create_cabsand_timesheet_create_module__["CabsandTimesheetCreatePageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_cabsand_timesheet_create_add_cabsand_timesheet_create_add_module__["CabsandTimesheetCreateAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_klmr_timesheet_approvals_klmr_timesheet_approvals_module__["KlmrTimesheetApprovalsPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_klmr_timesheet_history_klmr_timesheet_history_module__["KlmrTimesheetHistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_klmr_timesheet_pending_klmr_timesheet_pending_module__["KlmrTimesheetPendingPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_cabsand_timesheet_approvals_cabsand_timesheet_approvals_module__["CabsandTimesheetApprovalsPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_cabsand_timesheet_history_cabsand_timesheet_history_module__["CabsandTimesheetHistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_cabsand_timesheet_pending_cabsand_timesheet_pending_module__["CabsandTimesheetPendingPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_klmr_jobcard_klmr_jobcard_module__["KlmrJobcardPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_klmr_jobcard_add_klmr_jobcard_add_module__["KlmrJobcardAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_cabsand_jobcard_cabsand_jobcard_module__["CabsandJobcardPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_cabsand_jobcard_add_cabsand_jobcard_add_module__["CabsandJobcardAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_klmr_prestart_jobcard_klmr_prestart_jobcard_module__["KlmrPrestartJobcardPageModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_cabsand_prestart_jobcard_cabsand_prestart_jobcard_module__["CabsandPrestartJobcardPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_39_ionic_marquee__["a" /* IonMarqueeModule */],
                __WEBPACK_IMPORTED_MODULE_55__pages_select_prestart_items_select_prestart_items_module__["SelectPrestartItemsPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addprestart/addprestart.module#AddprestartPageModule', name: 'AddprestartPage', segment: 'addprestart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-addprestart/cabsand-addprestart.module#CabsandAddprestartPageModule', name: 'CabsandAddprestartPage', segment: 'cabsand-addprestart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-fuel-add/cabsand-fuel-add.module#CabsandFuelAddPageModule', name: 'CabsandFuelAddPage', segment: 'cabsand-fuel-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-fuel-truck-add/cabsand-fuel-truck-add.module#CabsandFuelTruckAddPageModule', name: 'CabsandFuelTruckAddPage', segment: 'cabsand-fuel-truck-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-fuel-truck/cabsand-fuel-truck.module#CabsandFuelTruckPageModule', name: 'CabsandFuelTruckPage', segment: 'cabsand-fuel-truck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-fuel/cabsand-fuel.module#CabsandFuelPageModule', name: 'CabsandFuelPage', segment: 'cabsand-fuel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-jobcard/cabsand-jobcard.module#CabsandJobcardPageModule', name: 'CabsandJobcardPage', segment: 'cabsand-jobcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-jobcard-add/cabsand-jobcard-add.module#CabsandJobcardAddPageModule', name: 'CabsandJobcardAddPage', segment: 'cabsand-jobcard-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-jsa-add/cabsand-jsa-add.module#CabsandJsaAddPageModule', name: 'CabsandJsaAddPage', segment: 'cabsand-jsa-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-jsa/cabsand-jsa.module#CabsandJsaPageModule', name: 'CabsandJsaPage', segment: 'cabsand-jsa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-news/cabsand-news.module#CabsandNewsPageModule', name: 'CabsandNewsPage', segment: 'cabsand-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-prestart/cabsand-prestart.module#CabsandPrestartPageModule', name: 'CabsandPrestartPage', segment: 'cabsand-prestart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-prestart-jobcard/cabsand-prestart-jobcard.module#CabsandPrestartJobcardPageModule', name: 'CabsandPrestartJobcardPage', segment: 'cabsand-prestart-jobcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-timesheet-approvals/cabsand-timesheet-approvals.module#CabsandTimesheetApprovalsPageModule', name: 'CabsandTimesheetApprovalsPage', segment: 'cabsand-timesheet-approvals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-timesheet-create/cabsand-timesheet-create.module#CabsandTimesheetCreatePageModule', name: 'CabsandTimesheetCreatePage', segment: 'cabsand-timesheet-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-timesheet-create-add/cabsand-timesheet-create-add.module#CabsandTimesheetCreateAddPageModule', name: 'CabsandTimesheetCreateAddPage', segment: 'cabsand-timesheet-create-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-timesheet-history/cabsand-timesheet-history.module#CabsandTimesheetHistoryPageModule', name: 'CabsandTimesheetHistoryPage', segment: 'cabsand-timesheet-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jsa/jsa.module#JsaPageModule', name: 'JsaPage', segment: 'jsa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabsand-timesheet-pending/cabsand-timesheet-pending.module#CabsandTimesheetPendingPageModule', name: 'CabsandTimesheetPendingPage', segment: 'cabsand-timesheet-pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-fuel-add/klmr-fuel-add.module#KlmrFuelAddPageModule', name: 'KlmrFuelAddPage', segment: 'klmr-fuel-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-fuel-truck-add/klmr-fuel-truck-add.module#KlmrFuelTruckAddPageModule', name: 'KlmrFuelTruckAddPage', segment: 'klmr-fuel-truck-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-fuel-truck/klmr-fuel-truck.module#KlmrFuelTruckPageModule', name: 'KlmrFuelTruckPage', segment: 'klmr-fuel-truck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-fuel/klmr-fuel.module#KlmrFuelPageModule', name: 'KlmrFuelPage', segment: 'klmr-fuel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-jobcard-add/klmr-jobcard-add.module#KlmrJobcardAddPageModule', name: 'KlmrJobcardAddPage', segment: 'klmr-jobcard-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-jobcard/klmr-jobcard.module#KlmrJobcardPageModule', name: 'KlmrJobcardPage', segment: 'klmr-jobcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-jsa/klmr-jsa.module#KlmrJsaPageModule', name: 'KlmrJsaPage', segment: 'klmr-jsa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-jsa-add/klmr-jsa-add.module#KlmrJsaAddPageModule', name: 'KlmrJsaAddPage', segment: 'klmr-jsa-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-news/klmr-news.module#KlmrNewsPageModule', name: 'KlmrNewsPage', segment: 'klmr-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-prestart-jobcard/klmr-prestart-jobcard.module#KlmrPrestartJobcardPageModule', name: 'KlmrPrestartJobcardPage', segment: 'klmr-prestart-jobcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-timesheet-approvals/klmr-timesheet-approvals.module#KlmrTimesheetApprovalsPageModule', name: 'KlmrTimesheetApprovalsPage', segment: 'klmr-timesheet-approvals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-timesheet-create/klmr-timesheet-create.module#KlmrTimesheetCreatePageModule', name: 'KlmrTimesheetCreatePage', segment: 'klmr-timesheet-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-timesheet-history/klmr-timesheet-history.module#KlmrTimesheetHistoryPageModule', name: 'KlmrTimesheetHistoryPage', segment: 'klmr-timesheet-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-timesheet-pending/klmr-timesheet-pending.module#KlmrTimesheetPendingPageModule', name: 'KlmrTimesheetPendingPage', segment: 'klmr-timesheet-pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/klmr-timesheet-create-add/klmr-timesheet-create-add.module#KlmrTimesheetCreateAddPageModule', name: 'KlmrTimesheetCreateAddPage', segment: 'klmr-timesheet-create-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prestart/prestart.module#PrestartPageModule', name: 'PrestartPage', segment: 'prestart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-prestart-items/select-prestart-items.module#SelectPrestartItemsPageModule', name: 'SelectPrestartItemsPage', segment: 'select-prestart-items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_klmr_news_klmr_news__["a" /* KlmrNewsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_cabsand_news_cabsand_news__["a" /* CabsandNewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                // Camera,
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_prestart_prestart__["a" /* PrestartProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_crud_crud__["a" /* CrudProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
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
 * Generated class for the JsaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JsaPage = /** @class */ (function () {
    function JsaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JsaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JsaPage');
    };
    JsaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jsa',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/jsa/jsa.html"*/'<!--\n  Generated template for the JsaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>jsa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/jsa/jsa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], JsaPage);
    return JsaPage;
}());

//# sourceMappingURL=jsa.js.map

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsandTimesheetPendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
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




var CabsandTimesheetPendingPage = /** @class */ (function () {
    function CabsandTimesheetPendingPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
    }
    CabsandTimesheetPendingPage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList();
    };
    CabsandTimesheetPendingPage.prototype.gettimeSheetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSheetList = [];
                        this.utiltiy.startLoading();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        // formData.append("user_id", userId);
                        // formData.append("status", "1");
                        formData.append("method_name", "pending_list");
                        this.api.post("/tansix_prestart/timesheet/approver", true, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.utiltiy.stopLoading();
                            _this.timeSheetList = result.result;
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CabsandTimesheetPendingPage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    CabsandTimesheetPendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabsand-timesheet-pending',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-pending/cabsand-timesheet-pending.html"*/'<ion-header>\n  <ion-toolbar [color]="\'dark\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Pending</ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" >\n          <h2>\n            <ion-badge item-end [color]="\'dark\' ">{{fuel.id}}</ion-badge>\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity:</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code:</span>\n              <div>{{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start:</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b1651c\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Finish :</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        \n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/cabsand-timesheet-pending/cabsand-timesheet-pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], CabsandTimesheetPendingPage);
    return CabsandTimesheetPendingPage;
}());

//# sourceMappingURL=cabsand-timesheet-pending.js.map

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlmrTimesheetPendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__ = __webpack_require__(4);
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




var KlmrTimesheetPendingPage = /** @class */ (function () {
    function KlmrTimesheetPendingPage(navCtrl, navParams, api, utiltiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.utiltiy = utiltiy;
        this.timeSheetList = [];
    }
    KlmrTimesheetPendingPage.prototype.ionViewDidLoad = function () {
        this.gettimeSheetList();
    };
    KlmrTimesheetPendingPage.prototype.gettimeSheetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSheetList = [];
                        this.utiltiy.startLoading();
                        return [4 /*yield*/, this.utiltiy.getStorage("userId")];
                    case 1:
                        userId = _a.sent();
                        formData = new FormData();
                        // formData.append("user_id", userId);
                        // formData.append("status", "1");
                        formData.append("method_name", "pending_list");
                        this.api.post("/prestart/timesheet/approver", true, formData)
                            .then(function (result) {
                            console.log("result", result);
                            _this.utiltiy.stopLoading();
                            _this.timeSheetList = result.result;
                        }, function (err) {
                            console.log("err", err);
                            _this.utiltiy.stopLoading();
                            _this.utiltiy.toaster(err.error.message);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    KlmrTimesheetPendingPage.prototype.formatAMPM = function (date) {
        date = date.split(":");
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    KlmrTimesheetPendingPage.prototype.deleteTimeSheet = function (id) {
        var _this = this;
        this.api.delete("/prestart/timesheet/delete/" + id, false)
            .then(function (result) {
            console.log("result", result);
            _this.utiltiy.stopLoading();
            if (result.status) {
                _this.utiltiy.toaster(result.message);
                _this.gettimeSheetList();
            }
        }, function (err) {
            _this.utiltiy.stopLoading();
            _this.utiltiy.toaster(err.error.message);
        });
    };
    KlmrTimesheetPendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-klmr-timesheet-pending',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-pending/klmr-timesheet-pending.html"*/'<ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <button ion-button menuToggle color="light">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title color="light">Pending</ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let fuel of  timeSheetList;let i = index">\n    <ion-card-header class="padding-border card-header card-header-md">\n\n      <ion-row class="row">\n        <ion-col class="col" >\n          <h2>\n            <ion-badge item-end [color]="\'primarybackground\' ">{{fuel.id}}</ion-badge>\n            {{fuel.filled_by}}\n          </h2>\n          <!-- <p>{{fuel.fleet_no}}</p> -->\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity:</span>\n              <div>{{fuel.activity_type}} </div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Activity Code:</span>\n              <div>{{fuel.activity_code}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <ion-icon name="calendar" role="img" class="icon icon-md ion-md-calendar" aria-label="calendar"></ion-icon>\n              <div>{{fuel.date}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n              <span>Start:</span>\n              <div>{{formatAMPM(fuel.start_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n        <ion-col class="col" >\n          <button clear="" icon-start="" ion-button="" small=""\n            [ngStyle]="{\'color\':\'#b71464\'}"\n            class="button button-md button-clear button-clear-md button-small button-small-md"><span\n              class="button-inner">\n             <span>Finish :</span>\n              <div>{{formatAMPM(fuel.finish_time)}}</div>\n            </span>\n            <div class="button-effect"></div>\n          </button>\n        </ion-col>\n     \n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/klmr-timesheet-pending/klmr-timesheet-pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], KlmrTimesheetPendingPage);
    return KlmrTimesheetPendingPage;
}());

//# sourceMappingURL=klmr-timesheet-pending.js.map

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.barcodeUrl = navParams.get('url');
    }
    SearchPage.prototype.cancel = function () {
        this.viewCtrl.dismiss(null);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/pages/search/search.html"*/'\n\n<!-- <ion-header>\n  <ion-toolbar [color]="\'primarybackground\' ">\n    <ion-navbar>\n      <ion-title color="light">{{header}}</ion-title>\n      <ion-buttons end>\n        <ion-button >\n          <ion-icon name="close" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding>\n <p>hi</p>\n</ion-content>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utiltiy_utiltiy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_prestart_prestart__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cabsand_prestart_cabsand_prestart__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_klmr_fuel_klmr_fuel__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_klmr_fuel_truck_klmr_fuel_truck__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cabsand_fuel_cabsand_fuel__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cabsand_fuel_truck_cabsand_fuel_truck__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_klmr_jsa_klmr_jsa__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cabsand_jsa_cabsand_jsa__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_klmr_timesheet_create_klmr_timesheet_create__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cabsand_timesheet_create_cabsand_timesheet_create__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_klmr_news_klmr_news__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cabsand_news_cabsand_news__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_klmr_timesheet_approvals_klmr_timesheet_approvals__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_klmr_timesheet_history_klmr_timesheet_history__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cabsand_timesheet_history_cabsand_timesheet_history__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cabsand_timesheet_approvals_cabsand_timesheet_approvals__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_klmr_jobcard_klmr_jobcard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cabsand_jobcard_cabsand_jobcard__ = __webpack_require__(51);
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
    function MyApp(platform, actionSheetCtrl, faio, statusBar, events, splashScreen, utility) {
        var _this = this;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.faio = faio;
        this.statusBar = statusBar;
        this.events = events;
        this.splashScreen = splashScreen;
        this.utility = utility;
        // pages: Array<{ title: string, component: any }>;
        this.pages = [];
        this.showLevel1 = null;
        this.showLevel2 = null;
        this.sideMenu = [];
        this.currentGroup = null;
        this.biometricAvailable = false;
        this.biometricCounter = 0;
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
                        "component": __WEBPACK_IMPORTED_MODULE_9__pages_prestart_prestart__["a" /* PrestartPage */],
                    },
                    {
                        "title": "Fuel",
                        "component": __WEBPACK_IMPORTED_MODULE_11__pages_klmr_fuel_klmr_fuel__["a" /* KlmrFuelPage */],
                    },
                    {
                        "title": "Fuel Truck",
                        "component": __WEBPACK_IMPORTED_MODULE_12__pages_klmr_fuel_truck_klmr_fuel_truck__["a" /* KlmrFuelTruckPage */],
                    },
                ]
            },
            {
                "category": "Cabsand",
                "colorCode": "#b1651c",
                "subs": [
                    {
                        "title": "Prestart",
                        "component": __WEBPACK_IMPORTED_MODULE_10__pages_cabsand_prestart_cabsand_prestart__["a" /* CabsandPrestartPage */],
                    },
                ]
            },
        ];
    }
    MyApp.prototype.openMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var biometricStatus, actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utility.getStorage("biometric")];
                    case 1:
                        biometricStatus = _a.sent();
                        actionSheet = this.actionSheetCtrl.create({
                            title: 'Biometric',
                            cssClass: 'action-sheets-basic-page',
                            buttons: [
                                biometricStatus ? {
                                    text: 'Deactivate',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.activateDeactivateBioMetric(false);
                                    }
                                } :
                                    {
                                        text: 'Activate',
                                        handler: function () {
                                            _this.activateDeactivateBioMetric(true);
                                        }
                                    },
                            ]
                        });
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.activateDeactivateBioMetric = function (status) {
        this.utility.toaster(status ? "Activated" : "Deactivated");
        this.utility.setStorage("biometric", status);
    };
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
        this.utility.removeStorage("name");
        this.utility.removeStorage("permissions");
        this.utility.removeStorage("biometric");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
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
            var status, roleId, currentGroup, biometricStatus, verifiedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("i was called -4");
                        return [4 /*yield*/, this.utility.getStorage("token")];
                    case 1:
                        status = _a.sent();
                        return [4 /*yield*/, this.utility.getStorage("roleID")];
                    case 2:
                        roleId = _a.sent();
                        return [4 /*yield*/, this.utility.getStorage("currentClass")];
                    case 3:
                        currentGroup = _a.sent();
                        return [4 /*yield*/, this.utility.getStorage("biometric")];
                    case 4:
                        biometricStatus = _a.sent();
                        if (!status) return [3 /*break*/, 7];
                        if (!biometricStatus) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.verifyUser()];
                    case 5:
                        verifiedUser = _a.sent();
                        console.log("verifiedUser", verifiedUser);
                        if (!verifiedUser) {
                            this.bioLogout();
                            return [2 /*return*/];
                        }
                        else {
                            this.utility.toaster("Welcome Back");
                        }
                        _a.label = 6;
                    case 6:
                        // this.roleBasedSideMenu(roleId);
                        // this.rootPage = HomePage;
                        if (currentGroup == "klmr") {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_19__pages_klmr_news_klmr_news__["a" /* KlmrNewsPage */];
                        }
                        else if (currentGroup == "cabsand") {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_20__pages_cabsand_news_cabsand_news__["a" /* CabsandNewsPage */];
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                        _a.label = 8;
                    case 8:
                        if (currentGroup) {
                            this.changeGroup(currentGroup);
                        }
                        else {
                            this.pages = [
                                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
                            ];
                        }
                        console.log("status", status);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.resumeBioMetric = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var biometricStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("i was called-1");
                        return [4 /*yield*/, this.utility.getStorage("biometric")];
                    case 1:
                        biometricStatus = _a.sent();
                        if (biometricStatus) {
                            this.faio.show({
                                clientId: 'klmr-cabsand',
                                clientSecret: 'klmrcabsand',
                                disableBackup: true,
                                localizedFallbackTitle: 'Use Pin',
                                localizedReason: 'Please Authenticate' //Only for iOS
                            })
                                .then(function (status) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log("status", status);
                                    this.utility.toaster("Welcome Back");
                                    this.biometricCounter++;
                                    return [2 /*return*/];
                                });
                            }); })
                                .catch(function (error) {
                                _this.bioLogout();
                                //Fingerprint/Face was not successfully verified
                                //  this.utility.presentAlert(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.bioLogout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        this.utility.toaster("Invalid User");
        this.utility.removeStorage("token");
        this.utility.removeStorage("roleID");
        this.utility.removeStorage("primaryColor");
        this.utility.removeStorage("name");
        this.utility.removeStorage("permissions");
        this.utility.removeStorage("biometric");
    };
    MyApp.prototype.checkBioMetric = function () {
        var _this = this;
        if (this.platform.is('mobileweb') || this.platform.is('core')) {
            // this.biometricAvailable = true;
            return;
        }
        this.faio.isAvailable()
            .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("result----", result);
                if (result === "biometric" || result === "face") {
                    this.biometricAvailable = true;
                }
                return [2 /*return*/];
            });
        }); });
    };
    MyApp.prototype.verifyUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("platform is", this.platform);
                if (this.platform.is('mobileweb') || this.platform.is('core')) {
                    console.log("it is web");
                    // this.biometricAvailable = true;
                    return [2 /*return*/, true];
                }
                else {
                    console.log("it is app");
                    //Check if Fingerprint or Face  is available
                    return [2 /*return*/, this.faio.isAvailable()
                            .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                console.log("result", result);
                                if (result === "biometric" || result === "face") {
                                    this.biometricAvailable = true;
                                    //Fingerprint or Face Auth is available
                                    return [2 /*return*/, this.faio.show({
                                            clientId: 'klmr-cabsand',
                                            clientSecret: 'klmrcabsand',
                                            disableBackup: true,
                                            localizedFallbackTitle: 'Use Pin',
                                            localizedReason: 'Please Authenticate' //Only for iOS
                                        })
                                            .then(function (status) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                console.log("status", status);
                                                return [2 /*return*/, true];
                                            });
                                        }); })
                                            .catch(function (error) {
                                            console.log("error is", error);
                                            //Fingerprint/Face was not successfully verified
                                            //  this.utility.presentAlert(error);
                                            return false;
                                        })];
                                }
                                else {
                                    return [2 /*return*/, true];
                                    //Fingerprint or Face Auth is not available
                                    //  this.utility.presentAlert("Fingerprint/Face Auth is not available   on this device!");
                                }
                                return [2 /*return*/];
                            });
                        }); })];
                }
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.getState();
            _this.platform.pause.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.biometricCounter = 0;
                    return [2 /*return*/];
                });
            }); });
            _this.platform.resume.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.biometricCounter == 0) {
                        this.resumeBioMetric();
                    }
                    return [2 /*return*/];
                });
            }); });
            _this.checkBioMetric();
        });
    };
    MyApp.prototype.changeGroup = function (group) {
        this.currentGroup = group;
        if (group == "klmr") {
            this.pages = [
                {
                    "category": null,
                    "subs": [
                        {
                            "title": "News",
                            "component": __WEBPACK_IMPORTED_MODULE_19__pages_klmr_news_klmr_news__["a" /* KlmrNewsPage */],
                            "pageIdentity": "cabsand_fuel_ViewFuelRO"
                        },
                    ]
                },
                {
                    "category": "Prestart",
                    "subs": [
                        {
                            "title": "Prestart",
                            "component": __WEBPACK_IMPORTED_MODULE_9__pages_prestart_prestart__["a" /* PrestartPage */],
                            "pageIdentity": "cabsand_fuel_ViewFuelRO"
                        },
                    ]
                },
                {
                    "category": "Jobcard",
                    "subs": [
                        {
                            "title": "Jobcard",
                            "component": __WEBPACK_IMPORTED_MODULE_25__pages_klmr_jobcard_klmr_jobcard__["a" /* KlmrJobcardPage */],
                            "pageIdentity": "jobcard_ViewJobcardRO"
                        },
                    ]
                },
                {
                    "category": "Timesheets",
                    "subs": [
                        {
                            "title": "Create",
                            "component": __WEBPACK_IMPORTED_MODULE_17__pages_klmr_timesheet_create_klmr_timesheet_create__["a" /* KlmrTimesheetCreatePage */],
                            "pageIdentity": "timesheet_ViewTimesheetRO"
                        },
                        // {
                        //   "title": "Pending",
                        //   "component": KlmrTimesheetPendingPage,
                        //   "pageIdentity": "timesheet_ViewPendingRO"
                        // },
                        {
                            "title": "History",
                            "component": __WEBPACK_IMPORTED_MODULE_22__pages_klmr_timesheet_history_klmr_timesheet_history__["a" /* KlmrTimesheetHistoryPage */],
                            "pageIdentity": "timesheet_ViewHistoryRO"
                        },
                        {
                            "title": "Approvals",
                            "component": __WEBPACK_IMPORTED_MODULE_21__pages_klmr_timesheet_approvals_klmr_timesheet_approvals__["a" /* KlmrTimesheetApprovalsPage */],
                            "pageIdentity": "timesheet_ViewApprovalRO"
                        },
                    ]
                },
                {
                    "category": "Fuel",
                    "subs": [
                        {
                            "title": "Fuel Truck",
                            "component": __WEBPACK_IMPORTED_MODULE_12__pages_klmr_fuel_truck_klmr_fuel_truck__["a" /* KlmrFuelTruckPage */],
                            "pageIdentity": "cabsand_fuel_ViewFuelRO"
                        },
                        {
                            "title": "Fuel",
                            "component": __WEBPACK_IMPORTED_MODULE_11__pages_klmr_fuel_klmr_fuel__["a" /* KlmrFuelPage */],
                            "pageIdentity": "fuel_ViewFuelRO"
                        },
                    ]
                },
                {
                    "category": "Forms",
                    "subs": [
                        {
                            "title": "Jsa",
                            "component": __WEBPACK_IMPORTED_MODULE_15__pages_klmr_jsa_klmr_jsa__["a" /* KlmrJsaPage */],
                            "pageIdentity": "jsa_ViewJsaRO"
                        },
                    ]
                },
            ];
        }
        else if (group == "cabsand") {
            this.pages = [
                {
                    "category": null,
                    "subs": [
                        {
                            "title": "News",
                            "component": __WEBPACK_IMPORTED_MODULE_20__pages_cabsand_news_cabsand_news__["a" /* CabsandNewsPage */],
                            "pageIdentity": "cabsand_prestart_ViewPrestartRO"
                        },
                    ]
                },
                {
                    "category": "Prestart",
                    "subs": [
                        {
                            "title": "Prestart",
                            "component": __WEBPACK_IMPORTED_MODULE_10__pages_cabsand_prestart_cabsand_prestart__["a" /* CabsandPrestartPage */],
                            "pageIdentity": "cabsand_prestart_ViewPrestartRO"
                        },
                    ]
                },
                {
                    "category": "Jobcard",
                    "subs": [
                        {
                            "title": "Jobcard",
                            "component": __WEBPACK_IMPORTED_MODULE_26__pages_cabsand_jobcard_cabsand_jobcard__["a" /* CabsandJobcardPage */],
                            "pageIdentity": "cabsand_jobcard_ViewJobcardRO"
                        },
                    ]
                },
                {
                    "category": "Timesheets",
                    "subs": [
                        {
                            "title": "Create",
                            "component": __WEBPACK_IMPORTED_MODULE_18__pages_cabsand_timesheet_create_cabsand_timesheet_create__["a" /* CabsandTimesheetCreatePage */],
                            "pageIdentity": "cabsand_timesheet_EditTimesheetRW"
                        },
                        // {
                        //   "title": "Pending",
                        //   "component": CabsandTimesheetPendingPage,
                        //   "pageIdentity": "cabsand_timesheet_ViewPendingRO"
                        // },
                        {
                            "title": "History",
                            "component": __WEBPACK_IMPORTED_MODULE_23__pages_cabsand_timesheet_history_cabsand_timesheet_history__["a" /* CabsandTimesheetHistoryPage */],
                            "pageIdentity": "cabsand_timesheet_ViewHistoryRO"
                        },
                        {
                            "title": "Approvals",
                            "component": __WEBPACK_IMPORTED_MODULE_24__pages_cabsand_timesheet_approvals_cabsand_timesheet_approvals__["a" /* CabsandTimesheetApprovalsPage */],
                            "pageIdentity": "cabsand_timesheet_ViewApprovalRO"
                        },
                    ]
                },
                {
                    "category": "Fuel",
                    "subs": [
                        {
                            "title": "Fuel Truck",
                            "component": __WEBPACK_IMPORTED_MODULE_14__pages_cabsand_fuel_truck_cabsand_fuel_truck__["a" /* CabsandFuelTruckPage */],
                            "pageIdentity": "cabsand_fuel_truck_ViewFuelTruckRO"
                        },
                        {
                            "title": "Fuel",
                            "component": __WEBPACK_IMPORTED_MODULE_13__pages_cabsand_fuel_cabsand_fuel__["a" /* CabsandFuelPage */],
                            "pageIdentity": "cabsand_fuel_ViewFuelRO"
                        },
                    ]
                },
                {
                    "category": "Forms",
                    "subs": [
                        {
                            "title": "Jsa",
                            "component": __WEBPACK_IMPORTED_MODULE_16__pages_cabsand_jsa_cabsand_jsa__["a" /* CabsandJsaPage */],
                            "pageIdentity": "cabsand_jsa_ViewJsaRO"
                        },
                    ]
                },
            ];
        }
        else if (group == "home") {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            ];
        }
    };
    MyApp.prototype.roleBasedSideMenu = function (role) {
        if (role == "1") {
        }
        else {
        }
    };
    MyApp.prototype.permissions = function (currentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var permissions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utility.getStorage("permissions")];
                    case 1:
                        permissions = _a.sent();
                        if (permissions) {
                            permissions = JSON.parse(permissions);
                        }
                        console.log("permissions are ", permissions);
                        // this.utility.setStorage("primaryColor",parent.colorCode);
                        // this.getappColor();
                        // Reset the content nav to have just this page
                        // we wouldn't want the back button to show in this scenario
                        //     this.nav.setRoot(page.component);
                        // return;
                        if (page.component == __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]) {
                            return [2 /*return*/];
                        }
                        if (permissions.permissions.hasOwnProperty(page.pageIdentity)) {
                            this.nav.setRoot(page.component);
                        }
                        else {
                            this.utility.toaster("Access Restricted");
                            this.nav.setRoot(page.component);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/digvijay/projects/ionic/service/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header> \n    <ion-toolbar [color]="currentGroup == \'cabsand\'?\'dark\':\'primarybackground\' ">\n      <ion-title>Menu</ion-title>\n      <ion-buttons end *ngIf="biometricAvailable">\n        <button ion-button  menuToggle icon-only (click)="openMenu()">\n          <ion-icon name="settings"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end> <!-- Here we use end -->\n        <button menuToggle ion-button icon-only (click)="logout()" color="light">\n          <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n    <ion-list *ngFor="let page of pages">\n      <h4 padding-left *ngIf="page.category">{{page.category}}</h4>\n      <button menuClose ion-item *ngFor="let p of page.subs" (click)="openPage(p)" >\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <!-- <ion-content>\n    <ion-list>\n      <span *ngFor="let p of sideMenu; let i=index" text-wrap (click)="toggleLevel1(\'idx\'+i)" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}">\n        <button ion-button icon-end full [ngStyle]="{\'background-color\':appColor == \'#b71464\'?\'#b1651c\':\'#b71464\'}">\n          {{p.category}}\n          <ion-icon color="success" item-right [name]="isLevel1Shown(\'idx\'+i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n        </button>\n        \n        <ion-list *ngIf="isLevel1Shown(\'idx\'+i)">\n          <ion-item *ngFor="let s of p.subs; let i2=index" text-wrap (click)="toggleLevel2(\'idx\'+i+\'idx\'+i2)" [ngClass]="{active: isLevel2Shown(\'idx\'+i+\'idx\'+i2)}">\n            <h4 menuClose (click)="openPage(p,s)">\n              {{s.title}}\n            </h4>\n          </ion-item>\n        </ion-list>\n      </span>\n    </ion-list>\n  </ion-content> -->\n\n  <button ion-button icon-only>\n    <ion-icon name="home"></ion-icon>\n  </button>\n  \n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/digvijay/projects/ionic/service/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_utiltiy_utiltiy__["a" /* UtiltiyProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
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

/***/ })
],[278]);
//# sourceMappingURL=main.js.map