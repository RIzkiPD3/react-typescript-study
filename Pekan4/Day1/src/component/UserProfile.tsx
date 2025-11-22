import { useUser } from "../context/UserContext";

export default function UserProfile() {
  const { user, setUser } = useUser();

  return (
    <div className="p-4 bg-white shadow rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-3">User Profile (Context)</h2>

      {user ? (
        <>
          <p className="font-semibold">{user.name}</p>
          <p className="text-gray-600">Age: {user.age}</p>

          <button
            onClick={() => setUser(null)}
            className="mt-3 px-3 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => setUser({ name: "Rizki", age: 19 })}
          className="px-3 py-2 bg-blue-600 text-white rounded"
        >
          Login as Rizki
        </button>
      )}
    </div>
  );
}
