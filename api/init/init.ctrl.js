"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("./../../services/database");
const db = new database_1.DatabaseService;
class InitController {
    constructor() {
        this.router = express_1.Router();
        this.path = '/init';
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/`, this.init);
    }
    init(req, res) {
        db._200({ init: 'ok' }, res);
    }
}
exports.default = InitController;
//# sourceMappingURL=init.ctrl.js.map