import UserProvider from "./context/UserContext";
import UserExample from "./component/UserExample";
import ThemeProvider from "./context/ThemeContext";
import ThemeExample from "./component/ThemeExample";
import MultipleContextExample from "./component/MultipleContextExample";
import NotificationProvider from "./context/NotificationContext";
import NotificationExample from "./component/NotificationExample";

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationProvider>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 space-y-10">
      {/* jawaban no 1 */}
        <UserExample />
        {/* jawaban no 2 */}
        <ThemeExample />
        {/* jawaban no 3 */}
        <MultipleContextExample />
        {/* jawaban no 5 */}
        <NotificationExample />
      </div>
      </NotificationProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
