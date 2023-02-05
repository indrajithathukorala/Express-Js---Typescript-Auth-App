"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const databaseconfig_1 = __importDefault(require("./dataaccess/databaseconfig"));
const token_1 = __importDefault(require("./types/helper/token"));
const auth_1 = __importDefault(require("./types/middlware/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
console.log({ username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT, });
// if (process.env.NODE_ENV !== "production") {
//    console.log('not prod')
//    }
(0, databaseconfig_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    console.log('dasda');
});
app.get('/user', auth_1.default, (req, res) => {
    try {
        res.send('hello');
    }
    catch (error) {
        res.send(error);
    }
});
app.post('/user', (req, res) => {
    try {
        const token = (0, token_1.default)(req.body.name);
        res.send(token);
        console.log(req.body.name);
    }
    catch (error) {
        res.send(error);
    }
});
app.listen(process.env.PORT, () => {
    console.log('hello server started');
});
