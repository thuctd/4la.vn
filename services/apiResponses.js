"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypt_1 = __importDefault(require("./crypt"));
const secrect = new crypt_1.default();
const apiResponses = {
    _200: (body, res) => {
        res.status(200).send({
            data: secrect.encrypt(JSON.stringify(body)),
            msg: 'Thành công'
        });
    },
    _400: (body) => {
        return {
            statusCode: 400,
            err: 'Có lỗi xảy ra ' + body,
        };
    },
};
exports.default = apiResponses;
//# sourceMappingURL=apiResponses.js.map