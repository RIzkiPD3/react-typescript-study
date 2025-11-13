import { useEffect, useState } from "react";

export default function MultiEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Effect 1: Jalan tiap kali count berubah
  useEffect(() => {
    console.log(`🧮 Count berubah jadi: ${count}`);
  }, [count]);

  // Effect 2: Jalan tiap kali text berubah
  useEffect(() => {
    console.log(`✍️ Input berubah jadi: ${text}`);
  }, [text]);

  // Effect 3: Jalan sekali aja saat pertama kali load
  useEffect(() => {
    console.log("🚀 Komponen dimuat pertama kali");
  }, []);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200 w-[350px]">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        Multiple useEffect ⚡
      </h2>

      <p className="text-gray-700 mb-3">
        Nilai count: <span className="font-bold">{count}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded transition mb-5"
      >
        Tambah
      </button>

      <div>
        <input
          type="text"
          placeholder="Tulis sesuatu..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
      </div>
    </div>
  );
}
