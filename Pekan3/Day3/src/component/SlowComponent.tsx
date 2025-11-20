export default function SlowComponent() {
    console.log("🐌 SlowComponent rendered");
  
    // simulasi perhitungan berat
    let total = 0;
    for (let i = 0; i < 300_000_000; i++) {
      total += i;
    }
  
    return (
      <div className="p-4 border rounded bg-red-100">
        <h3 className="font-semibold">Slow Component</h3>
        <p>Hasil perhitungan: {total}</p>
      </div>
    );
  }
  