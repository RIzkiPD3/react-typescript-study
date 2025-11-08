import { useState } from "react";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default function TodoLIst() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = () => {
        if (newTodo.trim() === "") return;

        const todoBaru: Todo = {
            id: Date.now(),
            text: newTodo.trim(),
            done: false
        };

        setTodos((prev) => [...prev, todoBaru]);
        setNewTodo("");
    }

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }
    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
            Daftar Aktivitas
          </h2>
    
          {/* Input + tombol tambah */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Tulis aktivitas baru..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Tambah
            </button>
          </div>
    
          {/* Daftar */}
          <ul className="space-y-2">
  {todos.map((todo) => (
    <li
    key={todo.id}
    className="flex justify-between items-center border p-2 rounded-md"
  >
    <div className="flex flex-col">
      <span
        className={`${
          todo.done ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>
      <span
        className={`text-xs px-2 py-1 rounded-full w-fit ${
          todo.done
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {todo.done ? "Selesai" : "Belum"}
      </span>
    </div>
  
    <div className="flex gap-2">
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`px-3 py-1 rounded text-white ${
          todo.done ? "bg-gray-400 hover:bg-gray-500" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {todo.done ? "Undo" : "Done"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Hapus
      </button>
    </div>
  </li>  
  ))}
</ul>
    
          {/* Jika kosong */}
          {todos.length === 0 && (
            <p className="text-gray-500 text-center mt-2">
              Belum ada aktivitas, bro 😴
            </p>
          )}
        </div>
      );
}