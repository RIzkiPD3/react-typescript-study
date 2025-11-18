import useCounter from "../hooks/useCounter";

export default function CounterExample() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold">useCounter Example</h2>

      <p className="text-2xl font-bold text-center">{count}</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded shadow"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded shadow"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
