interface Student {
    id: number;
    name: string;
}

interface StudentListProps {
    students: Student[];
}

export default function StudentList({ students }: StudentListProps) {
    return (
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-xl font-bold text-orange-600 mb-2">Daftar Siswa</h2>
    
          {students.length > 0 ? (
            <ul className="list-decimal pl-6 text-gray-700 space-y-1">
              {students.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic mt-2">Belum ada data siswa 😴</p>
          )}
        </div>
      );
}