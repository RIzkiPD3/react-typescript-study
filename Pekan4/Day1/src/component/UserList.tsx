import { useFetch } from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const { data, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-sm p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-3">Daftar User</h2>
      <ul className="space-y-2">
        {data?.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
