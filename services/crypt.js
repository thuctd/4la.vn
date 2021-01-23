"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const crypto_js_1 = __importDefault(require("crypto-js"));
class Crypt {
    decrypt(data) {
        if (data.length > 0) {
            let x = crypto_js_1.default.AES.decrypt((data), config_1.default.TOKEN).toString(crypto_js_1.default.enc.Utf8);
            if (x.length > 0) {
                return JSON.parse(x);
            }
        }
        else {
            return false;
        }
    }
    encrypt(data) {
        return crypto_js_1.default.AES.encrypt(JSON.stringify(data), config_1.default.TOKEN).toString();
    }
}
exports.default = Crypt;
//# sourceMappingURL=crypt.js.map