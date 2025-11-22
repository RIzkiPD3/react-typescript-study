import { isProduct } from "../utils/typeGuard";

export default function CheckProduct() {
  const data: unknown = { id: 1, name: "Laptop", price: 5000000 };

  if (isProduct(data)) {
    return (
      <p className="text-center mt-4">
        Produk valid: {data.name} - {data.price}
      </p>
    );
  }

  return <p className="text-center text-red-600">Data bukan product!</p>;
}
