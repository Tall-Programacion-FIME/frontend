import create from "zustand";

import { BookModel } from "models/book";

type State = {
  books: BookModel[];
  areThereBooks: boolean;
  //setData: any
};

const useStore = create<State>((set, get) => ({
  books: [],
  areThereBooks: true,
}));

export default useStore;
