interface Props {
    title: string;
    content: string;
  }
  
  export default function BasicCard({ title, content }: Props) {
    return (
      <div className="p-4 border rounded bg-white shadow space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
  