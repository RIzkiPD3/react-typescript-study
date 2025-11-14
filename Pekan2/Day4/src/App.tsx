import FetchApi from "./component/FetchApi.tsx"
import FilteredUsers from "./component/FilteredUser.tsx"
import LoadingState from "./component/LoadingState.tsx"
import UserAxios from "./component/UserAxios.tsx"
import UserFetchWithError from "./component/UserFetchWithError.tsx"
function App() {

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 space-y-10">
      {/* jawaban no 1 */}
      <FetchApi />
      {/* jawaban no 2 */}
      <UserAxios />
      {/* jawaban no 3 */}
      <UserFetchWithError />
      {/* jawaban no 4 */}
      <LoadingState />
      {/* jawaban no 5 */}
      <FilteredUsers />
    </div>
  )
}

export default App
