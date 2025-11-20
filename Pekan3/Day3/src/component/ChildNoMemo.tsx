interface Props {
    count: number;
  }
  
  export default function ChildNoMemo({ count }: Props) {
    console.log("❌ ChildNoMemo rendered");
    return <p className="text-red-600">Tanpa Memo Count: {count}</p>;
  }
  