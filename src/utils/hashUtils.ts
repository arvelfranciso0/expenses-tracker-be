import bycrpt from "bcrypt";
import { salt } from "./envValue";

const saltRound = Number(salt);

export const hashPassword = async (password: string) => {
  const hashedPassword = await bycrpt.hash(password, saltRound);

  return hashedPassword;
};

export const comparePassword = async (password: string, hash: string) => {
  return await bycrpt.compare(password, hash);
};
