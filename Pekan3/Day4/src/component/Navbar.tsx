import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="w-full bg-white shadow-sm py-4 mb-6 sticky top-0 z-50">
      <ul className="flex justify-center gap-8 text-lg">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        <li><NavLink to="/products/1" className={linkClass}>Produk 1</NavLink></li>
        <li><NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink></li>
      </ul>
    </nav>
  );
}
