import CleanupEffect from "./component/CleanupEffect";
import DependencyCounter from "./component/DependencyCounter";
import FetchData from "./component/FetchData";
import MultiEffect from "./component/MultiEffect";
import RenderCounter from "./component/RenderCounter";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 space-y-10">
      {/* jawaban nomor 1 */}
      <RenderCounter />
      {/* jawaban nomor 2 */}
      <DependencyCounter />
      {/* jawaban nomor 3 */}
      <CleanupEffect />
      {/* jawaban nomor 4 */}
      <MultiEffect />
      {/* jawaban nomor 5 */}
      <FetchData />
    </div>
  );
}
