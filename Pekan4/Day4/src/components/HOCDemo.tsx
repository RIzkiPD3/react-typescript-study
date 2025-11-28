import { useState } from "react";
import LoggedCard from "./LoggedCard";

export default function HOCDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow text-center space-y-4">
      <h2 className="text-xl font-semibold">HOC Demo</h2>

      <button
        onClick={() => setShow((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {show ? "Hide" : "Show"} Logged Card
      </button>

      {show && (
        <LoggedCard
          title="HOC Example"
          content="Komponen ini mencatat log saat mount dan unmount."
        />
      )}
    </div>
  );
}
