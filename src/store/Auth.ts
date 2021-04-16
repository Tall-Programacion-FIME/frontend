import create from "zustand";
import { persist } from "zustand/middleware";

type State = {
  access_token: string;
  refresh_token: string;
  isAuthenticated: boolean;
};

const useStore = create<State>(
  persist(
    (set, get) => ({
      access_token: "",
      refresh_token: "",
      isAuthenticated: false,
    }),
    {
      name: "auth",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
