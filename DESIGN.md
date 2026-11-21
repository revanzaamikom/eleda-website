# DESIGN.md: Eleda

**Dokumen:** Design system dan arah visual
**Status:** Final, sudah diterapkan di `src/i18n/ui.ts` dan `src/data/`
**Tanggal:** 21 November 2026
**Sumber data:** `ui-ux-pro-max` (dasar), `antislop` (filter), observasi `kateflorence.com` (ritme dan rasa, bukan aset)

---

## 1. Design Read

Landing page untuk calon pembeli komisi desain pakaian, karakter, dan logo, dengan bahasa visual galeri: media full-bleed, teks overlay tenang, rail horizontal dua kartu, tipografi Archivo dan Newsreader, motion nyaris nol.

Yang diambil dari referensi: ritme section, rasio media terhadap teks, ruang kosong, cara karya dipajang.
Yang tidak diambil: nama, logo, gambar, copy, font, warna merek, dan struktur toko.

---

## 2. Dials

| Dial | Nilai 1-10 | Nilai 1-3 (antislop) | Alasan |
| --- | --- | --- | --- |
| Variance | 5 | RHYTHM 2 | Rail dua kartu yang konsisten, satu pita teks di antara media. Referensi tidak asimetris |
| Motion | 2 | MOTION 1 | Hover saja dan satu fade saat load. Probe referensi menemukan 0 scroll reveal |
| Density | 3 | ENERGY 2 | Media mengisi sebagian besar layar, teks sedikit |

Batas: tidak ada scroll hijack, parallax, marquee, atau animasi loop.

---

## 3. Arah visual

Dinding galeri, bukan katalog toko.

- Latar kertas hangat netral, bukan putih murni, supaya gambar tidak menyilaukan.
- Media keluar dari kontainer dan menyentuh tepi layar.
- Teks di atas gambar memakai scrim gelap agar tetap terbaca.
- Tinta hampir hitam untuk teks.
- Satu aksen hijau tua, hanya untuk status buka dan tombol utama.
- Sudut hampir tegak, garis rambut sebagai pemisah.
- Tanpa kartu, tanpa bayangan, tanpa gradien dekoratif.

Alasan: karya adalah warna di halaman. Semua elemen lain harus diam dan netral agar mata jatuh ke gambar.

---

## 4. Palet

Nilai kontras diukur dengan rumus WCAG, bukan perkiraan.

| Token | Nilai | Pemakaian | Kontras |
| --- | --- | --- | --- |
| `--paper` | `#F5F4F1` | Latar halaman | Dasar |
| `--ink` | `#161616` | Teks utama | 16.45:1 di paper |
| `--muted` | `#5C5B56` | Teks sekunder, metadata | 6.19:1 di paper |
| `--line` | `#D8D5CD` | Garis pemisah, border | Non-teks |
| `--accent` | `#1E6B4F` | Tombol utama, status buka, focus ring | 5.84:1 di paper, putih di atasnya 6.42:1 |
| `--accent-lift` | `#5BB893` | Tidak dipakai | Token lama, bisa dihapus |
| `--danger` | `#B3261E` | Pesan galat, jika ada | 5.94:1 di paper |
| `--paper-deep` | `#EDEBE5` | Latar blok CTA penutup | Non-teks |
| `--scrim` | `rgba(10, 10, 10, 0.62)` | Lapisan di atas media untuk teks overlay | Teks putih di atasnya minimal 4.5:1 |

Aturan:

- Maksimal satu aksen. Hijau tidak dipakai untuk dekorasi, ikon, atau garis.
- Tidak ada `#000000` dan `#FFFFFF` sebagai latar halaman.
- Tidak ada gradien dekoratif. Gradien hanya boleh sebagai scrim di atas media, dengan alasan keterbacaan.
- Teks abu termuda yang diizinkan adalah `--muted`. `#8A877F` gagal kontras (3.26:1) dan dilarang untuk teks.

### Dark mode

Tidak ada. Alasan: karya ditampilkan untuk dinilai warnanya. Latar gelap mengubah persepsi warna dan membuat karya gelap tenggelam. Ini keputusan identitas, bukan kelalaian. Jika nanti diminta, tambahkan sebagai toggle penuh, bukan setengah jadi.

---

## 5. Tipografi

| Peran | Font | Alasan |
| --- | --- | --- |
| Display dan UI | Archivo | Grotesque dengan performa baik di ukuran besar, netral, tidak sedang tren |
| Body dan kutipan | Newsreader | Serif editorial open source yang membaca tenang dan tidak bersaing dengan gambar |

