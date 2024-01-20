"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeDecode = void 0;
function isStr(str) {
    return typeof str === 'string';
}
exports.urlEncodeDecode = {
    encode: function (str) {
        if (str === void 0) { str = ''; }
        if (!isStr(str)) {
            throw new Error('Please provide a string to encode.');
        }
        return encodeURIComponent(str)
            .replace(/!/g, '%21')
            .replace(/'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\*/g, '%2A')
            .replace(/%20/g, '+');
    },
    decode: function (str) {
        if (str === void 0) { str = ''; }
        if (!isStr(str)) {
            throw new Error('Please provide a string to decode.');
        }
        return decodeURIComponent(str.replace(/\+/g, '%20'));
    },
};
//# sourceMappingURL=urlencode.js.map