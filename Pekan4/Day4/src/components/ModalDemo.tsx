import { useState } from "react";
import PortalModal from "./PortalModal";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 bg-white rounded shadow max-w-sm mx-auto text-center space-y-4">
      <h2 className="text-xl font-semibold">Portal Modal Demo</h2>

      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Buka Modal
      </button>

      <PortalModal isOpen={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-semibold">Modal Content</h3>
        <p className="text-gray-600">Ini adalah modal melalui React Portal.</p>
      </PortalModal>
    </div>
  );
}
