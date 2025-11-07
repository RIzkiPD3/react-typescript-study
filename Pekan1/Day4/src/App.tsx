import ProfileBox from "./component/ProfleBox";
import Card from "./component/Card";
import Button from "./component/Button";
import AlertBox from "./component/AlertBox";
import ResponsiveCard from "./component/ResponsiveCard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-10 space-y-10">
      {/* Jawaban no 1 */}
      <ProfileBox
        name="Rizki Putra Dandi"
        bio="Seorang Fullstack Web Developer junior"
        image="https://i1.sndcdn.com/artworks-000113188634-rnxl1m-t500x500.jpg"
      />

      {/* Jawaban no 2 */}
      <div className="flex flex-col items-center space-y-6">
        <Card
          title="Belajar React + Tailwind"
          content="Tailwind itu bikin styling super cepat tanpa ribet buka file CSS lagi!"
          buttonLabel="Pelajari"
        />
        <Card
          title="TypeScript Support"
          content="React + TS bikin koding lebih aman, error lebih cepat ketahuan 🔥"
          buttonLabel="Gaskeun!"
        />
      </div>

      {/* Jawaban no 3 */}
      <div className="flex flex-col items-center space-y-3">
        <Button
          label="Primary Button"
          variant="primary"
          onClick={() => alert("Klik tombol Primary!")}
        />
        <Button
          label="Secondary Button"
          variant="secondary"
          onClick={() => alert("Klik tombol Secondary!")}
        />
        <Button
          label="Danger Button"
          variant="danger"
          onClick={() => alert("Klik tombol Danger!")}
        />
      </div>

      {/* Jawaban no 4 */}
      <div className="flex flex-col items-center space-y-3 w-full max-w-md">
        <AlertBox type="success" message="Data berhasil disimpan!" />
        <AlertBox type="warning" message="Periksa kembali input kamu, bro!" />
        <AlertBox type="error" message="Waduh, ada error nih 😅" />
      </div>

      {/* Jawaban no 5 */}
      <div className="flex flex-col items-center space-y-8">
        <ResponsiveCard
          title="Belajar Responsif di React"
          description="Tailwind bikin layout responsif jadi super gampang. Gak perlu ribet nulis media query manual!"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8s4AjpHXO1bnjK_dw35YdAHK5e9N0R8grw&s"
        />
        <ResponsiveCard
          title="React + TypeScript"
          description="Kombinasi maut buat bikin project scalable, maintainable, dan bebas bug kecil."
          image="https://bandai-a.akamaihd.net/bc/img/model/xl/1000193683_1.jpg"
        />
      </div>
    </div>
  );
}
