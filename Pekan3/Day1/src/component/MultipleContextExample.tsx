import UserActions from "./UserAction";
import Dashboard from "./Dashboard";

export default function MultipleContextExample() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 border rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold">Multiple Context Example</h2>

      <UserActions />
      <Dashboard />
    </div>
  );
}
