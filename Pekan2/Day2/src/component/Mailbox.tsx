interface MailboxProps {
    unreadMessages: string[]; // array berisi pesan yang belum dibaca
  }
  
  export default function Mailbox({ unreadMessages }: MailboxProps) {
    return (
      <div className="flex flex-col items-center gap-3 mt-10">
        <h2 className="text-xl font-semibold text-purple-600">
          Kotak Pesan 📬
        </h2>
  
        {/* Kalau ada pesan, tampilkan teks hijau */}
        {unreadMessages.length > 0 && (
          <p className="text-green-600">
            Kamu punya {unreadMessages.length} pesan belum dibaca.
          </p>
        )}
  
        {/* Kalau gak ada pesan, tampilkan teks abu-abu */}
        {unreadMessages.length === 0 && (
          <p className="text-gray-500">Tidak ada pesan baru 😴</p>
        )}
      </div>
    );
  }
  