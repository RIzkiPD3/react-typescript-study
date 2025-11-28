import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { fetchUsers } from "../features/users/usersSlice";
import type { User } from "../features/users/usersSlice";

export default function UsersList() {
    const users = useSelector((state: RootState) => state.users.list);
    const status = useSelector((state: RootState) => state.users.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") dispatch(fetchUsers());
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Pengguna</h2>
      {status === "loading" && <p>Loading...</p>}
      <ul className="space-y-2">
      {users.map((u: User) => (
  <li key={u.id}>{u.name} - {u.email}</li>))}
      </ul>
    </div>
  );
}
