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
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const sequelize = new sequelize_1.Sequelize({
    username: database_1.default.development.username,
    password: database_1.default.development.password,
    database: database_1.default.development.database,
    host: database_1.default.development.host,
    dialect: 'postgres',
    // port: config.development.port,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // This line will fix new error
        }
    }
});
// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     database: "dvd",
//     host: 'localhost',
//     password: 'face2face',
//     username: 'postgres'
// })
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield sequelize.authenticate();
        console.log('databse connected!');
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = test;
