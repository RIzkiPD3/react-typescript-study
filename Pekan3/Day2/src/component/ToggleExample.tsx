import ToggleBox from "./ToggleBox";
import ToggleText from "./ToggleText";

export default function ToggleExample() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white space-y-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">useToggle Example</h2>

      <ToggleBox />
      <ToggleText />
    </div>
  );
}
