# PRD: Eleda

**Dokumen:** Product Requirements Document
**Produk:** Eleda, open art commission
**Domain:** https://eleda.web.id
**Status:** Final. Implementasi mengikuti dokumen ini.
**Tanggal:** 21 November 2026
**Bahasa situs:** Inggris default (`/`), Indonesia (`/id/`)

---

## 1. Ringkasan

Eleda adalah studio desain yang membuka slot komisi untuk tiga kategori: desain pakaian, karakter, dan logo. Situs ini adalah satu landing page yang menampilkan karya, menjelaskan cara order, dan mengarahkan calon klien langsung ke WhatsApp.

Situs bukan toko. Tidak ada keranjang, checkout, akun, atau pembayaran online. Semua percakapan dan kesepakatan terjadi di WhatsApp.

---

## 2. Masalah

Calon klien perlu tiga jawaban sebelum menghubungi:

1. Karya seperti apa yang dihasilkan Eleda?
2. Apakah Eleda sedang menerima komisi?
3. Bagaimana cara mulai, dan apa langkah setelah chat?

Tanpa halaman yang menjawab ketiganya, calon klien harus bertanya hal dasar lewat DM, dan banyak yang tidak jadi menghubungi.

---

## 3. Tujuan

1. Menampilkan kualitas karya dalam hitungan detik pertama.
2. Menjelaskan status dan alur komisi tanpa perlu bertanya.
3. Mengarahkan ke WhatsApp dengan pesan awal yang sudah terisi.

---

## 4. Non-goals (v1)

- Tidak ada form, email, atau backend.
- Tidak ada akun, login, atau dashboard.
- Tidak ada pembayaran online.
- Tidak ada harga tetap di halaman. Harga dibahas lewat WhatsApp.
- Tidak ada blog, podcast, atau halaman berita.
- Tidak ada multi-halaman katalog. Semua karya tampil di landing page.
- Tidak ada dark mode. Alasan ada di `DESIGN.md`.
- Tidak ada nama atau identitas Revanzart di seluruh situs. Nama klien boleh dipakai sebagai judul.

---

## 5. Audiens

- Individu yang ingin ilustrasi karakter, potret, atau hadiah personal.
- Pemilik proyek kecil yang butuh ilustrasi untuk kemasan, poster, atau konten.
- Penggemar fandom yang memesan fan art atau karakter original.

Kebutuhan utama: bukti kualitas, kejelasan harga dan waktu, dan rasa aman sebelum membayar.

---

## 6. Prinsip produk

1. Karya dulu, teks kemudian. Gambar memimpin, copy menjelaskan.
2. Satu aksi utama: chat WhatsApp. Semua CTA menuju ke sana.
3. Tidak ada klaim yang tidak bisa dibuktikan. Tanpa statistik karangan, tanpa testimoni fiktif.
4. Hanya karya milik Eleda atau karya klien yang sudah diizinkan ditampilkan.
5. Halaman harus selesai dibaca dalam sekali scroll di ponsel.

---

## 7. Ruang lingkup v1

### 7.1 Rute

| Rute | Isi |
| --- | --- |
| `/` | Landing page versi Inggris, default |
| `/id/` | Landing page versi Indonesia |
| `/404` | Halaman tidak ditemukan, dengan tautan ke beranda |

Tidak ada rute lain. Navigasi hanya berisi anchor ke section yang benar-benar ada.

### 7.2 Section landing page

Urutan dan tujuan tiap section:

| # | Section | Tujuan | Isi wajib |
| --- | --- | --- | --- |
| 1 | Hero | Menjawab "ini apa dan apakah buka" | Nama Eleda, headline, 1 kalimat penjelas, status komisi, 1 CTA utama, 1 gambar unggulan |
| 2 | Karya | Membuktikan kualitas | Tiga blok kategori dengan narasi dan CTA, rail horizontal |
| 3 | Karya klien | Membuktikan pengalaman komisi | Tiga grup klien memakai handle asli, rail horizontal |
| 4 | Cara order | Menghapus kebingungan langkah | 3 langkah: chat brief, sketsa dan persetujuan, final dan file |
| 5 | FAQ | Menjawab keberatan | Hanya pertanyaan yang sudah disetujui |
| 6 | Tentang dan Our Artist | Memberi konteks studio dan orang di baliknya | Copy singkat, daftar handle, tanpa tautan |
| 7 | CTA akhir | Menutup halaman dengan aksi | Kalimat singkat dan tombol WhatsApp |

