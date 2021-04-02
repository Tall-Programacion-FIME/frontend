import axios from 'axios';
import {LoginModel, RegisterModel, TokenModel} from "../models/user"
	
const path = process.env.REACT_APP_PRO_MODE; 


export async function getLogin(data: LoginModel): Promise<TokenModel> {
	try {
  	const response = await axios.post<TokenModel>(path + "auth/token", data);
		console.log(response);
  	return response.data;
		
	} catch (error) {
		console.log("");
  	return {
			access_token: "",
			refresh_token: ""
		};
	}
}

export async function postRegister(data: RegisterModel): Promise<RegisterModel[]> {
  let response = await axios.post<RegisterModel[]>(path + "user/", data);
  return response.data
}

