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
const config_1 = __importDefault(require("../../config"));
const jwt = new jwt_1.default;
const db = new database_1.DatabaseService();
const model = User.Model;
const newSchema = User.NewSchema;
class UserController {
    constructor() {
        this.router = express_1.Router();
        this.path = '/user';
        this.opt = 'user';
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.getById);
        this.router.get(`${this.path}/page/1`, this.getItems);
        this.router.get(`${this.path}/`, this.getItems);
        this.router.post(`${this.path}/`, this.add);
        this.router.post(`${this.path}/login`, this.login);
    }
    checkUsr(level, req, res) {
    }
    add(req, res) {
        // if (req.opt[this.opt] < level) return db._400(res)
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
                    db.findOne(model, { usr: data.id }).then(val => {
                        let user = Object.assign(val);
                        console.log(user);
                        const token = jwt.createToken(user);
                        res.header('authorization', token).send({
                            _id: user._id,
                            t0ken: token,
                            usr: user.usr,
                            opt: user.opt,
                            usrInfo: {
                                email: user.email,
                                phoneNumber: user.phoneNumber,
                                title: user.title,
                                depart: user.depart,
                                unit: user.unit,
                                note: user.note,
                                fullName: user.fullName
                            },
                            exp: Math.floor(Date.now()) + 1000 * 60 * config_1.default.LIFETIME,
                            msg: "Xin chào " + user.displayName
                        });
                    });
                }
            });
        }
    }
    getById(req, res) {
        if (req.opt[this.opt] < 4)
            return db._400(res);
        const id = req.params.id;
        db.findById(model, id).then(doc => {
            return db._200(doc, res);
        });
    }
    getItems(req, res) {
        db.findAll(model, {}, req, res).then(val => {
            db._200(val, res);
        }).catch(err => {
            db._400(res, err);
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.ctrl.js.map