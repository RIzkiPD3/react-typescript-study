import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeStatus() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme } = context;

  return (
    <div
      className={`p-4 rounded-lg shadow border mt-4 ${
        theme === "light"
          ? "bg-white text-gray-800"
          : "bg-gray-800 text-gray-100"
      }`}
    >
      <p className="font-semibold">Tema saat ini: {theme}</p>
    </div>
  );
}
