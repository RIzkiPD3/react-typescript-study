import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

export default function TypedForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!form.email.includes("@"))
      newErrors.email = "Email tidak valid";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    alert(`Form berhasil dikirim!\nNama: ${form.name}\nEmail: ${form.email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded-lg max-w-md mx-auto mt-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Typed Form</h2>

      <div>
        <label className="block font-semibold mb-1">Nama</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold"
      >
        Kirim
      </button>
    </form>
  );
}
