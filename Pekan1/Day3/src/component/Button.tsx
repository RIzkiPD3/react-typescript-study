interface ButtonProps {
    label: string
    message: string
}

export default function Button({ label, message }: ButtonProps) {
    function handleClick() {
        alert(message)
    }

    return (
        <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
            {label}
        </button>
    )
}