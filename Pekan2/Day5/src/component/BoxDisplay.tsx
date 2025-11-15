import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function BoxDisplay() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { theme } = context;

    return (
        <div
          className={`p-6 mt-4 rounded-lg shadow ${
            theme === "light" ? "bg-gray-200" : "bg-gray-700"
          }`}
        >
          <p className={theme === "light" ? "text-gray-900" : "text-gray-100"}>
            Kotak ini mengikuti tema: {theme}
          </p>
        </div>
      );
    }