"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypt_1 = __importDefault(require("./crypt"));
const secrect = new crypt_1.default;
class JWT {
    verify(req, res, next) {
        const ip = req.header('net');
        (ip === null || ip === void 0 ? void 0 : ip.length) == 0 ? console.log('IP: ', ip) : null;
        const head = req.header('authorization') || '';
        if ((head === null || head === void 0 ? void 0 : head.length) > 0) {
            const token = secrect.decrypt(`${head}`);
            if (!token['data'] || token['data'].length < 10) {
                req.db = config_1.default.DATABASE;
            }
            if (token['data'] && token['data'].length > 10) {
                try {
                    const verified = jsonwebtoken_1.default.verify(token['data'], config_1.default.TOKEN);
                    console.log('Check IP: ', ip, verified.ip);
                    if (ip !== verified.ip || ip == '')
                        throw new Error('Invalid ip');
                    if (verified.exp < Date.now) {
                        req.db = config_1.default.DATABASE;
                    }
                    else {
                        req.userId = verified.userId;
                        req.opt = verified.opt;
                        // req.db = verified.userId;     // FOR USER DB
                        req.db = config_1.default.DATABASE;
                        // console.log('UserDB :' + req.db);
                    }
                }
                catch (error) {
                    console.log(error);
                    throw new Error(error);
                }
            }
        }
        next();
    }
    createToken(user) {
        return jsonwebtoken_1.default.sign({
            userId: user._id,
            ip: user.ip,
            opt: user.get('opt'),
            exp: Math.floor(Date.now()) + 1000 * 60 * config_1.default.LIFETIME
        }, config_1.default.TOKEN);
    }
}
exports.default = JWT;
//# sourceMappingURL=jwt.js.map