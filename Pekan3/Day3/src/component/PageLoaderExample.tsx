import { Suspense, lazy, useState } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

export default function PageLoaderExample() {
  const [page, setPage] = useState<"home" | "about" | "contact">("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4 p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold">Lazy Loading Pages</h2>

      <div className="flex gap-3">
        <button
          onClick={() => setPage("home")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Home
        </button>
        <button
          onClick={() => setPage("about")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          About
        </button>
        <button
          onClick={() => setPage("contact")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Contact
        </button>
      </div>

      <Suspense fallback={<p className="text-center">Loading...</p>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
