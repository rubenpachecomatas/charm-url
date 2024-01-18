"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/store/use-theme";

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useTheme((state) => state);

  return (
    <div
      className={cn(
        "bg-background text-foreground",
        theme === "dark" && "dark"
      )}
    >
      {children}
    </div>
  );
};
