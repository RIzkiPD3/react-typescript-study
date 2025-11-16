import NotificationDisplay from "./NotificationDisplay";
import NotificationActions from "./NotificationActions";

export default function NotificationExample() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow border space-y-4">
      <h2 className="text-xl font-semibold">NotificationContext Example</h2>

      <NotificationDisplay />
      <NotificationActions />
    </div>
  );
}
