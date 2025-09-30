import { where } from "sequelize";
import { UserAttributes } from "../interface/User";
import { User } from "../model/User";
import { hashPassword } from "../utils/hashUtils";

export const SaveUser = async (user: UserAttributes) => {
  user.password = await hashPassword(String(user.password));
  return await User.create(user);
};

export const getUserByEmail = async (
  email: string
): Promise<UserAttributes | null> => {
  const user = await User.findOne({
    where: { email },
  });

  return user?.get() as unknown as UserAttributes;
};

export const getUserByID = async (
  id: string
): Promise<UserAttributes | null> => {
  const user = await User.findOne({
    where: { id },
  });

  return user?.get() as unknown as UserAttributes;
};

export const updateUser = async (user: UserAttributes) => {
  const { email, name, id, address, phone_number } = user;

  await User.update({ email, name, address, phone_number }, { where: { id } });

  return await User.findByPk(id);
};

export const updateUserVerified = async (email: string) => {
  await User.update({ isVerified: true }, { where: { email: email } });
};
