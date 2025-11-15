import { useState } from "react";

interface MessageProps {
  message: string;
}

function ChildComponent({ message }: MessageProps) {
  return (
    <div className="p-4 bg-green-100 border rounded-lg shadow-sm">
      <p className="font-semibold">Pesan dari Parent:</p>
      <p className="text-gray-700">{message}</p>
    </div>
  );
}

function MidComponent({ message }: MessageProps) {
  return (
    <div className="p-4 bg-blue-100 border rounded-lg shadow-sm mb-4">
      <p className="text-sm text-gray-600 mb-2">
        Ini komponen tengah (tidak pakai data).
      </p>
      <ChildComponent message={message} />
    </div>
  );
}

export default function PropDrillingExample() {
  const [message] = useState("Halo dari Parent!");

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Prop Drilling Example</h2>

      <MidComponent message={message} />
    </div>
  );
}
