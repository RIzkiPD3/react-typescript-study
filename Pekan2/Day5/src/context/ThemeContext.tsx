import { createContext, useState } from "react";

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// INI HARUS ADA
export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
