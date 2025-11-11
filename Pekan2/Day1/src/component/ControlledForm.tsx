import { useState } from "react";

export default function ControlledForm() {
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Hai, ${input}`);
        setInput("");
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded shadow-md w-72 mx-auto mt-10 flex flex-col gap-3"
      >
        <h2 className="text-xl font-bold text-indigo-600 text-center">Tugas 3: Controlled Form</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis sesuatu..."
          className="border p-2 rounded focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white rounded py-2 hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    )
}