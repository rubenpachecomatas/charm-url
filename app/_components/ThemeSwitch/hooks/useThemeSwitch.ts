import { useTheme } from "@/store/use-theme";

const useThemeSwitch = () => {
  const { theme, onUpdate } = useTheme((state) => state);

  const onThemeChange = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";

    onUpdate(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return {
    theme,
    onThemeChange,
  };
};

export default useThemeSwitch;
