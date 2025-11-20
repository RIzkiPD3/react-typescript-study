import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg text-center">
      <h1 className="text-3xl font-bold">Product Detail</h1>
      <p className="mt-3 text-gray-600">
        Menampilkan detail produk dengan ID:
      </p>
      <p className="text-2xl font-semibold text-blue-600 mt-1">
        {productId}
      </p>
    </div>
  );
}