Footer: nama Eleda, tautan WhatsApp, tahun.

### 7.3 Komponen wajib

- `Nav`: nama brand, anchor Karya, Tentang, Cara order, FAQ, toggle bahasa, tombol WhatsApp.
- `LangToggle`: ID dan EN, menuju `/id/` dan `/`, bukan swap teks di tempat.
- `WaCta`: tombol dengan pesan awal terisi, dipakai di nav, hero, tiap blok katalog, dan akhir halaman.
- `WorkRail`: rail horizontal dengan scroll-snap per blok kategori dan grup klien.
- `About`: copy singkat studio dan daftar Our Artist.
- `Process`: daftar bernomor, tanpa kartu.
- `Faq`: accordion, satu item terbuka, bisa ditutup.
- `Footer`.

---

## 8. Model data

Semua konten disimpan sebagai data statis, bukan CMS.

### 8.1 `site`

```ts
{
  name: "Eleda",
  url: "https://eleda.web.id",
  whatsapp: "62895321365998",
  whatsappDisplay: "+62 895-3213-65998",
  openForCommission: boolean,
  year: number
}
```

### 8.2 `work`

```ts
export type Category = 'clothing' | 'character' | 'logo';

type Work = {
  id: string,
  title: { id: string, en: string },
  category: Category,
  year: number,
  type: 'personal' | 'client',
  client: string | null,
  image: string,
  width: number,
  height: number,
  alt: { id: string, en: string },
  pending: boolean
}
```

Aturan:

- Semua aset gambar berformat WebP dengan sisi terpanjang maksimal 1600px.
- Original arsip ada di `assets-source/` dan tidak ikut ke build.
- Nama file publik netral. Handle `@` dan nama klien tidak boleh muncul di URL, caption, alt, atau metadata.
- Judul memakai nama asli dari isi gambar atau folder sumber, serta keterangan singkat.
- `alt` wajib diisi dua bahasa. Alt menjelaskan isi gambar, bukan angka.
- Aset tersusun per kategori di `public/works/clothing`, `character`, `logo`, dan `clients/<handle>/`.

### 8.3 `faq`

```ts
{
  id: string,
  question: { id: string, en: string },
  answer: { id: string, en: string },
  confirmed: boolean
}
```

Aturan: `confirmed: false` berarti item tidak dirender.

### 8.4 `processStep`

```ts
{
  order: number,
  title: { id: string, en: string },
  body: { id: string, en: string }
}
```

---

## 9. Aturan konten

1. Tanpa em dash di seluruh teks situs.
2. Tanpa kata "seamless", "revolutionary", "next generation", "AI powered", "terbaik", "nomor satu".
3. Tanpa angka atau statistik tanpa sumber nyata.
4. Tanpa testimoni teks, nama klien, atau avatar karangan. Bukti sosial berupa gambar karya klien yang sudah diizinkan.
5. Tanpa harga di halaman v1. Jika nanti ditambahkan, harus dari pemilik, bukan perkiraan.
6. Tanpa klaim komersial, revisi, atau refund sebelum pemilik mengonfirmasi aturannya.
7. Copy Indonesia dan Inggris harus setara makna, bukan terjemahan mesin mentah.
8. Nama pribadi pemilik, nama brand lama, dan tautan portofolio pribadi dilarang muncul di situs, metadata, maupun komentar kode.

---

## 10. Copy awal (draft, perlu persetujuan)

### 10.1 Indonesia

