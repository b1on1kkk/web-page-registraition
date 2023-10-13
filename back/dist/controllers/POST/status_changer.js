"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../../global/db_connection");
function StatusChanger(req, res) {
    const data = req.body.data;
    data.map((e) => {
        db_connection_1.db.query(`UPDATE registration SET status = ${e.status} WHERE login = '${e.login}'`);
    });
    res.send("Person status changed successfully");
}
exports.default = StatusChanger;
