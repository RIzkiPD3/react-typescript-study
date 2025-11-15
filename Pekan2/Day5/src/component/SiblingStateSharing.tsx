import { useState } from "react";

interface ChildProps {
  value: string;
  onChange: (val: string) => void;
}

function ChildA({ value, onChange }: ChildProps) {
  return (
    <div className="p-4 bg-purple-100 border rounded-lg shadow-sm mb-3">
      <p className="font-semibold mb-2">Child A</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-3 py-2 rounded-lg"
      />
    </div>
  );
}

function ChildB({ value, onChange }: ChildProps) {
  return (
    <div className="p-4 bg-yellow-100 border rounded-lg shadow-sm">
      <p className="font-semibold mb-2">Child B</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-3 py-2 rounded-lg"
      />
    </div>
  );
}

export default function SiblingStateSharing() {
  const [sharedValue, setSharedValue] = useState<string>("");

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Sibling State Sharing</h2>

      <ChildA value={sharedValue} onChange={setSharedValue} />
      <ChildB value={sharedValue} onChange={setSharedValue} />
    </div>
  );
}
