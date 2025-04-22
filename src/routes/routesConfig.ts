import { budgetRoutes } from "./budgetRoutes";
import { expensesRoutes } from "./expensesRoutes";
import { login } from "./loginRoutes";
import { userRoutes } from "./userRoutes";

export const routes = [login, expensesRoutes, userRoutes, budgetRoutes];
