export default function FastComponent() {
    console.log("⚡ FastComponent rendered");
  
    return (
      <div className="p-4 border rounded bg-green-100">
        <h3 className="font-semibold">Fast Component</h3>
        <p>Komponen ini sangat ringan.</p>
      </div>
    );
  }
  