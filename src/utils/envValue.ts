import dotenv from "dotenv";
dotenv.config();

export const salt = process.env.SALT;
export const jwtEnv = process.env.JWT_SECRET;
export const secretSessionEnv = process.env.SESSION_SECRET;
export const databaseNameENV = process.env.DATABASE_NAME;
export const databaseUsernameENV = process.env.DATABSE_USERNAME;
export const databasePassword = process.env.DATABASE_PASSWORD;
