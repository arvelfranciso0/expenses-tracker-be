import { Request, Response } from "express";
import {
  getUserByEmail,
  getUserByID,
  SaveUser,
  updateUser,
} from "../repository/User";
import { UserAttributes } from "../interface/User";
import { hashPassword } from "../utils/hashUtils";

export const getUserByIdService = async (req: Request, res: Response) => {
  const userId = req.session.userId;

  const user = (await getUserByID(String(userId))) as UserAttributes;

  return res.status(200).send(user);
};

export const updateUserInformation = async (req: Request, res: Response) => {
  const user = req.body as UserAttributes;

  const existingUser = await getUserByID(String(req.session.userId));

  if (existingUser) {
    user.password = await hashPassword(String(user.password));
    user.id = Number(req.session.userId);
    await updateUser(user);
    return res.status(200).json({ message: "User updated successfully" });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const user = req.body as UserAttributes;

  const existingUser = await getUserByEmail(user.email);

  if (existingUser) {
    return res.status(200).json({ message: "Email is already been used" });
  }
  await SaveUser(user);
  return res.status(200).json({ message: "Signup succesffully" });
};
