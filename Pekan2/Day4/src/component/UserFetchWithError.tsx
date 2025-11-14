import { useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
}

export default function UserFetchWithError() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.fsdfcom/users/1");

        if (!res.ok) {
          throw new Error("Gagal mengambil data!");
        }

        const json: UserData = await res.json();
        setUser(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return <p className="text-blue-500 text-center">Sedang memuat data...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-sm mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Data User</h2>

      <p className="text-gray-700">
        <span className="font-semibold">Nama:</span> {user?.name}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Email:</span> {user?.email}
      </p>
    </div>
  );
}