Kedua font open source (SIL Open Font License). Di-self-host, bukan lewat `<link>` Google Fonts. Subset latin, `font-display: swap`.

Serif dipakai dengan alasan tertulis: ini situs galeri dan teks panjang, bukan landing SaaS. Serif hanya untuk body dan pernyataan, tidak pernah untuk tombol atau label UI.

### Skala

| Token | Ukuran | Line height | Tracking |
| --- | --- | --- | --- |
| `display-xl` | `clamp(2.5rem, 6vw, 4rem)` | 0.98 | 0, weight 400 |
| `display-l` | `clamp(1.75rem, 3.5vw, 2.75rem)` | 1.05 | -0.02em |
| `heading` | `1.375rem` | 1.3 | -0.01em |
| `body` | `1.0625rem` | 1.65 | 0 |
| `body-l` | `1.25rem` | 1.55 | 0 |
| `small` | `0.875rem` | 1.5 | 0 |
| `caption` | `0.75rem` | 1.4 | 0.06em, uppercase |

Aturan:

- Body maksimal `65ch`.
- Headline hero maksimal 2 baris di desktop, 3 baris di ponsel.
- Tidak ada uppercase berjauhan sebagai label section. Caption uppercase hanya untuk metadata karya dan status.
- Tidak ada italic di display kecuali kata asing. Jika italic dipakai dan ada descender, line height minimal 1.1.

---

## 6. Layout

### Grid

- 12 kolom desktop, gutter 24px.
- 6 kolom tablet, gutter 20px.
- 1 kolom ponsel, gutter 16px.
- Lebar konten maksimal 1440px.
- Section padding vertikal: `clamp(64px, 8vw, 120px)`.

### Section dan keluarga layout

Setiap section memakai keluarga layout berbeda, maksimal satu kali.

| Section | Keluarga | Desktop | Ponsel |
| --- | --- | --- | --- |
| Hero | Media full-bleed dengan teks overlay | Tinggi 88dvh, teks tengah, scrim | Tinggi 80dvh, teks tengah |
| Karya | Tiga blok kategori, rail horizontal | 2 kartu penuh dan sebagian kartu berikutnya | 1 kartu penuh dan sebagian kartu berikutnya |
| Karya klien | Tiga blok grup klien, rail horizontal | 2 kartu penuh dan sebagian kartu berikutnya | 1 kartu penuh dan sebagian kartu berikutnya |
| Cara order | Pita teks, daftar bernomor | 2 kolom, nomor di kiri | 1 kolom |
| FAQ | Accordion satu kolom | Lebar 65ch | Full width |
| Tentang dan Our Artist | Pita teks dan daftar | Lebar 65ch | Full width |
| CTA akhir | Media full-bleed dengan teks overlay | 80dvh, teks tengah | 70dvh |

Aturan tambahan:

- Tidak ada section dengan judul tengah plus subjudul plus grid kartu identik.
- Maksimal 2 eyebrow di seluruh halaman. Rekomendasi: nol.
- Tidak ada split-header (judul kiri, paragraf kanan) sebagai pola default.
- Tidak ada zigzag gambar dan teks lebih dari 2 section berturut-turut.
- Mobile collapse ditulis eksplisit di komponen, bukan diasumsikan.

---

## 7. Komponen

### Hero

- Tinggi 88dvh desktop, 80dvh ponsel, minimum 560px.
- Media full-bleed, `object-fit: cover`, di belakang konten.
- Scrim `linear-gradient(180deg, rgba(10,10,10,0.55), rgba(10,10,10,0.75))` untuk keterbacaan.
- Konten maksimal 800px, teks tengah, warna putih.
- Status, headline maksimal 2 baris, sub maksimal 20 kata, satu CTA utama dan satu CTA sekunder.
- CTA sekunder berupa tautan bergaris bawah, bukan tombol berbingkai.
- Tanpa eyebrow, tanpa logo besar di dalam hero.

### Nav

- Tinggi 64px, sticky, latar `paper` dengan garis bawah `line`.
- Isi: `Eleda`, anchor Karya, Tentang, Cara order, FAQ, toggle `ID / EN`, tombol `WhatsApp`.
- Satu baris di desktop. Di ponsel: brand, toggle bahasa, tombol WhatsApp. Anchor disembunyikan di bawah 640px.
- Tidak ada hamburger.

### Tombol

