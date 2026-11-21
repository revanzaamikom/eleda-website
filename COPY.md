# COPY: Eleda

**Dokumen:** Copy deck Indonesia dan Inggris
**Status:** Final. Dipakai di `src/i18n/ui.ts` dan `src/data/faqs.ts`
**Tanggal:** 21 November 2026
**Aturan:** Tanpa em dash. Tanpa buzzword. Tanpa nama klien. Handle Our Artist boleh jadi tautan Instagram. Tidak ada angka karangan.

---

## 1. Suara

- Tenang, langsung, tanpa hype.
- Kalimat pendek. Satu ide per kalimat.
- Bahasa Indonesia memakai "kamu". Bahasa Inggris memakai "you".
- Tidak memakai "kami" atau "tim" karena tidak ada tim yang diklaim.
- Tidak memakai kata "seamless", "premium", "terbaik", "profesional" sebagai pujian diri.

---

## 2. Kategori

| Indonesia | Inggris |
| --- | --- |
| Desain pakaian | Clothing design |
| Karakter | Character drawing |
| Logo | Logo design |

Ketiga label dipakai sebagai judul blok katalog. Tidak ada rute baru.

---

## 3. Meta

### Indonesia

- Title: `Eleda | Desain Pakaian, Karakter, dan Logo`
- Description: `Komisi desain pakaian, karakter, dan logo. Lihat karya, baca cara order, lalu chat WhatsApp.`
- OG alt: `Eleda, desain pakaian, karakter, dan logo.`

### Inggris

- Title: `Eleda | Clothing, Character, and Logo Design`
- Description: `Clothing, character, and logo design commissions. See recent work, read how it works, then message on WhatsApp.`
- OG alt: `Eleda, clothing, character, and logo design.`

---

## 4. Navigasi

| Indonesia | Inggris |
| --- | --- |
| Karya | Work |
| Tentang | About |
| Cara order | How it works |
| Pertanyaan | Questions |
| WhatsApp | WhatsApp |

Toggle bahasa: `ID` dan `EN`.

---

## 5. Hero

### Indonesia

- Status: `Terbuka untuk komisi`
- Headline: `Desain dari idemu.`
- Sub: `Ceritakan kebutuhanmu, Eleda siap memenuhi kebutuhan desainmu. Dari kaos dan karakter sampai logo, tiap ide dibaca dulu sebelum dikerjakan.`
- CTA utama: `Ceritakan kebutuhanmu`
- CTA sekunder: `Lihat karya`
- Alt gambar: `Dua mockup kaos dengan grafis hitam putih di atas latar gelap.`

### Inggris

- Status: `Open for commissions`
- Headline: `Design from your idea.`
- Sub: `Describe what you need, and Eleda shapes the design around it. From clothing and characters to logos, every idea is read before work begins.`
- CTA utama: `Tell us your needs`
- CTA sekunder: `See recent work`
- Alt gambar: `Two T-shirt mockups with black and white graphics on a dark background.`

### Pernyataan di bawah hero

- ID: `Eleda siap memenuhi kebutuhan desainmu, satu per satu. Ceritakan yang kamu butuhkan, lalu biarkan Eleda merangkai bentuk, warna, dan detailnya.`
- EN: `Eleda is ready to meet your design needs, one project at a time. Tell us what you need, then let Eleda shape the form, color, and details.`

---

## 6. Katalog

- Judul: `Karya` / `Work`
- Tiga blok berurutan: `Desain pakaian`, `Karakter`, `Logo`.
- Setiap blok memakai rail horizontal dengan 2 kartu terlihat di desktop.
- Caption kartu memakai judul asli dan keterangan singkat, bukan `Slot 01`.
- Tiap blok punya satu paragraf narasi dan satu CTA WhatsApp dengan pesan sesuai kategori.
- Tiap blok memakai rail horizontal dengan scroll-snap.

### Narasi kategori

