"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../../global/db_connection");
function SignUpUser(req, res) {
    // создаю массив для будущих ошибок
    const errors = [];
    // проверяю, имеется ли человек под таким логином
    const query = `SELECT * FROM registration WHERE login = '${req.body.login}'`;
    db_connection_1.db.query(query, (error, results) => {
        if (error)
            throw error;
        // если имеется, тогда кидаем ошибку и пишем, что такой пользователь имеется
        if (results.length > 0)
            errors.push({ error: "User with this login exist!" });
        // если файл undefined, значит, пользователь пихает файл не с тем расшираем - кидаем ошибку
        if (req.file === undefined) {
            errors.push({ error: "Invalid extension!" });
        }
        // если массив ошибок не пустой - выводим ошибки и выходим
        if (errors.length > 0) {
            res.status(400).json({ errors });
            return;
        }
        // если после всех проверок все ок, тогда идем дальше и записываем пользователя
        db_connection_1.db.query(`INSERT INTO registration SET ?`, {
            email: req.body.email,
            login: req.body.login,
            password: req.body.password,
            avatar_name: req.file.filename,
            status: false,
        });
        res.cookie("user_login", req.body.login, {
            maxAge: 2 * 60 * 60 * 1000,
            httpOnly: true,
        });
        res.end();
    });
}
exports.default = SignUpUser;
