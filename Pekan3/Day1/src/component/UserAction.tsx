import { useState } from "react";
import useUser from "../hooks/useUser";

export default function UserActions() {
  const { user, login, logout, updateProfile } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="p-4 border rounded-lg bg-gray-50 shadow space-y-3">
      <h3 className="font-semibold">Actions</h3>

      <input
        className="w-full border p-2 rounded"
        value={name}
        placeholder="Nama"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex gap-2">
        {!user.isLoggedIn && (
          <button
            onClick={() => login(name, email)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        )}

        {user.isLoggedIn && (
          <>
            <button
              onClick={() => updateProfile(name, email)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Update
            </button>

            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
