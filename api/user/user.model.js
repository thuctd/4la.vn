"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSchema = exports.Model = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const UserSchema = new mongoose_1.default.Schema({
    dateModify: { type: Number, default: Date.now() },
    canEdit: { type: Number, default: Date.now() + 1000 * 60 * 5 },
    status: { type: Number, default: 1 },
    keyWord: { type: String },
    usr: { type: String, min: 3, max: 100, require: true },
    pwd: { type: String },
    displayName: { type: String, min: 3, max: 100 },
    photoURL: { type: String, min: 3, max: 255 },
    email: { type: String },
    phoneNumber: { type: String },
    title: { type: String },
    depart: { type: String },
    unit: { type: String },
    note: { type: String },
    fullName: { type: String, min: 3, max: 100 },
});
exports.Model = mongoose_1.default.model('user', UserSchema);
exports.NewSchema = joi_1.default.object({
    name: joi_1.default.number().required().error((errors) => new Error('"foo" requires a positive number'))
});
//# sourceMappingURL=user.model.js.map