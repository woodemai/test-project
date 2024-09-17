"use client";

import { createUserStore, UserStore } from "@/stores/user-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi | undefined>(
  undefined,
);

export interface UserStoreProviderProps {
  children: ReactNode;
}

export const UserStoreProvider = ({ children }: UserStoreProviderProps) => {
  const storeRef = useRef<UserStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createUserStore();
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = <T,>(selector: (store: UserStore) => T,): T => {
    const userStoreContext = useContext(UserStoreContext)

    if(!userStoreContext) {
        throw new Error('useUserStore must be used within UserStoreProvider')
    }
    return useStore(userStoreContext, selector)
}
