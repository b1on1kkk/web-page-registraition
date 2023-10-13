import { Request, Response } from "express";
import { db } from "../../global/db_connection";

export default function DeleteUserByLogin(req: Request, res: Response) {
  db.query(`DELETE FROM registration WHERE login = '${req.body.login}'`);

  res.send("Person deleted successfully");
}
