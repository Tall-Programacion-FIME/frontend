import create from "zustand";
import { UserModel } from "../models/user";

const useStore = create<UserModel>((set, get) => ({
  name: "",
  email: "",
  id: 0,
  is_active: false,
  is_admin: false,
  books_for_sale: [],
}));

export default useStore;
