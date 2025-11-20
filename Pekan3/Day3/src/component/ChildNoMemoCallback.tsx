interface Props {
    onClick: () => void
}

export default function ChildNoMemoCallback({ onClick }: Props) {
  console.log("❌ ChildNoMemoCallback rendered");
  return <p className="text-red-600" onClick={onClick}>Tanpa Memo Callback</p>;
}