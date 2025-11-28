import ColoredTracker from "./components/ColoredTracker";
import HOCDemo from "./components/HOCDemo";
import ModalDemo from "./components/ModalDemo";
import RefDemo from "./components/RefDemo";
import ShowMousePosition from "./components/ShowMousePosition";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <RefDemo />
      <ModalDemo />
      <HOCDemo />
      <ShowMousePosition />
      <ColoredTracker />
    </div>
  );
}
