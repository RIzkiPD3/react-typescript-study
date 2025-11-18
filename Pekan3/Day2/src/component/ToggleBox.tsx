import useToggle from "../hooks/useToggle";

export default function ToggleBox() {
  const { value, toggle } = useToggle(false);

  return (
    <div className="p-4 border rounded-lg shadow bg-white space-y-3">
      <h3 className="font-semibold text-lg">ToggleBox</h3>

      <p>Status: {value ? "ON" : "OFF"}</p>

      <button
        onClick={toggle}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>
    </div>
  );
}