- Radius 2px, tinggi minimum 44px, padding horizontal 20px.
- Semua tombol memakai border 1px `ink`, teks `ink`, latar transparan. Tanpa tombol hijau.
- Di atas media gelap, border dan teks jadi putih.
- Hover: latar `ink`, teks `paper`, `translateY(-1px)`, 150ms.
- Active: `translateY(0)`, tanpa bayangan.
- Fokus: outline 2px `ink`, offset 2px.
- Label maksimal 3 kata, satu baris di desktop.
- Satu label per intent. `Mulai komisi` dipakai di semua CTA utama. `Lihat karya` untuk CTA sekunder.

### Status komisi

- Teks uppercase `Open for commissions` di hero. Tanpa titik, tanpa ikon, tanpa badge.
- Hanya muncul jika `openForCommission: true`.

### Kartu karya

- Tanpa bingkai, tanpa bayangan, tanpa radius.
- Gambar dengan rasio asli, latar `paper-deep` saat memuat.
- Judul asli dan keterangan singkat di caption, tahun di sisi kanan.
- Hover: gambar `scale(1.015)`, 250ms, caption berubah ke `ink`.
- Fokus keyboard sama dengan hover.

### Rail karya

- Tiap blok kategori dan grup klien memakai `overflow-x: auto` dengan `scroll-snap-type: x proximity`.
- Wheel vertikal mouse mengunci ke kartu berikutnya atau sebelumnya, satu kartu per wheel.
- Posisi dianimasikan ke offset kartu memakai `requestAnimationFrame` dengan easing ease-out, durasi 300ms.
- Wheel baru diabaikan saat animasi berjalan, jadi tidak ada loncatan kartu.
- Snap dimatikan selama animasi dan dikembalikan setelah posisi tepat di kartu.
- Setelah kartu terakhir, wheel diteruskan ke halaman supaya scroll vertikal lanjut. Kartu pertama berlaku sama untuk arah atas.
- Wheel horizontal trackpad dan layar sentuh tetap memakai perilaku native.
- Desktop menampilkan 2 kartu penuh dan sebagian kartu berikutnya. Ponsel menampilkan 1 kartu penuh dan sebagian kartu berikutnya.
- Scrollbar disembunyikan. Container bisa digeser dengan sentuhan, trackpad, dan keyboard.
- Container memakai `tabindex="0"` dan `aria-label`.
- Tanpa library animasi dan tanpa smooth scroll pada reduced motion.

### Narasi kategori

- Tiap blok katalog punya heading, jumlah karya, satu paragraf pendek, dan satu CTA WhatsApp dengan pesan sesuai kategori.
- Paragraf memakai Newsreader, maksimal 60ch, warna `muted`.
- Handle Our Artist ditampilkan sebagai tautan Instagram langsung, target baru, `rel="noopener noreferrer"`.

### Accordion FAQ

- Memakai `<details>` dan `<summary>`.
- Satu item boleh terbuka, tidak perlu memaksa menutup yang lain.
- Ikon plus dan minus digambar dengan CSS, bukan SVG dekoratif.
- `summary` setinggi minimum 44px.

### Toggle bahasa

- Dua tautan: `ID` dan `EN`.
- Item aktif memakai `aria-current="page"` dan warna `ink`.
- Item tidak aktif memakai `muted`.
- Tidak memakai bendera.

---

## 8. Motion

| Momen | Gerak | Durasi | Alasan |
| --- | --- | --- | --- |
| Hero load | opacity 0 ke 1 | 400ms | Menandai halaman siap |
| Hover karya | scale 1.015, caption ke `ink` | 250ms | Umpan balik bahwa gambar bisa dilihat |
| Hover tombol | translateY -1px | 150ms | Umpan balik tekan |
| Accordion | tanpa animasi | instan | Kejelasan lebih penting daripada efek |
| Nav | tanpa animasi | instan | Navigasi tidak boleh terasa berat |

Aturan:

- Hanya `transform` dan `opacity`.
- Tidak ada scroll reveal. Referensi tidak memakainya dan probe menemukan 0 reveal.
- Tidak ada animasi loop, parallax, atau scroll listener.
- `prefers-reduced-motion: reduce` mematikan fade hero dan hover transform.

---

## 9. Gambar

