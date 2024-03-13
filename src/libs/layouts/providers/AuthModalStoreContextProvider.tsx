"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import { type AuthModalStore, createAuthModal } from "@/stores/action";

export const AuthModalStoreContext =
  createContext<StoreApi<AuthModalStore> | null>(null);

export interface AuthModalStoreProviderProps {
  children: ReactNode;
}

export const AuthModalStoreContextProvider = ({
  children,
}: AuthModalStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AuthModalStore>>();
  if (!storeRef.current) {
    storeRef.current = createAuthModal();
  }

  return (
    <AuthModalStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthModalStoreContext.Provider>
  );
};

export const useAuthModalStore = <T,>(
  selector: (store: AuthModalStore) => T
): T => {
  const authModalStoreContext = useContext(AuthModalStoreContext);

  if (!authModalStoreContext) {
    throw new Error(
      `useAuthModalStore must be used within AuthModalStoreProvider`
    );
  }

  return useStore(authModalStoreContext, selector);
};
