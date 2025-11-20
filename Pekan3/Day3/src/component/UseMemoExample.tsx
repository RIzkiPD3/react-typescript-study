import { useMemo, useState } from "react";
import { heavyCalculation } from "../utils/heavyCalc";

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const calculatedValue = useMemo(() => {
    return heavyCalculation(number);
  }, [number]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">useMemo Example</h2>

      <div>
        <label className="font-medium">Angka perhitungan berat:</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>

      <p className="font-medium">Hasil perhitungan: {calculatedValue}</p>

      <hr />

      <div>
        <label className="font-medium">Input lain (tidak terkait):</label>
        <input
          className="w-full border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <p>Text: {text}</p>
    </div>
  );
}
