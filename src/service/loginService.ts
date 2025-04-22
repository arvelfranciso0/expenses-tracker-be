import { Request, Response } from "express";
import { LoginRequestInterface } from "../interface/request/loginRequestInterface";
import { getUserByEmail } from "../repository/User";
import { UserAttributes } from "../interface/User";
import { comparePassword } from "../utils/hashUtils";
import { generateAccessToken } from "../utils/jwtUtils";

export const loginService = async (req: Request, res: Response) => {
  const { email, password } = req.body as LoginRequestInterface;

  const user = (await getUserByEmail(email)) as UserAttributes;

  // return res.status(200).send(user);
  if (!user) {
    return res.status(404).json({ message: "User email not found" });
  }
  const isMatch = await comparePassword(password, String(user.password));
  if (!isMatch) {
    return res.status(404).json({ message: "Password not match." });
  }
  const token = generateAccessToken(user);
  console.log("User login successfully", user);
  return res.status(200).send({ token });
};
