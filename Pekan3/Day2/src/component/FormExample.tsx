import useForm from "../hooks/useForm";

export default function FormExample() {
    const { values, handleChange, resetForm } = useForm({ name: "", email: "" });

    return (
        <div className="max-w-md mx-auto p-6 border bg-white rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold">useForm Example</h2>
    
          <input
            className="w-full border p-2 rounded"
            name="name"
            placeholder="Nama"
            value={values.name}
            onChange={handleChange}
          />
    
          <input
            className="w-full border p-2 rounded"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
    
          <button
            onClick={resetForm}
            className="px-4 py-2 bg-gray-600 text-white rounded shadow"
          >
            Reset Form
          </button>
    
          <div className="p-3 bg-gray-50 border rounded">
            <p><b>Nama:</b> {values.name || "(kosong)"}</p>
            <p><b>Email:</b> {values.email || "(kosong)"}</p>
          </div>
        </div>
      );
    }