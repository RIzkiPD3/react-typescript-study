import { useState } from "react";
import SlowComponent from "./SlowComponent";
import FastComponent from "./FastComponent";

export default function ProfilingExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">Performance Profiling Example</h2>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Trigger Re-render ({count})
      </button>

      <FastComponent />
      <SlowComponent />
    </div>
  );
}
