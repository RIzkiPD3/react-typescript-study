import { useState, useEffect } from "react";

export default function DependencyCounter() {
  const [count, setCount] = useState(0);

  // Efek hanya jalan ketika count berubah
  useEffect(() => {
    console.log(`Count berubah jadi ${count}`);
  }, [count]); // 👈 Dependency array diisi dengan "count"

  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200 w-[350px]">
      <h2 className="text-xl font-semibold text-purple-600 mb-3">
        Dependency Counter 🎯
      </h2>
      <p className="text-gray-700 mb-3">
        Nilai count saat ini: <span className="font-bold">{count}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded transition"
      >
        Tambah
      </button>
    </div>
  );
}
