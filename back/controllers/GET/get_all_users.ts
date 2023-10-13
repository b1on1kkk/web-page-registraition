import { Request, Response } from "express";
import { db } from "../../global/db_connection";

export default function GetAllUsers(req: Request, res: Response) {
  const sql = `SELECT * FROM registration`;

  db.query(sql, (err: Error, data: any) => {
    if (err) return console.log(err);

    return res.json(data);
  });
}
