import ThemeToggleButton from "./ThemeToggleButton";
import TextCard from "./TextCard";
import BoxDisplay from "./BoxDisplay";

export default function ThemeExample() {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto border border-gray-200 text-center">
      <h2 className="text-xl font-semibold mb-4">Context API Theme Example</h2>

      <ThemeToggleButton />
      <TextCard />
      <BoxDisplay />
    </div>
  );
}
