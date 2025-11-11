export default function Button() {
    const handleClick = (): void => {
      alert("Tombol diklik bro 😎");
    };
  
    const handleMouseEnter = (): void => {
      console.log("Mouse masuk ke tombol");
    };
  
    const handleMouseLeave = (): void => {
      console.log("Mouse keluar dari tombol");
    };

    return (
       <div className="flex flex-col items-center gap-3 mt-10" >
        <h2 className="text-xl font-bold text-blue-700">Tugas 1: Event Dasar</h2>
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-md transition"
        >
          Klik Saya
        </button>
       </div>
    )
}
