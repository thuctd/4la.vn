"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
class LOGIN {
    createToken(user) {
        const expiresIn = 60 * 60; // an hour
        const secret = config_1.default.TOKEN;
        const dataStoredInToken = {
            _id: user._id,
        };
        return {
            expiresIn,
            token: jsonwebtoken_1.default.sign(dataStoredInToken, secret, { expiresIn: '7d' }),
        };
    }
}
exports.LOGIN = LOGIN;
//# sourceMappingURL=login.ctrl.js.map