"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LogInUser(req, res) {
    res.cookie("user_login", req.body.login, {
        maxAge: 2 * 60 * 60 * 1000,
        httpOnly: true,
    });
    res.redirect("/congratulations");
}
exports.default = LogInUser;
