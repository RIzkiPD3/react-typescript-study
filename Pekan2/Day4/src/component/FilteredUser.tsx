import { useEffect, useState } from "react";

interface UserApi {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

interface UserProcessed {
  id: number;
  name: string;
  email: string;
  city: string;
}

export default function FilteredUsers() {
  const [users, setUsers] = useState<UserProcessed[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: UserApi[] = await res.json();

      const filtered: UserProcessed[] = data
        .map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          city: u.address.city,
        }))
        .filter((u) => u.city === "Lebsackbury"); // kota contoh

      setUsers(filtered);
    };

    loadUsers();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Filtered Users</h2>

      {users.length === 0 && (
        <p className="text-gray-500">Tidak ada user yang cocok.</p>
      )}

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-lg bg-gray-50 shadow-sm"
          >
            <p>
              <span className="font-semibold">Nama:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">City:</span> {user.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
