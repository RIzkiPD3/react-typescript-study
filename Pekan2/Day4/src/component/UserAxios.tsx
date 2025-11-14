import { useEffect, useState } from "react";
import axios from "axios";

interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function UserAxios() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get<UserProps>(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(response.data);
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <p className="text-blue-500">Loading data user...</p>;
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-sm mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">User Info</h2>

      <p className="text-gray-700">
        <span className="font-semibold">Nama:</span> {user?.name}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Email:</span> {user?.email}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Telepon:</span> {user?.phone}
      </p>
    </div>
  );
}
