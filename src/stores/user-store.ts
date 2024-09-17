import { createStore } from "zustand";

export type UserState = {
  name: string;
};

export type UserActions = {
  setName: (newName: string) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  name: "",
};

export const createUserStore = (
    initState: UserState = defaultInitState
) => {
    return createStore<UserStore>()((set) => ({
        ...initState,
        setName: (newName) => set(() => ({name: newName}))
    }))
}