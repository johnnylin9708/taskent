import { create } from "zustand";

type FormCardModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useFormCardModal = create<FormCardModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
