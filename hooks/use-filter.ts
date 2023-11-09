import { create } from "zustand";

interface FilterStore {
  model: string | undefined;
  setModel: (model: string) => void;
  storage: string | undefined;
  setStorage: (storage: string) => void;
}

const useFilter = create<FilterStore>((set) => ({
  model: undefined,
  setModel: (model) => set({ model: model }),
  storage: undefined,
  setStorage: (storage) => set({ storage: storage }),
}));

export default useFilter;
