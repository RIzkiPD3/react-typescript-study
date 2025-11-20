import { useState } from "react";
import ChildNoMemo from "./ChildNoMemo";
import ChildWithMemo from "./ChildWithMemo";

export default function MemoExample() {
  const [parentCount, setParentCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">React.memo Example</h2>

      <p className="font-medium">Parent Count: {parentCount}</p>

      <div className="flex gap-3">
        <button
          onClick={() => setParentCount((n) => n + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tambah Parent
        </button>

        <button
          onClick={() => setOtherState((n) => n + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Update State Lain ({otherState})
        </button>
      </div>

      <hr />

      <ChildNoMemo count={parentCount} />
      <ChildWithMemo count={parentCount} />
    </div>
  );
}