- Clothing ID: `Ceritakan kebutuhanmu, mau kaos, hoodie, atau seragam. Eleda bantu tentukan grafis, warna, dan penempatan supaya desainnya enak dilihat dan siap diproduksi.`
- Clothing EN: `Tell us what you need, whether it is a T-shirt, hoodie, or uniform. Eleda helps shape the graphic, color, and placement so the design works on fabric and is ready for production.`
- Character ID: `Ceritakan karakter yang kamu bayangkan, ekspresinya, pose, dan suasana yang kamu mau. Eleda bantu wujudkan dari sketsa pertama sampai warna terakhir.`
- Character EN: `Describe the character you have in mind, the expression, pose, and mood you want. Eleda brings it from the first sketch to the final color.`
- Logo ID: `Ceritakan usaha, komunitas, atau proyekmu. Eleda bantu temukan bentuk yang sederhana, mudah dikenali, dan sesuai dengan kebutuhan pemakaianmu.`
- Logo EN: `Tell us about your business, community, or project. Eleda helps find a mark that stays simple, easy to recognize, and fit for how you will use it.`

---

## 7. Karya klien

- Judul: `Karya klien` / `Client work`
- Sub: `Komisi yang sudah selesai, ditampilkan dengan izin klien.` / `Finished commissions, shown with permission.`
- Tiga grup: `@jinx_archives`, `@foco.locoo`, `@lamthiur`.
- Caption: `Commission` dan `2026`.
- Nama klien dipakai sebagai judul. Tidak ada kutipan atau foto profil.
- Handle grup klien ditampilkan sebagai teks, bukan tautan.

---

## 8. Cara order

Judul: `Cara order` / `How it works`

Sub: `Tiga langkah, semuanya lewat WhatsApp.` / `Three steps, all through WhatsApp.`

### Langkah 1

- ID: `Kirim brief` / `Tulis jenis desain, jumlah item, deadline, dan referensi. Semua lewat WhatsApp.`
- EN: `Send a brief` / `Write the design type, item count, deadline, and references. All through WhatsApp.`

### Langkah 2

- ID: `Setujui penawaran` / `Eleda kirim harga, estimasi, dan jumlah revisi. DP mengunci slot.`
- EN: `Approve the quote` / `Eleda sends the price, timeline, and revision count. The deposit locks the slot.`

### Langkah 3

- ID: `Sketsa, lalu final` / `Sketsa disetujui dulu, lanjut ke warna, lalu file final dikirim.`
- EN: `Sketch, then final` / `Approve the sketch first, then color, then the final files are sent.`

---

## 9. FAQ

Judul: `Pertanyaan` / `Questions`

Semua item `confirmed: true` di `src/data/faqs.ts`.

### 9.1 Apakah slot masih buka?

- ID: `Chat WhatsApp saat kamu butuh slot. Eleda balas dengan ketersediaan, harga, dan estimasi.`
- EN: `Message on WhatsApp when you need a slot. Eleda replies with availability, price, and timeline.`

### 9.2 Bagaimana cara memesan?

- ID: `Chat WhatsApp dengan jenis desain, jumlah item, deadline, dan referensi. Dari situ Eleda cek slot dan kirim penawaran.`
- EN: `Message on WhatsApp with the design type, item count, deadline, and references. Eleda checks the schedule and sends a quote.`

### 9.3 Berapa harga dan berapa lama?

- ID: `Dua-duanya tergantung jenis, tingkat detail, dan antrean. Harga dan estimasi dikirim setelah brief masuk.`
- EN: `Both depend on the type, level of detail, and the queue. The price and timeline come after the brief.`

### 9.4 Berapa kali revisi?

- ID: `Revisi dibagi ke tahap sketsa dan tahap warna. Jumlahnya disepakati sebelum pengerjaan mulai, jadi tidak ada tambahan di tengah jalan.`
- EN: `Revisions are split between the sketch and the color stage. The count is agreed before work starts, so nothing is added halfway through.`

### 9.5 Apakah hasil bisa dipakai untuk produksi atau komersial?

- ID: `Untuk pakaian, file disiapkan sesuai kebutuhan produksi. Untuk karakter dan logo, pemakaian personal sudah termasuk. Pemakaian komersial disepakati sebelum mulai.`
- EN: `For clothing, files are prepared for production needs. For characters and logos, personal use is included. Commercial use is agreed before work starts.`

### 9.6 File apa yang dikirim?

