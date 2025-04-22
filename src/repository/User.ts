import { where } from "sequelize";
import { UserAttributes } from "../interface/User";
import { User } from "../model/User";

export const SaveUser = async (user: UserAttributes) => {
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
  const { email, password, name, id } = user;
  return await User.update(
    { email, password, name },
    {
      where: {
        id,
      },
    }
  );
};
