import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function NotificationActions() {
  const context = useContext(NotificationContext);

  if (!context) return null;

  const { addNotification, resetNotifications } = context;

  return (
    <div className="p-4 rounded-lg border bg-gray-50 shadow space-y-3">
      <button
        onClick={addNotification}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow"
      >
        Tambah Notifikasi
      </button>

      <button
        onClick={resetNotifications}
        className="px-4 py-2 bg-red-500 text-white rounded shadow"
      >
        Reset
      </button>
    </div>
  );
}
