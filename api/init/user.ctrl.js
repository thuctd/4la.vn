"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User = __importStar(require("./user.model"));
const database_1 = require("./../../services/database");
const request_1 = __importDefault(require("request"));
const jwt_1 = __importDefault(require("./../../services/jwt"));
const jwt = new jwt_1.default;
const db = new database_1.DatabaseService();
const model = User.Model;
const newSchema = User.NewSchema;
class UserController {
    constructor() {
        this.router = express_1.Router();
        this.path = '/user';
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/id/:id`, this.getItems);
        this.router.post(`${this.path}/`, this.add);
        this.router.get(`${this.path}/`, this.getItems);
        this.router.post(`${this.path}/login`, this.login);
    }
    add(req, res) {
        console.log(req.body);
        db.add(model, newSchema, req, res);
    }
    login(req, res) {
        const userPost = req.body;
        if (userPost.provider === 'GOOGLE') {
            const url = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + userPost.authToken;
            request_1.default(url, (err, res1, resBody) => {
                if (err) {
                    return db._400;
                }
                else {
                    const data = JSON.parse(resBody);
                    db.findOne(model, { usr: data.id }, req, res).then(val => {
                        jwt.createToken(val, req, res);
                        // db._200(val, res)
                    });
                }
            });
        }
    }
    getItems(req, res) {
        return db.getItems(model, res);
    }
}
exports.default = UserController;
//# sourceMappingURL=user.ctrl.js.map