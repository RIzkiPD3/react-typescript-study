import MemoExample from "./component/MemoExample"
import PageLoaderExample from "./component/PageLoaderExample"
import ProfilingExample from "./component/ProfilingExample"
import UseCallbackOptimization from "./component/UseCallbackOptimization"
import UseMemoExample from "./component/UseMemoExample"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 space-y-10">
      {/* jawaban no 1 */}
      <MemoExample />
      {/* jawaban no 2 */}
      <UseMemoExample />
      {/* jawaban no 3 */}
      <UseCallbackOptimization />
      {/* jawaban no 4 */}
      <PageLoaderExample />
      {/* jawaban no 5 */}
      <ProfilingExample />
    </div>
  )
}

export default App
