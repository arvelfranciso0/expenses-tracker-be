import { Sequelize } from "sequelize";
import sequelize from "../db";

import { getUserByEmail, SaveUser } from "../repository/User";

import { UserAttributes } from "../interface/User";
import { User } from "./User";
import { hashPassword } from "../utils/hashUtils";
import { Associations } from "./Association";
import { Budget } from "./Budget";
import { Expenses } from "./Expeneses";
const db = {
  sequelize,
  Sequelize,
  User,
  Budget,
  Expenses,
  Associations,
};

export const insertDefaultUser = async () => {
  const password = await hashPassword("@Rvel123");

  const defaultUser = {
    name: "default",
    password: String(password),
    email: "default@gmail.com",
  } as UserAttributes;

  if (!(await getUserByEmail(defaultUser.email))) {
    SaveUser(defaultUser);
  }
};

export default db;
