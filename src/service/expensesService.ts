import { Request, Response } from "express";
import { addExpenses, getALLExpensesByBudgetId } from "../repository/Expenses";
import { ExpensesArray } from "../interface/request/expensesRequestInterface";

export const expensesService = async (req: Request, res: Response) => {
  const expenses = req.body as ExpensesArray;

  await addExpenses(expenses);

  return res.status(200).send({ message: "Expenses is added." });
};

export const getAllExpenseByUserIDService = async (
  req: Request,
  res: Response
) => {
  const budgetId = req.params.budgetId;
  const userExpensesData = await getALLExpensesByBudgetId(String(budgetId));
  if (!userExpensesData) {
    return res.status(404).send({ message: "Expenses not found." });
  }
  const formatData = userExpensesData.map((expense) => ({
    ...expense,
    createdAt: expense?.createdAt?.toLocaleDateString(),
  }));
  const totalAmount = userExpensesData.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return res.status(200).send({ totalAmount, data: formatData });
};
