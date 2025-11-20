import { Outlet, NavLink } from "react-router-dom";

export default function Dashboard() {

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg text-center">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="flex justify-center gap-8 mb-6">
        <NavLink to="profile" className={linkClass}>Profile</NavLink>
        <NavLink to="settings" className={linkClass}>Settings</NavLink>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
