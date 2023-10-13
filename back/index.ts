import express, { Express, Request, Response } from "express";
import path from "path";

import { upload } from "./multer_config/multer";

import StaticHTMLFileGetter from "./controllers/GET/static_files_getter";
import GetDataByLogin from "./controllers/GET/get_data_by_login";
import GetAllUsers from "./controllers/GET/get_all_users";
import SignUpUser from "./controllers/POST/sign_up_user";
import LogOutUser from "./controllers/POST/log_out";
import LogInUser from "./controllers/POST/log_in_user";
import DeleteUserByLogin from "./controllers/POST/delete_user_by_login";
import StatusChanger from "./controllers/POST/status_changer";

const app: Express = express();
const port = 2005;

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "../../", "front", "styles")));
app.use(express.static(path.join(__dirname, "../../", "front", "scripts")));
app.use(express.static(path.join(__dirname, "../", "uploads")));
app.use(express.static(path.join(__dirname, "../", "icons")));

////////////////////////////////////////////GET///////////////////////////////////////////////

app.get("/", (req: Request, res: Response) => {
  StaticHTMLFileGetter(req, res, "front", "main_page", "main_page.html");
});

app.get("/sign_up", (req: Request, res: Response) => {
  StaticHTMLFileGetter(req, res, "front", "sign_up", "sing_up.html");
});

app.get("/log_in", (req: Request, res: Response) => {
  StaticHTMLFileGetter(req, res, "front", "log_in", "log_in.html");
});

app.get("/congratulations", (req: Request, res: Response) => {
  StaticHTMLFileGetter(
    req,
    res,
    "front",
    "congratulations",
    "congratulations.html"
  );
});

app.get("/log_in/admin_panel", (req: Request, res: Response) => {
  StaticHTMLFileGetter(req, res, "front", "admin", "admin_panel.html");
});

app.get("/sign_up_data", GetDataByLogin);

app.get("/all_users", GetAllUsers);

//////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////POST///////////////////////////////////////////////

app.post("/sign_up", upload.single("profileImg"), SignUpUser);

app.post("/log_out", LogOutUser);

app.post("/log_in", LogInUser);

app.post("/delete_user_by_login", DeleteUserByLogin);

app.post("/change_user_status", StatusChanger);

//////////////////////////////////////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
