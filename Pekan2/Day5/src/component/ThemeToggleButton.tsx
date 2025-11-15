import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleButton() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { theme, toggleTheme } = context;

    return (
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg shadow bg-blue-500 text-white hover:bg-blue-600"
        >
          Ganti Tema ({theme})
        </button>
      );
    }
