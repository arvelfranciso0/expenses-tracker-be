import { ExpenesesAttributes } from "./Expenses";

export interface BudgetAttributes {
  id?: number;
  amount: string;
  budgetType: string;
  startDate: string;
  endDate: string;
  status_flag: number;
  userId?: string;
}

export interface BudgetExpensesInterface extends BudgetAttributes {
  expenses: ExpenesesAttributes[];
}
