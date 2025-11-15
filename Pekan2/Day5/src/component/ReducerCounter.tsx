import { useReducer } from "react";

interface CounterState {
  count: number;
}

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-sm mx-auto border border-gray-200 text-center">
      <h2 className="text-xl font-semibold mb-4">Counter (useReducer)</h2>

      <p className="text-3xl font-bold mb-6">{state.count}</p>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          + Tambah
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          - Kurang
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
