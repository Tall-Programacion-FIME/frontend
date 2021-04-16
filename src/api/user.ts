import axios from "axios";
import { RegisterModel, UserModel } from "../models/user";

const path = process.env.REACT_APP_PRO_MODE;

export async function getUsers(): Promise<UserModel[]> {
  let response = await axios.get<UserModel[]>(path + "user/");
  return response.data;
}

export async function getUser(_id: number): Promise<UserModel> {
  let response = await axios.get<UserModel>(path + "user/" + _id);
  return response.data;
}

export async function getMyInfo(token: string): Promise<UserModel> {
  let response = await axios.get<UserModel>(path + "user/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function postUser(data: RegisterModel): Promise<RegisterModel> {
  let response = await axios.post<RegisterModel>(path + "user/", data);
  return response.data;
}

export async function banUser(_id: number): Promise<UserModel> {
  let response = await axios.delete<UserModel>(path + "user/" + _id + "/ban");
  return response.data;
}
