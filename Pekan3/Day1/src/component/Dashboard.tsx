import useUser from "../hooks/useUser";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { user } = useUser();
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) return null;

  const { theme, toggleTheme } = themeCtx;

  return (
    <div
      className={`p-6 rounded-lg shadow border ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-800 text-gray-100"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

      <p><b>Nama:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <p className="mt-2">
        <b>Status:</b>{" "}
        {user.isLoggedIn ? (
          <span className="text-green-500">Logged In</span>
        ) : (
          <span className="text-red-500">Guest</span>
        )}
      </p>

      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
      >
        Ganti Tema ({theme})
      </button>
    </div>
  );
}
