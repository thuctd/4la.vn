"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const log_1 = require("./middleware/log");
const express_1 = __importDefault(require("express"));
const connectDB_1 = require("./middleware/connectDB");
const config_1 = __importDefault(require("./config"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const jwt_1 = __importDefault(require("./services/jwt"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const limiter = express_rate_limit_1.default({
    windowMs: 15 * 60 * 1000,
    max: 100 // limit each IP to 100 requests per windowMs
});
class App {
    constructor(controllers) {
        this.db = new connectDB_1.DB;
        this.log = new log_1.Logger;
        this.jwt = new jwt_1.default;
        this.app = express_1.default();
        this.config();
        this.initializeControllers(controllers);
        // this.connetDB;
    }
    config() {
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default({
            origin: (requestOrigin, cb) => {
                // const allow = config.CORS.includes(requestOrigin || '')  ? true : false;
                const allow = true;
                console.log('CORS: ', allow, requestOrigin);
                if (allow) {
                    cb(null, allow);
                }
                else {
                    cb(new Error('Not trusted'));
                }
            }
        }));
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });
        this.initMiddleware();
        this.app.use('/', express_1.default.static(__dirname + '/4la'));
        this.app.get("/*", (req, res) => {
            // res.redirect('/');
            res.sendFile(path_1.default.join(__dirname + '/4la'));
        });
    }
    initMiddleware() {
        this.app.use(helmet_1.default());
        this.app.use(limiter);
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(this.db.connectDB);
        this.app.use(this.jwt.verify);
        // this.app.use(this.log.write)
    }
    listen() {
        this.app.listen(config_1.default.PORT, () => {
            console.log(`http://localhost:${config_1.default.PORT}`);
        });
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    connetDB() {
        mongoose_1.default.connect(`mongodb+srv://${config_1.default.USER}:${config_1.default.PASS}@${config_1.default.HOST}/${config_1.default.DATABASE}?retryWrites=true`, { useNewUrlParser: true }).then(val => {
            console.log(val);
        }).catch(err => {
            console.log(err);
        });
        mongoose_1.default.set('useCreateIndex', true);
        console.log('ConnectDB: default DB');
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map