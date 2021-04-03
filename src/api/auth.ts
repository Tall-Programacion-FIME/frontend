import axios from 'axios';
import {LoginModel, RegisterModel, TokenModel} from "../models/user"
	
const path = process.env.REACT_APP_PRO_MODE; 


export async function getLogin(data: LoginModel): Promise<TokenModel> {
	try {
  	let response = await axios.post<TokenModel>(path + "auth/token", data);
		response.data.isAuthenticated = true;
  	return response.data;
		
	} catch (error) {
  	return {
			access_token: "",
			refresh_token: "",
			isAuthenticated: false
		};
	}
}

export async function refreshToken(token: string): Promise<string>  {
  let response = await axios.post(path + "auth/refresh_token", token, {headers: {'Authorization': `Bearer ${token}`}});
  return response.data
}

export async function postRegister(data: RegisterModel): Promise<RegisterModel[]> {
  let response = await axios.post<RegisterModel[]>(path + "user/", data);
  return response.data
}

