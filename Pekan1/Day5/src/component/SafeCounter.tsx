import { useState } from "react";

export default function SafeCounter() {
    const [count, setCount] = useState<number>(0);
    const increase = () => {
        setCount((prev) => prev + 1)
    }
    const decrease = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0))
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 space-y-6">
          <h1 className="text-3xl font-bold text-blue-600">Functional Counter</h1>
    
          <p className="text-4xl font-semibold text-gray-800">{count}</p>
    
          <div className="flex gap-4">
            <button
              onClick={decrease}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 active:scale-95 transition"
            >
              -
            </button>
            <button
              onClick={reset}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 active:scale-95 transition"
            >
              Reset
            </button>
            <button
              onClick={increase}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 active:scale-95 transition"
            >
              +
            </button>
          </div>
        </div>
      );
}
    