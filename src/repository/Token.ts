import { TokenAttributes } from "../interface/Token";
import { Token } from "../model/Token";

export const SaveToken = async (token: TokenAttributes) => {
  return await Token.create(token);
};

export const checkToken = async (
  token: string,
  email: string
): Promise<boolean> => {
  const tokendata = await Token.findOne({
    where: { token, email },
  });

  return !!tokendata;
};

export const deleteToken = async (token: string, email: string) => {
  const tokendata = await Token.findOne({
    where: { token, email },
  });

  if (tokendata) {
    await tokendata.destroy();
  }
};
