import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
