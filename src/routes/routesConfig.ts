import { budgetRoutes } from "./budgetRoutes";
import { expensesRoutes } from "./expensesRoutes";
import { auth } from "./authRoutes";
import { userRoutes } from "./userRoutes";
import { healthRoutes } from "./check";

export const routes = [
  auth,
  expensesRoutes,
  userRoutes,
  budgetRoutes,
  healthRoutes,
];
