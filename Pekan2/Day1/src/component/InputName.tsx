import { useState } from "react";

export default function InputName() {
    const [name, setName] = useState<string>("");

    return (
        <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold text-green-600">Tugas 2: onChange Event</h2>
      <input
        type="text"
        placeholder="Ketik namamu..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-60 focus:ring-2 focus:ring-green-400 mt-3"
      />
      <p className="mt-2 text-gray-700 text-sm">
        Kamu mengetik: <span className="font-semibold">{name}</span>
      </p>
    </div>
    )
}