import {BookModel} from "./book";

export type UserModel = {
  name: string;
  email: string;
  id: number;
  is_active: boolean;
  is_admin: boolean;
  books_for_sale: BookModel[];
};

export type RegisterModel = {
  name: string;
  email: string;
  password: string;
};

export type LoginModel = {
  email: string;
  password: string;
};

export type TokenModel = {
  access_token: string;
  refresh_token: string;
  isAuthenticated: boolean;
};
