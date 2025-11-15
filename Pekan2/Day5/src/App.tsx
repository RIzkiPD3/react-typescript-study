import PropDrillingExample from "./component/PropsDrillingExample"
import ReducerCounter from "./component/ReducerCounter"
import SiblingStateSharing from "./component/SiblingStateSharing"
import TemperatureConverter from "./component/TemperatureConverter"
import ThemeExample from "./component/ThemeExample"
import ThemeProvider from "./context/ThemeContext"


function App() {

  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 space-y-10">
      {/* jawaban no 1 */}
      <TemperatureConverter />
      {/* jawaban no 2 */}
      <PropDrillingExample />
      {/* jawaban no 3 */}
      <SiblingStateSharing />
      {/* jawaban no 4 */}
      <ReducerCounter />
      {/* jawaban no 5 */}
      <ThemeExample />
    </div>
    </ThemeProvider>
  )
}

export default App
