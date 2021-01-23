"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
class DB {
    connectDB(req, res, next) {
        if (req.db) {
            mongoose_1.default.connect(`mongodb+srv://${config_1.default.USER}:${config_1.default.PASS}@${config_1.default.HOST}/${req.db}?retryWrites=true`, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => {
                if (err.message.indexOf("ECONNREFUSED") !== -1) {
                    process.exit(1);
                }
                else {
                    throw err;
                }
            });
            mongoose_1.default.set('useCreateIndex', true);
            console.log('ConnectDB: ' + req.db);
        }
        else {
            mongoose_1.default.connect(`mongodb+srv://${config_1.default.USER}:${config_1.default.PASS}@${config_1.default.HOST}/${config_1.default.DATABASE}?retryWrites=true`, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => {
                if (err.message.indexOf("ECONNREFUSED") !== -1) {
                    process.exit(1);
                }
                else {
                    throw err;
                }
            });
            mongoose_1.default.set('useCreateIndex', true);
            console.log('ConnectDB: default DB');
        }
        next();
    }
}
exports.DB = DB;
//# sourceMappingURL=connectDB.js.map