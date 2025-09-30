import { ExpenesesAttributes } from "../interface/Expenses";
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

export const Expenses = sequelize.define<Model<ExpenesesAttributes>>(
  "expenses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expensesType: {
      type: DataTypes.TEXT,
    },
    budgetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "budgets",
        key: "id",
      },
    },
  }
);
