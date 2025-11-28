import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function PortalModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root")!;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow relative w-80">
        {children}

        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Tutup Modal
        </button>
      </div>
    </div>,
    modalRoot
  );
}
