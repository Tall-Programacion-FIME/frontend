import { getLogin } from "../api/auth";

import {LoginModel} from '../models/user';

const getToken = async (data: LoginModel) => {
  const response = await getLogin(data);
  console.log(response);
}

export default getToken
