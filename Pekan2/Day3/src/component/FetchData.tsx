import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function FetchData() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect untuk fetch data saat pertama kali komponen dimuat
  useEffect(() => {
    console.log("📡 Mengambil data dari API...");

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Terjadi kesalahan:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200 w-[400px]">
      <h2 className="text-xl font-semibold text-teal-600 mb-4">
        Fetch Data API 🌐
      </h2>

      {loading ? (
        <p className="text-gray-500 italic">Loading data...</p>
      ) : (
        <ul className="text-left space-y-3">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border rounded-lg p-3 hover:bg-gray-50 transition"
            >
              <h3 className="font-bold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
