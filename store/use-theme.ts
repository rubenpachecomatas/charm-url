import { ThemesEnumeration } from "@/enumerations/ThemesEnumeration";
import { create } from "zustand";

interface ThemeStore {
  theme: string;
  onUpdate: (theme: string) => void;
}

export const useTheme = create<ThemeStore>((set) => ({
  theme: localStorage.getItem("theme") || "light",
  onUpdate: (theme) => set(() => ({ theme })),
}));
