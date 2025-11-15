import { useState } from "react";

interface TempInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

function TemperatureInput({ label, value, onChange }: TempInputProps) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-3 py-2 rounded-lg shadow-sm"
      />
    </div>
  );
}

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);

    const num = parseFloat(value);
    if (!isNaN(num)) {
      setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);

    const num = parseFloat(value);
    if (!isNaN(num)) {
      setCelsius((((num - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Temperature Converter</h2>

      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />

      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}
