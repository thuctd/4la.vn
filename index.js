"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_ctrl_1 = __importDefault(require("./api/init/init.ctrl"));
const user_ctrl_1 = __importDefault(require("./api/user/user.ctrl"));
const app_1 = __importDefault(require("./app"));
const app = new app_1.default([
    new user_ctrl_1.default(),
    new init_ctrl_1.default()
]);
app.listen();
//# sourceMappingURL=index.js.map