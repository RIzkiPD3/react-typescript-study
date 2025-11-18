import useFetch from "../hooks/useFetch";

interface Post {
  id: number;
  title: string;
}

export default function FetchExample() {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow space-y-3">
      <h2 className="text-xl font-semibold mb-3">useFetch Example</h2>

      {loading && <p className="text-blue-500">Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <ul className="space-y-2">
          {data.map((post) => (
            <li
              key={post.id}
              className="p-3 border rounded bg-gray-50 hover:bg-gray-100 transition"
            >
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
