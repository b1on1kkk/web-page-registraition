"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../../global/db_connection");
function GetDataByLogin(req, res) {
    const sql = `SELECT * FROM registration WHERE login = '${req.cookies.user_login}'`;
    db_connection_1.db.query(sql, (err, data) => {
        if (err)
            return console.log(err);
        return res.json(data);
    });
}
exports.default = GetDataByLogin;
