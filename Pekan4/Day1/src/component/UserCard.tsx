interface UserCardProps {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
  }
  
  export default function UserCard({ name, age, email, isActive }: UserCardProps) {
    return (
      <div className="border rounded-lg p-4 shadow-sm bg-white max-w-sm mx-auto">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mt-1">Umur: {age}</p>
        <p className="text-gray-600">Email: {email}</p>
        <p className={`font-semibold mt-2 ${isActive ? "text-green-600" : "text-red-600"}`}>
          Status: {isActive ? "Aktif" : "Nonaktif"}
        </p>
      </div>
    );
  }
  