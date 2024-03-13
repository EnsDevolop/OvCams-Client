import { createStore } from "zustand/vanilla";

export type AuthModalState = {
  visible: boolean;
};

export type AuthModalActions = {
  openModal: () => void;
  closeModal: () => void;
};

export type AuthModalStore = AuthModalActions & AuthModalState;
export const defaultInitState: AuthModalState = { visible: false };

export const createAuthModal = (
  initState: AuthModalState = defaultInitState
) => {
  return createStore<AuthModalStore>()((set) => ({
    ...initState,
    closeModal: () => set(() => ({ visible: false })),
    openModal: () => set(() => ({ visible: true })),
  }));
};
