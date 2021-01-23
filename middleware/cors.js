"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../config"));
class CORS {
    auth(req, res, next) {
        cors_1.default({
            origin: (requestOrigin, cb) => {
                try {
                    // const allow = !requestOrigin || requestOrigin.indexOf('.edu') !== -1;
                    console.log('CORS: ', requestOrigin);
                    const allow = config_1.default.CORS.includes(requestOrigin || '') ? true : false;
                    console.log('Cors:', requestOrigin, allow);
                    cb(null, allow);
                }
                catch (err) {
                    console.log('Cors: ', err);
                    cb(err);
                }
            }
        });
        next();
    }
}
exports.default = CORS;
//# sourceMappingURL=cors.js.map