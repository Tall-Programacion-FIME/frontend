import create from "zustand";
import { State } from "zustand";
import { UserModel } from "../models/user";
import { BookModel } from "../models/book";

interface UserStore extends UserModel, State {
  updateBooks: (newBooks: BookModel[]) => void;
}

const useStore = create<UserStore>((set, get) => ({
  name: "",
  email: "",
  id: 0,
  is_active: false,
  is_admin: false,
  books_for_sale: [],
  updateBooks: (newBooks: BookModel[]) => set({ books_for_sale: newBooks }),
}));

export default useStore;
