import useToggle from "../hooks/useToggle";

export default function ToggleText() {
  const { value, toggle } = useToggle(true);

  return (
    <div className="p-4 border rounded-lg shadow bg-white space-y-3">
      <h3 className="font-semibold text-lg">ToggleText</h3>

      <p className="text-gray-700">
        {value ? "Teks ini terlihat" : "Teks disembunyikan"}
      </p>

      <button
        onClick={toggle}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Show / Hide
      </button>
    </div>
  );
}
