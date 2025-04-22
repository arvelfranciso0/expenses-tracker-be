import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";
import { UserAttributes } from "../interface/User";
// import { Expenses } from "./Expeneses";

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}
export const User = sequelize.define<
  Model<UserAttributes, UserCreationAttributes>
>("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
