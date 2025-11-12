import { Greeting } from "./component/Greeting"
import LoginToggle from "./component/LoginToggle"
import Mailbox from "./component/Mailbox"
import ProductList from "./component/ProductList"
import StudentList from "./component/StudentList"

function App() {

  return (
    <div className="flex flex-col items-center gap-3 mt-10" >
      {/* jawaban no 1 */}
     <Greeting isLoggedIn={true} />
     <Greeting isLoggedIn={false} />
     {/* jawaban no 2 */}
     <LoginToggle />
     {/* jawaban no 3 */}
     <Mailbox unreadMessages={[ "Halo", "Selamat Pagi", "Selamat Siang", "Selamat Malam"]} />
     <Mailbox unreadMessages={[]} />
     {/* jawaban no 4 */}
     <ProductList />
     {/* jawaban no 5 */}
     <StudentList students={[{ id: 1, name: "Rizki" }, { id: 2, name: "Andi" }]} />
     <StudentList students={[]} />    </div>
  )
}

export default App
