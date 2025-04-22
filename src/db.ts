import { Sequelize } from "sequelize";
import {
  databaseNameENV,
  databasePassword,
  databaseUsernameENV,
} from "./utils/envValue";
const sequelize = new Sequelize(
  String(databaseNameENV),
  String(databaseUsernameENV),
  String(databasePassword),
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
