import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <h2 className="text-xl font-bold">
      Detail User dengan ID: {id}
    </h2>
  );
}
