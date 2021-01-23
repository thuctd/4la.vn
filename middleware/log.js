"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const conn2 = mongoose_1.default.createConnection(`mongodb+srv://thuctd:thuc@8482@cluster0.mjg0u.mongodb.net/backup?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.set('useCreateIndex', true);
const Schema = mongoose_1.default.Schema;
const schema = new Schema({
    userId: String,
    date: { type: Number, default: Date.now() },
    data: { type: String },
    ip: { type: String },
    api: { type: String }
});
schema.index({ msg: 'text' });
class Logger {
    write(req, res, next) {
        const DB2 = conn2.model("log", schema);
        let body = JSON.stringify(req.body);
        delete body['keyWord'];
        console.log('PATH', req.path);
        if (req.path.search('/log/') > 0) {
            next();
        }
        else {
            const log = {
                data: body,
                userId: req.userId,
                api: req.method + req.url,
                ip: req.header('net')
            };
            DB2.create(log, (err, resData) => {
                if (err) {
                    res.status(400).send({ msg: 'Không thực hiện được' });
                }
                else {
                    console.log('LOG: ok');
                }
            });
            next();
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=log.js.map