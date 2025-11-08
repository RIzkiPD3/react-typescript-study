import ContactForm from "./component/ContactForm"
import Counter from "./component/Counter"
import ProfileUpdater from "./component/ProfileUpdater"
import SafeCounter from "./component/SafeCounter"
import TodoLIst from "./component/TodoList"

function App() {

  return (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10 space-y-5">
          <div className="grid grid-cols-4 gap-5">
      {/* jawaban nomor 1 */}
      <Counter />
      {/* jawaban nomor 2 */}
      <ProfileUpdater />
      {/* jawaban nomor 3 */}
      <ContactForm />
      {/* jawaban nomor 4 */}
      <TodoLIst />
      {/* jawaban nomor 5 */}
      <SafeCounter />
      </div>
    </div>
  )
}

export default App
