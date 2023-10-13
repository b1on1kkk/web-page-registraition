import { Response } from "express";
import { db } from "../../global/db_connection";

export default function SignUpUser(req: any, res: Response) {
  // создаю массив для будущих ошибок
  const errors: object[] = [];

  // проверяю, имеется ли человек под таким логином
  const query = `SELECT * FROM registration WHERE login = '${req.body.login}'`;

  db.query(query, (error: Error, results: any) => {
    if (error) throw error;

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
    db.query(`INSERT INTO registration SET ?`, {
      email: req.body.email,
      login: req.body.login,
      password: req.body.password,
      avatar_name: req.file.filename,
      status: false,
    });

    res.cookie("user_login", req.body.login, {
      maxAge: 2 * 60 * 60 * 1000, // alive 2h
      httpOnly: true,
    });

    res.end();
  });
}
