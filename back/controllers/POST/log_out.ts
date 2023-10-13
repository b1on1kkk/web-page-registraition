import { Request, Response } from "express";

export default function LogOutUser(req: Request, res: Response) {
  res.clearCookie("user_login");

  res.send("User loged out successfully");
}
