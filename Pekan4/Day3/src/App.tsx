// src/App.tsx
import Counter from "./components/Counter";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <div className="p-10">
      <Counter />
      <UsersList />
    </div>
  );
}
