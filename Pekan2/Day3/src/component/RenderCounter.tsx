import { useEffect, useState } from "react";

export default function RenderCounter() {
  const [count, setCount] = useState<number>(0);

  // useEffect tanpa dependency array → jalan setiap render
  useEffect(() => {
    console.log("Komponen di-render ulang!");
  });

  // useEffect dengan [] → jalan cuma sekali waktu awal render
  useEffect(() => {
    console.log("Komponen pertama kali muncul! (Mounting)");
  }, []);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-80 text-center border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-600 mb-3">
        Render Counter
      </h2>

      <p className="text-gray-700 mb-4">
        Tombol ini sudah diklik{" "}
        <span className="font-bold text-gray-900">{count}</span> kali.
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
      >
        Klik Aku!
      </button>
    </div>
  );
}
