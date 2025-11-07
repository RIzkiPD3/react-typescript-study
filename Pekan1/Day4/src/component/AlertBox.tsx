 interface AlertBoxProps {
    type: "success" | "warning" | "error"
    message: string
}

export default function AlertBox({ type, message }: AlertBoxProps) {
    let alertStyle = "";
  
    switch (type) {
      case "success":
        alertStyle = "bg-green-100 text-green-700 border-green-400";
        break;
      case "warning":
        alertStyle = "bg-yellow-100 text-yellow-700 border-yellow-400";
        break;
      case "error":
        alertStyle = "bg-red-100 text-red-700 border-red-400";
        break;
    }
  
    return (
      <div
        className={`border-l-4 p-4 rounded-md shadow-sm ${alertStyle} flex items-center gap-3`}
      >
        {type === "success" && <span>✅</span>}
        {type === "warning" && <span>⚠️</span>}
        {type === "error" && <span>❌</span>}
        <p className="font-medium">{message}</p>
      </div>
    );
  }
  