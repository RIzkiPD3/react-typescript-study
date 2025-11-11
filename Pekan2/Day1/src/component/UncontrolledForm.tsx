import { useRef } from "react";

export default function UncontrolledForm() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Isi input adalah: ${inputRef.current?.value}`);
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded shadow-md w-72 mx-auto mt-10 flex flex-col gap-3"
        >
          <h2 className="text-xl font-bold text-pink-600 text-center">Tugas 4: Uncontrolled Form</h2>
          <input
            type="text"
            ref={inputRef}
            defaultValue="Halo Dunia!"
            className="border p-2 rounded focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white rounded py-2 hover:bg-pink-600"
          >
            Submit
          </button>
        </form>
      );
}