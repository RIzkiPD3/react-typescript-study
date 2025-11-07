interface ResponsiveCardProps {
    title: string;
    description: string;
    image: string;
}

export default function ResponsiveCard({
    title,
    description,
    image,
  }: ResponsiveCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden max-w-3xl w-full flex flex-col md:flex-row md:items-center">
        {/* Gambar */}
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 h-48 md:h-64 object-cover"
        />
  
        {/* Konten */}
        <div className="p-6 md:p-8 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 w-fit mx-auto md:mx-0">
            Selengkapnya
          </button>
        </div>
      </div>
    );
  }
  