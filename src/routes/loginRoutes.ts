import { Request, Response, Router } from "express";
import { loginService } from "../service/loginService";
import { addUser } from "../service/userService";
export const login = Router();
login.post("/login", (req: Request, res: Response) => {
  loginService(req, res);
});
login.post("/signup", (req: Request, res: Response) => {
  addUser(req, res);
});
