import { Request, Response, Router } from "express";
import { loginService } from "../service/loginService";
export const login = Router();

login.post("/login", (req: Request, res: Response) => {
  loginService(req, res);
});
