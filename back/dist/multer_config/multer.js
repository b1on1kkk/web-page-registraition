"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const fileStorage = multer_1.default.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}-${file.originalname}`);
    },
});
const fileFilter = (request, file, callback) => {
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        callback(null, true);
    }
    else {
        callback(null, false);
    }
};
exports.upload = (0, multer_1.default)({ storage: fileStorage, fileFilter: fileFilter });
