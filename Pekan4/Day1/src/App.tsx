import { Route, Routes, NavLink } from "react-router-dom";

import UserCard from "./component/UserCard";
import ProductList from "./component/ProductList";
import SimpleForm from "./component/SImpleForm";
import UserList from "./component/UserList";
import CheckProduct from "./component/CheckProduct";
import UserProfile from "./component/UserProfile";

import Home from "./pages/Home";
import About from "./pages/About";
import UserDetail from "./pages/UserDetail";
import TypedForm from "./component/TypeForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* NAVBAR */}
      <nav className="flex justify-center gap-4 mb-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded font-medium ${
              isActive ? "bg-blue-600 text-white" : "bg-white shadow"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded font-medium ${
              isActive ? "bg-blue-600 text-white" : "bg-white shadow"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/user/10"
          className={({ isActive }) =>
            `px-4 py-2 rounded font-medium ${
              isActive ? "bg-blue-600 text-white" : "bg-white shadow"
            }`
          }
        >
          User Detail
        </NavLink>
      </nav>
      {/* END NAVBAR */}

      {/* ROUTES */}
      <div className="max-w-3xl mx-auto mb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>

      {/* DEMO COMPONENTS */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <UserCard name="Rizki" age={19} email="rizki@example.com" isActive={true} />

        <ProductList
          products={[
            { id: 1, name: "Mouse Gaming", price: 150000 },
            { id: 2, name: "Keyboard RGB", price: 300000 },
          ]}
        />

        <SimpleForm />
        <UserList />
        <CheckProduct />
        <UserProfile />
        <TypedForm />
      </div>
    </div>
  );
}
