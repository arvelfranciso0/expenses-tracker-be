import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  addBudgetService,
  getAllBudgetByUserIDService,
  getBudgetByIdService,
  getBudgetRemaining,
} from "../service/budgetService";

export const budgetRoutes = Router();
const path = "/budget";

budgetRoutes.post(
  path + "/add",
  authMiddleware,
  (req: Request, res: Response) => {
    addBudgetService(req, res);
  }
);
budgetRoutes.get(
  path + "/get-all-budget",
  authMiddleware,
  (req: Request, res: Response) => {
    getAllBudgetByUserIDService(req, res);
  }
);
budgetRoutes.post(
  path + "/get-budget",
  authMiddleware,
  (req: Request, res: Response) => {
    getBudgetRemaining(req, res);
  }
);
budgetRoutes.get(
  path + "/get-budget-id/:id",
  authMiddleware,
  (req: Request, res: Response) => {
    getBudgetByIdService(req, res);
  }
);
