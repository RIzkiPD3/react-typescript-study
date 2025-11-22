import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Nama disimpan: ${name}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white shadow-sm p-4 rounded-lg"
    >
      <label className="font-semibold">Masukkan Nama:</label>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="border rounded-md p-2 w-full mt-2 mb-4"
        placeholder="Ketik sesuatu..."
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Simpan
      </button>
    </form>
  );
}
