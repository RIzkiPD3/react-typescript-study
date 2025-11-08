import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    function increase() {
        setCount((prev) => prev + 1)
    }
    function decrease() {
        setCount((prev) => prev - 1)
    }
    function reset() {
        setCount(0)
    }

    return (
        <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Counter</h2>

<p className="text-4xl font-semibold text-blue-600 mb-6">{count}</p>

<div className="flex justify-center gap-4">
  <button
    onClick={decrease}
    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition"
  >
    -
  </button>

  <button
    onClick={reset}
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 active:scale-95 transition"
  >
    Reset
  </button>

  <button
    onClick={increase}
    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:scale-95 transition"
  >
    +
  </button>
</div>
        </div>
    )
}