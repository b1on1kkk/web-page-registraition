import { Request, Response } from "express";
import path from "path";

export default function StaticHTMLFileGetter(
  req: Request,
  res: Response,
  folder: string,
  inner_folder: string,
  file_name: string
) {
  res.sendFile(
    path.join(__dirname, "../../../../", folder, inner_folder, file_name)
  );
}
