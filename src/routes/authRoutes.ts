import { Request, Response, Router } from "express";
import {
  loginService,
  verifyTokenService,
  signUpUser,
} from "../service/authService";

export const auth = Router();
auth.post("/login", (req: Request, res: Response) => {
  loginService(req, res);
});
auth.post("/signup", (req: Request, res: Response) => {
  signUpUser(req, res);
});

auth.get("/verify", (req: Request, res: Response) => {
  verifyTokenService(req, res);
});
