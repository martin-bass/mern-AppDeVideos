"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    MONGO_DATABASE: process.env.MONGO_DATABASE || "videos",
    MONGO_USER: process.env.MONGO_USER || "martin_reym",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "martin1234",
    MONGO_HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.PORT || 4000,
};
