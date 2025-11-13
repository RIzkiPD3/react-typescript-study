import { useEffect, useState } from "react";

export default function CleanupEffect() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200 w-[350px]">
      <h2 className="text-xl font-semibold text-red-500 mb-3">
        Cleanup Effect 🧹
      </h2>

      <button
        onClick={() => setVisible(!visible)}
        className={`${
          visible
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        } text-white font-semibold px-4 py-2 rounded transition mb-3`}
      >
        {visible ? "Hapus Komponen" : "Tampilkan Lagi"}
      </button>

      {visible && <TimerComponent />}
    </div>
  );
}

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("⏱️ Timer dimulai");
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup dijalankan saat komponen dihapus (unmount)
    return () => {
      clearInterval(timer);
      console.log("🧹 Timer dibersihkan!");
    };
  }, []);

  return (
    <p className="text-gray-700">
      Waktu berjalan:{" "}
      <span className="font-semibold text-red-500">{seconds}</span> detik
    </p>
  );
}
