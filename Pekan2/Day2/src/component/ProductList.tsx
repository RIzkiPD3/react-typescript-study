interface Product {
    id: number;
    name: string;
    price: number;
}

export default function ProductList() {
    const products: Product[] = [
        { id: 1, name: 'Laptop', price: 10000000 },
        { id: 2, name: 'SmartPhone', price: 2500000 },
        { id: 3, name: 'Tablet', price: 3000000 },
    ];

    return (
        <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold text-green-600 mb-3">Daftar Produk</h2>

      <div className="grid grid-cols-2 gap-4">
  {products.map((p) => (
    <div key={p.id} className="border p-3 rounded-lg shadow hover:shadow-lg">
      <h3 className="font-bold">{p.name}</h3>
      <p>Rp {p.price.toLocaleString("id-ID")}</p>
    </div>
  ))}
</div>

    </div>
    )
}