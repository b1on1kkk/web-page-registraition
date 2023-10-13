"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LogOutUser(req, res) {
    res.clearCookie("user_login");
    res.send("User loged out successfully");
}
exports.default = LogOutUser;
