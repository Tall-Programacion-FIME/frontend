import create from "zustand";

import { BookModel } from "models/book";

type State = {
  books: BookModel[];
  //setData: any
};

const useStore = create<State>((set, get) => ({
  books: [],
}));

export default useStore;
