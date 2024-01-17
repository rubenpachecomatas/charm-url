import { create } from "zustand";

interface UrlAlertStore {
  error: boolean;
  url: string;
  onUpdate: ({ url, error }: { url: string; error: boolean }) => void;
}

export const useUrlAlert = create<UrlAlertStore>((set) => ({
  url: "",
  error: false,
  onUpdate: ({ url, error }) => set(() => ({ url, error })),
}));
