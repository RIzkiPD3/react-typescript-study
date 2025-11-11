import { useState } from "react";

export default function MultiForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newError = { email: "", password: "" };
    if (!form.email.includes("@")) newError.email = "Email harus valid!";
    if (form.password.length < 6)
      newError.password = "Password minimal 6 karakter!";
    setError(newError);
    return !newError.email && !newError.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(`Pendaftaran berhasil!\nUsername: ${form.username}`);
      setForm({ username: "", email: "", password: "" });
      setError({ email: "", password: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-80 mx-auto mt-10 flex flex-col gap-3"
    >
      <h2 className="text-xl font-bold text-center text-purple-600">
        Tugas 5: Multiple Inputs
      </h2>

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="border p-2 rounded focus:ring-2 focus:ring-purple-400"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 rounded focus:ring-2 focus:ring-purple-400"
      />
      {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 rounded focus:ring-2 focus:ring-purple-400"
      />
      {error.password && <p className="text-red-500 text-sm">{error.password}</p>}

      <button
        type="submit"
        className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
      >
        Daftar
      </button>
    </form>
  );
}
