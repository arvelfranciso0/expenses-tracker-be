import { Request, Response } from "express";
import { BudgetRequestInterface } from "../interface/request/budgetRequestInterface";
import {
  addBudget,
  getAllBudgetsByUserId,
  getBudgetByDate,
  getBudgetById,
  getBudgetByUserId,
} from "../repository/Budget";
import { getExpensesSumByBudgetId } from "../repository/Expenses";

export const addBudgetService = async (req: Request, res: Response) => {
  const budget = req.body as BudgetRequestInterface;

  const userId = req.session.userId;
  const budgetWithUserId = {
    ...budget,
    userId: userId,
  } as BudgetRequestInterface;

  await addBudget(budgetWithUserId);
  return res
    .status(200)
    .send({ message: "Budget is added.", budgetWithUserId });
};

export const getAllBudgetByUserIDService = async (
  req: Request,
  res: Response
) => {
  const userId = req.session.userId;

  const userBudgetData = await getAllBudgetsByUserId(String(userId));
  const totalAmount = userBudgetData.reduce(
    (sum, budget) => sum + Number(budget.amount),
    0
  );

  return res.status(200).send({ totalAmount, data: userBudgetData });
};

export const getBudgetByIdService = async (req: Request, res: Response) => {
  const userId = req.session.userId;

  const budgetData = await getBudgetById(String(userId));
  if (!budgetData) {
    return res.status(404).send({ message: "Budget not found." });
  }

  return res.status(200).send({ data: budgetData });
};

export const getBudgetByDateService = async (req: Request, res: Response) => {
  const userId = req.session.userId;
  const { currentDate } = req.body;

  const budgetData = await getBudgetByDate(userId, currentDate);
  if (!budgetData) {
    return res.status(404).send({ message: "Budget not found." });
  }

  return res.status(200).send({ data: budgetData });
};

export const getBudgetRemaining = async (req: Request, res: Response) => {
  const userId = req.session.userId;
  const { currentDate } = req.body;
  const budget = await getBudgetByUserId(userId, currentDate);
  const totalExpenses = await getExpensesSumByBudgetId(String(budget.id));
  const remaining = Number(budget.amount) - totalExpenses;
  return res.status(200).send({
    remaining: remaining.toFixed(2),
    budget,
    totalExpenses: totalExpenses.toFixed(2),
  });
};
