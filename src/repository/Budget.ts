import { Op } from "sequelize";
import { BudgetAttributes } from "../interface/Budget";
import { BudgetRequestInterface } from "../interface/request/budgetRequestInterface";
import { Budget } from "../model/Budget";
import { Expenses } from "../model/Expeneses";

export const addBudget = async (budget: BudgetRequestInterface) => {
  return await Budget.create(budget);
};

export const getAllBudgetsByUserId = async (userId: string) => {
  const budgets = await Budget.findAll({
    where: {
      userId: userId,
    },
    raw: true,
  });

  return budgets as unknown as BudgetRequestInterface[];
};

export const getBudgetById = async (budgetId: string) => {
  const budget = await Budget.findOne({
    where: {
      id: budgetId,
    },
    raw: true,
  });

  return budget as unknown as BudgetAttributes;
};

export const getBudgetByDate = async (userId: string, currentDate: string) => {
  const budget = await Budget.findOne({
    where: {
      userId: userId,
      startDate: {
        [Op.lte]: currentDate,
      },
      endDate: {
        [Op.gte]: currentDate,
      },
    },
    raw: true,
  });

  return budget as unknown as BudgetAttributes;
};

export const getBudgetByUserId = async (
  userId: string,
  currentDate: string
) => {
  const budget = await Budget.findOne({
    where: {
      userId: userId,
      startDate: {
        [Op.lte]: currentDate,
      },
      endDate: {
        [Op.gte]: currentDate,
      },
    },
    raw: true,
  });

  return budget as unknown as BudgetAttributes;
};
