import { Request, Response } from "express";
import { db } from "../../global/db_connection";

export default function StatusChanger(req: Request, res: Response) {
  const data: { status: boolean; login: string }[] = req.body.data;

  data.map((e) => {
    db.query(
      `UPDATE registration SET status = ${e.status} WHERE login = '${e.login}'`
    );
  });

  res.send("Person status changed successfully");
}
