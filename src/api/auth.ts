import axios from 'axios';
import {LoginModel, RegisterModel} from "../models/user"
	
const path = process.env.REACT_APP_PRO_MODE; 


export async function getLogin(data: LoginModel): Promise<LoginModel[]> {
  let response = await axios.post<LoginModel[]>(path + "auth/token", data);
  return response.data
}

export async function postRegister(data: RegisterModel): Promise<RegisterModel[]> {
  let response = await axios.post<RegisterModel[]>(path + "user/", data);
  return response.data
}

