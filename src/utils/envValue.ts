import dotenv from "dotenv";
dotenv.config();

export const salt = process.env.SALT;
export const jwtEnv = process.env.JWT_SECRET;
export const secretSessionEnv = process.env.SESSION_SECRET;
export const databaseNameENV = process.env.DATABASE_NAME;
export const databaseUsernameENV = process.env.DATABASE_USERNAME;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseHost = process.env.DATABASE_HOST;
export const databasePort = process.env.DATABASE_PORT;
export const emailuser = process.env.EMAIL_USER;
export const emailpass = process.env.EMAIL_PASSWORD;
export const feurl = process.env.FE_URL;