- ID: `File final disesuaikan dengan jenisnya. Karakter dan logo dikirim sebagai PNG resolusi tinggi. Desain pakaian dikirim sesuai kebutuhan produksi. File kerja tidak termasuk kecuali disepakati.`
- EN: `Final files depend on the type. Characters and logos are delivered as high resolution PNG files. Clothing design is delivered to match production needs. Working files are not included unless agreed.`

### 9.7 Apakah karya saya ditampilkan di sini?

- ID: `Hanya dengan izinmu. Kalau ingin komisi tetap privat, bilang di awal.`
- EN: `Only with your permission. If you want the commission kept private, say so at the start.`

### 9.8 Bagaimana pembayaran dan pembatalan?

- ID: `Slot dikunci setelah DP. Sisa pembayaran sebelum file final dikirim. Pembatalan dan refund mengikuti kesepakatan di awal.`
- EN: `The deposit locks the slot. The rest is paid before the final files are sent. Cancellation and refunds follow the agreement made at the start.`

---

## 10. CTA akhir

### Indonesia

- Judul: `Punya ide untuk desain?`
- Sub: `Ceritakan yang kamu butuhkan. Eleda menyiapkan bentuk, warna, dan detailnya.`
- Tombol: `Ceritakan kebutuhanmu`

### Inggris

- Judul: `Have a design idea?`
- Sub: `Tell us what you need. Eleda prepares the form, color, and details.`
- Tombol: `Tell us your needs`

---

## 11. Footer

### Indonesia

`Eleda. Komisi desain.`
`WhatsApp`
`2026`

### Inggris

`Eleda. Design commissions.`
`WhatsApp`
`2026`

Tanpa tautan sosial, tanpa email, tanpa tautan lain.

---

## 12. Pesan WhatsApp

### Indonesia

```
Halo Eleda, saya mau tanya komisi.
Jenis desain:
Jumlah item:
Deadline:
Referensi:
```

### Inggris

```
Hi Eleda, I would like to ask about a commission.
Design type:
Items:
Deadline:
References:
```

Nomor: `62895321365998`

---

## 13. Microcopy

| Kondisi | Teks |
| --- | --- |
| Status buka | `Terbuka untuk komisi` / `Open for commissions` |
| Status tutup | `Slot penuh` / `Slots full` |
| Caption klien | `Commission` |
| Grup klien | `@jinx_archives`, `@foco.locoo`, `@lamthiur` |
| Halaman 404 | `Halaman tidak ada.` / `This page does not exist.` |
| 404 CTA | `Kembali ke beranda` / `Back to home` |

---

## 15. Tentang dan Our Artist

### Indonesia

- Judul: `Tentang Eleda`
- Isi: `Eleda siap memenuhi kebutuhan desainmu, satu per satu. Ceritakan yang kamu butuhkan, lalu biarkan Eleda merangkai bentuk, warna, dan detailnya.`
- Judul artist: `Our Artist`
- Sub artist: `Ilustrator dan desainer di balik Eleda.`
- Handle: `@wrmdewa`, `@kytk._`, `@suryawisesa_`

### Inggris

- Judul: `About Eleda`
- Isi: `Eleda is ready to meet your design needs, one project at a time. Tell us what you need, then let Eleda shape the form, color, and details.`
- Judul artist: `Our Artist`
- Sub artist: `The illustrators and designers behind Eleda.`
- Handle memakai tautan Instagram langsung: `https://www.instagram.com/wrmdewa/`, `https://www.instagram.com/kytk._/`, `https://www.instagram.com/suryawisesa_/`.

---

## 16. Checklist copy

- [x] Tanpa em dash.
- [x] Tanpa "seamless", "premium", "terbaik", "revolusioner".
- [x] Tanpa angka, harga, atau durasi yang belum diputuskan.
- [x] Tanpa identitas Revanzart. Tiga handle Our Artist memakai tautan Instagram langsung.
- [x] Indonesia dan Inggris setara makna.
- [x] Semua CTA memakai satu label per intent.
- [x] FAQ hanya berisi pertanyaan yang benar-benar ditanyakan calon klien.
- [x] Kebijakan DP, revisi, komersial, dan refund sudah disetujui.
