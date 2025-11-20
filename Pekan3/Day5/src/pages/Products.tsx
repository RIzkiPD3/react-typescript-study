import { useSearchParams } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Mouse", category: "electronics" },
  { id: 3, name: "T-Shirt", category: "apparel" },
  { id: 4, name: "Jeans", category: "apparel" },
];

export default function Products() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "all";

  const filtered =
    category === "all"
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">🛒 Products</h1>

      {/* Filter */}
      <div className="flex justify-center mb-8">
        <select
          className="px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={category}
          onChange={(e) => setParams({ category: e.target.value })}
        >
          <option value="all">Semua</option>
          <option value="electronics">Elektronik</option>
          <option value="apparel">Pakaian</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer border border-transparent hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-500 flex gap-2 items-center">
              {p.category === "electronics" ? (
                <span>⚡ Electronics</span>
              ) : (
                <span>👕 Apparel</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
