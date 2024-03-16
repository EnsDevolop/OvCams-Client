"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import {
  type ContinentStore,
  createContinentAndCountry,
} from "@/stores/continent";

export const ContinentStoreContext =
  createContext<StoreApi<ContinentStore> | null>(null);

export interface ContinentStoreProviderProps {
  children: ReactNode;
}

export const ContinentStoreContextProvider = ({
  children,
}: ContinentStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ContinentStore>>();
  if (!storeRef.current) {
    storeRef.current = createContinentAndCountry();
  }

  return (
    <ContinentStoreContext.Provider value={storeRef.current}>
      {children}
    </ContinentStoreContext.Provider>
  );
};

export const useContinentStore = <T,>(
  selector: (store: ContinentStore) => T
): T => {
  const continentStoreContext = useContext(ContinentStoreContext);

  if (!continentStoreContext) {
    throw new Error(
      `useContinentStore must be used within ContinentStoreProvider`
    );
  }

  return useStore(continentStoreContext, selector);
};
