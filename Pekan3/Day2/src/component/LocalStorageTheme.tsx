import useLocalStorage from "../hooks/useLocalStorage";

export default function LocalStorageTheme() {
    const { value: theme, setValue: setTheme } = useLocalStorage("theme", "light")

    return (
        <div
          className={`max-w-md mx-auto p-6 rounded-lg shadow border space-y-4 ${
            theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-100"
          }`}
        >
          <h2 className="text-xl font-semibold">useLocalStorage Theme Example</h2>
    
          <p>Current Theme: <b>{theme}</b></p>
    
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow"
          >
            Toggle Theme
          </button>
        </div>
      );
    }