import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  expensesService,
  getAllExpenseByUserIDService,
} from "../service/expensesService";
export const expensesRoutes = Router();

const path = "/expenses";
expensesRoutes.post(
  path + "/add",
  authMiddleware,
  (req: Request, res: Response) => {
    expensesService(req, res);
  }
);
expensesRoutes.get(
  path + "/get-expenses/:budgetId",
  authMiddleware,
  (req: Request, res: Response) => {
    getAllExpenseByUserIDService(req, res);
  }
);
