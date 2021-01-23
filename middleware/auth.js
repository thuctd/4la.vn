"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const crypt_1 = __importDefault(require("../services/crypt"));
class AuthUser {
    constructor() {
        this.secrect = new crypt_1.default;
    }
    auth(req, res, next) {
        const token = this.secrect.decrypt(req.header('authorization'));
        if (!token['data'] || token['data'].length < 10) {
            req.level = [];
            req.db = config_1.default.DATABASE;
            // console.log('Default DB: ' + req.db);
        }
        if (token['data'] && token['data'].length > 10) {
            try {
                const verified = jsonwebtoken_1.default.verify(token['data'], config_1.default.TOKEN);
                if (verified.exp < Date.now) {
                    req.level = [];
                    req.db = config_1.default.DATABASE;
                }
                else {
                    req.userId = verified.userId;
                    req.opt = verified.opt;
                    // req.db = verified.userId;     // FOR USER DB
                    req.db = config_1.default.DATABASE;
                }
            }
            catch (error) {
                console.log(error);
                req.level = [];
            }
        }
        next();
    }
}
exports.AuthUser = AuthUser;
//# sourceMappingURL=auth.js.map