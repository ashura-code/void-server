"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var urlencode_1 = require("./urlencode");
var encode = urlencode_1.urlEncodeDecode.encode;
// const { red, blue, bold, bgBlack, cyan, magenta, green } = require('kleur');
function getResults(name) {
    return __awaiter(this, void 0, void 0, function () {
        var data, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.jiosaavn.com/api.php?p=1&q=".concat(name, "&_format=json&_marker=0&api_version=4&ctx=wap6dot0&n=20&__call=search.getResults"))];
                case 1:
                    data = _a.sent();
                    if (!(data.status > 199)) return [3 /*break*/, 3];
                    return [4 /*yield*/, data.json()];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.results];
                case 3:
                    console.log(data);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getLink(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, res, split1, split2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&url=".concat(id, "&bitrate=128&api_version=4&_format=json&ctx=wap6dot0&_marker=0"))];
                case 1:
                    data = _a.sent();
                    if (!(data.status >= 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, data.json()];
                case 2:
                    res = _a.sent();
                    split1 = res.auth_url.split('?')[0];
                    split2 = split1.split('com');
                    return [2 /*return*/, 'https://aac.saavncdn.com' + split2[1]];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function main(name) {
    return __awaiter(this, void 0, void 0, function () {
        var res_arr, arr, _loop_1, _i, arr_1, item;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res_arr = [];
                    return [4 /*yield*/, getResults(name)];
                case 1:
                    arr = _a.sent();
                    _loop_1 = function (item) {
                        var obj, temp_name, name_1, image, temp_subtitle, subtitle, encoded, url_, result;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    obj = {};
                                    temp_name = item.title;
                                    name_1 = temp_name.replace(/&quot;/g, '"');
                                    // console.log(`\x1B[4m\n\x1B[0m`);
                                    // console.log(bold(blue(name)));
                                    obj.name = name_1;
                                    image = item.image;
                                    obj.image = image;
                                    temp_subtitle = item.subtitle;
                                    subtitle = item.subtitle.replace(/&quot;/g, '"');
                                    obj.subtitle = subtitle;
                                    encoded = encode(item.more_info.encrypted_media_url);
                                    url_ = function () { return __awaiter(_this, void 0, void 0, function () {
                                        var url;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, getLink(encoded)];
                                                case 1:
                                                    url = _a.sent();
                                                    return [2 /*return*/, url];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, url_()];
                                case 1:
                                    result = _b.sent();
                                    // console.log(result);
                                    obj.url = result;
                                    res_arr.push(obj);
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, arr_1 = arr;
                    _a.label = 2;
                case 2:
                    if (!(_i < arr_1.length)) return [3 /*break*/, 5];
                    item = arr_1[_i];
                    return [5 /*yield**/, _loop_1(item)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, res_arr];
            }
        });
    });
}
// main('blinding lights'); // give the song name to be fetched as an argument
exports.default = main;
//# sourceMappingURL=logic.js.map