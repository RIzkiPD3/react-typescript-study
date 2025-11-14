import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function LoadingState() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      setPosts(data.slice(0, 5));
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Loading Posts...</h2>

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Daftar Post</h2>

      {posts.map((post) => (
        <div key={post.id} className="mb-4">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
