import { useState } from "react";

export default function LoginToggle() {
  // ✅ State untuk menyimpan status login
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h2 className="text-xl font-bold text-blue-600">Tugas 2: Toggle Login</h2>

      {/* Pesan akan berubah tergantung kondisi */}
      <p className="text-gray-700">
        {isLoggedIn ? "Kamu sudah login 😎" : "Kamu belum login 😅"}
      </p>

      {/* Tombol untuk ubah state */}
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className={`px-5 py-2 rounded-lg text-white font-semibold transition 
        ${isLoggedIn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
