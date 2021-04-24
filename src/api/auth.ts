import axios from "axios";
import { LoginModel, RegisterModel, TokenModel, UserModel } from "../models/user";
import { generalError, generalPass } from '../helpers/warnings/general'
import registerStore from '../store/User';
import authStore from '../store/Auth';

const path = process.env.REACT_APP_PRO_MODE;

// I can't make it work with the new form
export async function getLogin(data: LoginModel): Promise<TokenModel> {
  try {
    let response = await axios.post<TokenModel>(path + "auth/token", data);
    response.data.isAuthenticated = true;
		generalPass('Autenticación completa');
		authStore.setState(response.data);
    return response.data;
  } catch (error) {
		let response = error.response.data.detail;
		generalError(response);
		return {
			access_token: '',
			refresh_token: '',
			isAuthenticated: false
		};
  }
}

export async function refreshToken(token: string): Promise<string> {
  let response = await axios.post(path + "auth/refresh_token", token, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function postRegister(data: RegisterModel): Promise<UserModel | Error> {
	try {
  	let response = await axios.post<UserModel>(path + "user/", data);
		registerStore.setState(response.data);
		generalPass('Registro completo');
  	return response.data;
	} catch (error) {
		let response = error.response.data.detail;
		generalError(response);
		return new Error(error);
	}
}
