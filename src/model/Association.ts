import { Budget } from "./Budget";
import { User } from "./User";
import { Expenses } from "./Expeneses";

export const Associations = () => {
  User.hasMany(Budget, {
    foreignKey: "userId",
    as: "budget",
    onDelete: "CASCADE",
  });
  Budget.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
    onDelete: "CASCADE",
  });
  Budget.hasMany(Expenses, {
    foreignKey: "budgetId",
    as: "expenses",
    onDelete: "CASCADE",
  });
  Expenses.belongsTo(Budget, {
    foreignKey: "budgetId",
    as: "budget",
    onDelete: "CASCADE",
  });
};
