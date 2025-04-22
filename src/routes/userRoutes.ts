import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  getUserByIdService,
  updateUserInformation,
} from "../service/userService";

export const userRoutes = Router();
const path = "/user";

userRoutes.get(
  path + "/get-user",
  authMiddleware,
  (req: Request, res: Response) => {
    getUserByIdService(req, res);
  }
);
userRoutes.get(path + "/get-user", (req: Request, res: Response) =>
  authMiddleware(req, res, () => getUserByIdService)
);
userRoutes.get(
  path + "/update-user",
  authMiddleware,
  (req: Request, res: Response) => {
    updateUserInformation(req, res);
  }
);
