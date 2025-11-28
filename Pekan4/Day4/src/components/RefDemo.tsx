import { useRef } from "react";

export default function RefDemo() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleChangeColor = () => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = "#4ade80"; // green-400
    }
  };

  const handleScroll = () => {
    scrollRef.current?.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white border rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">useRef DOM Access</h2>

      {/* Fokus Input */}
      <div>
        <input
          ref={inputRef}
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Klik tombol untuk fokus"
        />
        <button
          onClick={handleFocus}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Fokuskan Input
        </button>
      </div>

      {/* Manipulasi Style */}
      <div>
        <div
          ref={boxRef}
          className="w-full h-16 bg-gray-300 rounded flex items-center justify-center"
        >
          Kotak Bisa Diubah Warna
        </div>
        <button
          onClick={handleChangeColor}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
        >
          Ubah Warna
        </button>
      </div>

      {/* Scroll */}
      <div>
        <div
          ref={scrollRef}
          className="h-24 border overflow-y-scroll rounded p-2"
        >
          <p>Scroll area</p>
          <p>Baris 1</p>
          <p>Baris 2</p>
          <p>Baris 3</p>
          <p>Baris 4</p>
          <p>Baris 5</p>
          <p>Baris 6</p>
          <p>Baris 7</p>
        </div>

        <button
          onClick={handleScroll}
          className="mt-2 px-4 py-2 bg-purple-600 text-white rounded"
        >
          Scroll ke Bawah
        </button>
      </div>
    </div>
  );
}
