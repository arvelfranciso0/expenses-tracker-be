export interface BudgetAttributes {
  id?: number;
  amount: string;
  budgetType: string;
  startDate: string;
  endDate: string;
  status_flag: number;
  userId?: string;
}
