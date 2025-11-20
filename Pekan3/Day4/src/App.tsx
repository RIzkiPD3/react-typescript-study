import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

import Dashboard from "./pages/dashboard/Dashboard";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import DashboardSettings from "./pages/dashboard/DashboardSetting";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />

      <div className="p-6">
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Route parameter */}
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* Nested route */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* Wildcard */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
