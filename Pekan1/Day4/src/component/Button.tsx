interface ButtonProps {
    label: string
    variant?: 'primary' | 'secondary' | 'danger'
    onClick?: () => void
}

export default function Button({ label, variant = 'primary', onClick }: ButtonProps) {
    let buttonStyle = "";

    switch (variant) {
        case "secondary":
          buttonStyle = "bg-gray-400 hover:bg-gray-500";
          break;
        case "danger":
          buttonStyle = "bg-red-500 hover:bg-red-600";
          break;
        default:
          buttonStyle = "bg-blue-600 hover:bg-blue-700";
          break;
      }

      return (
        <button
          onClick={onClick}
          className={`text-white font-semibold px-5 py-2 rounded-md transition duration-200 active:scale-95 ${buttonStyle}`}
        >
          {label}
        </button>
      );
}