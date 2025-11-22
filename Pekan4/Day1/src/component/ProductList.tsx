interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface ProductListProps {
    products: Product[];
  }
  
  export default function ProductList({ products }: ProductListProps) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-xl font-bold mb-3">Daftar Produk</h2>
        <ul className="space-y-2">
          {products.map((product) => (
            <li
              key={product.id}
              className="border p-3 rounded-md hover:bg-gray-50 transition"
            >
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-600">Rp {product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  