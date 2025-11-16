import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function NotificationDisplay() {
  const context = useContext(NotificationContext);

  if (!context) return null;

  const { count } = context;

  return (
    <div className="p-4 rounded-lg border shadow bg-white">
      <h3 className="font-semibold text-lg">Notifikasi</h3>

      <p className="mt-2 text-gray-700">
        Total notifikasi: <b>{count}</b>
      </p>
    </div>
  );
}
