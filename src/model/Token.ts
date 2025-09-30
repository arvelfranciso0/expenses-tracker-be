import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";
import { TokenAttributes } from "../interface/Token";

export const Token = sequelize.define<Model<TokenAttributes>>("token", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  token: {
    type: DataTypes.TEXT,
  },
});