- Format asli JPG, PNG, atau WebP. Semua dikonversi ke WebP quality 80, sisi terpanjang 1600px.
- Total 31 gambar asli jadi aset. Tidak ada yang dibuang.
- Original arsip di `assets-source/` dan tidak ikut ke build.
- Hero `1600x1067` hasil crop 3:2 dari mockup clothing, WebP quality 82.
- Rail horizontal memakai scroll-snap. Dua kartu penuh terlihat di desktop sesuai ritme galeri referensi.
- `width` dan `height` wajib di markup untuk mencegah CLS.
- Gambar pertama di hero memakai `fetchpriority="high"`, sisanya lazy.
- Alt text menjelaskan isi: subjek, pose, latar, warna dominan. Bukan "karya 1".
- Placeholder: plat kertas dengan tanda potong, nomor slot besar, label `PLACEHOLDER`, keterangan `Artwork pending`, dan rasio. Tidak menyerupai karya asli dan tidak memakai judul karangan.
- Dilarang memakai file Adobe Stock di `D:\Websites\VPS`. Lisensinya tidak jelas.

---

## 10. Aksesibilitas

- Kontras teks memenuhi AA. Nilai ada di tabel palet.
- Skip link ke konten utama.
- Fokus terlihat di semua elemen interaktif.
- Target sentuh minimum 44x44px.
- Urutan DOM sama dengan urutan visual.
- `lang` di `<html>` berubah sesuai rute.
- Gambar dekoratif memakai `alt=""`. Gambar karya tidak pernah dekoratif.
- Accordion memakai elemen native sehingga bisa dioperasikan dengan keyboard.
- Tidak ada teks di dalam gambar.
- Tidak ada autoplay media.

---

## 11. Keputusan dan alasan

| Keputusan | Alasan |
| --- | --- |
| Latar kertas, bukan putih murni | Mengurangi silau dan membuat karya menjadi fokus |
| Satu aksen hijau | Status buka butuh warna sinyal, sisanya netral |
| Tanpa kartu dan bayangan | Kartu menambah kotak yang bersaing dengan gambar |
| Tanpa dark mode | Persepsi warna karya berubah di latar gelap |
| Archivo plus Newsreader | Grotesque untuk struktur, serif untuk membaca, keduanya open source |
| Motion rendah | Probe referensi menemukan 0 scroll reveal. Halaman tenang, karya yang menjadi gerak |
| Hero full-bleed | Referensi menaruh media di seluruh layar dengan teks overlay. Ini feel utamanya |
| Grid dua kolom | Tile besar dua kolom membuat karya terbaca, bukan thumbnail katalog |
| Tanpa ikon | Tidak ada ikon yang menambah makna. Tombol teks lebih jelas |
| Tanpa harga di v1 | Angka harus dari pemilik, bukan karangan |
| Karya klien sebagai bukti sosial | Bisa diverifikasi, berbeda dari testimoni teks karangan |

---

## 12. Hasil capture riff

Capture 21 November 2026, `mode: browser (chrome.exe)`, 7 section, 6 layar. Data di `.riff/DNA.md`.

Temuan yang dipakai:

- Media full-bleed dengan teks overlay tengah.
- Tile dua kolom setinggi hampir satu layar.
- Motion 0 scroll reveal, 0 scrub, 0 pin. Hanya hover dan keyframe load.
- Display terbesar 72px, body 16px, langkah skala 1.14 sampai 1.25.
- Section padding 64 sampai 120px.
- Radius 2px, border hairline, tanpa bayangan besar.

Koreksi yang sudah diterapkan ke dokumen ini:

- Hero dari split asimetris menjadi full-bleed dengan scrim.
- Karya dari masonry 3 kolom menjadi grid 2 kolom.
- Karya klien dari strip horizontal menjadi grid 2 kolom.
- Motion dari scroll reveal menjadi hover dan fade load saja.
- Display maksimal dari 88px menjadi 64px.
- Section padding maksimal dari 160px menjadi 120px.
- Dials dari 7/3/3 menjadi 5/2/3.

Tidak dibawa: video studio, logo tulisan tangan, palet, font, copy, dan 15 aset referensi. Eleda tidak memakai video karena belum ada aset.

Aturan: DNA hanya mengubah angka dan ritme. Identitas, palet, font, copy, dan aset tetap milik Eleda.

---

## 13. Larangan

- Em dash di teks apa pun.
- Nama Kate Florence, logo, gambar, atau copy dari referensi.
- Nama pribadi pemilik, nama brand lama, atau tautan portofolio pribadi.
- Nama atau identitas Revanzart di mana pun. Nama klien dan handle Instagram boleh dipakai sebagai teks, tanpa tautan.
- Statistik, testimoni, harga, atau klaim karangan.
- Gradien ungu, glow, glassmorphism, badge pil, ikon sparkle.
- Marquee, parallax, scroll hijack.
- Kartu seragam untuk semua karya.
- Font proprietary dari referensi.
