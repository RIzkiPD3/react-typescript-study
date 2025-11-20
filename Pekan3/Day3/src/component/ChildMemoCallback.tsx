import React from "react";

interface Props {
  onClick: () => void;
}

function ChildMemoCallback({ onClick }: Props) {
  console.log("✅ ChildMemoCallback rendered");
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-600 text-white rounded"
    >
      Child (memo)
    </button>
  );
}

export default React.memo(ChildMemoCallback);
