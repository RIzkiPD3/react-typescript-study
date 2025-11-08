import { useState } from "react";

export default function ProfileUpdater() {
  const [name, setName] = useState<string>("Rizki");
  const [age, setAge] = useState<string>("19");

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 🔹 1. Jika kosong, langsung set kosong
    if (value === "") {
      setAge("");
      return;
    }

    // 🔹 2. Jika user lagi ngetik e (notasi ilmiah), izinkan
    if (/^[-+]?\d*\.?\d*e?[-+]?\d*$/i.test(value)) {
      setAge(value);
      return;
    }

    // 🔹 3. Konversi ke number
    const num = Number(value);

    // 🔹 4. Cegah Infinity (batasan maks)
    if (!isFinite(num)) {
      // kalau udah kelewat batas, ubah ke bentuk e langsung
      setAge("1e+308"); // batas maksimum sebelum Infinity
      return;
    }

    // 🔹 5. Ubah ke notasi e jika terlalu besar atau kecil
    if (Math.abs(num) >= 1_000_000 || Math.abs(num) < 0.0001) {
      setAge(num.toExponential(2)); // jadi e misal: 1.23e+6
    } else {
      setAge(value);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 mt-10 text-center space-y-4">
      <h2 className="text-xl font-semibold text-blue-600">Edit Profil</h2>

      {/* Input Nama */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama kamu..."
        className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Input Umur */}
      <input
        type="text"
        value={age}
        onChange={handleAgeChange}
        placeholder="Masukkan umur kamu..."
        className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Hasil */}
      <div className="text-gray-700 space-y-1">
        <p>
          Nama: <span className="font-bold">{name || "-"}</span>
        </p>
        <p>
          Umur: <span className="font-bold">{age || "-"}</span>
        </p>
      </div>

      {/* Tombol Reset */}
      <button
        onClick={() => {
          setName("Rizki");
          setAge("19");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-95 transition"
      >
        Reset Profil
      </button>
    </div>
  );
}
