import ThemeToggle from "./ThemeToggle";
import ThemeStatus from "./ThemeStatus";

export default function ThemeExample() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow border space-y-4">
      <h2 className="text-xl font-semibold">ThemeContext Example</h2>

      <ThemeToggle />
      <ThemeStatus />
    </div>
  );
}
