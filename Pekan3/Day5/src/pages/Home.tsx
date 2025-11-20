export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App 🏠</h1>
        <p className="text-gray-600 mb-6">Silakan coba fitur React Router:</p>
  
        <div className="flex gap-4">
          <a
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Go to Login
          </a>
          <a
            href="/products"
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            View Products
          </a>
        </div>
      </div>
    );
  }
  