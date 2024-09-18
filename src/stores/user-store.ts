import { createStore } from "zustand";

export type UserState = {
  name: string;
  passwords: string[]
};

export type UserActions = {
  setName: (newName: string) => void;
  addPassword: (newPassword: string) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  name: "",
  passwords: []
};

export const createUserStore = (
    initState: UserState = defaultInitState
) => {
    return createStore<UserStore>()((set) => ({
        ...initState,
        setName: (newName) => set(() => ({name: newName})),
        addPassword: (newPassword) => set(state => ({passwords: [...state.passwords, newPassword]}))
    }))
}