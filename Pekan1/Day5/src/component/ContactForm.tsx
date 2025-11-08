import { useState } from "react";

interface Contact {
    name: string;
    email: string;
    phone: string;
}

export default function ContactForm() {
    const [contact, setContact] = useState<Contact>({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContact((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600 text-center">
          Form Kontak
        </h2>
  
        {/* Input Nama */}
        <input
          type="text"
          name="name"
          placeholder="Masukkan nama..."
          value={contact.name}
          onChange={handleChange}
          className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
  
        {/* Input Email */}
        <input
          type="email"
          name="email"
          placeholder="Masukkan email..."
          value={contact.email}
          onChange={handleChange}
          className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
  
        {/* Input Nomor Telepon */}
        <input
          type="tel"
          name="phone"
          placeholder="Masukkan nomor telepon..."
          value={contact.phone}
          onChange={handleChange}
          className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
  
        {/* Tampilan data */}
        <div className="bg-gray-50 p-3 rounded text-gray-700 space-y-1">
          <p>
            <strong>Nama:</strong> {contact.name || "-"}
          </p>
          <p>
            <strong>Email:</strong> {contact.email || "-"}
          </p>
          <p>
            <strong>Telepon:</strong> {contact.phone || "-"}
          </p>
        </div>
        <button
        onClick={() => {
          setContact({
            name: "",
            email: "",
            phone: "",
          })
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset
      </button>
      </div>
    )
}