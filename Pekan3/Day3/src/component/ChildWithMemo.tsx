import React from "react";

interface Props {
  count: number;
}

function ChildWithMemo({ count }: Props) {
  console.log("✅ ChildWithMemo rendered");
  return <p className="text-green-600">Dengan Memo Count: {count}</p>;
}

export default React.memo(ChildWithMemo);
