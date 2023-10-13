"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../../global/db_connection");
function DeleteUserByLogin(req, res) {
    db_connection_1.db.query(`DELETE FROM registration WHERE login = '${req.body.login}'`);
    res.send("Person deleted successfully");
}
exports.default = DeleteUserByLogin;
