import { getLogin } from "../api/auth";
import { LoginModel } from "../models/user";

const getToken = async (data: LoginModel) => {
  return await getLogin(data);
};

export default getToken;
