import { Sequelize } from "sequelize";
import {
  databaseHost,
  databaseNameENV,
  databasePassword,
  databasePort,
  databaseUsernameENV,
} from "./utils/envValue";
const sequelize = new Sequelize(
  String(databaseNameENV),
  String(databaseUsernameENV),
  String(databasePassword),
  {
    host: String(databaseHost),
    port: Number(databasePort),
    dialect: "mysql",
  }
);

export default sequelize;
