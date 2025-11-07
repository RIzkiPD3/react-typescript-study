interface CardProps {
    title: string;
    content: string;
    buttonLabel: string;
}

export default function Card({ title, content, buttonLabel }: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 max-w-sm text-center hover:shadow-lg transition duration-300">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{content}</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 active:scale-95"
        >
          {buttonLabel}
        </button>
      </div>
    )
}