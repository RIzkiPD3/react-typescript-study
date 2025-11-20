export default function Dashboard() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Dashboard 🔐</h1>
        <p className="text-gray-600 mb-6">Kamu berhasil login!</p>
  
        <a
          href="/products"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Lihat Produk
        </a>
      </div>
    );
  }
  