# ⚙️ Jawaban Tugas React

---

## 💻 2. Memahami Perbedaan JSX dengan HTML

> **Pertanyaan:**  
> Tuliskan penjelasan singkat mengenai perbedaan antara JSX dan HTML.  
> Sertakan contoh kode sederhana yang menunjukkan perbedaan tersebut.

**Jawaban:**

1. JSX adalah JavaScript yang me-*return* HTML, di mana kita juga bisa menyematkan ekspresi JS di dalamnya.  
   Sedangkan HTML biasa hanya bisa digunakan untuk membuat kerangka (struktur) dasar dari sebuah website.  
2. Contoh kode:

```jsx
const hello = <h1>Hello World</h1>;
```

---

## ⚛️ 3. Menjelaskan Konsep Virtual DOM

> **Pertanyaan:**  
> Buatlah ringkasan singkat tentang apa itu Virtual DOM dan bagaimana cara kerjanya di React.

**Jawaban:**

Virtual DOM adalah representasi dari DOM dalam bentuk virtual yang disimpan di memori dan digunakan untuk mengoptimalkan pembaruan pada DOM asli.

**Cara kerja Virtual DOM:**

1. **Render awal:** Ketika komponen pertama kali di-*render*, React membuat Virtual DOM (VDOM) dari DOM asli.  
2. **Pembaharuan:** Saat state atau props dari sebuah komponen berubah, React membuat *tree* VDOM baru.  
3. **Perbandingan (*Diffing*):** React membandingkan VDOM baru dengan VDOM sebelumnya untuk mengidentifikasi perubahan.  
4. **Pembaruan DOM asli:** Setelah dibandingkan, React hanya memperbarui bagian DOM yang benar-benar berubah.

---

## 🌐 4. Menjelaskan Perbedaan SPA vs MPA

> **Pertanyaan:**  
> Jelaskan perbedaan antara *Single Page Application (SPA)* dan *Multi Page Application (MPA)*.  
> Sertakan minimal 2 kelebihan dan 2 kekurangan dari masing-masing arsitektur.

**Jawaban:**

- **SPA (Single Page Application):**  
  Website yang dibangun hanya dengan satu `index.html`, di mana interaksi dan navigasi dilakukan melalui manipulasi JavaScript tanpa memuat ulang halaman secara penuh.

- **MPA (Multi Page Application):**  
  Website yang memiliki beberapa file `index.html`, setiap kali berpindah halaman maka terjadi *full reload* karena halaman diganti sepenuhnya.

**Kelebihan & Kekurangan:**

| Tipe | Kelebihan | Kekurangan |
|------|------------|------------|
| **SPA** | - Pengalaman pengguna lebih mulus<br>- Performa cepat setelah *initial load* | - Tantangan dalam SEO<br>- Waktu muat awal lebih lama |
| **MPA** | - SEO lebih baik<br>- *Initial load* lebih cepat | - Transisi antar halaman tidak mulus<br>- Interaksi terasa lebih lambat |

---

> ⚡ *Disusun dengan gaya techy oleh Rizki, biar tampilannya gak ngebosenin tapi tetap rapi dan informatif!* 😎
