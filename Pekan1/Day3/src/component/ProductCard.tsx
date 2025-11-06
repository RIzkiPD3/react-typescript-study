interface ProductCardProps {
    productName: string;
    price: number;
    stock: number;
    isAvailable: boolean;
}

export default function ProductCard({ productName, price, stock, isAvailable }: ProductCardProps) {
    return (
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 
        border border-gray-200 rounded-xl p-6 text-center space-y-2 
        w-[280px] mx-auto">
            <h3 className="text-2xl font-bold text-center">{productName}</h3>
            <p className="text-gray-800 font-semibold">Rp.{price}</p>
            <p className="text-gray-600 font-semibold">{stock}</p>
            <p className={`font-semibold px-3 py-1 inline-block rounded-full text-white ${
            isAvailable ? 'bg-green-500' : 'bg-red-500'
            }`}>{isAvailable ? "Available" : "Not Available"}</p>
        </div>
    )}