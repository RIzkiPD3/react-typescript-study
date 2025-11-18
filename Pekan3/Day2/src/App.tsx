import CounterExample from "./component/CounterExample"
import FetchExample from "./component/FetchExample"
import FormExample from "./component/FormExample"
import LocalStorageTheme from "./component/LocalStorageTheme"
import ToggleExample from "./component/ToggleExample"

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 space-y-10">
      {/* jawaban nomor 1 */}
      <ToggleExample />
      {/* jawaban nomor 2 */}
      <FetchExample />
      {/* jawaban nomor 3 */}
      <CounterExample />
      {/* jawaban nomor 4 */}
      <FormExample />
      {/* jawaban nomor 5 */}
      <LocalStorageTheme />
    </div>
  )
}

export default App
