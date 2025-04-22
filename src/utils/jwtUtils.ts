import jwt from "jsonwebtoken";
import { jwtEnv } from "./envValue";
import { UserAttributes } from "../interface/User";

export const generateAccessToken = (paylaod: object): string => {
  const expiresIn = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
  return jwt.sign(paylaod, String(jwtEnv), { expiresIn });
};
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, String(jwtEnv)) as UserAttributes;
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error };
  }
};
