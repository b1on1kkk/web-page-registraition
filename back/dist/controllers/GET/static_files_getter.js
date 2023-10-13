"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function StaticHTMLFileGetter(req, res, folder, inner_folder, file_name) {
    res.sendFile(path_1.default.join(__dirname, "../../../../", folder, inner_folder, file_name));
}
exports.default = StaticHTMLFileGetter;
