"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const multer_1 = require("./multer_config/multer");
const static_files_getter_1 = __importDefault(require("./controllers/GET/static_files_getter"));
const get_data_by_login_1 = __importDefault(require("./controllers/GET/get_data_by_login"));
const get_all_users_1 = __importDefault(require("./controllers/GET/get_all_users"));
const sign_up_user_1 = __importDefault(require("./controllers/POST/sign_up_user"));
const log_out_1 = __importDefault(require("./controllers/POST/log_out"));
const log_in_user_1 = __importDefault(require("./controllers/POST/log_in_user"));
const delete_user_by_login_1 = __importDefault(require("./controllers/POST/delete_user_by_login"));
const status_changer_1 = __importDefault(require("./controllers/POST/status_changer"));
const app = (0, express_1.default)();
const port = 2005;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express_1.default.static(path_1.default.join(__dirname, "../../", "front", "styles")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../", "front", "scripts")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../", "uploads")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../", "icons")));
////////////////////////////////////////////GET///////////////////////////////////////////////
app.get("/", (req, res) => {
    (0, static_files_getter_1.default)(req, res, "front", "main_page", "main_page.html");
});
app.get("/sign_up", (req, res) => {
    (0, static_files_getter_1.default)(req, res, "front", "sign_up", "sing_up.html");
});
app.get("/log_in", (req, res) => {
    (0, static_files_getter_1.default)(req, res, "front", "log_in", "log_in.html");
});
app.get("/congratulations", (req, res) => {
    (0, static_files_getter_1.default)(req, res, "front", "congratulations", "congratulations.html");
});
app.get("/log_in/admin_panel", (req, res) => {
    (0, static_files_getter_1.default)(req, res, "front", "admin", "admin_panel.html");
});
app.get("/sign_up_data", get_data_by_login_1.default);
app.get("/all_users", get_all_users_1.default);
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////POST///////////////////////////////////////////////
app.post("/sign_up", multer_1.upload.single("profileImg"), sign_up_user_1.default);
app.post("/log_out", log_out_1.default);
app.post("/log_in", log_in_user_1.default);
app.post("/delete_user_by_login", delete_user_by_login_1.default);
app.post("/change_user_status", status_changer_1.default);
//////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
