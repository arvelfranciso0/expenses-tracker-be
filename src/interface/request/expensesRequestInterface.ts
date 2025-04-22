export interface ExpensesRequestInterface {
  amount: string;
  expensesType: string;
  budgetId: string;
  createdAt?: Date;
}

export type ExpensesArray = ExpensesRequestInterface[];
