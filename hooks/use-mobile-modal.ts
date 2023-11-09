import { MobileType } from "@/services/api/mobile";
import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: MobileType | undefined;
  setData: (data: MobileType) => void;
  resetData: () => void;
}

const useMobileModal = create<ModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: undefined,
  setData: (data) => set({ data: data }),
  resetData: () => set({ data: undefined }),
}));

export default useMobileModal;