- Status: `Terbuka untuk komisi`
- Headline: `Desain dari idemu.`
- Sub: `Desain pakaian, karakter, dan logo. Kirim brief lewat WhatsApp, Eleda balas dengan harga dan estimasi.`
- CTA utama: `Mulai komisi`
- CTA sekunder: `Lihat karya`
- Pesan WhatsApp: `Halo Eleda, saya mau tanya komisi. Jenis desain: ..., jumlah item: ..., deadline: ...`

### 10.2 Inggris

- Status: `Open for commissions`
- Headline: `Design from your idea.`
- Sub: `Clothing, character, and logo design. Send a brief on WhatsApp, Eleda replies with a quote and timeline.`
- CTA utama: `Start a commission`
- CTA sekunder: `See recent work`
- Pesan WhatsApp: `Hi Eleda, I would like to ask about a commission. Design type: ..., items: ..., deadline: ...`

Catatan: sub copy versi Inggris memakai "me". Jika brand ingin netral, ganti menjadi "Tell Eleda your idea on WhatsApp."

---

## 11. Alur pengguna

```
Buka dari tautan langsung atau chat
  -> lihat hero dan status buka
  -> scroll karya
  -> lihat karya klien
  -> baca cara order
  -> buka FAQ jika masih ragu
  -> klik WhatsApp
  -> chat terisi otomatis
```

Tidak ada langkah antara. Tidak ada form yang harus diisi sebelum chat.

---

## 12. Kriteria penerimaan

- [ ] Landing page tampil benar di 375px, 768px, 1024px, dan 1440px tanpa scroll horizontal.
- [ ] Semua CTA WhatsApp membuka `wa.me` dengan pesan awal sesuai bahasa halaman.
- [ ] Toggle bahasa memindahkan pengguna antara `/` dan `/id/` pada posisi section yang sama.
- [ ] Semua tautan navigasi menuju section yang ada.
- [ ] Setiap karya memiliki alt text dalam bahasa halaman.
- [ ] FAQ hanya menampilkan item yang sudah dikonfirmasi.
- [ ] Tidak ada karya dengan `permissionConfirmed: false` yang dirender.
- [ ] Tidak ada nama pribadi atau brand lama di HTML hasil build.
- [ ] Lighthouse mobile: Performance 90 atau lebih, Accessibility 95 atau lebih.
- [ ] `prefers-reduced-motion` mematikan semua animasi non-esensial.
- [ ] Halaman 404 tersedia dan mengarah kembali ke beranda.

---

## 13. Metrik

Tidak ada target angka karangan. Yang diukur setelah live:

- Jumlah klik tombol WhatsApp, jika analitik dipasang.
- Jumlah chat masuk yang menyebut detail dari halaman.
- Rasio chat yang berlanjut ke kesepakatan.

Analitik bersifat opsional dan tidak boleh menambah cookie pihak ketiga tanpa persetujuan pemilik.

---

## 14. Risiko

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Karya klien ditampilkan tanpa izin | Masalah hukum dan reputasi | Flag `permissionConfirmed` wajib |
| Gambar placeholder dianggap karya asli | Kehilangan kepercayaan | Placeholder diberi label jelas |
| Nomor WhatsApp publik kena spam | Ganggu operasional | Siapkan WA Business dengan pesan otomatis |
| Klaim harga atau revisi salah | Sengketa dengan klien | Harga dan aturan hanya dari pemilik, tidak dikarang |
| Referensi visual terlalu mirip kateflorence.com | Risiko hak cipta dan brand | Pakai riff, ganti identitas, cek orisinalitas |
| Aset stok berlisensi tidak jelas | Takedown | Hanya aset milik Eleda atau berlisensi jelas |

---

## 15. Pertanyaan terbuka

- [x] Karya asli tersedia dalam 31 file WebP hasil konversi.
- [x] Karya klien sudah disusun per grup dari folder sumber.
- [x] Jawaban FAQ sudah disetujui.
- [x] Copy ID dan EN sudah disetujui.
- [x] Aturan DP, revisi, komersial, dan refund sudah disetujui.

Semua pertanyaan di atas sudah terjawab di `COPY.md` dan tidak memblokir rilis.
