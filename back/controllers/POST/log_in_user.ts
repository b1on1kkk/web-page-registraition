import { Request, Response } from "express";

export default function LogInUser(req: Request, res: Response) {
  res.cookie("user_login", req.body.login, {
    maxAge: 2 * 60 * 60 * 1000, // alive 2h
    httpOnly: true,
  });

  res.redirect("/congratulations");
}
