import { ExpensesArray } from "../interface/request/expensesRequestInterface";
import { Expenses } from "../model/Expeneses";

export const addExpenses = async (expenses: ExpensesArray) => {
  return await Expenses.bulkCreate(expenses);
};

export const getALLExpensesByBudgetId = async (budgetId: string) => {
  const expenses = await Expenses.findAll({
    where: {
      budgetId: budgetId,
    },
    raw: true,
  });

  return expenses as unknown as ExpensesArray;
};

export const getExpensesSumByBudgetId = async (budgetId: string) => {
  const totalExpenses = await Expenses.sum("amount", {
    where: {
      budgetId: budgetId,
    },
  });
  return totalExpenses as unknown as number;
};
