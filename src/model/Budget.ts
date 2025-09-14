import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";
import { BudgetAttributes } from "../interface/Budget";

export interface BudgetCreationAttributes
  extends Optional<BudgetAttributes, "id"> {}
export const Budget = sequelize.define<
  Model<BudgetAttributes, BudgetCreationAttributes>
>("budgets", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budgetType: {
    type: DataTypes.TEXT,
  },
  startDate: {
    type: DataTypes.TEXT,
  },
  endDate: {
    type: DataTypes.TEXT,
  },
  status_flag: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
});
