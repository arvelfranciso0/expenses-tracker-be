import { budgetRoutes } from "./budgetRoutes";
import { expensesRoutes } from "./expensesRoutes";
import { auth } from "./authRoutes";
import { userRoutes } from "./userRoutes";

export const routes = [auth, expensesRoutes, userRoutes, budgetRoutes];
