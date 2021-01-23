"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const permission_1 = require("./../interface/permission");
const crypt_1 = __importDefault(require("./crypt"));
const secrect = new crypt_1.default();
const per = permission_1.PermissionEnum;
class DatabaseService {
    add(model, NewSchema, req, res) {
        const { error } = NewSchema.validate(req.body);
        if (error)
            return this._400(res, error);
        return model.create(req.body).then(val => {
            return this._200(val, res);
        }).catch(err => {
            return this._400(res, err);
        });
    }
    addMany(model, NewSchema, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { error } = NewSchema.validate();
            // if(error) return res.send({err: error.details[0].message + ` tại vị trí ${error.details[0].path}`, full: error});
            try {
                const val = yield model.insertMany(req.body);
                return this._200(val, res);
            }
            catch (err) {
                return this._400(res, err);
            }
        });
    }
    deleteById({ model, id }) {
        return model.deleteOne({ _id: id }, {}, (err) => {
            if (err)
                return Promise.reject(err);
            return Promise.resolve({ deleted: true });
        });
    }
    findAll(model, query, req, res) {
        return model.find(query, (err, docs) => {
            if (err)
                return Promise.reject(err);
            return Promise.resolve(docs);
        });
    }
    findOne(model, query) {
        return model.findOne(query, (err, doc) => {
            if (err)
                return Promise.reject(err);
            return Promise.resolve(doc);
        });
    }
    findById(model, id) {
        return model.findById(id, (err, doc) => {
            if (err)
                return Promise.reject(err);
            return Promise.resolve(doc);
        });
    }
    updateById(model, id) {
        return model.findByIdAndUpdate(id, (err, doc) => {
            if (err)
                return Promise.reject(err);
            return Promise.resolve(doc);
        });
    }
    validate() {
    }
    _200(body, res) {
        res.removeHeader('x-powered-by');
        res.removeHeader('x-vercel-cache');
        res.removeHeader('x-vercel-id');
        res.status(200).send({
            data: body,
            // data: secrect.encrypt(JSON.stringify(body)),
            msg: 'Thành công',
            status: true
        });
    }
    _400(res, body) {
        res.removeHeader('x-powered-by');
        res.removeHeader('x-vercel-cache');
        res.removeHeader('x-vercel-id');
        res.status(400).send({
            msg: 'Có lỗi xảy ra ',
            err: body,
            status: false
        });
    }
}
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.js.map