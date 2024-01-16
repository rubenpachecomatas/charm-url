import { create } from "zustand";

interface UrlAlertStore {
  url: string | null;
  onUpdate: (url: string) => void;
}

export const useUrlAlert = create<UrlAlertStore>((set) => ({
  url: null,
  onUpdate: (url) => set(() => ({ url: url })),
}));
