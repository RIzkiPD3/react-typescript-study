import { useState, useCallback } from "react";
import ChildNoMemoCallback from "./ChildNoMemoCallback";
import ChildMemoCallback from "./ChildMemoCallback";

export default function UseCallbackOptimization() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const normalFunction = () => {
    console.log("Normal function dipanggil");
  };

  const memoizedFunction = useCallback(() => {
    console.log("Memoized function dipanggil");
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">useCallback Optimization</h2>

      <div className="flex gap-3">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tambah Count ({count})
        </button>

        <button
          onClick={() => setOther((o) => o + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Update Other ({other})
        </button>
      </div>

      <hr />

      <p className="font-medium">Tanpa useCallback:</p>
      <ChildNoMemoCallback onClick={normalFunction} />

      <p className="font-medium mt-3">Dengan useCallback + memo:</p>
      <ChildMemoCallback onClick={memoizedFunction} />
    </div>
  );
}
